// import React, { Component } from 'react'
// import './TextInput.css';
// // import 'font-awesome/css/font-awesome.min.css';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import { withRouter } from 'react-router-dom';


// class TextInput extends Component {
//     static defaultProps = {
//         suggestions: []
//     };

//     constructor(props) {
//         super(props);

//         this.state = {
//             // The active selection's index
//             activeSuggestion: 0,
//             // The suggestions that match the user's input
//             filteredSuggestions: [],
//             // Whether or not the suggestion list is shown
//             showSuggestions: false,
//             // What the user has entered
//             userInput: ""
//         };
//     }

//     onChange = e => {
//         const { suggestions } = this.props;
//         const userInput = e.currentTarget.value;

//         // Filter our suggestions that don't contain the user's input
//         const filteredSuggestions = suggestions.filter(
//             suggestion =>
//                 suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//         );

//         this.setState({
//             activeSuggestion: 0,
//             filteredSuggestions,
//             showSuggestions: true,
//             userInput: e.currentTarget.value
//         });
//     };

//     onClick = e => {
//         this.setState({
//             activeSuggestion: 0,
//             filteredSuggestions: [],
//             showSuggestions: false,
//             userInput: e.currentTarget.innerText
//         });
//     };

//     onKeyDown = e => {
//         const { activeSuggestion, filteredSuggestions,userInput } = this.state;

//         // User pressed the enter key
//         if (e.keyCode === 13) {
//             this.setState({
//                 activeSuggestion: 0,
//                 showSuggestions: false,
//                 userInput: filteredSuggestions[activeSuggestion]
//             });                    
//             // alert(filteredSuggestions[activeSuggestion])
//             if (userInput.length > 0 || filteredSuggestions[activeSuggestion]) {                
//                 this.props.history.push(`/result`,{searchText : userInput})
//             }
//         }
//         // User pressed the up arrow
//         else if (e.keyCode === 38) {
//             if (activeSuggestion === 0) {
//                 return;
//             }

//             this.setState({ activeSuggestion: activeSuggestion - 1 });
//         }
//         // User pressed the down arrow
//         else if (e.keyCode === 40) {
//             if (activeSuggestion - 1 === filteredSuggestions.length) {
//                 return;
//             }

//             this.setState({ activeSuggestion: activeSuggestion + 1 });
//         }
//         console.log(activeSuggestion + ' == ' + filteredSuggestions);

//     };

//     handleSearch = () => {
//         // alert(this.state.userInput)
//         const { userInput } = this.state;
//         if (userInput.length > 0) {
//             this.props.history.push(`/result`,{searchText : userInput})
//         }
//     }

//     render() {
//         const {
//             onChange,
//             onClick,
//             onKeyDown,
//             state: {
//                 activeSuggestion,
//                 filteredSuggestions,
//                 showSuggestions,
//                 userInput
//             }
//         } = this;


//         let suggestionsListComponent;

//         if (showSuggestions && userInput) {
//             if (filteredSuggestions.length) {
//                 suggestionsListComponent = (
//                     <ul className="suggestions">
//                         {filteredSuggestions.map((suggestion, index) => {
//                             let className;

//                             // Flag the active suggestion with a class
//                             if (index === activeSuggestion) {
//                                 className = "suggestion-active";
//                             }

//                             return (
//                                 <li className={className} key={suggestion} onClick={onClick}>
//                                     {suggestion}
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 );
//             } else {
//                 suggestionsListComponent = (
//                     <div class="no-suggestions">
//                         <em>No suggestions, you're on your own!</em>
//                     </div>
//                 );
//             }
//         }
//         console.log(userInput);

//         return (
//             <div>
//                 <Paper component="form" className='input-layout' >
//                     <InputBase
//                         // className={classes.input}
//                         autoFocus = {true}
//                         className='input'
//                         type = 'text'
//                         placeholder="search anything here"
//                         inputProps={{ 'aria-label': 'search anything here' }}
//                         onChange={onChange}
//                         onKeyDown={onKeyDown}
//                         value={userInput}
//                     />
//                     <IconButton onClick = {this.handleSearch} className='iconButton' aria-label="search">
//                         <SearchIcon />
//                     </IconButton>
//                 </Paper>
//                 {suggestionsListComponent}
//             </div>
//         )
//     }
// }

// export default withRouter(TextInput);

import React from "react";
import "antd/dist/antd.css";
import './TextInput.css';
import { AutoComplete,Input } from "antd";
import { withRouter } from 'react-router-dom';
const { Option } = AutoComplete;

class TextInput extends React.Component {
  state = {
    value: '',
    dataSource: [],
  };

  componentDidMount() {
    const { searchValue } = this.props;
    if (searchValue) {
      this.setState({
        value: searchValue.searchText
      })
      // console.log(searchValue.searchText)
    }


    // console.log(suggestions);        
    // this.setState({
    //   value : searchValue
    // })
  }

  onSearch = searchText => {
    const { suggestions } = this.props;
    let filteredSuggestions;
    if (!searchText) {
      filteredSuggestions = [];
    } else {
      filteredSuggestions = suggestions.filter(
        suggestion => suggestion.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    }
    this.setState({ dataSource: filteredSuggestions });
  };

  onChange = value => {
    this.setState({ value });
  };

  onSelect = (value) => {
    console.log('onSelect', value.length);
    if (value.length > 0 || value !== null) {
      this.props.history.push(`/result`, { searchText: value })
    }
  }

  render() {
    const { dataSource, value } = this.state;
    return (
      <div style={{ width: 600 }}>

        <AutoComplete
          value={value}
          dataSource={dataSource}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          style = {{width : '100%'}}
          // placeholder="Search here"
        >
          <Input.Search size="large"  placeholder="Search here"  />
        </AutoComplete>
      </div>
    );
  }
}

export default withRouter(TextInput);
