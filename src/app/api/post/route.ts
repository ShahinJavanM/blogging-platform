import Post, { BlogPost } from "@/models/Post";
import dbConnect from "@/lib/db";

export async function GET(req:Request) {
  await dbConnect()
  try {
    const posts = await Post.find({}).limit(100)
    return new Response(JSON.stringify(posts),{status:200})
  } catch (error) {
    return new Response(JSON.stringify(null),{status:500})
  }
}

export async function POST(req:Request) {
  await dbConnect()
  try {
    const body = await req.json()
    const newPost = await Post.create(body)
    return new Response(JSON.stringify(newPost),{status:201})
  } catch (error) {
    return new Response(JSON.stringify(null),{status:500})
  }
}