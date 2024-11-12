'use server'

import { Client } from "@/models/Client";
import connectDB from "@/lib/db"; // Import the database connection utility

// Function to get a client by their ID
export const getClientById = async (clientId: string) => {
  try {
    // Establish the database connection
    await connectDB();

    // Fetch the client from the database by its ID
    const client = await Client.findById(clientId).lean(); // Using lean() to get a plain object

    if (!client) {
      throw new Error("Client not found");
    }

    // Return the client data (as a plain object due to .lean())
    return JSON.parse(JSON.stringify(client));
  } catch (error) {
    console.error("Error fetching client by ID:", error);
    throw new Error("Failed to fetch client data");
  }
};
