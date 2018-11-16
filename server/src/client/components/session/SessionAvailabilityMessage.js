import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import format from "date-fns/format";
import addDays from "date-fns/add_days";

const mapStateToProps = state => ({
  archives: state.archives,
  clips: state.clips
});

class SessionAvailabilityMessage extends Component {
  render() {
    const { archives } = this.props;
    return (
      <Message icon warning>
        <Icon name="inbox" />
        {archives && archives.items[0] && archives.items[0].archive && (
          <Message.Content>
            <Message.Header>Archive Availability</Message.Header>
            This archive was published on{" "}
            {format(archives.items[0].archive.createdAt, "MM/DD/YYYY")}. As
            Twitch keeps archives for 60 days, it will be available until{" "}
            <b>
              {format(
                addDays(archives.items[0].archive.createdAt, 60),
                "MM/DD/YYYY"
              )}
            </b>
          </Message.Content>
        )}
      </Message>
    );
  }
}

export default connect(mapStateToProps)(SessionAvailabilityMessage);
