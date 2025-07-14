"use client";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import ModeToggle from "./ModelToggle";



function DesktopNavbar({ unreadCount }: { unreadCount: number }) {
  const { user } = useUser();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle/>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications" className="relative">
              <BellIcon className="w-6 h-6" />
              {unreadCount > 0 && (
                <span
                  className={`
                    absolute -top-1 -right-1
                    flex items-center justify-center
                    bg-red-500 text-white text-[10px] font-bold
                    rounded-full
                    ${unreadCount > 9 ? "w-6 h-6" : "w-5 h-5"}
                    border-2 border-white
                    shadow
                    transition-all
                  `}
                  style={{ minWidth: unreadCount > 9 ? 24 : 20 }}
                >
                  {unreadCount > 99 ? "99+" : unreadCount}
                </span>
              )}
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link
              href={`/profile/${
                user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
}
export default DesktopNavbar;