import React, { Component } from "react";
import { Grid, Segment, Divider, Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getStreamers, fetchMoreStreamers } from "./../../reducers/streamers";
import StreamersItem from "./../../components/streamers/StreamersItem";
import StreamerGridFilter from "./../../components/streamers/StreamerGridFilter";
import { requestStreamers } from "./../../actions/streamers/index";
import { getActivity } from "./../../reducers/activity";
import ActivityFeed from "./../../components/activity/ActivityFeed";
import StreamersPageHelmet from "./../../components/seo/StreamersPageHelmet";

class StreamersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      searchValue: ""
    };
  }

  componentWillMount() {
    const { getStreamers, match } = this.props;
    // Client side rendering of the streamers
    getStreamers(match.params.id);
  }

  render() {
    const { streamers, match } = this.props;
    return (
      <div>
        <StreamersPageHelmet
          paginated={true}
          page={match.params.id}
          streamers={streamers}
        />
        <Grid stackable>
          <Grid.Column width={10}>
            <Segment className="streamer-segment" loading={streamers.fetching}>
              <Label attached="top" size="big" className="colored-label">
                <Icon name="user" />
                Streamers
              </Label>
              <div className="segment-grid-filter">
                <Divider horizontal>Results</Divider>
                <div
                  style={{
                    height: "75vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    paddingRight: "10px"
                  }}
                >
                  <Grid
                    stackable
                    doubling
                    columns={4}
                    className="streamer-grid animated fadeIn"
                  >
                    <Grid.Row>
                      {streamers.items &&
                        streamers.items.map((streamer, index) => {
                          return (
                            streamer && (
                              <Grid.Column
                                width={4}
                                key={index}
                                computer={8}
                                largeScreen={4}
                                widescreen={4}
                              >
                                <StreamersItem
                                  key={index}
                                  streamer={streamer}
                                  numberOfClips={streamer.numberOfClips}
                                  numberOfArchives={streamer.numberOfArchives}
                                />
                              </Grid.Column>
                            )
                          );
                        })}
                    </Grid.Row>
                  </Grid>
                </div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <ActivityFeed />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ streamers }) {
  return { streamers };
}

export default {
  component: connect(
    mapStateToProps,
    { getStreamers, requestStreamers }
  )(StreamersPage),
  loadData: ({ dispatch }, { id }) => {
    return dispatch(getStreamers(id)).then(() => dispatch(getActivity(0)));
  }
};
