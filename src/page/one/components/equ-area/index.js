import React from 'react'
import './index.scss'
import cn from 'classnames'

export default class OrderGenerate extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    findEqu(item) {
        switch (item) {
            case '空调': return {name:'空调', className: 'icon1'};
            case '电视': return {name:'电视', className: 'icon2'};
            case 'wifi': return {name:'wifi', className: 'icon3'};
            case '浴缸': return {name:'浴缸', className: 'icon4'};
            case '电脑': return {name:'电脑', className: 'icon5'};
            case '免费停车': return {name:'免费停车', className: 'icon6'};
            case '付费停车': return {name:'付费停车', className: 'icon7'};
            case '迷你吧台': return {name:'迷你吧台', className: 'icon8'};
            case '窗户': return {name:'窗户', className: 'icon9'};
            case '单早': return {name:'单早', className: 'icon10'};
            case '双早': return {name:'双早', className: 'icon10'};
            default: return {name:'', className: ''};
        }
    }


    render() {
        let {lists} = this.props;

        let id = 0;
        let dis = lists.map((item)=>{
            item = this.findEqu(item);
            id += 1;
            const classNameObj = {
                facilities: true
            }
            classNameObj[item.className] = true

            return item.name.length==0?(
                <div key={id}></div>
            ):(
                <div className="equ-item" key={id}>
                    <span className={cn(classNameObj)}></span>
                    <div className="ei-text">{item.name}</div>
                </div>
            )
        });
        return (
            <div className="equ-area">
                {dis}
            </div>
        )
    }
}