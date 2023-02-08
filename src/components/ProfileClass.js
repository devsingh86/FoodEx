import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>I am a Class Componnet for Profile - {this.props.name}</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: ++count,
            });
          }}
        >
          Incremeent
        </button>
      </div>
    );
  }
}

export default Profile;
