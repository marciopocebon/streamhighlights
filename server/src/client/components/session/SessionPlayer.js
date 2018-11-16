import React from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { Embed } from "semantic-ui-react";
const mapStateToProps = state => ({
  archives: state.archives
});

class SessionPlayer extends React.Component {
  ref = player => {
    if (player) {
      player.player.player.playerID = "react-player";
    }
    this.player = player;
  };

  componentWillMount() {}

  render() {
    const { archives } = this.props;
    return (
      <div>
        <div id="react-player" style={{ width: "100%", height: "50vh" }} />
        <div style={{ display: "none" }}>
          {archives &&
            archives.items &&
            archives.items[0] &&
            archives.items[0].archive && (
              <ReactPlayer
                ref={this.ref}
                url={archives.items[0].archive.url}
                playing={true}
              />
            )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SessionPlayer);
