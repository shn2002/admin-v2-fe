import React, { Component } from 'react'


export default class PageTitle extends Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
        document.title =this.props.title + ' - HAPPY MMALL'
    }
    render() {
        return (
                <div id ="row">
                    <div className="col-md-12">
                        <h1 className="page-header">{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </div>
        )
    }
}

