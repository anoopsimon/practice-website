
import React, { Component } from 'react'
import Input from 'reactstrap/lib/Input'

export default class TextBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             className:'textbox'
        }
    }
    
    render() {
        return (
            <>
                <Input
                  type={this.props.type}
                  name={this.props.name}
                  id={this.props.id}
                  placeholder={this.props.placeholder}
                  aria-label={this.props.ariaLabel}
                  className={this.state.className}
                 // onChange={this.props.handleChange}
                /> 
            </>
        )
    }
}
