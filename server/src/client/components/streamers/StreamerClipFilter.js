import React, { Component } from "react";
import {
  Input,
  Menu,
  Icon,
  Checkbox,
  Header,
  Dropdown
} from "semantic-ui-react";
import { connect } from "react-redux";
import { setAutomaticCheckbox, setTimeFilter } from "./../../actions/ui/index";

const mapDispatchToProps = dispatch => ({
  setAutomaticCheckbox: value => dispatch(setAutomaticCheckbox(value)),
  setTimeFilter: timeValue => dispatch(setTimeFilter(timeValue))
});

const mapStateToProps = state => ({
  ui: state.ui
});

const timeOptions = [
  {
    key: "today",
    text: "today",
    value: "day",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "month",
    content: "This Month"
  },
  {
    key: "this year",
    text: "this year",
    value: "year",
    content: "This Year"
  }
];

class StreamerClipFilter extends Component {
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

  onTimeChanged = value => {
    const { setTimeFilter } = this.props;
    setTimeFilter(value);
    this.props.timeChanged(value);
  };

  onGameSearchChanged = value => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.gameSearchValueChanged(value);
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
      <Menu borderless size="large" stackable>
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
            icon="gamepad"
            iconPosition="left"
            placeholder="Search A Game"
            size="medium"
            onChange={(e, { value }) => this.onGameSearchChanged(value)}
          />
        </Menu.Item>
        <Menu.Item>
          <Header as="h4">
            <Icon name="eye" />
            <Header.Content>
              Most viewed{" "}
              <Dropdown
                inline
                header="Adjust time span"
                options={timeOptions}
                defaultValue={ui.time}
                onChange={(e, { value }) => this.onTimeChanged(value)}
              />
            </Header.Content>
          </Header>
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
)(StreamerClipFilter);
