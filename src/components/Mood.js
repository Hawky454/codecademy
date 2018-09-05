import React from 'react';

class Mood extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           mood: 'good',
       };
       this.changeButton = this.changeButton.bind(this);
   }

   changeButton() {
       let newMood = this.state.mood === 'good' ? 'bad' : 'good';
       console.log(this.state.mood)
       this.setState({
           mood: newMood
       });
   }
    
    render() { 
        return ( 
            <div 
                className="mood-container">
            <h1>I'm feeling {this.state.mood}!</h1>
            <button
                onClick={this.changeButton}>
                click me!
                </button>
            </div>
         );
    }
}
 
export default Mood;
