import Post from "@/models/Post";
import dbConnect from "@/lib/db";

export async function GET(req: Request, cntx: { params: { id: string } }) {
  await dbConnect();
  const id = cntx.params.id;
  try {
    const post = await Post.findById(id);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function PUT(req: Request, cntx: { params: { id: string } }) {
  await dbConnect();
  const id = cntx.params.id;
  try {
    const body = await req.json();
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req: Request, cntx: { params: { id: string } }) {
  await dbConnect();
  const id = cntx.params.id;
  try {
    await Post.findByIdAndDelete(id);
    return new Response(JSON.stringify({ msg: "post deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
