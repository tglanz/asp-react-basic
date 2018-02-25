import * as React from 'react';
import { compose, mapProps } from 'recompose';

import { RouteComponentProps } from 'react-router-dom';

import * as moment from 'moment';

import withTime from './hoc/withTime';

type ClockProps = RouteComponentProps<{}> & {
    period: Number,
    time: any
}

class Clock extends React.Component<ClockProps, {}> {
    public render() {

        const { time, period } = this.props;

        return <div>
            <h1>Clock</h1>
            <h2>Time { time }</h2>    
            <small>Period of: { period }</small>
        </div>;
    }
}

export default compose<ClockProps, {}>(
    withTime({ period: 120 }),
    mapProps((inputProps: any) => ({
        ...inputProps,
        time: moment(inputProps.time).format('h:mm.s,S')
    }))
)(Clock) as typeof Clock;