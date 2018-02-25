import { Observable } from 'rxjs';
import { mapPropsStream } from 'recompose';

interface InputType {
    period: number
}



export default ({ period }: InputType) => {
    const timer$ = Observable.interval(period).map(_ => ({
        period, time: new Date().getTime()
    }))

    return mapPropsStream(props$ => Observable.combineLatest(props$, timer$, (props, time) => ({
        ...props,
        ...time
    })))
}