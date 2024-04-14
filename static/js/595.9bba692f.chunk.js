"use strict";(self.webpackChunkonline_technical_training=self.webpackChunkonline_technical_training||[]).push([[595],{3145:function(e,n,i){i.r(n),i.d(n,{default:function(){return te}});var r=i(2791),a=i(3168),t=i(9439),o=i(3366),c=i(7462),s=i(3733),l=i(838),d=i(6642),u=i(2114),p=i(5051),v=i(7504),f=i(2054),m=i(7637);function h(e){return(0,m.d6)("MuiCard",e)}(0,m.sI)("MuiCard",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);var g=i(9052),x=i(5714),b=i(184),y=["className","color","component","invertedColors","size","variant","children","orientation","slots","slotProps"],Z=(0,f.Z)("div")((function(e){var n,i=e.theme,r=e.ownerState,a=(0,g.V)({theme:i,ownerState:r},["p","padding","borderRadius"]),t=a.p,o=a.padding,s=a.borderRadius;return[(0,c.Z)({"--Icon-color":"neutral"!==r.color||"solid"===r.variant?"currentColor":i.vars.palette.text.icon,"--Card-childRadius":"max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))","--AspectRatio-radius":"var(--Card-childRadius)","--unstable_actionMargin":"calc(-1 * var(--variant-borderWidth, 0px))","--unstable_actionRadius":"var(--Card-radius)","--CardCover-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--CardOverflow-offset":"calc(-1 * var(--Card-padding))","--CardOverflow-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--Divider-inset":"calc(-1 * var(--Card-padding))"},"sm"===r.size&&{"--Card-radius":i.vars.radius.sm,"--Card-padding":"0.625rem",gap:"0.5rem"},"md"===r.size&&{"--Card-radius":i.vars.radius.md,"--Card-padding":"1rem",gap:"0.75rem 1rem"},"lg"===r.size&&{"--Card-radius":i.vars.radius.lg,"--Card-padding":"1.5rem",gap:"1rem 1.5rem"},{padding:"var(--Card-padding)",borderRadius:"var(--Card-radius)",backgroundColor:i.vars.palette.background.surface,position:"relative",display:"flex",flexDirection:"horizontal"===r.orientation?"row":"column"},i.typography["body-".concat(r.size)],"solid"===r.variant&&r.color&&r.invertedColors&&(0,v.Qr)(r.color)(i),"soft"===r.variant&&r.color&&r.invertedColors&&(0,v.Ev)(r.color)(i),null==(n=i.variants[r.variant])?void 0:n[r.color]),void 0!==t&&{"--Card-padding":t},void 0!==o&&{"--Card-padding":o},void 0!==s&&{"--Card-radius":s}]})),w=(0,f.Z)(Z,{name:"JoyCard",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),j=r.forwardRef((function(e,n){var i=(0,p.Z)({props:e,name:"JoyCard"}),a=i.className,v=i.color,f=void 0===v?"neutral":v,m=i.component,g=void 0===m?"div":m,Z=i.invertedColors,j=void 0!==Z&&Z,C=i.size,S=void 0===C?"md":C,k=i.variant,P=void 0===k?"outlined":k,E=i.children,O=i.orientation,R=void 0===O?"vertical":O,z=i.slots,G=void 0===z?{}:z,_=i.slotProps,A=void 0===_?{}:_,N=(0,o.Z)(i,y),q=(0,c.Z)({},i,{color:f,component:g,orientation:R,size:S,variant:P,invertedColors:j}),T=function(e){var n=e.size,i=e.variant,r=e.color,a={root:["root",e.orientation,i&&"variant".concat((0,d.Z)(i)),r&&"color".concat((0,d.Z)(r)),n&&"size".concat((0,d.Z)(n))]};return(0,l.Z)(a,h,{})}(q),W=(0,c.Z)({},N,{component:g,slots:G,slotProps:A}),M=(0,x.Z)("root",{ref:n,className:(0,s.Z)(T.root,a),elementType:w,externalForwardedProps:W,ownerState:q}),D=(0,t.Z)(M,2),H=D[0],V=D[1];return(0,b.jsx)(H,(0,c.Z)({},V,{children:r.Children.map(E,(function(e,n){if(!r.isValidElement(e))return e;var i={};if((0,u.Z)(e,["Divider"])){i.inset="inset"in e.props?e.props.inset:"context";var a="vertical"===R?"horizontal":"vertical";i.orientation="orientation"in e.props?e.props.orientation:a}return 0===n&&(i["data-first-child"]=""),n===r.Children.count(E)-1&&(i["data-last-child"]=""),r.cloneElement(e,i)}))}))})),C=j,S=(0,i(2387).Z)({createStyledComponent:(0,f.Z)("div",{name:"JoyStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,p.Z)({props:e,name:"JoyStack"})}}),k=i(3433),P=i(4657),E=i(3457),O=i(7078),R=i(418),z=i(8519),G=i(2173),_=i(4942),A=function(e,n,i){var r,a,t=e.keys[0];if(Array.isArray(n))n.forEach((function(n,r){i((function(n,i){r<=e.keys.length-1&&(0===r?Object.assign(n,i):n[e.up(e.keys[r])]=i)}),n)}));else if(n&&"object"===typeof n){(Object.keys(n).length>e.keys.length?e.keys:(r=e.keys,a=Object.keys(n),r.filter((function(e){return a.includes(e)})))).forEach((function(r){if(-1!==e.keys.indexOf(r)){var a=n[r];void 0!==a&&i((function(n,i){t===r?Object.assign(n,i):n[e.up(r)]=i}),a)}}))}else"number"!==typeof n&&"string"!==typeof n||i((function(e,n){Object.assign(e,n)}),n)};function N(e){return e?"Level".concat(e):""}function q(e){return e.unstable_level>0&&e.container}function T(e){return function(n){return"var(--Grid-".concat(n,"Spacing").concat(N(e.unstable_level),")")}}function W(e){return function(n){return 0===e.unstable_level?"var(--Grid-".concat(n,"Spacing)"):"var(--Grid-".concat(n,"Spacing").concat(N(e.unstable_level-1),")")}}function M(e){return 0===e.unstable_level?"var(--Grid-columns)":"var(--Grid-columns".concat(N(e.unstable_level-1),")")}var D=function(e){var n=e.theme,i=e.ownerState,r=T(i),a={};return A(n.breakpoints,i.gridSize,(function(e,n){var t={};!0===n&&(t={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===n&&(t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof n&&(t={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(n," / ").concat(M(i)).concat(q(i)?" + ".concat(r("column")):"",")")}),e(a,t)})),a},H=function(e){var n=e.theme,i=e.ownerState,r={};return A(n.breakpoints,i.gridOffset,(function(e,n){var a={};"auto"===n&&(a={marginLeft:"auto"}),"number"===typeof n&&(a={marginLeft:0===n?"0px":"calc(100% * ".concat(n," / ").concat(M(i),")")}),e(r,a)})),r},V=function(e){var n=e.theme,i=e.ownerState;if(!i.container)return{};var r=q(i)?(0,_.Z)({},"--Grid-columns".concat(N(i.unstable_level)),M(i)):{"--Grid-columns":12};return A(n.breakpoints,i.columns,(function(e,n){e(r,(0,_.Z)({},"--Grid-columns".concat(N(i.unstable_level)),n))})),r},I=function(e){var n=e.theme,i=e.ownerState;if(!i.container)return{};var r=W(i),a=q(i)?(0,_.Z)({},"--Grid-rowSpacing".concat(N(i.unstable_level)),r("row")):{};return A(n.breakpoints,i.rowSpacing,(function(e,r){var t;e(a,(0,_.Z)({},"--Grid-rowSpacing".concat(N(i.unstable_level)),"string"===typeof r?r:null==(t=n.spacing)?void 0:t.call(n,r)))})),a},J=function(e){var n=e.theme,i=e.ownerState;if(!i.container)return{};var r=W(i),a=q(i)?(0,_.Z)({},"--Grid-columnSpacing".concat(N(i.unstable_level)),r("column")):{};return A(n.breakpoints,i.columnSpacing,(function(e,r){var t;e(a,(0,_.Z)({},"--Grid-columnSpacing".concat(N(i.unstable_level)),"string"===typeof r?r:null==(t=n.spacing)?void 0:t.call(n,r)))})),a},B=function(e){var n=e.theme,i=e.ownerState;if(!i.container)return{};var r={};return A(n.breakpoints,i.direction,(function(e,n){e(r,{flexDirection:n})})),r},L=function(e){var n=e.ownerState,i=T(n),r=W(n);return(0,c.Z)({minWidth:0,boxSizing:"border-box"},n.container&&(0,c.Z)({display:"flex",flexWrap:"wrap"},n.wrap&&"wrap"!==n.wrap&&{flexWrap:n.wrap},{margin:"calc(".concat(i("row")," / -2) calc(").concat(i("column")," / -2)")},n.disableEqualOverflow&&{margin:"calc(".concat(i("row")," * -1) 0px 0px calc(").concat(i("column")," * -1)")}),(!n.container||q(n))&&(0,c.Z)({padding:"calc(".concat(r("row")," / 2) calc(").concat(r("column")," / 2)")},(n.disableEqualOverflow||n.parentDisableEqualOverflow)&&{padding:"".concat(r("row")," 0px 0px ").concat(r("column"))}))},F=function(e){var n=[];return Object.entries(e).forEach((function(e){var i=(0,t.Z)(e,2),r=i[0],a=i[1];!1!==a&&void 0!==a&&n.push("grid-".concat(r,"-").concat(String(a)))})),n},Q=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function i(e){return void 0!==e&&("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e&&e>0)}if(i(e))return["spacing-".concat(n,"-").concat(String(e))];if("object"===typeof e&&!Array.isArray(e)){var r=[];return Object.entries(e).forEach((function(e){var n=(0,t.Z)(e,2),a=n[0],o=n[1];i(o)&&r.push("spacing-".concat(a,"-").concat(String(o)))})),r}return[]},K=function(e){return void 0===e?[]:"object"===typeof e?Object.entries(e).map((function(e){var n=(0,t.Z)(e,2),i=n[0],r=n[1];return"direction-".concat(i,"-").concat(r)})):["direction-xs-".concat(String(e))]},U=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],X=(0,G.Z)(),Y=(0,E.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){return n.root}});function $(e){return(0,O.Z)({props:e,name:"MuiGrid",defaultTheme:X})}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,i=void 0===n?Y:n,a=e.useThemeProps,d=void 0===a?$:a,p=e.componentName,v=void 0===p?"MuiGrid":p,f=r.createContext(void 0),m=function(e,n){var i=e.container,r=e.direction,a=e.spacing,t=e.wrap,o=e.gridSize,c={root:["root",i&&"container","wrap"!==t&&"wrap-xs-".concat(String(t))].concat((0,k.Z)(K(r)),(0,k.Z)(F(o)),(0,k.Z)(i?Q(a,n.breakpoints.keys[0]):[]))};return(0,l.Z)(c,(function(e){return(0,P.ZP)(v,e)}),{})},h=i(V,J,I,D,B,L,H),g=r.forwardRef((function(e,n){var i,a,l,p,v,g,x,y,Z=(0,R.Z)(),w=d(e),j=(0,z.Z)(w),C=r.useContext(f),S=j.className,k=j.children,P=j.columns,E=void 0===P?12:P,O=j.container,G=void 0!==O&&O,_=j.component,A=void 0===_?"div":_,N=j.direction,q=void 0===N?"row":N,T=j.wrap,W=void 0===T?"wrap":T,M=j.spacing,D=void 0===M?0:M,H=j.rowSpacing,V=void 0===H?D:H,I=j.columnSpacing,J=void 0===I?D:I,B=j.disableEqualOverflow,L=j.unstable_level,F=void 0===L?0:L,Q=(0,o.Z)(j,U),K=B;F&&void 0!==B&&(K=e.disableEqualOverflow);var X={},Y={},$={};Object.entries(Q).forEach((function(e){var n=(0,t.Z)(e,2),i=n[0],r=n[1];void 0!==Z.breakpoints.values[i]?X[i]=r:void 0!==Z.breakpoints.values[i.replace("Offset","")]?Y[i.replace("Offset","")]=r:$[i]=r}));var ee=null!=(i=e.columns)?i:F?void 0:E,ne=null!=(a=e.spacing)?a:F?void 0:D,ie=null!=(l=null!=(p=e.rowSpacing)?p:e.spacing)?l:F?void 0:V,re=null!=(v=null!=(g=e.columnSpacing)?g:e.spacing)?v:F?void 0:J,ae=(0,c.Z)({},j,{level:F,columns:ee,container:G,direction:q,wrap:W,spacing:ne,rowSpacing:ie,columnSpacing:re,gridSize:X,gridOffset:Y,disableEqualOverflow:null!=(x=null!=(y=K)?y:C)&&x,parentDisableEqualOverflow:C}),te=m(ae,Z),oe=(0,b.jsx)(h,(0,c.Z)({ref:n,as:A,ownerState:ae,className:(0,s.Z)(te.root,S)},$,{children:r.Children.map(k,(function(e){var n;return r.isValidElement(e)&&(0,u.Z)(e,["Grid"])?r.cloneElement(e,{unstable_level:null!=(n=e.props.unstable_level)?n:F+1}):e}))}));return void 0!==K&&K!==(null!=C&&C)&&(oe=(0,b.jsx)(f.Provider,{value:K,children:oe})),oe}));return g.muiName="Grid",g}({createStyledComponent:(0,f.Z)("div",{name:"JoyGrid",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,p.Z)({props:e,name:"JoyGrid"})}}),ne=ee,ie=i.p+"static/media/backgroundImageApp.a083c8a02182d1b93f61.jpg",re=i(6647),ae=i(1351);function te(){return(0,b.jsxs)("div",{style:{backgroundImage:"url(".concat(ie,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",paddingTop:"1px"},children:[(0,b.jsx)(a.ZP,{level:"h1",sx:{textAlign:"center",fontSize:"2.5rem",fontWeight:"bold",marginTop:"50px",marginBottom:"30px",color:"#fff"},children:"Training for aircraft maintenance personnel"}),(0,b.jsx)(S,{spacing:2,sx:{maxWidth:"1100px",margin:"0 auto",padding:"0 20px"},children:(0,b.jsxs)(ne,{container:!0,rowSpacing:2,columnSpacing:{xs:2,sm:2,md:2},sx:{width:"100%"},xs:12,md:12,children:[(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Effective maintenance"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Effective maintenance of aviation equipment is crucial for ensuring the safety and reliability of air travel. The significance of adequately trained personnel cannot be overstated in this regard. Here, we delve into the importance of preparing personnel for performing maintenance tasks on aircraft and helicopters."," "]})]})})})}),(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Safety"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Safety: Safety is paramount in aviation. Properly trained personnel are equipped with the knowledge and skills to identify and rectify potential safety hazards during maintenance procedures. By adhering to rigorous training standards, technicians can minimize the risk of accidents and ensure the airworthiness of aircraft and helicopters."," "]})]})})})}),(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Reliability"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Reliability: Regular maintenance is essential for maintaining the reliability of aviation equipment. Trained personnel are proficient in conducting routine inspections, troubleshooting issues, and performing necessary repairs promptly. Their expertise contributes to minimizing downtime and maximizing the operational efficiency of aircraft and helicopters."," "]})]})})})}),(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Compliance"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Compliance: Aviation maintenance is governed by strict regulatory standards to ensure compliance with industry requirements. Personnel training programs incorporate comprehensive instruction on relevant regulations, guidelines, and procedures. Compliance with these standards not only upholds safety and reliability but also mitigates the risk of regulatory penalties and sanctions."," "]})]})})})}),(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Skill Enhancement"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Skill Enhancement: Continuous training programs enable personnel to enhance their skills and stay abreast of advancements in aviation technology. As aircraft and helicopter systems evolve, technicians must adapt to new methodologies, tools, and technologies. Ongoing education ensures that personnel remain competent and proficient in their roles, capable of addressing emerging challenges effectively."," "]})]})})})}),(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Emergency Preparedness"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Emergency Preparedness: In critical situations, such as in-flight emergencies or unexpected malfunctions, well-trained personnel are better equipped to respond promptly and effectively. Training programs include simulated scenarios and emergency drills to prepare technicians for handling high-pressure situations with composure and competence. This preparedness is instrumental in safeguarding passengers, crew, and assets in the event of unforeseen circumstances."," "]})]})})})}),(0,b.jsx)(ne,{xs:12,sm:6,md:6,children:(0,b.jsx)(ae.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,b.jsx)(re.Z,{children:(0,b.jsxs)(C,{sx:{width:"500px",height:"200px"},children:[(0,b.jsxs)(a.ZP,{level:"title-lg",children:["Career Development"," "]}),(0,b.jsxs)(a.ZP,{level:"body-md",children:["Career Development: Investing in personnel training demonstrates a commitment to employee development and career advancement. Qualified technicians are more likely to feel valued and motivated, leading to higher job satisfaction and retention rates. Additionally, comprehensive training programs provide opportunities for professional growth and specialization within the aviation maintenance field."," "]})]})})})})]})})]})}},6647:function(e,n,i){i.d(n,{Z:function(){return y}});var r=i(4942),a=i(7462),t=i(3366),o=i(2791),c=i(3733),s=i(838),l=i(1402),d=i(6934),u=i(9703),p=i(4657);function v(e){return(0,p.ZP)("MuiCardActionArea",e)}var f=(0,u.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),m=i(8363),h=i(184),g=["children","className","focusVisibleClassName"],x=(0,d.ZP)(m.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,i=e.theme;return n={display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%"},(0,r.Z)(n,"&:hover .".concat(f.focusHighlight),{opacity:(i.vars||i).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(n,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:(i.vars||i).palette.action.focusOpacity}),n})),b=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,n){return n.focusHighlight}})((function(e){var n=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:n.transitions.create("opacity",{duration:n.transitions.duration.short})}})),y=o.forwardRef((function(e,n){var i=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=i.children,o=i.className,d=i.focusVisibleClassName,u=(0,t.Z)(i,g),p=i,f=function(e){var n=e.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},v,n)}(p);return(0,h.jsxs)(x,(0,a.Z)({className:(0,c.Z)(f.root,o),focusVisibleClassName:(0,c.Z)(d,f.focusVisible),ref:n,ownerState:p},u,{children:[r,(0,h.jsx)(b,{className:f.focusHighlight,ownerState:p})]}))}))}}]);
//# sourceMappingURL=595.9bba692f.chunk.js.map