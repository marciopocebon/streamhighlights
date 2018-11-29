import React, { Component } from "react";
import { Helmet } from "react-helmet";

class StreamersPageHelmet extends Component {
  render() {
    const { paginated, page, streamers } = this.props;
    return (
      <Helmet>
        <title>{`Stream Highlights - Best Clips & Highlights from Twitch.tv`}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="twitch, clips, highlights, league of legends, lol, fortnite, videos"
        />
        <meta property="og:title" content="stream highlights" />
        <meta
          name="description"
          content="Streams Highlights gathers the best clips and highlights from Twitch. We provide unique clips for League of Legends, Fortnite, Counter-Strike and many more."
        />
        {paginated && streamers.items && streamers.items.length == 24 ? (
          <link
            rel="next"
            href={`streamers/page/${parseInt(page) +
              1}`}
          />
        ) : (
          undefined
        )}
        {paginated &&
        streamers.items &&
        streamers.items.length == 24 &&
        parseInt(page) > 0 ? (
          <link
            rel="prev"
            href={`streamers/page/${parseInt(page) -
              1}`}
          />
        ) : (
          undefined
        )}
        {parseInt(page) == -1 ? (
          <link rel="next" href={`streamers/page/0`} />
        ) : (
          undefined
        )}
      </Helmet>
    );
  }
}

export default StreamersPageHelmet;
