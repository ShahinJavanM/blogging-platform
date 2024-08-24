import Post from "@/components/Post";

async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  return res.json();
}
export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main className="container px-4 m-auto">
      {posts?.length > 0 && (
        <h2 className="text-center font-bold text-2xl mb-8">Blog Section</h2>
      )}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {posts?.length > 0 ? (
          posts.map((post: any) => <Post key={post._id} post={post} />)
        ) : (
          <h3>there is no post</h3>
        )}
      </div>
    </main>
  );
}
