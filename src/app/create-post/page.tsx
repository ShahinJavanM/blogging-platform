"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error("All fields are required");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:3000/api/post`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!res.ok) {
        throw new Error("Error occured");
        setIsLoading(false);
      }
      setIsLoading(false);
      const post = await res.json();

      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Create A Post
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full focus:outline-none p-2"
            placeholder="write a title"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setContent(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="enter content here"
          />
        </div>
        <div className={`${isLoading ? " block" : "hidden"}`}> Loading ...</div>
        <button
          disabled={isLoading}
          type="submit"
          className="px-6 py-2.5 rounded-md bg-blue-900 text-white hover:bg-blue-400 transition-all duration-300 mt-4"
        >
          Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
