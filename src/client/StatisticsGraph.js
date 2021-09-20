/**
 * StatisticsGraph functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import LineChartLabel from './LineChartLabel';

const StatisticsGraph = ({ data = [], lastUpdated }) => {
  const chartData = useMemo(() => {
    const arrayLength = new Date().getFullYear() - 2013;
    return [...Array(arrayLength).keys()].map((value, index) => {
      const yearData = {
        year: value + 2014
      };

      data?.forEach((item) => {
        yearData[item.name] = item.lines[index];
      });

      return yearData;
    });
  }, [data]);

  return (
    <div id="jarbek-statistics-graph">
      {lastUpdated && (
        <p className="jarbek-statistics-graph-updated">Last Updated: {moment(lastUpdated).format('MMM Do, YYYY')}</p>
      )}
      <div>
        <ResponsiveContainer height={500} width="95%">
          <LineChart width="100%" height="100%" data={chartData} margin={{ top: 15, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasgarray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 43000]} />
            <Tooltip
              itemSorter={(item) => 0 - item.value}
              formatter={(value, name) => [value.toLocaleString(), name]}
              filterNull={true}
            />
            <Legend />
            <>
              {data.map((language) => (
                <Line
                  key={language.name}
                  type="monotone"
                  dataKey={language.name}
                  stroke={language.color ?? '#CCC'}
                  strokeWidth={3}
                  label={<LineChartLabel language={language.name} />}
                />
              ))}
            </>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

StatisticsGraph.propTypes = {
  data: PropTypes.array,
  lastUpdated: PropTypes.string
};

export default StatisticsGraph;
