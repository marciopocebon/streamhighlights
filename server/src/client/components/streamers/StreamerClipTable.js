import React, { Component } from "react";
import {
  Table,
  Rating,
  Button,
  Segment,
  Label,
  Header,
  Image,
  Divider,
  Icon,
  Flag
} from "semantic-ui-react";
import TimeAgo from "react-timeago";
import { mapToFlag } from "./../../utils/language/languageUtils";
import NoResultsSegment from "./../general/NoResultsSegment";
import StreamerClipFilter from "./StreamerClipFilter";

class StreamerClipTable extends Component {
  handleScroll = () => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.props.handleScroll();
      }
    }
  };

  mapToScore = score => {
    if (score < 2) {
      return (
        <Label>
          <Icon name="lightning" color="green" />
          Moderately Epic
        </Label>
      );
    } else if (score > 2 && score < 4) {
      return (
        <Label>
          <Icon name="lightning" color="yellow" />
          <Icon name="lightning" color="yellow" />
          Very Epic
        </Label>
      );
    } else {
      return (
        <Label>
          <Icon name="lightning" color="red" />
          <Icon name="lightning" color="red" />
          <Icon name="lightning" color="red" />
          OMG!
        </Label>
      );
    }
  };

  render() {
    const { clips, setClip, fetching, checkBoxChanged } = this.props;
    return (
      <Segment loading={fetching}>
        <Label attached="top" size="big" className="colored-label">
          Clips
        </Label>
        <StreamerClipFilter
          gameSearchValueChanged={this.props.gameSearchValueChanged}
          titleSearchValueChanged={this.props.titleSearchValueChanged}
          checkBoxChanged={this.props.checkBoxChanged}
          timeChanged={this.props.timeChanged}
        />
        <Divider horizontal>Results ({clips && clips.length})</Divider>
        <div
          style={{
            height: "50vh",
            overflowY: "auto"
          }}
          ref={scroller => {
            this.scroller = scroller;
          }}
          onScroll={this.handleScroll}
        >
          {clips && clips.length > 0 ? (
            <Table celled padded fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ width: "300px" }}>
                    Stream Title
                  </Table.HeaderCell>

                  <Table.HeaderCell>Game</Table.HeaderCell>
                  <Table.HeaderCell>Language</Table.HeaderCell>
                  <Table.HeaderCell>Score</Table.HeaderCell>
                  <Table.HeaderCell>Views</Table.HeaderCell>
                  <Table.HeaderCell>Created At</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {clips &&
                  clips.map(clip => {
                    return (
                      <Table.Row key={clip.clipId}>
                        <Table.Cell>
                          {clip.title} <br /> by <b>{clip.creatorName}</b>
                        </Table.Cell>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Image
                              src={
                                clip.game &&
                                clip.game.boxArtURL &&
                                clip.game.boxArtURL
                                  .replace("{width}", "300")
                                  .replace("{height}", "300")
                              }
                              rounded
                              size="big"
                            />
                            <Header.Content>
                              <Header.Subheader>
                                {clip.game && clip.game.name}
                              </Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          <Flag name={mapToFlag(clip.language)} />
                          {clip.language}
                        </Table.Cell>
                        <Table.Cell>
                          <Label className="clip-rating">
                            <Rating
                              icon="star"
                              defaultRating={clip.score}
                              maxRating={3}
                              disabled
                            />{" "}
                          </Label>{" "}
                          <br />
                          {this.mapToScore(clip.score)}
                        </Table.Cell>
                        <Table.Cell>
                          <Label size="small">
                            <Icon name="eye" />
                            {clip.viewCount}
                          </Label>
                        </Table.Cell>
                        <Table.Cell>
                          {<TimeAgo date={clip.created_at} />}
                        </Table.Cell>
                        <Table.Cell>
                          <Button
                            size="small"
                            icon
                            labelPosition="left"
                            onClick={() => {
                              setClip(clip);
                            }}
                          >
                            <Icon name="play" />
                            Play
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          ) : (
            <NoResultsSegment />
          )}
        </div>
      </Segment>
    );
  }
}
export default StreamerClipTable;
