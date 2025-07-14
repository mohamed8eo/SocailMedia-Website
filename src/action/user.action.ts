"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";

export async function getUserByClerkid(clerkId:string) {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts:true,
        },
      },
    },
  })
}

export async function getDbUserid() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  let user = await getUserByClerkid(clerkId);
  if (!user) {
    // Try to fetch Clerk user info and create user in DB
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("Clerk user not found");
    user = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        name: clerkUser.firstName || "",
        image: clerkUser.imageUrl || null,
        username: clerkUser.username || (clerkUser.emailAddresses[0]?.emailAddress.split("@")[0] ?? clerkUser.id),
      },
    });
  }
  return user.id;
}

export async function getRandomUsers() {
  try {
    const userId = await getDbUserid();

    if (!userId) return [];
    const randomUsers = await prisma.user.findMany({
      where: {
        AND: [
          { NOT: { id: userId } },
          {
            NOT: {
              followers: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        _count: {
          select: {
            followers: true,
          },
        },
      },
      take: 3,
    });

    return randomUsers;
  } catch (error) {
    console.log("Error fetching random users", error);
    return [];
  }
}

export async function toggleFollow(targetUserId: string) {
  try {
    const userId = await getDbUserid();
    if (!userId) return;
    if (userId === targetUserId) throw new Error("you can't follow yourself")
    
    const existingFollow = await prisma.follows.findUnique({
      where: {
        followerId_followingId: {
          followerId: userId,
          followingId: targetUserId,
        }
      }
    })
    if (existingFollow) {
      //unfollow
      await prisma.follows.delete({
        where: {
          followerId_followingId: {
            followerId: userId,
            followingId: targetUserId,
          }
        }
      })
      revalidatePath('/')
      return {success: true, action: 'unfollowed'}
    } else {
      // follow
      await prisma.$transaction([

        prisma.follows.create({
          data: {
            followerId: userId,
            followingId: targetUserId,
          }
        }),

        prisma.notification.create({
          data: {
            type: "FOLLOW",
            userId: targetUserId,
            creatorId: userId,
          }
        })
      ])
      revalidatePath('/')
      return {success: true, action: 'followed'}
    }
  } catch (error) {
    console.log('Error on toggleFollow', error);
    return {success: false , error: "Error on toggleFollow"}
  }
}