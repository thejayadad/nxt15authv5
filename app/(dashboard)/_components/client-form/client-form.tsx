'use client'

import React, { useState } from 'react';
import { addClient } from '@/lib/action/clients/add-client';

interface ClientFormProps {
  userEmail: string;
}

const ClientForm: React.FC<ClientFormProps> = ({ userEmail }) => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState(''); // Allow the user to enter a client email
  const [status, setStatus] = useState('unpaid');
  const [fee, setFee] = useState(0); // The fee will be handled as a number
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData and make sure fee is passed as a number (FormData requires strings, but we leave it as is)
    const formData = new FormData();
    formData.append('clientName', clientName);
    formData.append('email', email);
    formData.append('status', status);
    formData.append('fee', String(fee)); // `FormData` stores the fee as a string automatically, no explicit conversion needed

    // Include the userEmail (logged-in user) when adding a new client
    formData.append('userEmail', userEmail);

    const response = await addClient({}, formData); // Call the addClient function

  };

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
          onChange={(e) => setFee(Number(e.target.value))} // Ensure fee is treated as a number
          className="input"
        />
        {errors.fee && <p>{errors.fee}</p>}
      </div>

      <button type="submit" className="btn">Add Client</button>
    </form>
  );
};

export default ClientForm;
