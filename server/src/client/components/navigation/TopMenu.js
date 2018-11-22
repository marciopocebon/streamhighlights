import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {}
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        stackable
        size="huge"
        className="bordered-segment menu-active"
        icon="labeled"
      >
        <Menu.Item className="brand">Stream Highlights</Menu.Item>
        <Menu.Item
          as={Link}
          name="streamers"
          to="/streamers"
          onClick={this.handleItemClick}
          active={activeItem === "streamers"}
        >
          <Icon name="users" />
          Streamers
        </Menu.Item>
        <Menu.Item
          as={Link}
          name="games"
          to="/games"
          onClick={this.handleItemClick}
          active={activeItem === "games"}
        >
          <Icon name="gamepad" />
          Games
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
