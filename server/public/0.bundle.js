(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=n(0),l=h(a),o=n(28),u=n(36),i=n(409),c=h(n(899)),s=h(n(898)),f=n(408),d=n(266),m=h(n(897)),p=h(n(895));function h(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleScroll=function(){r.scroller&&(r.scroller.scrollHeight-r.scroller.scrollTop===r.scroller.clientHeight&&(r.setState(function(e){return{pageIndex:e.pageIndex+1}}),(0,r.props.fetchMoreStreamers)(r.state.pageIndex,r.state.searchValue)))},r.searchValueChanged=function(e){r.setState({pageIndex:1,searchValue:e});var t=r.props,n=t.getStreamers;(0,t.requestStreamers)(),n(0,e)},r.state={pageIndex:1,searchValue:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillMount",value:function(){(0,this.props.getStreamers)(0)}},{key:"render",value:function(){var t=this,e=this.props.streamers;return l.default.createElement("div",null,l.default.createElement(p.default,null),l.default.createElement(o.Grid,{stackable:!0},l.default.createElement(o.Grid.Column,{width:10},l.default.createElement(o.Segment,{className:"streamer-segment",loading:e.fetching},l.default.createElement(o.Label,{attached:"top",size:"big",className:"colored-label"},l.default.createElement(o.Icon,{name:"user"}),"Streamers"),l.default.createElement("div",{className:"segment-grid-filter"},l.default.createElement(s.default,{searchValueChanged:this.searchValueChanged}),l.default.createElement(o.Divider,{horizontal:!0},"Results"),l.default.createElement("div",{ref:function(e){t.scroller=e},onScroll:this.handleScroll,style:{height:"75vh",overflowY:"auto",overflowX:"hidden",paddingRight:"10px"}},l.default.createElement(o.Grid,{doubling:!0,stackable:!0,columns:4,className:"streamer-grid animated fadeIn"},l.default.createElement(o.Grid.Row,null,e.items&&e.items.map(function(e,t){return e&&l.default.createElement(o.Grid.Column,{width:4,key:t},l.default.createElement(c.default,{key:t,streamer:e,numberOfClips:e.numberOfClips,numberOfArchives:e.numberOfArchives}))}))))))),l.default.createElement(o.Grid.Column,{width:6},l.default.createElement(m.default,null))))}}]),t}();t.default={component:(0,u.connect)(function(e){return{streamers:e.streamers}},{getStreamers:i.getStreamers,fetchMoreStreamers:i.fetchMoreStreamers,requestStreamers:f.requestStreamers})(b),loadData:function(e){var t=e.dispatch;return t((0,i.getStreamers)(0)).then(function(){return t((0,d.getActivity)(0))})}}},895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=n(0),o=(r=l)&&r.__esModule?r:{default:r},u=n(122);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"render",value:function(){return o.default.createElement(u.Helmet,null,o.default.createElement("title",null,"Stream Highlights - Best Clips & Highlights from Twitch.tv"),o.default.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),o.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.default.createElement("meta",{name:"keywords",content:"twitch, clips, highlights, league of legends, lol, fortnite, videos"}),o.default.createElement("meta",{property:"og:title",content:"stream highlights"}),o.default.createElement("meta",{name:"description",content:"Streams Highlights gathers the best clips and highlights from Twitch. We provide unique clips for League of Legends, Fortnite, Counter-Strike and many more."}))}}]),t}();t.default=i},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=n(0),l=c(a),o=n(28),u=c(n(267)),i=n(90);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this;return l.default.createElement(o.Modal,{dimmer:"blurring",closeOnEscape:!0,closeOnDimmerClick:!0,open:this.props.modalOpen,size:"small"},l.default.createElement(o.Modal.Content,null,l.default.createElement(u.default,{url:this.props.url})),l.default.createElement(o.Modal.Actions,null,l.default.createElement(o.Button,{className:"inverted-button",onClick:function(){return e.props.history.push("/streamer/"+e.props.streamerId)}},"Go to Streamer Page"),l.default.createElement(o.Button,{color:"grey",onClick:this.props.close},"Close")))}}]),t}();t.default=(0,i.withRouter)(s)},897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=n(0),l=d(a),o=n(28),u=n(36),i=d(n(121)),c=n(91),s=n(266),f=d(n(896));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleScroll=function(){t.scroller&&(t.scroller.scrollHeight-t.scroller.scrollTop===t.scroller.clientHeight&&(t.setState(function(e){return{pageIndex:e.pageIndex+1}}),(0,t.props.fetchMoreActivity)(t.state.pageIndex)))},t.closeModal=function(){t.setState({modalOpen:!1})},t.state={pageIndex:1,modalOpen:!1,url:"",streamerId:0},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.Component),r(n,[{key:"componentWillMount",value:function(){(0,this.props.getActivity)(0)}},{key:"render",value:function(){var t=this,e=this.props.activity;return l.default.createElement(o.Segment,{loading:e.fetching,className:"activity-segment"},l.default.createElement(o.Label,{attached:"top",size:"big",className:"colored-label"},l.default.createElement(o.Icon,{loading:!0,name:"certificate"}),"Activity Feed"),l.default.createElement(o.Message,{warning:!0},"Those clips are generated automatically by ",l.default.createElement("b",null,"AutoClipper (β)")),l.default.createElement("div",{ref:function(e){t.scroller=e},onScroll:this.handleScroll,style:{height:"85vh",overflowY:"auto"},className:"activity-feed"},l.default.createElement(o.Feed,{style:{marginTop:"20px",padding:"10px"}},e&&e.items&&e.items.map(function(e){return l.default.createElement(o.Feed.Event,{key:e.clipId,onClick:function(){return t.setState({modalOpen:!0,url:e.embedClipURL,streamerId:e.channelId.streamerId})}},l.default.createElement(o.Feed.Label,{image:"https://image.flaticon.com/icons/svg/843/843273.svg"}),l.default.createElement(o.Feed.Content,null,l.default.createElement(o.Feed.Date,{content:l.default.createElement(i.default,{date:e.created_at})}),l.default.createElement(o.Feed.Summary,{content:"AutoClipper created a new clip for "+e.channelId.displayName}),l.default.createElement(o.Feed.Extra,{images:[e.thumbnailURL]}),l.default.createElement(o.Feed.Extra,null,l.default.createElement(o.Label,null,l.default.createElement(o.Flag,{name:(0,c.mapToFlag)(e.language)}),e.language),l.default.createElement(o.Label,null,l.default.createElement(o.Rating,{icon:"star",defaultRating:e.score,maxRating:5,disabled:!0}))),l.default.createElement(o.Feed.Meta,null,l.default.createElement(o.Feed.Like,null,l.default.createElement(o.Icon,{name:"gamepad"}),e.gameId[0]&&e.gameId[0].name))))})),l.default.createElement(f.default,{modalOpen:this.state.modalOpen,url:this.state.url,close:this.closeModal,streamerId:this.state.streamerId})))}}]),n}();t.default=(0,u.connect)(function(e){return{activity:e.activity}},{getActivity:s.getActivity,fetchMoreActivity:s.fetchMoreActivity})(m)},898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=n(0),o=(r=l)&&r.__esModule?r:{default:r},u=n(28);var i=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.timeout=0,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,l.Component),a(n,[{key:"onSearchChange",value:function(e){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.props.searchValueChanged(e)},1e3)}},{key:"render",value:function(){var r=this;return o.default.createElement(u.Menu,{fluid:!0,borderless:!0,size:"large",stackable:!0},o.default.createElement(u.Menu.Item,{header:!0},o.default.createElement(u.Icon,{name:"filter"}),"Filters"),o.default.createElement(u.Menu.Item,null,o.default.createElement(u.Input,{className:"icon",icon:"user",iconPosition:"left",placeholder:"Search A Streamer...",size:"small",onChange:function(e,t){var n=t.value;return r.onSearchChange(n)}})))}}]),n}();t.default=i},899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),l=(r=a)&&r.__esModule?r:{default:r},o=n(28),u=n(90);t.default=function(e){var t=e.streamer,n=e.numberOfClips,r=e.numberOfArchives;return l.default.createElement(o.Segment.Group,{className:"streamer-item"},l.default.createElement(o.Segment,null,l.default.createElement(o.Label,{attached:"top",className:"inverted-color-label"},t.monitored&&l.default.createElement(o.Icon,{name:"circle thin",color:"red"}),t.displayName),l.default.createElement(o.Item.Group,null,l.default.createElement(o.Item,null,l.default.createElement(o.Item.Image,{size:"tiny",src:t.profileImageURL,circular:!0}),l.default.createElement(o.Item.Content,null,l.default.createElement(o.Item.Extra,null,l.default.createElement(o.Icon,{name:"video"})," ",n||"0"," ","clips"),l.default.createElement(o.Item.Extra,null,l.default.createElement(o.Icon,{name:"film"})," ",r||"0"," ","archives"))))),l.default.createElement(o.Segment,{textAlign:"center"},l.default.createElement(o.Button,null,l.default.createElement(u.Link,{to:{pathname:"/streamer/"+t.streamerId}},"Visit"))))}}}]);