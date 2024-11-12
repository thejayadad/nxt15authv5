
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter to access URL parameters
import UpdateForm from '@/components/forms/update-form'; // Import the UpdateForm component

const UpdateClientPage = async ({params}) => {
    const {id} = await params
    const clientId = id

  return (
    <div>
      {/* Pass the clientId to the UpdateForm component */}
      <UpdateForm clientId={clientId as string} />
    </div>
  );
};

export default UpdateClientPage;
