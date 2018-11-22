import React, { Component } from "react";
import {
  Segment,
  Label,
  Feed,
  Rating,
  Flag,
  Icon,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import TimeAgo from "react-timeago";
import { mapToFlag } from "../../utils/language/languageUtils";
import {
  getActivity,
  fetchMoreActivity
} from "./../../reducers/activity/index";
import { withRouter } from "react-router-dom";
const image = "https://image.flaticon.com/icons/svg/843/843273.svg";

class GameActivityFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1
    };
  }

  componentWillMount() {
    const { getActivity } = this.props;
    getActivity(0);
  }

  handleScroll = () => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }));
        const { fetchMoreActivity } = this.props;
        fetchMoreActivity(this.state.pageIndex);
      }
    }
  };

  render() {
    const { activity } = this.props;
    return (
      <Segment loading={activity.fetching} className="activity-segment">
        <Label attached="top" size="big" className="colored-label">
          <Icon loading name="certificate" />
          Activity Feed
        </Label>
        <Message warning>
          Those clips are generated automatically by <b>AutoClipper (β)</b>
        </Message>
        <div
          ref={scroller => {
            this.scroller = scroller;
          }}
          onScroll={this.handleScroll}
          style={{
            height: "85vh",
            overflowY: "auto"
          }}
          className="activity-feed"
        >
          <Feed style={{ marginTop: "20px", padding: "10px" }}>
            {activity &&
              activity.items &&
              activity.items.map(clip => {
                return (
                  <Feed.Event
                    onClick={() =>
                      this.props.history.push(
                        `/streamer/${clip.channelId.streamerId}`
                      )
                    }
                  >
                    <Feed.Label image={image} />
                    <Feed.Content>
                      <Feed.Date content={<TimeAgo date={clip.created_at} />} />
                      <Feed.Summary
                        content={
                          "AutoClipper created a new clip for " +
                          (clip.gameId[0] ? clip.gameId[0].name : "Unknown")
                        }
                      />
                      {clip.gameId[0] && (
                        <Feed.Extra
                          images={[
                            clip.gameId[0].boxArtURL
                              .replace("{width}", "285")
                              .replace("{height}", "380")
                          ]}
                        />
                      )}
                      <Feed.Extra>
                        <Label>
                          <Flag name={mapToFlag(clip.language)} />
                          {clip.language}
                        </Label>
                        <Label>
                          <Rating
                            icon="star"
                            defaultRating={clip.score}
                            maxRating={3}
                            disabled
                          />
                        </Label>
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name="user" />
                          {clip.channelId && clip.channelId.displayName}
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                );
              })}
          </Feed>
        </div>
      </Segment>
    );
  }
}

function mapStateToProps({ activity }) {
  return { activity };
}

export default withRouter(
  connect(
    mapStateToProps,
    { getActivity, fetchMoreActivity }
  )(GameActivityFeed)
);
