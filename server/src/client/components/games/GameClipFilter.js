import React, { Component } from "react";
import { Input, Menu, Icon, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAutomaticCheckbox } from "./../../actions/ui/index";

const mapDispatchToProps = dispatch => ({
  setAutomaticCheckbox: value => dispatch(setAutomaticCheckbox(value))
});

const mapStateToProps = state => ({
  ui: state.ui
});

class GameClipFilter extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  onCheckBoxChanged = () => {
    const { setAutomaticCheckbox, ui } = this.props;
    if (ui.automaticCheckbox) {
      setAutomaticCheckbox(false);
    } else {
      setAutomaticCheckbox(true);
    }
    this.props.checkBoxChanged();
  };

  onStreamerSearchChanged = value => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.streamerSearchValueChanged(value);
    }, 1000);
  };

  onTitleSearchChanged = value => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.titleSearchValueChanged(value);
    }, 1000);
  };

  render() {
    const { ui } = this.props;
    return (
      <Menu fluid borderless size="large" stackable>
        <Menu.Item header active>
          <Icon name="filter" />
          Filters
        </Menu.Item>
        <Menu.Item>
          <Input
            className="icon"
            icon="film"
            iconPosition="left"
            placeholder="Search A Clip"
            size="medium"
            style={{ marginRight: "10px" }}
            onChange={(e, { value }) => this.onTitleSearchChanged(value)}
          />
        </Menu.Item>
        <Menu.Item>
          <Input
            className="icon"
            icon="user"
            iconPosition="left"
            placeholder="Search A Streamer"
            size="medium"
            onChange={(e, { value }) => this.onStreamerSearchChanged(value)}
          />
        </Menu.Item>

        {/* <Menu.Item>
          <Checkbox
            label="Show Automatic Clips"
            onChange={(e, { value }) => this.onCheckBoxChanged()}
            checked={ui.automaticCheckbox}
          />
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameClipFilter);
