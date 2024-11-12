'use server'

import { Client } from "@/models/Client"; // Import the Client model
import connectDB from "@/lib/db"; // Import the database connection utility
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"; // Import Zod for schema validation

// Define the Zod schema for client validation
const ClientSchema = z.object({
  clientName: z.string().min(2, "Client name must be at least two characters long"),
  email: z.string().email("Invalid email address"),
  status: z.enum(["paid", "unpaid"]).default("unpaid"),
  fee: z.number().min(0, "Fee must be a positive number"), // Ensure fee is treated as a number
  userEmail: z.string().email("Invalid email address") // Add userEmail to the schema
});

export const addClient = async (prevState: any, formData: FormData) => {
  // Extract the form data and validate it
  const formObject = Object.fromEntries(formData.entries());

  // Parse fee as a number (it will be passed as a string from FormData)
  const fee = Number(formObject.fee); // Convert the fee to a number here

  // Validate the form data using Zod
  const validatedFields = ClientSchema.safeParse({
    ...formObject,
    fee, // Use the parsed number for fee
  });

  if (!validatedFields.success) {
    // If validation fails, return errors
    return {
      error: validatedFields.error.flatten().fieldErrors
    };
  }

  const { clientName, email, status, userEmail } = validatedFields.data;

  // Connect to the database
  await connectDB();

  try {
    // Create a new client in the database
    const newClient = await Client.create({
      clientName,
      email,
      status,
      fee, // Store fee as a number
      userEmail, // Save the userEmail along with the client data
    });


  } catch (error) {
    console.error("Error adding client:", error);
    return {
      error: "Failed to add client. Please try again."
    };


  }
     // Optionally revalidate and redirect
     revalidatePath("/dashboard");
     redirect("/dashboard");

};
