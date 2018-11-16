import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Label, Grid } from "semantic-ui-react";
import { getArchive } from "./../reducers/archives/index";
import SessionPageHeader from "./../components/session/SessionPageHeader";
import SessionAvailabilityMessage from "./../components/session/SessionAvailabilityMessage";
import SessionPlayer from "./../components/session/SessionPlayer";
import SessionMessage from "../components/session/SessionMessage";
import SessionClipTable from "./../components/session/SessionClipTable";
import { getClipsByArchive, fetchMoreClipsByArchive } from "../reducers/clips";

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clipPageIndex: 1,
      time: 1000
    };
  }
  componentWillMount() {
    const { getArchive, match } = this.props;
    getArchive(match.params.id, 0);
    getClipsByArchive(match.params.id, 0);
  }

  handleScroll = () => {
    this.setState(prevState => ({
      clipPageIndex: prevState.clipPageIndex + 1
    }));
    const { fetchMoreClipsByArchive, match } = this.props;
    fetchMoreClipsByArchive(match.params.id, this.state.clipPageIndex);
  };

  seekTo = time => {
    this.setState({
      time
    });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={16}>
          <SessionPageHeader />
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={7}>
            <SessionAvailabilityMessage />
            <Segment>
              <Label attached="top" className="colored-label" size="big">
                Session Player
              </Label>
              <SessionPlayer time={this.state.time} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <SessionMessage />
            <SessionClipTable
              seekTo={this.seekTo}
              handleScroll={this.handleScroll}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default {
  component: connect(
    null,
    { getArchive, fetchMoreClipsByArchive }
  )(SessionPage),
  loadData: ({ dispatch }, { id }) => {
    return dispatch(getArchive(id, 0)).then(() =>
      dispatch(getClipsByArchive(id, 0))
    );
  }
};
