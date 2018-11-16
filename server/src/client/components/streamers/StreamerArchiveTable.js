import React, { Component } from "react";
import {
  Table,
  Segment,
  Label,
  Divider,
  Button,
  Icon,
  Flag
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { connect } from "react-redux";
import { getArchiveByStreamerId } from "../../reducers/archives";
import { fetchMoreArchiveByStreamer } from "./../../reducers/archives/index";
import { mapToFlag } from "./../../utils/language/languageUtils";

const mapDispatchToProps = dispatch => ({
  getArchiveByStreamerId: (streamerId, pageIndex) =>
    dispatch(getArchiveByStreamerId(streamerId, pageIndex)),
  fetchMoreArchiveByStreamer: (streamerId, pageIndex) =>
    dispatch(fetchMoreArchiveByStreamer(streamerId, pageIndex))
});

const mapStateToProps = state => ({
  archives: state.archives
});

class StreamerArchiveTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1
    };
  }

  componentWillMount() {
    const { getArchiveByStreamerId, streamerId } = this.props;
    getArchiveByStreamerId(streamerId, 0);
  }

  handleScroll = () => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({
          pageIndex: prevState.pageIndex + 1
        }));
        const { fetchMoreArchiveByStreamer, streamerId } = this.props;
        fetchMoreArchiveByStreamer(streamerId, this.state.pageIndex);
      }
    }
  };

  render() {
    const { archives } = this.props;
    return (
      <Segment loading={archives.fetching}>
        <Label attached="top" size="big" className="colored-label">
          Archives
        </Label>
        <Divider horizontal>Results</Divider>
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
                  Archive Title
                </Table.HeaderCell>
                <Table.HeaderCell>View Count</Table.HeaderCell>
                <Table.HeaderCell>Language</Table.HeaderCell>
                <Table.HeaderCell>Published</Table.HeaderCell>
                <Table.HeaderCell>Number Of Clips</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {archives.items &&
                archives.items.map(archive => {
                  return (
                    <Table.Row>
                      <Table.Cell>{archive.title}</Table.Cell>
                      <Table.Cell>
                        <Icon name="eye" />
                        {archive.viewCount}
                      </Table.Cell>
                      <Table.Cell>
                        <Flag name={mapToFlag(archive.language)} />
                        {archive.language}
                      </Table.Cell>
                      <Table.Cell>
                        <TimeAgo date={archive.publishedAt} />
                      </Table.Cell>
                      <Table.Cell>
                        <Icon name="film" />
                        {archive.numberOfClips}
                      </Table.Cell>
                      <Table.Cell>
                        <Button>
                          <Link
                            to={{
                              pathname: `/session/${archive.archiveId}`
                            }}
                          >
                            Jump To Source
                          </Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamerArchiveTable);
