
import React from 'react';

export default class CountDown extends React.Component {
    state = { 
        days: 1, 
        hours: 23, 
        minutes: 27, 
        seconds: 7,  
        isTimerCompleted : false, 
        timer: 0
    } 
    
    countDown = () => {              
        if (!this.state.isTimerCompleted){
            let seconds = this.state.seconds - 1;
            this.setState({            
                seconds: seconds,
            });
            
            // Check if we're at zero seconds.
            if (seconds === 0) { 
                this.setState({            
                    seconds: 60,
                });

                let minutes = this.state.minutes - 1;
                this.setState({                
                    minutes: minutes,
                });

                // Check if we're at zero minutes.
                if (minutes === 0) {
                    this.setState({            
                    minutes: 60,
                    });

                    let hours = this.state.hours - 1;
                    this.setState({                
                    hours: hours,
                    });

                    // Check if we're at zero hours.
                    if (hours === 0){
                        let days = this.state.days - 1;

                        // Check if we're at zero days.
                        if (days === 0) {
                            this.setState({                        
                                days: 0,
                                hours: 0,
                                minutes: 0,
                                seconds: 0,
                                isTimerCompleted: true
                            });
                            
                        } else {
                            this.setState({                        
                                days: days,
                            });
                        }
                    }
                }
            }
        } //if timer != 0
    }
  

    componentDidMount() {      
        if (this.state.timer === 0) {
          this.setState({
              timer: setInterval(this.countDown, 1000)
            });
        }
    }

    render() {
      return(
        <div className="Flex-line">                                                                       
            <div className="Rounded">                
            <p className="Clock-qty"> {this.state.days}</p>                          
            <p className="Clock-label"> Days</p>  
            </div>                        
            <div className="Rounded">                
            <p className="Clock-qty"> {this.state.hours}</p>                          
            <p className="Clock-label"> Hours</p>  
            </div>
            <div className="Rounded">                
            <p className="Clock-qty"> {this.state.minutes}</p>                          
            <p className="Clock-label"> Minutes</p>  
            </div>
            <div className="Rounded">                
            <p className="Clock-qty"> {this.state.seconds}</p>                          
            <p className="Clock-label"> Seconds</p>  
            </div>                                                                                     
        </div>
      );
    }
  }