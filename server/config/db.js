import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1); // Stop the server if DB connection fails
  }
};
export default connectDB;