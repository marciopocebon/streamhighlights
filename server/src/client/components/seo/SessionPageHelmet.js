import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SessionPageHelmet extends Component {
render() {
    const { archive } = this.props;
    return (
     <Helmet>
        <title>{`${archive} - Best Clips & Highlights`}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={`twitch, clips, highlights, league of legends, lol, fortnite, videos, ${archive} `}/>
        <meta property="og:title" content="stream highlights" />
        <meta name="description" content={`Streams Highlights gathers the best clips and highlights from Twitch. Find the best clips and highlights for ${archive} now!`} />
    </Helmet>
    );
  }
}

export default SessionPageHelmet;
