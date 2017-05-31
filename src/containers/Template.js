import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTemplateByType} from '../components/template'
import './Template.scss'

class Template extends Component {
    render() {
        console.log(this.props.params.id)
        const Template = getTemplateByType(1)
        return (
            <div className="template_page">
                <Template infoid={this.props.params.id}></Template>
            </div>
        )
    }
}

export default connect()(Template)