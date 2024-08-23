import mongoose from "mongoose";

const connection = {};
console.log(process.env.MOGO_URL);
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MOGO_URL, {
      useNewUrlParser: true,
      useUnifieldTopology: true,
    });
    connection.isConnected = db.connection[0].readyState;
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB : ", error.message);
  }
}
export default dbConnect;
