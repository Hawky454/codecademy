import React from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: yellow
        };
        this.changeColor = this.changeColor.bind(this);
    }
   
    changeColor() {
        let newColor = this.state.color === yellow ? green : yellow;
        this.setState({
            color: newColor
        });
    }

    render() { 
        return ( 
            <div 
                onClick={this.changeColor}
                style={{background: this.state.color}}
                className="toggle-container">
                <h1>Change My Color!</h1>
            </div>
         );
    }
}
 
export default Toggle;