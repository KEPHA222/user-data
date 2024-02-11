"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PromptCardAlbum = ({ albums, index }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  console.log(albums);

  return (
    <div className="prompt_card">
      <Link href={`/album/${albums.id}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 ">
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {albums.id}
              </h3>
              <h3 className="font-satoshi font-semibold text-gray-900">
                UserId - {albums.userId}
              </h3>

              <p className="font-inter text-sm text-gray-500">
                Title - {albums.title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PromptCardAlbum;
