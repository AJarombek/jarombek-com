/**
 * Statistics stateful component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React, { useState, useEffect, useMemo } from 'react';
import WebsiteTemplate from './WebsiteTemplate';
import StatisticsGraph from './StatisticsGraph';
import StatisticsTable from './StatisticsTable';
import BaseURL from './BaseURL';
import StatisticsRankGraph from './StatisticsRankGraph';
import StatisticsRankTable from './StatisticsRankTable';

const Statistics = () => {
  const [stats, setStats] = useState([]);
  const [statsMeta, setStatsMeta] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const chartData = useMemo(() => {
    const arrayLength = new Date().getFullYear() - 2013;
    return [...Array(arrayLength).keys()].map((value, index) => {
      const yearData = {
        year: value + 2014,
      };

      stats?.forEach((item) => {
        yearData[item.name] = item.lines[index];
      });

      return yearData;
    });
  }, [stats]);

  const topFiveData = useMemo(() => {
    const arrayLength = new Date().getFullYear() - 2013;
    const languages = new Set(['JavaScript', 'Python', 'Java', 'TypeScript', 'HTML']);
    return [...Array(arrayLength).keys()].map((value, index) => {
      const yearData = {
        year: value + 2014,
      };

      stats?.forEach((item) => {
        if (languages.has(item.name)) yearData[item.name] = item.lines[index];
      });

      return yearData;
    });
  }, [stats]);

  return (
    <WebsiteTemplate subscribeAction={() => {}}>
      <div id="jarbek-statistics">
        <StatisticsGraph
          data={stats}
          chartData={chartData}
          lastUpdated={statsMeta?.updated}
          start={0}
          end={43000}
          title="Programming Language Lines Written"
        />
        <StatisticsTable data={stats} />
        <StatisticsRankGraph data={stats} />
        <StatisticsRankTable data={stats} />
        <StatisticsGraph
          data={stats}
          chartData={topFiveData}
          lastUpdated={statsMeta?.updated}
          scale="log"
          start={900}
          end={50000}
          title="Top Five Languages"
          legend={false}
          filterLabels={false}
          boldLabels={true}
        />
      </div>
    </WebsiteTemplate>
  );
};

export default Statistics;
