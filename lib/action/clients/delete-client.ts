'use server'
import { Client } from "@/models/Client"
import connectDB from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const deleteClient = async (prevState: any, formData: FormData) => {
    try {
        await connectDB();
        const id = formData.get('id') as string; // Get the ID from the form data

        if (!id) {
            throw new Error("ID is required to delete a mood");
        }

        const result = await Client.findByIdAndDelete(id); // Delete the mood document by ID

        if (!result) {
            throw new Error("Client not found");
        }
    } catch (error) {
        console.log("Error deleting client: ", error);
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
};

export { deleteClient };