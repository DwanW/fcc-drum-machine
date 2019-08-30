import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class DrumPad extends React.Component {
    constructor(props){
      super(props);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playSound = this.playSound.bind(this);
    }
    componentDidMount(){
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount(){
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    handleKeyPress(event) {
      if(event.keyCode === this.props.keyCode){
        this.playSound();
      }
    }
    playSound(event){
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }
    render(){
      return(
        <Button id ={this.props.clipId}
             onClick={this.playSound}
             className="drum-pad">
            <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
            {this.props.keyTrigger}
        </Button>
      )
    }
  }

export default DrumPad;