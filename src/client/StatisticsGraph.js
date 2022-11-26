/**
 * StatisticsGraph functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import LineChartLabel from './LineChartLabel';

const StatisticsGraph = ({
  data = [],
  chartData = [],
  lastUpdated,
  scale = 'auto',
  start,
  end,
  title,
  legend = true,
  filterLabels = true,
  boldLabels = false
}) => {
  return (
    <div id="jarbek-statistics-graph">
      <h4>{title}</h4>
      <h6>(By Andrew Jarombek)</h6>
      {lastUpdated && (
        <p className="jarbek-statistics-graph-updated">Last Updated: {moment(lastUpdated).format('MMM Do, YYYY')}</p>
      )}
      <div>
        <ResponsiveContainer height={500} width="98%">
          <LineChart width="100%" height="100%" data={chartData} margin={{ top: 15, right: 30, left: 30, bottom: 5 }}>
            <CartesianGrid strokeDasgarray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[start, end]} scale={scale} allowDataOverflow={false} />
            <Tooltip
              itemSorter={(item) => 0 - item.value}
              formatter={(value, name) => [value.toLocaleString(), name]}
              filterNull={true}
            />
            {legend && <Legend />}
            <>
              {data.map((language) => (
                <Line
                  key={language.name}
                  type="monotone"
                  dataKey={language.name}
                  stroke={language.color ?? '#CCC'}
                  strokeWidth={3}
                  label={<LineChartLabel language={language.name} filtered={filterLabels} bold={boldLabels} />}
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
  data: PropTypes.array.isRequired,
  chartData: PropTypes.array.isRequired,
  lastUpdated: PropTypes.string,
  scale: PropTypes.string,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  legend: PropTypes.bool,
  filterLabels: PropTypes.bool,
  boldLabels: PropTypes.bool
};

export default StatisticsGraph;
