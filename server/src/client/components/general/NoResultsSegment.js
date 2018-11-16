import React, { Component } from "react";
import { Segment, Item } from "semantic-ui-react";
export default class NoResultsSegment extends Component {
  render() {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              src="https://image.flaticon.com/icons/svg/843/843273.svg"
              size="tiny"
            />
            <Item.Content>
              <Item.Header>
                Oops! No results were found for this streamer.
              </Item.Header>
              <Item.Meta>Better luck checking automatic clips</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}
