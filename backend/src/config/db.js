import mongoose from "mongoose";
import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1) // 0: exit with success, 1: exit with failure
    }
}