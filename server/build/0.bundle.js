exports.ids=[0],exports.modules={73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=h(a),o=n(1),u=n(2),i=n(21),c=h(n(78)),s=h(n(77)),f=n(20),d=n(12),m=h(n(76)),p=h(n(74));function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleScroll=function(){n.scroller&&(n.scroller.scrollHeight-n.scroller.scrollTop===n.scroller.clientHeight&&(n.setState(function(e){return{pageIndex:e.pageIndex+1}}),(0,n.props.fetchMoreStreamers)(n.state.pageIndex,n.state.searchValue)))},n.searchValueChanged=function(e){n.setState({pageIndex:1,searchValue:e});var t=n.props,r=t.getStreamers;(0,t.requestStreamers)(),r(0,e)},n.state={pageIndex:1,searchValue:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillMount",value:function(){(0,this.props.getStreamers)(0)}},{key:"render",value:function(){var e=this,t=this.props.streamers;return l.default.createElement("div",null,l.default.createElement(p.default,null),l.default.createElement(o.Grid,{stackable:!0},l.default.createElement(o.Grid.Column,{width:10},l.default.createElement(o.Segment,{className:"streamer-segment",loading:t.fetching},l.default.createElement(o.Label,{attached:"top",size:"big",className:"colored-label"},l.default.createElement(o.Icon,{name:"user"}),"Streamers"),l.default.createElement("div",{className:"segment-grid-filter"},l.default.createElement(s.default,{searchValueChanged:this.searchValueChanged}),l.default.createElement(o.Divider,{horizontal:!0},"Results"),l.default.createElement("div",{ref:function(t){e.scroller=t},onScroll:this.handleScroll,style:{height:"75vh",overflowY:"auto",overflowX:"hidden",paddingRight:"10px"}},l.default.createElement(o.Grid,{doubling:!0,stackable:!0,columns:4,className:"streamer-grid animated fadeIn"},l.default.createElement(o.Grid.Row,null,t.items&&t.items.map(function(e,t){return e&&l.default.createElement(o.Grid.Column,{width:4,key:t},l.default.createElement(c.default,{key:t,streamer:e,numberOfClips:e.numberOfClips,numberOfArchives:e.numberOfArchives}))}))))))),l.default.createElement(o.Grid.Column,{width:6},l.default.createElement(m.default,null))))}}]),t}();t.default={component:(0,u.connect)(function(e){return{streamers:e.streamers}},{getStreamers:i.getStreamers,fetchMoreStreamers:i.fetchMoreStreamers,requestStreamers:f.requestStreamers})(g),loadData:function(e){var t=e.dispatch;return t((0,i.getStreamers)(0)).then(function(){return t((0,d.getActivity)(0))})}}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(5);var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return l.default.createElement(o.Helmet,null,l.default.createElement("title",null,"Stream Highlights - Best Clips & Highlights from Twitch.tv"),l.default.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),l.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.default.createElement("meta",{name:"keywords",content:"twitch, clips, highlights, league of legends, lol, fortnite, videos"}),l.default.createElement("meta",{property:"og:title",content:"stream highlights"}),l.default.createElement("meta",{name:"description",content:"Streams Highlights gathers the best clips and highlights from Twitch. We provide unique clips for League of Legends, Fortnite, Counter-Strike and many more."}))}}]),t}();t.default=u},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=c(a),o=n(1),u=c(n(13)),i=n(3);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this;return l.default.createElement(o.Modal,{dimmer:"blurring",closeOnEscape:!0,closeOnDimmerClick:!0,open:this.props.modalOpen,size:"small"},l.default.createElement(o.Modal.Content,null,l.default.createElement(u.default,{url:this.props.url})),l.default.createElement(o.Modal.Actions,null,l.default.createElement(o.Button,{className:"inverted-button",onClick:function(){return e.props.history.push("/streamer/"+e.props.streamerId)}},"Go to Streamer Page"),l.default.createElement(o.Button,{color:"grey",onClick:this.props.close},"Close")))}}]),t}();t.default=(0,i.withRouter)(s)},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=d(a),o=n(1),u=n(2),i=d(n(7)),c=n(4),s=n(12),f=d(n(75));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleScroll=function(){n.scroller&&(n.scroller.scrollHeight-n.scroller.scrollTop===n.scroller.clientHeight&&(n.setState(function(e){return{pageIndex:e.pageIndex+1}}),(0,n.props.fetchMoreActivity)(n.state.pageIndex)))},n.closeModal=function(){n.setState({modalOpen:!1})},n.state={pageIndex:1,modalOpen:!1,url:"",streamerId:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillMount",value:function(){(0,this.props.getActivity)(0)}},{key:"render",value:function(){var e=this,t=this.props.activity;return l.default.createElement(o.Segment,{loading:t.fetching,className:"activity-segment"},l.default.createElement(o.Label,{attached:"top",size:"big",className:"colored-label"},l.default.createElement(o.Icon,{loading:!0,name:"certificate"}),"Activity Feed"),l.default.createElement(o.Message,{warning:!0},"Those clips are generated automatically by ",l.default.createElement("b",null,"AutoClipper (β)")),l.default.createElement("div",{ref:function(t){e.scroller=t},onScroll:this.handleScroll,style:{height:"85vh",overflowY:"auto"},className:"activity-feed"},l.default.createElement(o.Feed,{style:{marginTop:"20px",padding:"10px"}},t&&t.items&&t.items.map(function(t){return l.default.createElement(o.Feed.Event,{key:t.clipId,onClick:function(){return e.setState({modalOpen:!0,url:t.embedClipURL,streamerId:t.channelId.streamerId})}},l.default.createElement(o.Feed.Label,{image:"https://image.flaticon.com/icons/svg/843/843273.svg"}),l.default.createElement(o.Feed.Content,null,l.default.createElement(o.Feed.Date,{content:l.default.createElement(i.default,{date:t.created_at})}),l.default.createElement(o.Feed.Summary,{content:"AutoClipper created a new clip for "+t.channelId.displayName}),l.default.createElement(o.Feed.Extra,{images:[t.thumbnailURL]}),l.default.createElement(o.Feed.Extra,null,l.default.createElement(o.Label,null,l.default.createElement(o.Flag,{name:(0,c.mapToFlag)(t.language)}),t.language),l.default.createElement(o.Label,null,l.default.createElement(o.Rating,{icon:"star",defaultRating:t.score,maxRating:5,disabled:!0}))),l.default.createElement(o.Feed.Meta,null,l.default.createElement(o.Feed.Like,null,l.default.createElement(o.Icon,{name:"gamepad"}),t.gameId[0]&&t.gameId[0].name))))})),l.default.createElement(f.default,{modalOpen:this.state.modalOpen,url:this.state.url,close:this.closeModal,streamerId:this.state.streamerId})))}}]),t}();t.default=(0,u.connect)(function(e){return{activity:e.activity}},{getActivity:s.getActivity,fetchMoreActivity:s.fetchMoreActivity})(m)},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(1);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"onSearchChange",value:function(e){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.props.searchValueChanged(e)},1e3)}},{key:"render",value:function(){var e=this;return l.default.createElement(o.Menu,{fluid:!0,borderless:!0,size:"large",stackable:!0},l.default.createElement(o.Menu.Item,{header:!0},l.default.createElement(o.Icon,{name:"filter"}),"Filters"),l.default.createElement(o.Menu.Item,null,l.default.createElement(o.Input,{className:"icon",icon:"user",iconPosition:"left",placeholder:"Search A Streamer...",size:"small",onChange:function(t,n){var r=n.value;return e.onSearchChange(r)}})))}}]),t}();t.default=u},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),a=n(1),l=n(3);t.default=function(e){var t=e.streamer,n=e.numberOfClips,o=e.numberOfArchives;return r.default.createElement(a.Segment.Group,{className:"streamer-item"},r.default.createElement(a.Segment,null,r.default.createElement(a.Label,{attached:"top",className:"inverted-color-label"},t.monitored&&r.default.createElement(a.Icon,{name:"circle thin",color:"red"}),t.displayName),r.default.createElement(a.Item.Group,null,r.default.createElement(a.Item,null,r.default.createElement(a.Item.Image,{size:"tiny",src:t.profileImageURL,circular:!0}),r.default.createElement(a.Item.Content,null,r.default.createElement(a.Item.Extra,null,r.default.createElement(a.Icon,{name:"video"})," ",n||"0"," ","clips"),r.default.createElement(a.Item.Extra,null,r.default.createElement(a.Icon,{name:"film"})," ",o||"0"," ","archives"))))),r.default.createElement(a.Segment,{textAlign:"center"},r.default.createElement(a.Button,null,r.default.createElement(l.Link,{to:{pathname:"/streamer/"+t.streamerId}},"Visit"))))}}};