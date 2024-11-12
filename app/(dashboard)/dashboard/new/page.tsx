import React from 'react';
import { getSession } from '@/lib/getSession';
import ClientForm from '../../_components/client-form/client-form';

const NewClientPage = async () => {
  const session = await getSession();
  const user = session?.user;
  const userEmail = user?.email;

  if (!userEmail) {
    return <div>Please log in to add a client.</div>;
  }

  return (
    <div className="mx-auto max-w-screen-lg p-4 w-full">
      <h1 className="text-2xl font-semibold mb-4">Add New Client</h1>
      <ClientForm userEmail={userEmail} /> {/* Pass userEmail to the form */}
    </div>
  );
};

export default NewClientPage;
