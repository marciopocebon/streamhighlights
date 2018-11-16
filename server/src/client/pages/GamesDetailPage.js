import React, { Component } from "react";
import { getClipsByGame, fetchMoreClipsByGame } from "../reducers/clips";
import { Grid, Tab, Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import GamePageHeader from "../components/games/GamePageHeader";
import GameClipTable from "../components/games/GameClipTable";
import StreamerVideoArchive from "./../components/streamers/StreamerVideoArchive";
import VideoPlayer from "./../components/video/VideoPlayer";

class GamesDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      url: "",
      clipPageIndex: 1,
      streamerSearchValue: "",
      titleSearchValue: "",
      activeIndex: 0,
      modalOpen: false
    };
  }

  setClip = clip => {
    this.setState({
      active: true,
      url: clip.embedClipURL,
      activeClip: clip,
      modalOpen: true
    });
  };

  componentWillMount() {
    const { match, getClipsByGame } = this.props;
    getClipsByGame(match.params.id, 0);
  }

  handleScroll = () => {
    this.setState(prevState => ({
      clipPageIndex: prevState.clipPageIndex + 1
    }));
    const { fetchMoreClipsByGame, match, ui } = this.props;
    fetchMoreClipsByGame(
      match.params.id,
      this.state.clipPageIndex,
      this.state.streamerSearchValue,
      this.state.titleSearchValue,
      ui.automaticCheckbox
    );
  };

  streamerSearchValueChanged = value => {
    this.setState({
      clipPageIndex: 1,
      streamerSearchValue: value
    });
    const { match, getClipsByGame, ui } = this.props;
    getClipsByGame(
      match.params.id,
      0,
      value,
      this.state.titleSearchValue,
      ui.automaticCheckbox
    );
  };

  titleSearchValueChanged = value => {
    this.setState({
      clipPageIndex: 1,
      titleSearchValue: value
    });
    const { match, getClipsByGame, ui } = this.props;
    getClipsByGame(
      match.params.id,
      0,
      this.state.streamerSearchValue,
      value,
      ui.automaticCheckbox
    );
  };

  checkBoxChanged = () => {
    const { match, getClipsByGame, ui } = this.props;
    getClipsByGame(
      match.params.id,
      0,
      this.state.streamerSearchValue,
      this.state.titleSearchValue,
      !ui.automaticCheckbox
    );
  };

  close = () => this.setState({ modalOpen: false });

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { clips } = this.props;
    const { activeIndex } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <GamePageHeader numberOfClips={clips.items && clips.items.length} />
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={16}>
            <Tab
              activeIndex={activeIndex}
              onTabChange={this.handleTabChange}
              panes={[
                {
                  menuItem: {
                    key: "clips",
                    icon: "rocket",
                    content: "Clips"
                  },
                  render: () => (
                    <div>
                      {clips && clips.items && (
                        <GameClipTable
                          fetching={clips.fetching}
                          clips={clips.items}
                          setClip={this.setClip}
                          handleScroll={this.handleScroll}
                          streamerSearchValueChanged={
                            this.streamerSearchValueChanged
                          }
                          titleSearchValueChanged={this.titleSearchValueChanged}
                          checkBoxChanged={this.checkBoxChanged}
                        />
                      )}
                    </div>
                  )
                }
              ]}
            />
          </Grid.Column>

          <Modal
            dimmer="blurring"
            closeOnEscape={true}
            closeOnDimmerClick={true}
            open={this.state.modalOpen}
            size="small"
          >
            <Modal.Content>
              <VideoPlayer active={this.state.active} url={this.state.url} />
              {this.state.activeClip &&
                this.state.activeClip.archive &&
                this.state.activeClip.archive[0] && (
                  <StreamerVideoArchive
                    archive={this.state.activeClip.archive[0]}
                    creatorName={this.state.activeClip.creatorName}
                    automatic={this.state.activeClip.automatic}
                  />
                )}
            </Modal.Content>
            <Modal.Actions>
              <Button color="grey" onClick={this.close}>
                Close
              </Button>
            </Modal.Actions>
          </Modal>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ clips, ui }) {
  return { clips, ui };
}

export default {
  component: connect(
    mapStateToProps,
    { getClipsByGame, fetchMoreClipsByGame }
  )(GamesDetailPage),
  loadData: ({ dispatch }, { id }) => {
    return dispatch(getClipsByGame(id, 0));
  }
};
