import React, { Component } from "react";
import { Grid, Tab, Modal, Button, Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
// import { fetchClips } from "./../../redux/clips/clipsReducer";
// import StreamerVideoPlayer from "./StreamerVideoPlayer";
// import StreamerClipTable from "./StreamerClipTable";
// import StreamerPageHeader from "./StreamerPageHeader";
// import { setClips } from "./../../redux/clips/clipsActions";
// import StreamerVideoArchive from "./page/StreamerVideoArchive";
// import StreamerArchiveTable from "./page/StreamerArchiveTable";
// import { setAutomaticCheckbox, setTimeFilter } from "../../redux/ui/uiActions";

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

  setClip() {
    this.setState({
      active: true,
      url: clip.embedClipURL,
      activeClip: clip,
      modalOpen: true
    });
  }

  componentWillMount() {
    const {
      fetchClips,
      match,
      setClips,
      setAutomaticCheckbox,
      setTimeFilter
    } = this.props;
    setAutomaticCheckbox(false);
    setTimeFilter("week");
    setClips([]);
    fetchClips(match.params.streamerId, 0);
  }

  handleScroll() {
    this.setState(prevState => ({
      clipPageIndex: prevState.clipPageIndex + 1
    }));
    const { fetchClips, match, ui } = this.props;
    console.log("I will fetch page " + this.state.clipPageIndex);
    fetchClips(
      match.params.streamerId,
      this.state.clipPageIndex,
      this.state.gameSearchValue,
      this.state.titleSearchValue,
      ui.automaticCheckbox,
      ui.time
    );
  }

  gameSearchValueChanged() {
    this.setState({
      clipPageIndex: 1,
      gameSearchValue: value
    });
    const { match, setClips, fetchClips, ui } = this.props;
    setClips([]);
    fetchClips(
      match.params.streamerId,
      0,
      value,
      this.state.titleSearchValue,
      ui.automaticCheckbox,
      ui.time
    );
  }

  titleSearchValueChanged() {
    this.setState({
      clipPageIndex: 1,
      titleSearchValue: value
    });
    const { match, setClips, fetchClips, ui } = this.props;
    setClips([]);
    fetchClips(
      match.params.streamerId,
      0,
      this.state.gameSearchValue,
      value,
      ui.automaticCheckbox,
      ui.time
    );
  }

  checkBoxChanged() {
    const { match, setClips, fetchClips, ui } = this.props;
    setClips([]);
    fetchClips(
      match.params.streamerId,
      0,
      this.state.gameSearchValue,
      this.state.titleSearchValue,
      !ui.automaticCheckbox,
      ui.time
    );
  }

  timeChanged() {
    const { match, setClips, fetchClips, ui } = this.props;
    setClips([]);
    fetchClips(
      match.params.streamerId,
      0,
      this.state.gameSearchValue,
      this.state.titleSearchValue,
      ui.automaticCheckbox,
      timeValue
    );
  }

  close() {
    this.setState({ modalOpen: false });
  }

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { clips, match } = this.props;
    const { activeIndex } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={16}>
            {/* <StreamerPageHeader
              numberOfClips={clips.items && clips.items.length}
            /> */}
            <Tab
              activeIndex={activeIndex}
              onTabChange={this.handleTabChange}
              panes={[
                {
                  menuItem: {
                    key: "clips",
                    icon: "rocket large",
                    content: "Clips"
                  },
                  render: () => (
                    <React.Fragment>
                      {/* {clips && clips.items && (
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
                      )} */}
                    </React.Fragment>
                  )
                },
                {
                  menuItem: {
                    key: "archives",
                    icon: "film large",
                    content: "Archives"
                  },
                  render: () => (
                    <React.Fragment>
                      {/* <StreamerArchiveTable
                        streamerId={match.params.streamerId}
                      /> */}
                    </React.Fragment>
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
              {/* <StreamerVideoPlayer
                active={this.state.active}
                url={this.state.url}
              /> */}
              {this.state.activeClip &&
              this.state.activeClip.archive &&
              this.state.activeClip.archive[0] ? (
                  <div></div>
                // <StreamerVideoArchive
                //   archive={this.state.activeClip.archive[0]}
                //   creatorName={this.state.activeClip.creatorName}
                //   automatic={this.state.activeClip.automatic}
                // />
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
  component: connect()(StreamerDetailPage)
};
