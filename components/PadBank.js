import React, {Component} from 'react';
import DrumPad from './DrumPad';
import Grid from '@material-ui/core/Grid';


class PadBank extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let pad;
        pad = this.props.currentKeyArr.map((arrElement,i,kArr)=> {
            return(
                <DrumPad 
			    clipId={kArr[i].id} 
		        clip={kArr[i].url}
			    keyTrigger={kArr[i].keyTrigger}
			    keyCode={kArr[i].keyCode} 
			    updateDisplay={this.props.updateDisplay} 
		         />
            )
        });
        return (
            <Grid className="pad-bank" justify='center' container>
                {pad}
            </Grid>
        )
    }
}
export default PadBank;