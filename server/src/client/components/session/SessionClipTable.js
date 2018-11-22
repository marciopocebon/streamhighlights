import React, { Component } from "react";
import {
  Segment,
  Label,
  Table,
  Header,
  Image,
  Rating,
  Button,
  Icon,
  Flag
} from "semantic-ui-react";
import TimeAgo from "react-timeago";
import { connect } from "react-redux";
import { mapToFlag } from "../../utils/language/languageUtils";

const mapStateToProps = state => ({
  archives: state.archives,
  clips: state.clips
});

class SessionClipTable extends Component {
  jumpToSource = (clip, archive) => {
    const timeDifference =
      (new Date(clip.created_at).getTime() -
        new Date(archive.publishedAt).getTime()) /
      1000;
    const { seekTo } = this.props;
    seekTo(timeDifference - 40);
  };

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

  render() {
    const { archives, clips } = this.props;

    return (
      <Segment>
        <Label attached="top" className="colored-label" size="big">
          Clips
        </Label>
        <div
          style={{
            height: "55vh",
            overflowY: "auto"
          }}
          ref={scroller => {
            this.scroller = scroller;
          }}
          onScroll={this.handleScroll}
        >
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell style={{ width: "300px" }}>
                  Stream Title
                </Table.HeaderCell>
                <Table.HeaderCell>Game</Table.HeaderCell>
                <Table.HeaderCell>Language</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
                <Table.HeaderCell>Created At</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {clips.items &&
                clips.items.map(clip => {
                  return (
                    <Table.Row key={clip.clipId}>
                      <Table.Cell
                        className={clip.automatic ? "clip-automatic" : ""}
                      >
                        {clip.title} <br /> by <b>{clip.creatorName}</b>
                      </Table.Cell>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image
                            src={
                              clip.game &&
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
                        <Label>
                          <Rating
                            icon="star"
                            defaultRating={clip.score}
                            maxRating={3}
                            disabled
                          />{" "}
                        </Label>
                      </Table.Cell>
                      <Table.Cell>
                        {<TimeAgo date={clip.created_at} />}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          icon
                          labelPosition="left"
                          onClick={() => {
                            this.jumpToSource(clip, archives.items[0].archive);
                          }}
                        >
                          <Icon name="play" />
                          Go
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </div>
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(SessionClipTable);
