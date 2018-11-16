import React, { Component } from "react";
import { Grid, Tab, Modal, Button, Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAutomaticCheckbox, setTimeFilter } from "./../actions/ui/index";
import StreamerPageHeader from "./../components/streamers/StreamerPageHeader";
import StreamerClipTable from "./../components/streamers/StreamerClipTable";
import StreamerArchiveTable from "./../components/streamers/StreamerArchiveTable";
import { getClips, fetchMoreClips } from "./../reducers/clips/index";
import VideoPlayer from './../components/video/VideoPlayer';
import StreamerVideoArchive from './../components/streamers/StreamerVideoArchive';

class StreamerDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      url: "",
      clipPageIndex: 1,
      gameSearchValue: "",
      titleSearchValue: "",
      activeIndex: 0,
      modalOpen: false
    };
  }

  setClip = (clip) => {
    this.setState({
      active: true,
      url: clip.embedClipURL,
      activeClip: clip,
      modalOpen: true
    });
  };

  componentWillMount() {
    const {
      getClips,
      match,
      fetchMoreClips,
      setAutomaticCheckbox,
      setTimeFilter
    } = this.props;
    setAutomaticCheckbox(false);
    setTimeFilter("week");
    getClips(match.params.id, 0);
  }

  handleScroll = () => {
    this.setState(prevState => ({
      clipPageIndex: prevState.clipPageIndex + 1
    }));
    const { fetchMoreClips, match, ui } = this.props;
    console.log("I will fetch page " + this.state.clipPageIndex);
    fetchMoreClips(
      match.params.id,
      this.state.clipPageIndex,
      this.state.gameSearchValue,
      this.state.titleSearchValue,
      ui.automaticCheckbox,
      ui.time
    );
  };

  gameSearchValueChanged = value => {
    this.setState({
      clipPageIndex: 1,
      gameSearchValue: value
    });
    const { match, getClips, ui } = this.props;
    getClips(
      match.params.id,
      0,
      value,
      this.state.titleSearchValue,
      ui.automaticCheckbox,
      ui.time
    );
  };

  titleSearchValueChanged = value => {
    this.setState({
      clipPageIndex: 1,
      titleSearchValue: value
    });
    const { match, getClips, ui } = this.props;
    getClips(
      match.params.id,
      0,
      this.state.gameSearchValue,
      value,
      ui.automaticCheckbox,
      ui.time
    );
  };

  checkBoxChanged = () => {
    const { match, getClips, ui } = this.props;
    getClips(
      match.params.id,
      0,
      this.state.gameSearchValue,
      this.state.titleSearchValue,
      !ui.automaticCheckbox,
      ui.time
    );
  };

  timeChanged = timeValue => {
    const { match, getClips, ui } = this.props;
    getClips(
      match.params.id,
      0,
      this.state.gameSearchValue,
      this.state.titleSearchValue,
      ui.automaticCheckbox,
      timeValue
    );
  };

  close = () => {
    this.setState({ modalOpen: false });
  };

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { clips, match } = this.props;
    const { activeIndex } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={16}>
            <StreamerPageHeader
              numberOfClips={clips.items && clips.items.length}
            />
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
                        <StreamerClipTable
                          fetching={clips.fetching}
                          clips={clips.items}
                          setClip={this.setClip}
                          handleScroll={this.handleScroll}
                          gameSearchValueChanged={this.gameSearchValueChanged}
                          titleSearchValueChanged={this.titleSearchValueChanged}
                          checkBoxChanged={this.checkBoxChanged}
                          timeChanged={this.timeChanged}
                        />
                      )}
                    </div>
                  )
                },
                {
                  menuItem: {
                    key: "archives",
                    icon: "film",
                    content: "Archives"
                  },
                  render: () => (
                    <StreamerArchiveTable
                      streamerId={match.params.id}
                    />
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
              <VideoPlayer
                active={this.state.active}
                url={this.state.url}
              />
              {this.state.activeClip &&
              this.state.activeClip.archive &&
              this.state.activeClip.archive[0] ? (
                <StreamerVideoArchive
                  archive={this.state.activeClip.archive[0]}
                  creatorName={this.state.activeClip.creatorName}
                  automatic={this.state.activeClip.automatic}
                />
              ) : (
                <Message warning icon>
                  <Icon name="file video outline" />
                  <Message.Content>
                    <Message.Header>No Archive Yet</Message.Header>
                    The archive will be available soon.
                  </Message.Content>
                </Message>
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
    { setAutomaticCheckbox, setTimeFilter, fetchMoreClips, getClips }
  )(StreamerDetailPage),
  loadData: ({ dispatch }, { id }) => {
    return dispatch(getClips(id, 0));
  }
};
