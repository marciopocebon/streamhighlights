import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import VideoPlayer from "./../video/VideoPlayer";
import { withRouter } from "react-router-dom";

class ActivityModal extends Component {
  render() {
    return (
      <Modal
        dimmer="blurring"
        closeOnEscape={true}
        closeOnDimmerClick={true}
        open={this.props.modalOpen}
        size="small"
      >
        <Modal.Content>
          <VideoPlayer url={this.props.url} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            className="inverted-button"
            onClick={() =>
              this.props.history.push(`/streamer/${this.props.streamerId}`)
            }
          >
            Go to Streamer Page
          </Button>
          <Button color="grey" onClick={this.props.close}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withRouter(ActivityModal);
