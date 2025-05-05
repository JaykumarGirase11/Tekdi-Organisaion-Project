import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';

function DataTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('submission_date');
  const [sortDirection, setSortDirection] = useState('desc');
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortField === 'submission_date') {
      return sortDirection === 'asc'
        ? new Date(aValue) - new Date(bValue)
        : new Date(bValue) - new Date(aValue);
    }

    return sortDirection === 'asc'
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const currentData = sortedData.slice(startIndex, endIndex);

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-comfort-light-border dark:divide-comfort-dark-border">
        <thead className="bg-comfort-light-bg dark:bg-comfort-dark-bg">
          <tr>
            {Object.keys(data[0]).map((header) => (
              <th
                key={header}
                onClick={() => handleSort(header)}
                className="px-6 py-3 text-left text-xs font-medium text-comfort-light-text/70 dark:text-comfort-dark-text/70 uppercase tracking-wider cursor-pointer hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50"
              >
                <div className="flex items-center space-x-1">
                  <span>{header.replace(/_/g, ' ')}</span>
                  {sortField === header && (
                    <span className="text-comfort-light-text/50 dark:text-comfort-dark-text/50">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-comfort-light-card dark:bg-comfort-dark-card divide-y divide-comfort-light-border dark:divide-comfort-dark-border">
          {currentData.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50 transition-colors duration-150"
            >
              {Object.entries(row).map(([key, value]) => (
                <td
                  key={key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-comfort-light-text/80 dark:text-comfort-dark-text/80"
                >
                  {key === 'submission_date' ? formatDate(value) : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="bg-comfort-light-card dark:bg-comfort-dark-card px-4 py-3 flex items-center justify-between border-t border-comfort-light-border dark:border-comfort-dark-border sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-comfort-light-border dark:border-comfort-dark-border text-sm font-medium rounded-md text-comfort-light-text dark:text-comfort-dark-text bg-comfort-light-card dark:bg-comfort-dark-card hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-comfort-light-border dark:border-comfort-dark-border text-sm font-medium rounded-md text-comfort-light-text dark:text-comfort-dark-text bg-comfort-light-card dark:bg-comfort-dark-card hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-comfort-light-text/70 dark:text-comfort-dark-text/70">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{endIndex}</span> of{' '}
              <span className="font-medium">{data.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-comfort-light-border dark:border-comfort-dark-border bg-comfort-light-card dark:bg-comfort-dark-card text-sm font-medium text-comfort-light-text/70 dark:text-comfort-dark-text/70 hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === page
                      ? 'z-10 bg-primary-50 dark:bg-primary-900/20 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400'
                      : 'bg-comfort-light-card dark:bg-comfort-dark-card border-comfort-light-border dark:border-comfort-dark-border text-comfort-light-text/70 dark:text-comfort-dark-text/70 hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-comfort-light-border dark:border-comfort-dark-border bg-comfort-light-card dark:bg-comfort-dark-card text-sm font-medium text-comfort-light-text/70 dark:text-comfort-dark-text/70 hover:bg-comfort-light-bg/50 dark:hover:bg-comfort-dark-bg/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable; 