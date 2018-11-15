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
import { setAutomaticCheckbox, setTimeFilter } from "./../actions/ui/index";
import { setClips, requestClips } from "./../actions/clips/index";
import { fetchClips } from "./../reducers/clips/index";
import { setAutomaticCheckboxValue } from "./../reducers/ui/index";

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

  setClip = () => {
    this.setState({
      active: true,
      url: clip.embedClipURL,
      activeClip: clip,
      modalOpen: true
    });
  };

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
    // fetchClips(match.params.id, 0);
  }

  //   handleScroll = () => {
  //     this.setState(prevState => ({
  //       clipPageIndex: prevState.clipPageIndex + 1
  //     }));
  //     const { fetchClips, match, ui } = this.props;
  //     console.log("I will fetch page " + this.state.clipPageIndex);
  //     fetchClips(
  //       match.params.id,
  //       this.state.clipPageIndex,
  //       this.state.gameSearchValue,
  //       this.state.titleSearchValue,
  //       ui.automaticCheckbox,
  //       ui.time
  //     );
  //   };

  //   gameSearchValueChanged = () => {
  //     this.setState({
  //       clipPageIndex: 1,
  //       gameSearchValue: value
  //     });
  //     const { match, setClips, fetchClips, ui } = this.props;
  //     setClips([]);
  //     fetchClips(
  //       match.params.id,
  //       0,
  //       value,
  //       this.state.titleSearchValue,
  //       ui.automaticCheckbox,
  //       ui.time
  //     );
  //   };

  //   titleSearchValueChanged = () => {
  //     this.setState({
  //       clipPageIndex: 1,
  //       titleSearchValue: value
  //     });
  //     const { match, setClips, fetchClips, ui } = this.props;
  //     setClips([]);
  //     fetchClips(
  //       match.params.id,
  //       0,
  //       this.state.gameSearchValue,
  //       value,
  //       ui.automaticCheckbox,
  //       ui.time
  //     );
  //   };

  //   checkBoxChanged = () => {
  //     const { match, setClips, fetchClips, ui } = this.props;
  //     setClips([]);
  //     fetchClips(
  //       match.params.id,
  //       0,
  //       this.state.gameSearchValue,
  //       this.state.titleSearchValue,
  //       !ui.automaticCheckbox,
  //       ui.time
  //     );
  //   };

  //   timeChanged = () => {
  //     const { match, setClips, fetchClips, ui } = this.props;
  //     setClips([]);
  //     fetchClips(
  //       match.params.id,
  //       0,
  //       this.state.gameSearchValue,
  //       this.state.titleSearchValue,
  //       ui.automaticCheckbox,
  //       timeValue
  //     );
  //   };

  //   close = () => {
  //     this.setState({ modalOpen: false });
  //   };

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { clips, match } = this.props;
    const { activeIndex } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={16} />
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
    { setAutomaticCheckbox, setTimeFilter, setClips, fetchClips }
  )(StreamerDetailPage),
  loadData: ({ dispatch }, { id }) => {
    return dispatch(fetchClips(id, 0));
  }
};
