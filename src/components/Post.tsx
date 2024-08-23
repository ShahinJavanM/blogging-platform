"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const Post = ({ post: { title, content, _id } }: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(0);

  return (
    <section className="text-gray-600 overflow-hidden bg-blue-100 rounded-md">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              {title}
            </h2>
            <p className="leading-relaxed mb-8">{content}</p>
            <div className="flex items-center flex-wrap pb-4  mt-auto w-full">
              <Link
                href={`/post/${_id}`}
                className="px-6 py-2.5 rounded-md bg-blue-900 text-white hover:bg-blue-400 transition-all duration-300"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
