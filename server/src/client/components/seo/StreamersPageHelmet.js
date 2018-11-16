import React, { Component } from "react";
import { Helmet } from "react-helmet";

class StreamersPageHelmet extends Component {
render() {
    return (
        <Helmet>
        <title>{`Stream Highlights - Streamers Clips & Highlights`}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="twitch, clips, highlights, league of legends, lol, fortnite, videos" />
        <meta property="og:title" content="stream highlights" />
        <meta name="description" content="Streams Highlights gathers the best clips and highlights from Twitch. We provide unique clips for League of Legends, Fortnite, Counter-Strike and many more." />
    </Helmet>
    );
  }
}

export default StreamersPageHelmet;
