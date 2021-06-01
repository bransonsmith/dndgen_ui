


import React from 'react';
import './PageContent.css';

export default class PageContent extends React.Component  {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-content">
                { this.props.children }
            </div> 
        );
    }
}