import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class StyledButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            className:'styledButton'
        }
    }
    
    render() {
        return (
           <>
             <Button
                id={this.props?.id}
                aria-label={this.props?.ariaLabel}
                className={this.state.className}
                onClick={this.props?.onClick}                
              >
                {this.props?.text}
              </Button>
           </>
        )
    }
}
