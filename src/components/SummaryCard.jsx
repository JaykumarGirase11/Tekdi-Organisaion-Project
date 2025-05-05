import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

function SummaryCard({ title, value, icon, trend, trendLabel }) {
  const isPositive = trend > 0;
  const trendColor = isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  const trendBgColor = isPositive ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20';

  return (
    <div className="bg-comfort-light-card dark:bg-comfort-dark-card shadow-card dark:shadow-dark-card rounded-lg p-6 hover:shadow-card-hover dark:hover:shadow-dark-card-hover transition-shadow duration-200">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-comfort-light-text/70 dark:text-comfort-dark-text/70 truncate">
              {title}
            </dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-comfort-light-text dark:text-comfort-dark-text">
                {value}
              </div>
              {trend !== undefined && (
                <div
                  className={clsx(
                    'ml-2 flex items-baseline text-sm font-semibold',
                    trendColor
                  )}
                >
                  {isPositive ? (
                    <ArrowUpIcon className="h-4 w-4 flex-shrink-0 self-center" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 flex-shrink-0 self-center" />
                  )}
                  <span className="ml-1">{Math.abs(trend)}%</span>
                </div>
              )}
            </dd>
            {trendLabel && (
              <dd className="mt-1 text-sm text-comfort-light-text/60 dark:text-comfort-dark-text/60">{trendLabel}</dd>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard; 