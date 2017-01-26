import React, {Component} from 'react';

class Friend extends Component {

  render() {
    const {friend} = this.props;
    const {imageUrl, name, surname, isOnline} = friend;

    return (
      <div>
        <img
          width="100"
          height="100"
          src={imageUrl}
        />
        <div>
          <svg width="10" height="10">
            <circle fill={isOnline ? 'green' : 'red'} cx="5" cy="5" r="5"/>
          </svg>
          <b> {name} </b>
          <i> {surname} </i>
        </div>
      </div>
    );
  }

}

export default Friend;
