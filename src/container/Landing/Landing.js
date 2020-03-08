import React, { Component } from 'react'
import './Landing.css';
import TextInput from '../../component/TextInput/TextInput';

const dummyData = [
    "Alligator",
    "Bask",
    "Crocodilian",
    "Death Roll",
    "Eggs",
    "Jaws",
    "Reptile",
    "Solitary",
    "Tail",
    "Wetlands"
  ];

class Landing extends Component {
    render() {
        return (
            <div className = 'landing-root'>
                <h1 style = {{marginBottom : 40}}>Landing Component</h1>
                <div className = 'input-root'>
                <TextInput
                suggestions={dummyData}
                 />
                 </div>
            </div>
        )
    }
}

export default Landing;