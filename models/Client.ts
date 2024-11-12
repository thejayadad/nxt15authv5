import mongoose, { Schema, Document } from "mongoose";

interface IClient extends Document {
  clientName: string;
  email: string;
  status: "paid" | "unpaid";
  fee: number;
  userEmail: string; // Reference to the User's email
}

const clientSchema = new Schema<IClient>({
  clientName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["paid", "unpaid"],
    default: "unpaid",
  },
  fee: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    ref: "User", // Reference to the User model by email
  },
});



export const Client = mongoose.models?.Client || mongoose.model("Client", clientSchema);