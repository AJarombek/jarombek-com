/**
 * StatisticsRankGraph functional component.
 * @author Andrew Jarombek
 * @since 9/19/2021
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import LineChartLabel from './LineChartLabel';

const StatisticsRankGraph = ({ data = [] }) => {
  const chartData = useMemo(() => {
    const arrayLength = new Date().getFullYear() - 2013;
    return [...Array(arrayLength).keys()].map((value, index) => {
      const yearData = {
        year: value + 2014
      };

      data?.forEach((item) => {
        const rank = item.rank[index];
        yearData[item.name] = rank <= 15 ? rank : null;
      });

      return yearData;
    });
  }, [data]);

  return (
    <div id="jarbek-statistics-rank-graph">
      <h4>Programming Language Rankings</h4>
      <ResponsiveContainer height={600} width="95%">
        <LineChart width="100%" height="100%" data={chartData} margin={{ top: 15, right: 40, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasgarray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[1, 15]} reversed={true} interval="preserveStartEnd" />
          <Tooltip itemSorter={(item) => item.value} filterNull={true} />
          <Legend />
          <>
            {data.map((language) => (
              <Line
                key={language.name}
                type="linear"
                dataKey={language.name}
                stroke={language.color ?? '#CCC'}
                strokeWidth={3}
                label={<LineChartLabel language={language.name} filtered={false} bold={true} fontSize={12} />}
              />
            ))}
          </>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

StatisticsRankGraph.propTypes = {
  data: PropTypes.array
};

export default StatisticsRankGraph;
