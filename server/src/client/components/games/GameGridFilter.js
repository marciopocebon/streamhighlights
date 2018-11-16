import React, { Component } from "react";
import { Input, Menu, Icon } from "semantic-ui-react";

class GameGridFilter extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  onSearchChange = value => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.searchValueChanged(value);
    }, 1000);
  };

  render() {
    return (
      <Menu fluid borderless size="large">
        <Menu.Item header>
          <Icon name="filter" />
          Filters
        </Menu.Item>
        <Menu.Item>
          <Input
            className="icon"
            icon="gamepad"
            iconPosition="left"
            placeholder="Search A Game"
            size="small"
            onChange={(e, { value }) => this.onSearchChange(value)}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default GameGridFilter;
