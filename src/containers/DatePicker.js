import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Calendar,DateRange } from 'react-date-range';
import moment from 'moment'

import './datePicker.scss'

import {setDate, getTime} from '../actions/storage'

class DatePicker extends Component {

    constructor (props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.odd = true;
        this.state = {
            yd: false
        }
    }

    componentWillMount() {
        let {dispatch} = this.props, self = this;

        dispatch(getTime()).then((res) => {
            let {st, h, m} = res;
            let end = moment().hour(parseInt(h)).minutes(parseInt(m)).seconds(0);
            let server_time = moment(st*1000);
            console.log("server_time: ", server_time);
            console.log("end: ", end);

            if (server_time.isBefore(end)) {
                self.setState({
                    yd: true
                })
            }
            else {
                self.setState({
                    yd: false
                })
            }
        })
    }

    handleSelect(range) {
        console.log("choosing....");
        console.log(range);
        if (!this.odd) return ;
        this.odd = false;

        this.odd = false;
        let {storage, dispatch} = this.props;

        let start = range.startDate, end = range.endDate;

        if (storage.datePicker == 1) {
            dispatch(setDate({
                from: moment(start).format("YYYY-MM-DD"),
                to: moment.max(moment(start).add(1,'d'), moment(storage.to)).format("YYYY-MM-DD")
            }));
        }
        else {
            dispatch(setDate({
                from: moment(storage.from).format("YYYY-MM-DD"),
                to: moment(range.endDate).format("YYYY-MM-DD")
            }));
        }
        browserHistory.goBack();
    }

    render() {
        let {storage} = this.props;
        let from = moment(storage.from);
        let to = moment(storage.to);
        return (
            <div className="date-picker-container">
                <div className="date-container-date">
                    <div className="dcc">
                        <div className="dcc-a">
                            请选择{storage.datePicker==1?'入住':'离店'}日期
                        </div>
                        <DateRange
                            onChange={this.handleSelect}
                            startDate={storage.datePicker==1?storage.from:moment.max(moment(from).add(1,'d'),to)}
                            endDate={storage.datePicker==1?storage.from:moment.max(moment(from).add(1,'d'),to)}
                            minDate={storage.datePicker==1?(this.state.yd?moment().subtract(1,'d'):moment()):moment(from).add(1,'d')}
                            maxDate={storage.datePicker==1?moment().add(3,'months').subtract(1,'d'):moment().add(3,'months')}
                            format="YYYY/MM/DD"
                        />
                    </div>
                </div>
            </div>
        )
    }
}


function select(state) {
    return {
        storage: state.storage
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(DatePicker)