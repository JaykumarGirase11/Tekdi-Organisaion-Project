import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import SummaryCard from '../components/SummaryCard';
import ChartCard from '../components/ChartCard';
import DataTable from '../components/DataTable';
import { fetchODKData } from '../services/api';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchODKData();
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Error loading data</h3>
            <div className="mt-2 text-sm text-red-700 dark:text-red-300">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-comfort-light-text dark:text-comfort-dark-text sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard Overview
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary-600 dark:bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 dark:hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-500"
          >
            Refresh Data
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Total Submissions"
          value={data.totalSubmissions}
          icon="📝"
          trend={12}
          trendLabel="vs last month"
        />
        <SummaryCard
          title="Active Users"
          value={data.activeUsers}
          icon="👥"
          trend={-3}
          trendLabel="vs last month"
        />
        <SummaryCard
          title="Top Location"
          value={data.topLocation}
          icon="📍"
          trend={8}
          trendLabel="vs last month"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard
          title="Submissions by Location"
          type="bar"
          data={data.locationData}
          className="bg-comfort-light-card dark:bg-comfort-dark-card shadow-card dark:shadow-dark-card rounded-lg p-6"
        />
        <ChartCard
          title="Answer Distribution"
          type="pie"
          data={data.answerDistribution}
          className="bg-comfort-light-card dark:bg-comfort-dark-card shadow-card dark:shadow-dark-card rounded-lg p-6"
        />
      </div>

      {/* Data Table */}
      <div className="bg-comfort-light-card dark:bg-comfort-dark-card shadow-card dark:shadow-dark-card rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-comfort-light-border dark:border-comfort-dark-border">
          <h3 className="text-lg font-medium text-comfort-light-text dark:text-comfort-dark-text">Recent Submissions</h3>
        </div>
        <DataTable data={data.rawData} />
      </div>
    </div>
  );
}

export default Dashboard; 