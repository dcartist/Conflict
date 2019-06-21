import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
		super(props)

		this.state = {
			name: ''
        }
    }
        
    render() {
        return (
            <div>
                Hello, {this.props.name}
            </div>
        );
    }
}

export default Hello;