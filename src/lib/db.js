import mongoose from "mongoose";

const connection = {};
// console.log(process.env.MONGO_URL);
const MONGO_URL =
  "mongodb+srv://sjavanmardi91:Shahin_Alone007@cluster0.zubsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(MONGO_URL, {
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
