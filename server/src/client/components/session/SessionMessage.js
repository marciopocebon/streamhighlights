import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
export default class SessionMessage extends Component {
  render() {
    return (
      <Message icon info>
        <Icon name="question" />
        <Message.Content>
          <Message.Header>Did You Know?</Message.Header>
          For <b>Automatic Clips</b>, you can jump directly into the action by
          clicking on 'Go' <br />
          This option is available for user clips, but we can not ensure that
          those clips were captured live.
        </Message.Content>
      </Message>
    );
  }
}
