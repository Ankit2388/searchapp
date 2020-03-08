import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import 'antd/dist/antd.css';
import TextInput from '../TextInput/TextInput';
import { Layout } from 'antd';

const { Header } = Layout;

// import Grid from '@material-ui/core/Grid';


class Headers extends Component {
    
    render() {
        // console.log(this.props.searchValue)
        const { searchValue } = this.props
        return (
            // <div>
                <Header className = 'header' >
                    
                    <div className="logo">
                    </div>
                    <div className = 'header-input'>
                    <TextInput searchValue={searchValue} />
                    </div>
                </Header>
               

            // </div>
        )
    }
}

export default Headers;