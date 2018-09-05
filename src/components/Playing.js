import React from 'react';

let color1 = 'rgb(198, 28, 111)';
let color2 = 'rgb(247, 240, 199)';
let black = '#000000';
let white = '#FFFFFF'

class Playing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: color1
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        console.log(this.state.color);
        let latestColor = this.state.color === color1 ? color2 : color1;
        this.setState({
            color: latestColor
        })
    }


    render() { 
        return (  
            <div 
                style={{ background: black }}
                className="playing-container">
                <p
                style={{ color: white}}>{this.props.tryThis}</p>
                <button
                    onClick={this.changeColor}
                    style={{background: this.state.color}}>Hit To Change Color</button>
            </div>
        );
    }
}
 
export default Playing;