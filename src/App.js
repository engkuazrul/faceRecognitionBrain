import React, {Component} from 'react';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css'; 

const app = new Clarifai.App({
  apiKey: '33ae7ac179b94a39b5d36b4a6778a499'
 }); 

const particlesOptions = {
   particles: {
     line_linked: {
       shadow: {
         enable: true, 
         color: "#3CA9D1",
         blur: 5
       }
     }
   }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80").then(
      function(response){
        console.log(response);
      },
      function(err){
        console.log(err);
      }
    );
  }

  render () {
    return (
      <div className="App">
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank /> 
          <ImageLinkForm onInputChange={this. onInputChange} onSubmit={this.onSubmit}/>  
          <FaceRecognition />
      </div>
    );
  }
}

export default App;
