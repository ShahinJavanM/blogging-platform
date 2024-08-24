import mongoose from "mongoose";

const connection = {};
async function dbConnect() {
  console.log(" env file:", process.env.MONGO_URL);
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connection[0].readyState;
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB : ", error.message);
  }
}
export default dbConnect;
