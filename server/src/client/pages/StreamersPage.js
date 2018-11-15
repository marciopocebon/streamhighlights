import React, { Component } from "react";
import { Grid, Segment, Divider, Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getStreamers, fetchMoreStreamers } from "../reducers/streamers";
import StreamersItem from "./../components/streamers/StreamersItem";
import StreamerGridFilter from "./../components/streamers/StreamerGridFilter";
import { requestStreamers } from "./../actions/streamers/index";
import { getActivity } from "../reducers/activity";
import ActivityFeed from "../components/activity/ActivityFeed";

class StreamersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      searchValue: ""
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.searchValueChanged = this.searchValueChanged.bind(this);
  }

  componentWillMount() {
    const { getStreamers } = this.props;
    // Client side rendering of the streamers
    getStreamers(0);
  }

  handleScroll() {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }));
        const { fetchMoreStreamers } = this.props;
        fetchMoreStreamers(this.state.pageIndex, this.state.searchValue);
      }
    }
  }

  searchValueChanged(value) {
    this.setState({
      pageIndex: 1,
      searchValue: value
    });
    const { getStreamers, requestStreamers } = this.props;
    requestStreamers();
    getStreamers(0, value);
  }

  render() {
    const { streamers } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment className="streamer-segment" loading={streamers.fetching}>
            <Label attached="top" size="big" className="colored-label">
              <Icon name="user" />
              Streamers
            </Label>
            <div className="segment-grid-filter">
              <StreamerGridFilter
                searchValueChanged={this.searchValueChanged}
              />

              <Divider horizontal>Results</Divider>
              <div
                ref={scroller => {
                  this.scroller = scroller;
                }}
                onScroll={this.handleScroll}
                style={{
                  height: "75vh",
                  overflowY: "auto",
                  overflowX: "hidden",
                  paddingRight: "10px"
                }}
              >
                <Grid
                  stackable
                  columns={4}
                  className="streamer-grid animated fadeIn"
                >
                  <Grid.Row>
                    {streamers.items &&
                      streamers.items.map((streamer, index) => {
                        return (
                          streamer && (
                            <Grid.Column width={4} key={index}>
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
    );
  }
}

function mapStateToProps({ streamers }) {
  return { streamers };
}

export default {
  component: connect(
    mapStateToProps,
    { getStreamers, fetchMoreStreamers, requestStreamers }
  )(StreamersPage),
  loadData: ({ dispatch }) => {
    return dispatch(getStreamers(0)).then(() => dispatch(getActivity(0)));
  }
};
