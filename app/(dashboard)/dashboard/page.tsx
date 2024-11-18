import React from 'react';
import { TotalClients } from '@/lib/action/clients/total-clients';
import { getSession } from '@/lib/getSession';
import StatCard from '../_components/stat-card/stat-card';
import SearchForm from '../_components/search/search-form';
import ClientTable from '../_components/clients/client-table';
import { redirect } from 'next/navigation';


const DashboardPage = async () => {
  // Get the user session
  const session = await getSession();
  const user = session?.user;
  const userEmail = user?.email;

  if (!session) {
    redirect("/login")
  }

  // Fetch the client statistics for the logged-in user
  const { totalClients, totalPaid, totalUnpaid, unpaidCount } = await TotalClients(userEmail);

  return (
    <div className="mx-auto max-w-screen-lg p-4 w-full">
      {/* User Email Display */}
      <div className="text-xl font-semibold mb-4">Welcome, {user.name}!</div>

      {/* Stats Cards Container */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Clients Card */}
        <StatCard
          title="Total Clients"
          value={totalClients}
          color="gray"
          description="Total Clients"
        />

        {/* Total Paid Amount Card */}
        <StatCard
          title="Total Amount Paid"
          value={`$${totalPaid}`}
          color="green"
          description="Total Amount Paid"
        />

        {/* Total Unpaid Amount Card */}
        <StatCard
          title="Total Amount Unpaid"
          value={`$${totalUnpaid}`}
          color="red"
          description="Total Amount Unpaid"
        />

        {/* Unpaid Clients Count Card */}
        <StatCard
          title="Total Unpaid Clients"
          value={unpaidCount}
          color="yellow"
          description="Total Unpaid Clients"
        />


      </div>
      <div className='w-full max-w-screen-lg mt-8'>
          <SearchForm />
        </div>
        <div className='flex flex-col'>
          <div className='flex w-full items-center justify-between'>
          <h1 className='text-xl font-extrabold text-gray-600'>Clients</h1>
            <div>New Client</div>
          </div>
          <ClientTable userEmail={userEmail} />
        </div>
    </div>
  );
};

export default DashboardPage;
