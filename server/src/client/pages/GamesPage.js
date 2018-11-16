import React, { Component } from "react";
import { Grid, Segment, Label, Divider, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import GameItem from "../components/games/GameItem";
import { getGames, fetchMoreGames } from "./../reducers/games/index";
import GameGridFilter from "../components/games/GameGridFilter";
import GameActivityFeed from "../components/activity/GameActivityFeed";
import GamesPageHelmet from "../components/seo/GamesPageHelmet";

class GamesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      searchValue: ""
    };
  }

  componentWillMount() {
    const { getGames } = this.props;
    getGames(0);
  }

  handleScroll = () => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }));
        const { fetchMoreGames } = this.props;
        fetchMoreGames(this.state.pageIndex, this.state.searchValue);
      }
    }
  };

  searchValueChanged = value => {
    this.setState({
      pageIndex: 1,
      searchValue: value
    });
    const { getGames } = this.props;
    getGames(0, value);
  };

  render() {
    const { games } = this.props;
    return (
      <div>
        <GamesPageHelmet />
        <Grid>
          <Grid.Column width={10}>
            <Segment className="streamer-segment" loading={games.fetching}>
              <Label attached="top" size="big" className="colored-label">
                <Icon name="user" />
                Games
              </Label>
              <div className="segment-grid-filter">
                <GameGridFilter searchValueChanged={this.searchValueChanged} />
                <Divider horizontal>Results</Divider>
                <div
                  ref={scroller => {
                    this.scroller = scroller;
                  }}
                  onScroll={this.handleScroll}
                  style={{
                    height: "75vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    paddingRight: "10px"
                  }}
                >
                  <Grid
                    stackable
                    columns={4}
                    className="streamer-grid animated fadeIn"
                  >
                    <Grid.Row>
                      {games.items &&
                        games.items.map((game, index) => {
                          return (
                            game && (
                              <Grid.Column width={4} key={index}>
                                <GameItem
                                  key={index}
                                  game={game}
                                  numberOfClips={game.numberOfClips}
                                />
                              </Grid.Column>
                            )
                          );
                        })}
                    </Grid.Row>
                  </Grid>
                </div>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <GameActivityFeed />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ games }) {
  return { games };
}

export default {
  component: connect(
    mapStateToProps,
    { getGames, fetchMoreGames }
  )(GamesPage),
  loadData: ({ dispatch }) => {
    return dispatch(getGames(0));
  }
};
