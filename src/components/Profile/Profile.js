import React, { Component } from "react";

class Profile extends Component {

  render() {
    return (
      <div style={ { maxWidth: "200" } }>
        <img src="https://avatars2.githubusercontent.com/u/579793?v=4&s=460" width="200"/>
        <div>
          <p> Alejandro Espinoza </p>
          <p> alexesba@gmail.com </p>
        </div>
      </div>
    );
  }
}

export default Profile;
