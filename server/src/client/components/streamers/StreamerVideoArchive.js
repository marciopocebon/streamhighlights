import React, { Component } from "react";
import {
  Segment,
  Label,
  Item,
  Icon,
  Flag,
  Button,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { mapToFlag } from './../../utils/language/languageUtils';

export default class StreamerVideoArchive extends Component {
  render() {
    const { archive, creatorName, automatic } = this.props;
    return (
      <Segment.Group>
        {automatic ? (
          <Message attached="top" info>
            <Icon name="help" />
            Did we miss the action?&nbsp; Jump to the source and replay this
            epic moment.
          </Message>
        ) : (
          <Message attached="top" info>
            This clip was created by <b>{creatorName}</b>
          </Message>
        )}

        <Segment>
          <Label attached="top" size="big" className="colored-label">
            <Icon name="linkify" />
            Linked Archive
          </Label>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src={
                  archive.thumbnailURL
                    ? archive.thumbnailURL
                        .replace("%{width}", "200")
                        .replace("%{height}", "200")
                    : "https://cdn.logojoy.com/wp-content/uploads/2018/07/30093609/twitch9-768x591.png"
                }
              />

              <Item.Content>
                <Item.Header as="a">{archive.title}</Item.Header>
                <Item.Meta>{archive.description}</Item.Meta>
                <Item.Extra>
                  <Icon name="eye" />
                  {archive.viewCount} views
                </Item.Extra>
                <Item.Extra>
                  <Flag name={mapToFlag(archive.language)} />
                  {archive.language}
                </Item.Extra>
                <Item.Extra>Duration : {archive.duration}</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <Button>
            <Link
              to={{
                pathname: `/session/${archive.archiveId}`
              }}
            >
              Jump To Source
            </Link>
          </Button>
        </Segment>
      </Segment.Group>
    );
  }
}
