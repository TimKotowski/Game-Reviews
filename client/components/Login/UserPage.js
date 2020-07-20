import React, { Component } from "react";
import { connect } from "react-redux";
import InvalidUser from "./InvalidUser";

class UserPage extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    if (!user.id) {
      return <InvalidUser />;
    }
    return (
      <div>
        <div
          key={user.id}
          className="bg-teal-100 border-t border-b border-teal-500 text-teal-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">Sucessfully Created Account</p>
          <p className="text-sm">
            Welcome {user.firstName} {user.lastName}{" "}
          </p>
          <p className="text-sm">Please sign in to start reviewing games! </p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState, null)(UserPage);
