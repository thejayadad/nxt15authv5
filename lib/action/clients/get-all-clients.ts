'use server'

import { Client } from "@/models/Client"; // Import the Client model
import connectDB from "@/lib/db"; // Import the database connection utility

export const getAllClients = async (userEmail: string) => {
  try {
    // Establish database connection
    await connectDB();

    // Fetch all clients for the logged-in user, converting Mongoose documents to plain objects
    const clients = await Client.find({ userEmail }).lean(); // .lean() strips out the Mongoose methods

    // Return the list of clients
    return JSON.parse(JSON.stringify(clients)); // Deep clone and serialize the data
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw new Error("Failed to fetch clients");
  }
};
