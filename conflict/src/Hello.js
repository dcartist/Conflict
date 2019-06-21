import React, { Component } from 'react';

class Hello extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Melika & Paula"
        }
    }
    render() {
        return (
            <div>
                <p>Hello {name}</p>
            </div>
        );
    }
}

export default Hello;