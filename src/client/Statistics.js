/**
 * Statistics stateful component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import StatisticsGraph from './StatisticsGraph';
import StatisticsChart from './StatisticsChart';

class Statistics extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.fetchStatistics()
            .catch(() => {
                this.setState({
                    data: {}
                });
            });
    }

    async fetchStatistics() {
        const url = `/api/stats`;
    }

    render() {
        const {data} = this.state;
        return (
            <div id="jarbek-statistics">
                <p className="jarbek-statistics-header">Programming Language Statistics</p>
                <StatisticsGraph data={data} disabled={true} />
                <StatisticsChart data={data} />
            </div>
        )
    }
}

export default Statistics;