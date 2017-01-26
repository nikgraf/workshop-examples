import React, {Component} from 'react';
import Friend from '../Friend';

class FriendsList extends Component {

  state = {
    searchText: ''
  }

  onSearchChange(e) {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { friends } = this.props;
    const searchText = this.state.searchText.toLowerCase();

    const filteredFriends = friends.filter(friend => (
      friend.name.toLowerCase().indexOf(searchText) !== -1 ||
      friend.surname.toLowerCase().indexOf(searchText) !== -1
    ))

    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={e => this.onSearchChange(e)}
        />

        {filteredFriends.length > 0 &&
          <div>
            <h3>Users</h3>
            {filteredFriends.map((friend) => (
              <Friend
                key={friend.id}
                friend={friend}
              />
            ))}
          </div>
        }

        {filteredFriends.length === 0 &&
          <div>
            No users found
          </div>
        }
      </div>
    )
  }
}

export default FriendsList;
