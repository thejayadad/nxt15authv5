'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import { updateClient } from '@/lib/action/clients/update-client'; // The update client function you already have
import { getClientById } from '@/lib/action/clients/get-client-byid';

const UpdateForm = ({ clientId }: { clientId: string }) => {
  const [client, setClient] = useState<any>(null);
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('unpaid');
  const [fee, setFee] = useState(0);
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    // Fetch the client data on component mount
    const fetchClientData = async () => {
      try {
        const clientData = await getClientById(clientId);
        setClient(clientData);
        setClientName(clientData.clientName);
        setEmail(clientData.email);
        setStatus(clientData.status);
        setFee(clientData.fee);
      } catch (error) {
        console.error('Error fetching client data', error);
      }
    };

    if (clientId) fetchClientData();
  }, [clientId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('clientName', clientName);
    formData.append('email', email);
    formData.append('status', status);
    formData.append('fee', String(fee)); // Ensure fee is passed as string
    formData.append('userEmail', client?.userEmail); // User's email (from the fetched client)
    formData.append('_id', clientId); // The client ID for updating

    const response = await updateClient({}, formData); // Call the update client function

    if (response.error) {
      setErrors(response.error); // Set errors if validation fails
    } else {
      // If update is successful, redirect to the dashboard or show success message
      router.push('/dashboard'); // Redirect to dashboard after update
    }
  };

  if (!client) return <div>Loading client data...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Client Name</label>
        <input
          type="text"
          name="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="input"
        />
        {errors.clientName && <p>{errors.clientName}</p>}
      </div>

      <div>
        <label>Client Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="input"
        >
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
        {errors.status && <p>{errors.status}</p>}
      </div>

      <div>
        <label>Fee</label>
        <input
          type="number"
          name="fee"
          value={fee}
          onChange={(e) => setFee(Number(e.target.value))}
          className="input"
        />
        {errors.fee && <p>{errors.fee}</p>}
      </div>

      <button type="submit" className="btn">Update Client</button>
    </form>
  );
};

export default UpdateForm;
