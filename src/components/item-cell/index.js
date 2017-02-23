import React from 'react'
import { browserHistory } from 'react-router'
import './index.scss'

class ItemCell extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {

        };
    }

    handleClick() {
        browserHistory.push(this.props.url);
    }

    render() {

        return (
            <div className="item-cell" onClick={this.handleClick}>
                <div className="ic-a">
                    <img className="ica-a" src={this.props.icon} />
                    <div className="ica-b">
                        {this.props.title}
                    </div>
                </div>
                <div className="ic-b"></div>
            </div>
        )
    }
}

module.exports = ItemCell;