import React from 'react';

let color1 = 'rgb(198, 28, 111)';
let color2 = 'rgb(247, 240, 199)';
let black = '#000000';
let white = '#ffffff';
let pStyle = {
    color:'white',
    textAlign: 'center',
    width: 400,
    marginLeft: '33%'
 
}
let buttonStyle = {
    color: 'grey'
}




class Playing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: color1,
            message: 'Click on this text to add your name!!!',
            userInput: ''
        }
        this.changeColor = this.changeColor.bind(this);
        this.simpleAlert = this.simpleAlert.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeColor() {
        console.log(this.state.color);
        let latestColor = this.state.color === color1 ? color2 : color1;
        this.setState({
            color: latestColor
        })
    }

    simpleAlert() {
        let name = prompt('Enter full name');
        this.setState({
          message: name
        })
      }

      handleChange(event) {
          this.setState({
              userInput: event.target.value
          })
          console.log(event.target.value);
      }


    render() { 
        return (  
            <div 
                style={{ background: black }}
                className="playing-container">
                <p 
                  onClick={this.simpleAlert}
                  style={pStyle}>{this.state.message}</p>
                <button
                  onClick={this.changeColor}
                  className="sillybtn"
                  style={{background: this.state.color}}>Hit To Change Color</button>
               
                  <h2>{this.state.userInput}</h2>
                  <input
                    className="user-input" 
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    type="text" 
                    maxLength="120"
                    placeholder="Maximum Charaters: 120"
                    onkeypress="mici"
                   />
                  
            </div>
        );
    }
}
 
export default Playing;