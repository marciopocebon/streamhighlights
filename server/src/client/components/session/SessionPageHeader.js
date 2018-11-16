import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Item, Flag } from "semantic-ui-react";
import { mapToFlag } from "./../../utils/language/languageUtils";

const mapStateToProps = state => ({
  archives: state.archives,
  clips: state.clips
});

class SessionPageHeader extends Component {
  render() {
    const { archives } = this.props;
    return (
      <Segment className="bordered-segment">
        {archives && archives.items[0] && archives.items[0].archive && (
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src={
                  archives.items[0].archive.thumbnailURL
                    ? archives.items[0].archive.thumbnailURL
                        .replace("%{width}", "600")
                        .replace("%{height}", "600")
                    : "https://cdn.logojoy.com/wp-content/uploads/2018/07/30093609/twitch9-768x591.png"
                }
              />
              <Item.Content>
                <Item.Header>{archives.items[0].archive.title}</Item.Header>
                <Item.Meta>
                  Duration : {archives.items[0].archive.duration}
                </Item.Meta>
                <Item.Meta>
                  Language :{" "}
                  <Flag name={mapToFlag(archives.items[0].archive.language)} />
                </Item.Meta>
                <Item.Meta>
                  Views : {archives.items[0].archive.viewCount}
                </Item.Meta>
                <Item.Meta>
                  Direct Link :{" "}
                  <a
                    href={archives.items[0].archive.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {archives.items[0].archive.url}
                  </a>
                </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        )}
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(SessionPageHeader);
