(this["webpackJsonpp7-restie"]=this["webpackJsonpp7-restie"]||[]).push([[0],{11:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=a(2),s=a.n(o),i=a(3),u=a(1),m=a(7);var d=function(e){return r.a.createElement("div",{className:"media mb-3"},r.a.createElement("img",{className:"mr-3 bg-light rounded",width:"48",height:"48",src:"https://api.adorable.io/avatars/48/".concat(e.comment.toLowerCase(),"@adorable.png"),alt:"avatar"}),r.a.createElement("div",{className:"media-body p-2 shadow-sm rounded bg-light border"},r.a.createElement("small",{className:"float-right text-muted"},e.stars),r.a.createElement("h6",{className:"mt-0 mb-1 text-muted"},"Note: ",e.stars),e.comment))};var g=function(e){var t=e.ratings,a=Object(n.useState)([]),l=Object(u.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){o(t)}),[t]),c?r.a.createElement("div",{className:"commentList"},r.a.createElement("h5",{className:"text-muted mb-4"},r.a.createElement("span",{className:"badge badge-success"},c.length),"Comment",c.length>0?"s":""),0===c.length?r.a.createElement("div",{className:"alert text-center alert-info"},"Be the first to comment"):null,c.map((function(e,t){return r.a.createElement(d,{key:t,comment:e.comment,stars:e.stars})}))):r.a.createElement("div",null,"Loading")};var p=function(e){var t=e.selectedRestaurant,a=Object(n.useState)("-"),l=Object(u.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],d=i[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),b=v[0],E=v[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{method:"post",onSubmit:function(a){a.preventDefault(),"-"!==c&&""!==m?(E(""),t.ratings.push({stars:c,comment:m}),e.setSelectedRestaurant(t),d("")):E("Veullez selectionner une note et \xe9crire un commentaire")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Selectionnez votre note:"),r.a.createElement("select",{name:"my_html_select_box",onClick:function(e){o(parseInt(e.target.value))},className:"form-control"},r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"1"},"1 etoiles"),r.a.createElement("option",{value:"2"},"2 etoiles"),r.a.createElement("option",{value:"3"},"3 etoiles"),r.a.createElement("option",{value:"4"},"4 etoiles"),r.a.createElement("option",{value:"5"},"5 etoiles"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{onChange:function(e){d(e.target.value)},value:m,className:"form-control",placeholder:"\ud83e\udd14  Votre Commentaire",name:"comment",rows:"5"})),b?r.a.createElement("div",{className:"alert alert-danger"},b):null,r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Comment \u27a4"))),r.a.createElement(g,{ratings:t.ratings}))};var v=function(e){var t=e.selectedRestaurant,a="https://maps.googleapis.com/maps/api/streetview?size=400x400&location="+t.lat+","+t.long+"9&fov=80&heading=70&pitch=0&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs";return r.a.createElement("div",{style:e.panelStyles},r.a.createElement("h3",null,t.restaurantName),r.a.createElement("img",{alt:t.restaurantName,src:a}),r.a.createElement("h6",null,"Adresse:"),r.a.createElement("p",null,t.address),r.a.createElement("h6",null,"Average stars:"),r.a.createElement("p",null,void 0===t.average?"Unavailable":t.average),r.a.createElement("h6",null,"Comments:"),r.a.createElement(p,{setSelectedRestaurant:e.setSelectedRestaurant,selectedRestaurant:t}))},b=a(10);var E=function(e){var t=Object(b.a)(),a=t.register,n=t.handleSubmit,l=t.errors,c=e.show,o=e.closeModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c?"modaleeee":"hideeee"},r.a.createElement("button",{onClick:o},"\xd7"),r.a.createElement("h4",null,"Veuillez ajouter votre restaurant"),r.a.createElement("form",{onSubmit:n((function(t){var a={restaurantName:t.restaurant,address:t.adresse,lat:e.newRestLat,long:e.newRestLng,ratings:[]};e.restaurants.push(a)}))},r.a.createElement("input",{name:"restaurant",ref:a({required:!0}),placeholder:"Nom du restaurant"})," ",l.restaurant&&r.a.createElement("span",null,"This field is required"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"adresse",ref:a({required:!0}),placeholder:"Adresse du restaurant"})," ",l.adresse&&r.a.createElement("span",null,"This field is required"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",onClick:o}))))};var h=Object(m.GoogleApiWrapper)({apiKey:"AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs"})((function(e){var t=this,a=Object(n.useState)({width:"100%",height:"100%"}),l=Object(u.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)({visibility:"hidden"}),i=Object(u.a)(s,2),d=i[0],g=i[1],p=Object(n.useState)(e.restaurants),b=Object(u.a)(p,1)[0],h=Object(n.useState)(e.geoloc),f=Object(u.a)(h,1)[0],j=Object(n.useState)(void 0),O=Object(u.a)(j,2),S=O[0],N=O[1],w=Object(n.useState)(void 0),y=Object(u.a)(w,2),C=y[0],k=y[1],x=null;function R(e){o({width:"70%",height:"100%"}),g({position:"absolute",right:"0px",height:"100%",width:"30%",overflow:"auto"}),k(x[e])}x="-"===e.selectedStars||void 0===e.selectedStars?S:S.filter((function(t){if(t.average>=parseInt(e.selectedStars))return t}));var L=Object(n.useState)(!1),A=Object(u.a)(L,2),z=A[0],M=A[1],I=Object(n.useState)(e.openModal),q=Object(u.a)(I,2),B=q[0],_=q[1],K=Object(n.useState)(),T=Object(u.a)(K,2),V=T[0],P=T[1],Z=Object(n.useState)(),F=Object(u.a)(Z,2),J=F[0],W=F[1];return Object(n.useEffect)((function(){_(e.openModal)}),[e.openModal]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Map,{onClick:function(e,t,a){P(a.latLng.lat()),W(a.latLng.lng()),B&&M(!0)},google:e.google,onReady:function(e,t){var a=e.google,n=new a.maps.places.PlacesService(t);console.log(a,n);var r={location:new a.maps.LatLng(f.lat,f.lng),radius:"500",type:["restaurant"]};n.nearbySearch(r,(function(e){console.log(e),e.forEach((function(e,t){b.push({index:b.length,restaurantName:e.name,address:e.vicinity,lat:e.geometry.location.lat(),long:e.geometry.location.lng(),ratings:[],average:e.rating})})),N(b)}))},zoom:11,style:c,initialCenter:f,disableDefaultUI:!0},void 0!==S?x.map((function(e,a){return r.a.createElement(m.Marker,{key:a,onClick:R.bind(t,a),title:e.restaurantName,name:e.restaurantName,position:{lat:e.lat,lng:e.long}})})):console.log("failed")),r.a.createElement(E,{newRestLat:V,newRestLng:J,closeModal:function(){return M(!1)},show:z,restaurants:b}),void 0!==C?r.a.createElement(v,{panelStyles:d,selectedRestaurant:C,setSelectedRestaurant:k}):console.log("panel erreur"))}));var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({lat:18.4625,lng:-66.1099}),o=Object(u.a)(c,2),m=o[0],d=o[1],g=Object(n.useState)(),p=Object(u.a)(g,2),v=p[0],b=p[1],E=Object(n.useState)(!1),f=Object(u.a)(E,2),j=f[0],O=f[1];return Object(n.useEffect)((function(){function e(e){d({lat:e.coords.latitude,lng:e.coords.longitude})}(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./restaurants.JSON").then((function(e){return e.json()}));case 2:(t=e.sent).map((function(e){var t=e.ratings.length,a=e.ratings.map((function(e){return e.stars})).reduce((function(e,t){return e+t}));e.average=a/t})),l(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),navigator.geolocation?navigator.geolocation.getCurrentPosition(e):console.log("location failed")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light"},r.a.createElement("img",{className:"navbar-brand",src:"./Img/RESTIE_logo.png",alt:"logo",style:{width:"200px"}}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,"Afficher les restaurants comportant "," ",r.a.createElement("select",{className:"btn btn-light",name:"my_html_select_box",onClick:function(e){b(e.target.value)}},r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"1"},"1 etoiles"),r.a.createElement("option",{value:"2"},"2 etoiles"),r.a.createElement("option",{value:"3"},"3 etoiles"),r.a.createElement("option",{value:"4"},"4 etoiles"),r.a.createElement("option",{value:"5"},"5 etoiles")))),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return O(!j)}},"Ajouter un restaurant")," ",!0===j?"puis cliquez sur la carte a l'emplacement du restaurant.":""))),r.a.createElement("div",{className:"navLine"}),r.a.createElement("div",{className:"map-container"},r.a.createElement(h,{geoloc:m,restaurants:a,selectedStars:v,openModal:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.43663a12.chunk.js.map