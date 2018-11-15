import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { fetchCurrentUser } from "./actions/index";
import TopMenu from './components/navigation/TopMenu';

class App extends Component {
  render() {
    const { route } = this.props;
    return (
      <div>
        <TopMenu />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
