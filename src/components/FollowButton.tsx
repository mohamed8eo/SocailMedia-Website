"use client";

import { useId, useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/action/user.action";


type FollowButtonProps = {
  userId: string;
};

function FollowButton({ userId }: FollowButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(userId)
      toast.success("User followed successfully");
    } catch (error) {
      console.log('Failed to Follow', error)
      toast.error("Error following user");
    } finally {
      setIsLoading(false)
    }
  };
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
    </Button>
  );
}
export default FollowButton;