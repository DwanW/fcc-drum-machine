import React, {Component} from 'react';
import PadBank from './components/PadBank';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const keyArr = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

const bodyStyle = {
  top: '30vh',
  height: '100vh',
  width: '80vw',
  margin: 'auto'
}
const displayStyle = {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
}

class App extends React.Component {
  constructor(props){
    super(props);
  this.state={
    display:String.fromCharCode(160),
    currentKeyArr: keyArr,
    currentKeyArrId: 'Heater Kit'
  }
  this.displayClipName = this.displayClipName.bind(this);
  }
  
  displayClipName(name) {
    this.setState({
      display:name
    });
  }

  render(){
    return(
      <div id='drum-machine' className="App" style={bodyStyle}>
        <Card>
          <h1 style={{textAlign: 'center', borderBottom:'solid 1px gray', width:'80%', margin:'auto'}}>Drum Machine</h1>
  
        <p id='display' style={displayStyle}><strong>{this.state.display}</strong></p>
        <PadBank
          currentKeyArr = {this.state.currentKeyArr}
          updateDisplay = {this.displayClipName}
        />
        </Card>
      </div>
    );
  } 
}

export default App;
