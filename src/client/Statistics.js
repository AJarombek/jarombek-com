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

    componentWillMount() {
        this.setState({data: {}});
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <StatisticsGraph data={data} />
                <StatisticsChart data={data} />
            </div>
        )
    }
}

export default Statistics;