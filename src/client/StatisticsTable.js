/**
 * StatisticsTable functional component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

/**
 * @param {{name: string, lines: number[]}[]} data
 * @return {JSX.Element}
 * @constructor
 */
const StatisticsTable = ({ data = [] }) => {
  const columns = useMemo(() => {
    const arrayLength = new Date().getFullYear() - 2013;
    const yearHeaders = [...Array(arrayLength).keys()].map((value) => ({
      Header: `${value + 2014}`,
      accessor: `${value + 2014}`,
    }));

    return [
      {
        Header: 'Language',
        accessor: 'language',
      },
      ...yearHeaders,
      {
        Header: 'Total',
        accessor: 'total',
      },
    ];
  }, []);

  const finalData = useMemo(() => {
    const yearArray = [...Array(new Date().getFullYear() - 2013).keys()];
    return data
      .map((value) => {
        const yearData = {
          language: value.name,
          total: value.lines.reduce((total, yearLines) => total + yearLines ?? 0, 0),
        };

        yearArray.forEach((year, index) => {
          yearData[`${year + 2014}`] = value.lines[index]?.toLocaleString();
        });

        return yearData;
      })
      .sort((a, b) => b.total - a.total)
      .map((value) => ({
        ...value,
        total: value.total.toLocaleString(),
      }));
  }, [data]);

  return <Table data={finalData} columns={columns} />;
};

StatisticsTable.propTypes = {
  data: PropTypes.array,
};

export default StatisticsTable;
