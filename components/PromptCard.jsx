"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

const PromptCard = ({ user, albums, post }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="prompt_card">
      <Link href={`/user/${user.id}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
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
      </Link>
    </div>
  );
};

export default PromptCard;
