import mongoose from "mongoose";
export type BlogPost={
  title: string;
  content: string;
  writer?: string;
}
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6
  },
  content: {
    type: String,
    required: true,
    min: 10
  },
  //  writer: {
  //   type: String,
  //   required: false,
  //   min: 4
  // },
}, { timestamps: true })
export default mongoose?.models?.Post || mongoose.model("Post",PostSchema)