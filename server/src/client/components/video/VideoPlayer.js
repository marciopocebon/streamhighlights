import React from "react";
import { Segment, Label, Embed } from "semantic-ui-react";

function VideoPlayer({ active, url }) {
  return (
    <Segment>
      <Label attached="top" size="big" className="colored-label">
        Video Player
      </Label>
      <Embed active={true} icon="play" placeholder="" url={url} />
    </Segment>
  );
}

export default VideoPlayer;
