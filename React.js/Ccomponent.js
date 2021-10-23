import React, { Component } from 'react'




export default class Ccomponent extends Component {
    constructor(props) {
    super(props)

    this.state = {

        name: "Alex"
         
    }
}
    render() {
        return (
            <div>
                <h1>Classcomponent {this.state.name}</h1>
            </div>
        )
    }
}
