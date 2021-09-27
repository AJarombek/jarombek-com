/**
 * StatisticsRankTable functional component.
 * @author Andrew Jarombek
 * @since 9/26/2021
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const StatisticsRankTable = ({ data = [] }) => {
  const columns = useMemo(() => {
    const arrayLength = new Date().getFullYear() - 2013;
    const yearHeaders = [...Array(arrayLength).keys()].map((value) => ({
      Header: `${value + 2014}`,
      accessor: `${value + 2014}`
    }));

    return [
      {
        Header: 'Language',
        accessor: 'language'
      },
      ...yearHeaders,
      {
        Header: 'Average Rank',
        accessor: 'averageRank'
      }
    ];
  }, []);

  const finalData = useMemo(() => {
    const yearArray = [...Array(new Date().getFullYear() - 2013).keys()];
    return data
      .map((value) => {
        const yearData = {
          language: value.name,
          averageRank: (
            value.rank.reduce((total, rank) => total + rank ?? 0, 0) /
            value.rank.reduce((total, rank) => total + (rank != null ? 1 : 0), 0)
          ).toFixed(1)
        };

        yearArray.forEach((year, index) => {
          yearData[`${year + 2014}`] = value.rank[index];
        });

        return yearData;
      })
      .sort((a, b) => a.averageRank - b.averageRank);
  }, [data]);

  return <Table data={finalData} columns={columns} />;
};

StatisticsRankTable.propTypes = {
  data: PropTypes.array
};

export default StatisticsRankTable;
