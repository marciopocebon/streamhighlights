import React from "react";
import { Segment, Item, Button, Label, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const GameItem = ({ game, numberOfClips }) => {
  return (
    <Segment.Group className="streamer-item">
      <Segment>
        <Label attached="top" className="inverted-color-label">
          {game.name}
        </Label>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src={game.boxArtURL
                .replace("{width}", "285")
                .replace("{height}", "380")}
            />
            <Item.Content>
              <Item.Extra>
                <Icon name="video" /> {numberOfClips} clips
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment textAlign="center">
        <Button
          as={Link}
          to={{ pathname: `/game/${game.gameId}` }}
          content="Visit"
        />
      </Segment>
    </Segment.Group>
  );
};

export default GameItem;
