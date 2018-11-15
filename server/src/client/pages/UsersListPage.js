import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

const mapStateToProps = state => ({
  users: state.users
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <div>
          Here's a big list of users:<ul>{this.renderUsers()}</ul>
        </div>
      </div>
    );
  }
}

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList),
  loadData: loadData
};
