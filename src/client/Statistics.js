/**
 * Statistics stateful component.
 * @author Andrew Jarombek
 * @since 9/14/2019
 */

import React from 'react';
import StatisticsGraph from './StatisticsGraph';
import StatisticsChart from './StatisticsChart';
import BaseURL from './BaseURL';

class Statistics extends React.Component {

    /**
     * Set the initial state of the component and get the URL to use for API calls.
     * @param props Props passed to the component from a parent component.
     */
    constructor(props) {
        super(props);

        // Get the Base URL of the API depending on the environment.
        this.baseUrl = BaseURL.get();

        this.state = {};
    }

    /**
     * When the component is about to mount, retrieve the programming language statistics
     * from the API.
     */
    componentWillMount() {
        this.fetchStatistics()
            .catch(() => {
                this.setState({data: {}});
            });
    }

    /**
     * Fetch the programming language lines code statistics from the API.
     * @return {Promise<void>} A promise which should be caught in case the API call fails.
     */
    async fetchStatistics() {
        const response = await fetch(`${this.baseUrl}/api/stats`);
        const data = await response.json();
        this.setState({data});
    }

    /**
     * Render the Statistics page which displays a graph and chart containing my programming
     * language lines coded statistics.
     * @return {*} React elements.
     */
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