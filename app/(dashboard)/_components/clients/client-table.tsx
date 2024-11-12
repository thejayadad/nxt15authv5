'use client'

import React, { useEffect, useState } from 'react';
import { getAllClients } from '@/lib/action/clients/get-all-clients';
import Link from 'next/link';

const ClientTable = ({ userEmail }: { userEmail: string }) => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientData = await getAllClients(userEmail);
        setClients(clientData); // Use the client data directly
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [userEmail]);

  if (loading) {
    return <div>Loading...</div>; // You can add a spinner here if needed
  }

  if (clients.length === 0) {
    return (
      <div className="text-center mt-24">
        <p>No clients found. Please add your first client!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-16">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Client Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Fee</th>
            <th className="px-4 py-2 text-left">Action</th>

          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td className="px-4 py-2">{client.clientName}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.status}</td>
              <td className="px-4 py-2">${client.fee}</td>
              <td className="px-4 py-2 flex items-center">
                <Link href={`/client/${client._id}`}>
                  Update
                </Link>
                <div>Delete</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
