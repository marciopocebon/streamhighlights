import React from "react";
import { Segment, Item, Button, Label, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const StreamersItem = ({ streamer, numberOfClips, numberOfArchives }) => {
  return (
    <Segment.Group className="streamer-item">
      <Segment>
        <Label attached="top" className="inverted-color-label">
          {streamer.monitored && <Icon name="circle thin" color="red" />}
          {streamer.displayName}
        </Label>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={streamer.profileImageURL} circular />
            <Item.Content>
              <Item.Extra>
                <Icon name="video" /> {numberOfClips ? numberOfClips : "0"}{" "}
                clips
              </Item.Extra>
              <Item.Extra>
                <Icon name="film" /> {numberOfArchives ? numberOfArchives : "0"}{" "}
                archives
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment textAlign="center">
        <Button
          as={Link}
          to={{ pathname: `/streamer/${streamer.streamerId}` }}
          content="Visit"
        />
      </Segment>
    </Segment.Group>
  );
};

export default StreamersItem;
