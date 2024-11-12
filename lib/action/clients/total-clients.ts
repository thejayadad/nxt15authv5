'use server'

import connectDB from "@/lib/db";
import { Client } from "@/models/Client";

export const TotalClients = async (userEmail: string) => {
  try {
    await connectDB();

    // Aggregate data
    const result = await Client.aggregate([
      { $match: { userEmail } }, // Match clients for the specific user
      {
        $group: {
          _id: null, // Group all documents together (for total aggregation)
          totalClients: { $sum: 1 }, // Count the total number of clients
          totalPaid: { $sum: { $cond: [{ $eq: ["$status", "paid"] }, "$fee", 0] } }, // Sum the fee where status is 'paid'
          totalUnpaid: { $sum: { $cond: [{ $eq: ["$status", "unpaid"] }, "$fee", 0] } }, // Sum the fee where status is 'unpaid'
          unpaidCount: { $sum: { $cond: [{ $eq: ["$status", "unpaid"] }, 1, 0] } }, // Count the number of unpaid clients
        },
      },
    ]);

    // Check if we have any data, otherwise set defaults
    if (result.length === 0) {
      return {
        totalClients: 0,
        totalPaid: 0,
        totalUnpaid: 0,
        unpaidCount: 0,
      };
    }

    // Destructure the results
    const {
      totalClients,
      totalPaid,
      totalUnpaid,
      unpaidCount,
    } = result[0];

    return {
      totalClients,
      totalPaid,
      totalUnpaid,
      unpaidCount,
    };
  } catch (error) {
    console.error("Error fetching client data:", error);
    throw new Error("Failed to fetch client data");
  }
};
