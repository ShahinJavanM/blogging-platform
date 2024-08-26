"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Edit = (ctx: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(
        `http://localhost:3000/api/post/${ctx.params.id}`
      );

      const post = await res.json();

      setTitle(post.title);
      setContent(post.content);
    }
    fetchPost();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title === "" || content === "") {
      toast.error("All fields are required");
      return;
    }

    try {
      const body = {
        title,
        content,
      };

      const res = await fetch(
        // `http://localhost:3000/api/post/${ctx.params.id}`,
        `${process.env.CLIENT_URL}api/post/${ctx.params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        throw new Error("Error has occured");
      }
      const post = await res.json();

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Update Post
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full focus:outline-none p-2"
            placeholder="Title Your Work"
          />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Share Your Thoughts..."
          />
        </div>
        <div>
          <button className="px-6 py-2.5 rounded-md bg-blue-900 text-white hover:bg-blue-400 transition-all duration-300 mt-4">
            Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
