import { getPosts } from "@/action/post.action";
import { getDbUserid } from "@/action/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserid();
  // const dbUserId = await getDbUserId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6" >

      {/* left */}
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6">
          {/* {posts.map((post) => (
            <PostCard key={post.id} post={post}  />
          ))} */}
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>

      {/* right */}
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow/>
      </div>

    </div>
  );
}
