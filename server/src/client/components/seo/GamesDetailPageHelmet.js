import React, { Component } from "react";
import { Helmet } from "react-helmet";

class StreamerDetailPageHelmet extends Component {
render() {
    const { game } = this.props;
    return (
        <Helmet>
        <title>{`${game} - Best Clips & Highlights`}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={`twitch, clips, highlights, league of legends, lol, fortnite, videos, ${game} `}/>
        <meta property="og:title" content="stream highlights" />
        <meta name="description" content={`Streams Highlights gathers the best clips and highlights from Twitch. Find the best clips and highlights for ${game} now!`} />
    </Helmet>
    );
  }
}

export default StreamerDetailPageHelmet;
