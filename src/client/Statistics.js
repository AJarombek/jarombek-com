/**
 * Statistics stateful component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React, { useState, useEffect } from 'react';
import WebsiteTemplate from './WebsiteTemplate';
import StatisticsGraph from './StatisticsGraph';
import StatisticsTable from './StatisticsTable';
import BaseURL from './BaseURL';
import StatisticsRankGraph from './StatisticsRankGraph';

const Statistics = () => {
  const [stats, setStats] = useState([]);
  const [statsMeta, setStatsMeta] = useState({});

  const fetchStatistics = async () => {
    const baseUrl = BaseURL.get();
    const response = await fetch(`${baseUrl}/api/stats`);
    const data = await response.json();
    setStats(data);
  };

  const fetchStatisticsMetadata = async () => {
    const baseUrl = BaseURL.get();
    const response = await fetch(`${baseUrl}/api/stats/meta`);
    const data = await response.json();
    setStatsMeta(data);
  };

  useEffect(() => {
    fetchStatistics();
    fetchStatisticsMetadata();
  }, []);

  return (
    <WebsiteTemplate subscribeAction={() => {}}>
      <div id="jarbek-statistics">
        <p className="jarbek-statistics-header">Programming Language Statistics</p>
        <StatisticsGraph data={stats} lastUpdated={statsMeta?.updated} />
        <StatisticsTable data={stats} />
        <StatisticsRankGraph data={stats} />
      </div>
    </WebsiteTemplate>
  );
};

export default Statistics;
