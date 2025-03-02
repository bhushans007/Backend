import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const url = "mongodb+srv://bhushan010120010101:x9mPwOTDQmsQv7zr@avcoe.zl8vs.mongodb.net/";

    const {connection} = await mongoose.connect(url);

    console.log(`MongoDB Connection successful to ${connection.host}`);

}