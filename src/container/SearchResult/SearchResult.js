import React, { Component } from 'react';
import Header from '../../component/Header/Header';
// import { Card } from 'antd';
import ListComponent from '../../component/ListComponent/ListComponent';
import { withRouter } from 'react-router-dom';

class SearchResult extends Component {
    render() {
        
        const { state } = this.props.location;
        console.log(state.searchText);
        return (
            <div style = {{display : 'flex', flexDirection : 'column',height : '100vh',alignItems : 'center', width: '100%'}}>
                <div style = {{width : '100%'}}>
                <Header searchValue = {state} />
                </div>
                
                <div style = {{width : '95%',marginTop : 70}}>
                <ListComponent />
                </div>
                
            </div>
        )
    }
}

export default withRouter(SearchResult);