import React from "react";
import { Segment, Item, Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import StreamerDetailPageHelmet from "../seo/StreamerDetailPageHelmet";

const mapStateToProps = state => ({
  streamer: state.ui.selectedStreamer
});

const StreamerPageHeader = ({ streamer, numberOfClips }) => {
  return (
    <div>
      {streamer && <StreamerDetailPageHelmet streamer={streamer.displayName} />}
      <Segment className="bordered-segment">
        {streamer && (
          <Item.Group>
            <Item>
              <Item.Image size="tiny" src={streamer.profileImageURL} />
              <Item.Content>
                <Item.Header>{streamer.displayName}</Item.Header>
                <Item.Meta>
                  {streamer.description
                    ? streamer.description
                    : "Apparently, this streamer prefers to keep an air of mystery about them"}
                </Item.Meta>
                <Item.Meta>
                  {streamer.monitored ? (
                    <Label>
                      <Icon
                        name="circle thin"
                        color="red"
                        style={{ marginRight: "10px" }}
                      />
                      Live
                    </Label>
                  ) : (
                    <Label>
                      <Icon
                        name="circle thin"
                        color="grey"
                        style={{ marginRight: "10px" }}
                      />
                      Disconnected
                    </Label>
                  )}
                </Item.Meta>
                <Item.Meta>
                  <Label>
                    <Icon
                      name="twitch"
                      color="violet"
                      style={{ marginRight: "10px" }}
                    />
                    {streamer.broadcasterType}
                  </Label>
                </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        )}
      </Segment>
    </div>
  );
};

export default connect(mapStateToProps)(StreamerPageHeader);
