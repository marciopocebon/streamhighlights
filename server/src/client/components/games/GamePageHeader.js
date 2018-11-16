import React from "react";
import { Segment, Item } from "semantic-ui-react";
import { connect } from "react-redux";
import GamesDetailPageHelmet from '../seo/GamesDetailPageHelmet'

const mapStateToProps = state => ({
  game: state.ui.selectedGame
});

const GamePageHeader = ({ game, numberOfClips }) => {
  return (
    <div>
      {game && <GamesDetailPageHelmet game={game.name} />}
      <Segment className="bordered-segment">
        {game && (
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src={game.boxArtURL
                  .replace("{width}", "285")
                  .replace("{height}", "380")}
              />
              <Item.Content>
                <Item.Header>{game.name}</Item.Header>
                <Item.Meta>{numberOfClips} clips</Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        )}
      </Segment>
    </div>
  );
};

export default connect(mapStateToProps)(GamePageHeader);
