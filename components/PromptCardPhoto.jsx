"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const PromptCardPhoto = ({ photos }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  // console.log(albums);

  return (
    <div className="prompt_card">
      <Link href={`/photo/${photos.id}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 ">
            <Image
              src={photos?.url}
              alt="photo"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                Id - {photos.id}
              </h3>
              <h3 className="font-satoshi font-semibold text-gray-900">
                UserId - {photos.albumId}
              </h3>

              <p className="font-inter text-sm text-gray-500">
                Title - {photos.title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PromptCardPhoto;