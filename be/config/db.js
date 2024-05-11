import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kyduyen87243:kyduyen153!@cluster0.dja9hlk.mongodb.net/Food-del').then(()=>console.log("DB Connected"));
}