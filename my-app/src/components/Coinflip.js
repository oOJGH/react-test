import React from 'react';

const NUMBER_LIMIT = 1000000;

export default class CoinFlip extends React.Component {
    
    state = {
              message: ''
            }
   
    flip = () => {
        return Math.random() >= 0.5;
    }

    generateRandom = (number) => {    
        if (this.flip) {
            let milliseconds = (new Date()).getTime();
            let last = milliseconds % number;
            last = (last * NUMBER_LIMIT + 3) % number;
            return last % number;
        }
    }

    handleRandom = (e) => {
        e.preventDefault();
            
        const option = e.target.elements.option.value.trim();

        this.setState({
            message: ''
        });
    
        if (option && option > 0 && option < 1000000) {               
            let result = this.generateRandom(option);
            this.setState({                
                message: 'Result: '+result
            });

        } else if (option && option <= 0) {
            this.setState({
                message: 'Error - Must be greather than 0'
            });
        } else if (option && option > NUMBER_LIMIT) {
            this.setState({
                message: 'Error - Must be less than 1,000,000'
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleRandom}>
               <div className="Coin-line">
                <input type="text" name="option" />
                <button>Random</button>
                <p> {this.state.message}</p>
                </div>
            </form>
        );        
    }
}