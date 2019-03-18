import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg'

class AgeStats extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let other = new Date(date).getTime();
        let difference = Math.abs(today - other);

        return `${difference} millisecons`;
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
                <img src={partyPopper} alt='party-popper' className='party-popper'></img>
            </div>
        );
    }
}

export default AgeStats;