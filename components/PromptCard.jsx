"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ user, albums, post }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              No. {user.id}
            </h3>
            <h3 className="font-satoshi font-semibold text-gray-900">
              Username - {user.username}
            </h3>
            <h3 className="font-satoshi font-semibold text-gray-900">
              Name - {user.name}
            </h3>

            <p className="font-inter text-sm text-gray-500">
              Email - {user.email}
            </p>
          </div>
        </div>
      </div>

      <p className="font-satoshi text-sm text-gray-700">
        No. of Albums:{" "}
        <span className=" text-[#EA7F0A]">
          {albums.filter((album) => album.userId === user.id).length}
        </span>
      </p>

      {/* {session?.user.id === user.id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )} */}
    </div>
  );
};

export default PromptCard;
