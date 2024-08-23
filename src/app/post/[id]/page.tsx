"use client";
import { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostDetails = (ctx: any) => {
  const [postDetails, setPostDetails] = useState({ title: "", content: "" });
  const [postIsLoading, setPostIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      setPostIsLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/post/${ctx.params.id}`,
        { cache: "no-store" }
      );
      const post = await res.json();
      setPostIsLoading(false);
      setPostDetails(post);
    }
    fetchPost();
  }, []);

  const handleDelete = async () => {
    try {
      const confirmModal = confirm("Are you sure you want to delete post?");

      if (confirmModal) {
        const res = await fetch(
          `http://localhost:3000/api/post/${ctx.params.id}`,
          {
            headers: {},
            method: "DELETE",
          }
        );

        if (res.ok) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {postIsLoading ? (
        "Loading the post...."
      ) : (
        <section className="w-screen m-auto">
          <div className="container px-5 py-12 mx-auto ">
            <div className="flex flex-wrap -m-12">
              <div className="p-12 flex flex-col">
                <h2 className="sm:text-3xl text-2xl  font-bold text-gray-900 my-6 mx-0 text-center">
                  {postDetails?.title}
                </h2>

                <p className="leading-relaxed my-6">{postDetails?.content}</p>
                <div className="flex items-center justify-center mt-4 gap-x-5 pt-4 pb-5">
                  <Link
                    href={`/post/edit/${ctx.params.id}`}
                    className="px-3 py-2 rounded-md text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Edit <BsFillPencilFill style={{ fontSize: "24px" }} />
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="px-3 py-2 rounded-md text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Delete <AiFillDelete style={{ fontSize: "24px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
