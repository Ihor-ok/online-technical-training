(self.webpackChunkonline_technical_training=self.webpackChunkonline_technical_training||[]).push([[125],{1801:function(e,n,t){var o,r=t(2122).default,u=t(6690).default,a=t(9728).default,l=t(6115).default,i=t(1655).default,c=t(6389).default,s=t(4704).default,f=Object.create,p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,h=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,v=function(e,n,t,o){if(n&&"object"===typeof n||"function"===typeof n){var r,u=s(y(n));try{var a=function(){var u=r.value;m.call(e,u)||u===t||p(e,u,{get:function(){return n[u]},enumerable:!(o=d(n,u))||o.enumerable})};for(u.s();!(r=u.n()).done;)a()}catch(l){u.e(l)}finally{u.f()}}return e},b=function(e,n,t){return function(e,n,t){n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},P={};!function(e,n){for(var t in n)p(e,t,{get:n[t],enumerable:!0})}(P,{default:function(){return w}}),e.exports=(o=P,v(p({},"__esModule",{value:!0}),o));var g=function(e,n,t){return t=null!=e?f(h(e)):{},v(!n&&e&&e.__esModule?t:p(t,"default",{value:e,enumerable:!0}),e)}(t(2791)),k=t(135),O=t(365),w=function(e){"use strict";i(t,e);var n=c(t);function t(){var e;return u(this,t),e=n.apply(this,arguments),b(l(e),"callPlayer",k.callPlayer),b(l(e),"duration",null),b(l(e),"currentTime",null),b(l(e),"fractionLoaded",null),b(l(e),"mute",(function(){e.setVolume(0)})),b(l(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(l(e),"ref",(function(n){e.iframe=n})),e}return a(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,n){var t=this;(0,k.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(o){if(t.iframe){var u=o.Widget.Events,a=u.PLAY,l=u.PLAY_PROGRESS,i=u.PAUSE,c=u.FINISH,s=u.ERROR;n||(t.player=o.Widget(t.iframe),t.player.bind(a,t.props.onPlay),t.player.bind(i,(function(){t.duration-t.currentTime<.05||t.props.onPause()})),t.player.bind(l,(function(e){t.currentTime=e.currentPosition/1e3,t.fractionLoaded=e.loadedProgress})),t.player.bind(c,(function(){return t.props.onEnded()})),t.player.bind(s,(function(e){return t.props.onError(e)}))),t.player.load(e,r(r({},t.props.config.options),{},{callback:function(){t.player.getDuration((function(e){t.duration=e/1e3,t.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return g.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}]),t}(g.Component);b(w,"displayName","SoundCloud"),b(w,"canPlay",O.canPlay.soundcloud),b(w,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.447c6e2d.chunk.js.map