(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[5,8],{196:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},330:function(e,t,r){"use strict";var n=r(12),a=r.n(n),c=r(196);t.a=function(e){return function(t){return function(r){var n=Object(c.a)(e,r);return React.createElement(t,a()({},r,n))}}}},331:function(e,t){},332:function(e,t,r){"use strict";r.r(t);var n=r(5),a=r.n(n),c=(r(9),r(1)),o=r(3),l=r.n(o),s=r(37),i=r(107),u=r(252);r(331),t.default=Object(u.withProductDataContext)((function(e){var t=e.className,r=e.align,n=Object(i.useInnerBlockLayoutContext)().parentClassName,o=Object(i.useProductDataContext)().product;if(!o.id||!o.on_sale)return null;var u="string"==typeof r?"wc-block-components-product-sale-badge--align-".concat(r):"";return React.createElement("div",{className:l()("wc-block-components-product-sale-badge",t,u,a()({},"".concat(n,"__product-onsale"),n))},React.createElement(s.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))}))},334:function(e,t){},357:function(e,t,r){"use strict";r.r(t);var n=r(330),a=r(12),c=r.n(a),o=r(5),l=r.n(o),s=r(6),i=r.n(s),u=(r(9),r(0)),p=r(1),d=r(3),b=r.n(d),f=r(2),m=r(107),g=r(252),O=r(56),w=r(332);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(334);var v=function(){return React.createElement("img",{src:f.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500})},h=function(e){var t=e.image,r=e.onLoad,n=e.loaded,a=e.showFullSize,o=e.fallbackAlt,l=t||{},s=l.thumbnail,i=l.src,u=l.srcset,p=l.sizes,d=y({alt:l.alt||o,onLoad:r,hidden:!n,src:s},a&&{src:i,srcSet:u,sizes:p});return React.createElement(React.Fragment,null,d.src&&React.createElement("img",c()({"data-testid":"product-image"},d)),!n&&React.createElement(v,null))},k=Object(g.withProductDataContext)((function(e){var t=e.className,r=e.imageSizing,n=void 0===r?"full-size":r,a=e.showProductLink,c=void 0===a||a,o=e.showSaleBadge,s=e.saleBadgeAlign,d=void 0===s?"right":s,f=Object(m.useInnerBlockLayoutContext)().parentClassName,g=Object(m.useProductDataContext)().product,j=Object(u.useState)(!1),k=i()(j,2),E=k[0],P=k[1],R=Object(O.a)().dispatchStoreEvent;if(!g.id)return React.createElement("div",{className:b()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",l()({},"".concat(f,"__product-image"),f))},React.createElement(v,null));var S=!!g.images.length,_=S?g.images[0]:null,D=c?"a":u.Fragment,L=Object(p.sprintf)(
/* translators: %s is referring to the product name */
Object(p.__)("Link to %s","woo-gutenberg-products-block"),g.name),C=y(y({href:g.permalink,rel:"nofollow"},!S&&{"aria-label":L}),{},{onClick:function(){R("product-view-link",{product:g})}});return React.createElement("div",{className:b()(t,"wc-block-components-product-image",l()({},"".concat(f,"__product-image"),f))},React.createElement(D,c&&C,!!o&&React.createElement(w.default,{align:d,product:g}),React.createElement(h,{fallbackAlt:g.name,image:_,onLoad:function(){return P(!0)},loaded:E,showFullSize:"cropped"!==n})))}));t.default=Object(n.a)({showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}})(k)},37:function(e,t,r){"use strict";var n=r(5),a=r.n(n),c=r(0),o=r(3),l=r.n(o);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,a=e.wrapperElement,o=e.wrapperProps,s=void 0===o?{}:o,u=null!=r,p=null!=n;return!u&&p?(t=a||"span",s=i(i({},s),{},{className:l()(s.className,"screen-reader-text")}),React.createElement(t,s,n)):(t=a||c.Fragment,u&&p&&r!==n?React.createElement(t,s,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,s,r))}}}]);