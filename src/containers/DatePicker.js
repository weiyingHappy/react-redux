import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Calendar,DateRange } from 'react-date-range';
import moment from 'moment'

import './datePicker.scss'

import {setDate} from '../actions/storage'

class DatePicker extends Component {

    constructor (props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.odd = true;
    }

    componentWillMount() {

    }

    handleSelect(range) {
        let {storage, dispatch} = this.props;
        if (range.startDate) {
            range.endDate = range.startDate;
        }
        if (range.endDate) {
            range.startDate = range.endDate;
        }

        if (storage.datePicker == 1) {
            dispatch(setDate({
                from: range.startDate,
                to: moment.max(moment(range.startDate).add(1,'d'), storage.to)
            }));
        }
        else {
            dispatch(setDate({
                from: storage.from,
                to: range.endDate
            }));
        }
        if (this.odd) {
            browserHistory.goBack();
            this.odd = false;
        }
    }

    render() {
        let {storage} = this.props;
        return (
            <div className="date-picker-container">
                <div className="date-container-date">
                    <div className="dcc">
                        <div className="dcc-a">
                            请选择{storage.datePicker==1?'入住':'离店'}日期
                        </div>
                        <DateRange
                            onChange={this.handleSelect}
                            startDate={storage.datePicker==1?storage.from:moment.max(moment(storage.from).add(1,'d'),storage.to)}
                            endDate={storage.datePicker==1?storage.from:moment.max(moment(storage.from).add(1,'d'),storage.to)}
                            minDate={storage.datePicker==1?moment():moment(storage.from).add(1,'d')}
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