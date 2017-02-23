import React from 'react'
import './index.scss'



import icon1 from '../../static/images/other/icon-1.png'
import icon2 from '../../static/images/other/icon-2.png'
import icon3 from '../../static/images/other/icon-3.png'
import icon4 from '../../static/images/other/icon-4.png'
import icon5 from '../../static/images/other/icon-5.png'
import icon6 from '../../static/images/other/icon-6.png'
import icon7 from '../../static/images/other/icon-7.png'
import icon8 from '../../static/images/other/icon-8.png'
import icon9 from '../../static/images/other/icon-9.png'
import icon10 from '../../static/images/other/icon-10.png'

export default class OrderGenerate extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    findEqu(item) {
        switch (item) {
            case '空调': return {name:'空调', img:icon1};
            case '电视': return {name:'电视', img:icon2};
            case 'wifi': return {name:'wifi', img:icon3};
            case '浴缸': return {name:'浴缸', img:icon4};
            case '电脑': return {name:'电脑', img:icon5};
            case '免费停车': return {name:'免费停车', img:icon6};
            case '付费停车': return {name:'付费停车', img:icon7};
            case '迷你吧台': return {name:'迷你吧台', img:icon8};
            case '窗户': return {name:'窗户', img:icon9};
            case '单早': return {name:'单早', img:icon10};
            case '双早': return {name:'双早', img:icon10};
            default: return {name:'', img:''};
        }
    }


    render() {
        let {lists} = this.props;

        let dis = lists.map((item)=>{
            item = this.findEqu(item);
            return item.name.length==0?(
                <div></div>
            ):(
                <div className="equ-item" key={item.name}>
                    <img src={item.img} className="ei-img"/>
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