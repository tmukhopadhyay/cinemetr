webpackJsonp([1],{"+02k":function(t,s,a){"use strict";function e(t){a("tpoI")}var i=a("Kzkt"),n=a("WqOr"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-f2d7accc",null);s.a=o.exports},"+MvJ":function(t,s){},"+xB/":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.data.length?a("section",{staticClass:"segment",class:{background:t.background}},[a("h3",{staticClass:"section-title"},[t._v(t._s(t.title))]),t._v(" "),a("h3",{staticClass:"site-width section-subtitle"},[t._v("\n        "+t._s(t.subtitle)+" "),a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("ul",{staticClass:"clearfix site-width cards"},t._l(t.data,function(s,e){return e<8?a("li",{key:s.id,staticClass:"pull-left card-wrapper"},[a("app-card",{attrs:{item:s}})],1):t._e()}))]):t._e()},i=[],n={render:e,staticRenderFns:i};s.a=n},0:function(t,s){},"0DkS":function(t,s,a){"use strict";var e=a("7+uW"),i=a("j/l3"),n=a("h1g8"),r=a("UvGh"),l=a("FDt4"),o=a("3sw+");s.a={name:"appDashboard",components:{"app-carousel":i.a,"app-segment":n.a},data:function(){return{imagePath:e.a.config.IMAGE_PATH,upcomingMovies:[],nowPlayingMovies:[],popularSeries:[],popularPeople:[]}},created:function(){var t=this;r.a.getUpcomingMovies(function(s){t.upcomingMovies=s}),r.a.getNowPlayingMovies(function(s){t.nowPlayingMovies=s}),l.a.getPopularSeries(function(s){t.popularSeries=s}),o.a.getPopularPeople(function(s){t.popularPeople=s})}}},"0jag":function(t,s,a){"use strict";var e=a("0DkS"),i=a("7Dd7"),n=a("VU/8"),r=n(e.a,i.a,null,null,null);s.a=r.exports},"3sw+":function(t,s,a){"use strict";function e(t){return t.map(function(t){return{id:t.id,poster:i.a.config.IMAGE_PATH+t.profile_path,title:t.name,hasTooltip:!1,labels:t.known_for.map(function(t){return{id:t.id,name:t.title||t.name,type:t.media_type}}),hasRatings:!1,type:"person"}})}var i=a("7+uW"),n=a("Y7qi");s.a={getPopularPeople:function(t){n.a.getData(i.a.config.SEARCH_PEOPLE,i.a.config.SELECT_POPULAR,function(s){t(e(s))})},getDetails:function(t,s){n.a.getDetails(t,null,i.a.config.TMDB_PERSON_DETAILS,"changes%2Ccombined_credits%2Cexternal_ids%2Cimages%2Cmovie_credits%2Ctagged_images%2Ctv_credits",function(t){s(t)})}}},"5Uiw":function(t,s){},"5hAv":function(t,s,a){"use strict";var e=a("woOf"),i=a.n(e),n=a("7+uW");i()(n.a.config,{productionTip:!0,isOffline:!1,BACKDROP_PATH:"https://image.tmdb.org/t/p/original",IMAGE_PATH:"https://image.tmdb.org/t/p/w300",OMDB_BASE_URL:"https://theimdbapi.org/api/",OMDB_MOVIE_DETAILS:"movie",OMDB_SHOW_DETAILS:"movie",SEARCH_MOVIE:"movie/",SEARCH_SERIES:"tv/",SEARCH_PEOPLE:"person/",SELECT_NOW_PLAYING:"now_playing",SELECT_UPCOMING:"upcoming",SELECT_POPULAR:"popular",TMDB_API_KEY:"0312d542ff3bc63a78d6647fe5727160",TMDB_BASE_URL:"https://api.themoviedb.org/3/",TMDB_MOVIE_DETAILS:"movie/",TMDB_SHOW_DETAILS:"tv/",TMDB_PERSON_DETAILS:"person/"})},"7Dd7":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("app-carousel",{attrs:{data:t.upcomingMovies,"inverse-scaling":150,"slide-items":9,"slide-height":278,"slide-width":185,"slide-space":190,title:"Movies",subtitle:"Coming Soon"}}),t._v(" "),a("app-segment",{attrs:{background:!1,data:t.nowPlayingMovies,title:"Movies",subtitle:"Now Playing"}}),t._v(" "),a("app-segment",{attrs:{background:!0,data:t.popularSeries,title:"Tv shows",subtitle:"Popular"}}),t._v(" "),a("app-segment",{attrs:{background:!1,data:t.popularPeople,title:"People",subtitle:"Popular"}})],1)},i=[],n={render:e,staticRenderFns:i};s.a=n},AZtx:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.data.length?a("section",{staticClass:"carousel"},[t.title?a("h3",{staticClass:"section-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),a("h3",{staticClass:"site-width section-subtitle"},[t.subtitle?[t._v(t._s(t.subtitle))]:t._e(),t._v(" "),a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})],2),t._v(" "),a("carousel-3d",{attrs:{autoplay:t.autoPlay,"controls-visible":!0,"controls-prev-html":'<i class="fa fa-chevron-circle-left"></i>',"controls-next-html":'<i class="fa fa-chevron-circle-right"></i>',disable3d:t.disable3d,display:t.slideItems,"inverse-scaling":t.inverseScaling,height:t.slideHeight,width:t.slideWidth,space:t.slideSpace}},t._l(t.data,function(s,e){return a("slide",{key:s.id,attrs:{index:e}},[a("figure",[a("img",{attrs:{src:s.poster},on:{error:t.getDefaultPoster}}),t._v(" "),s.title?a("figcaption",[t._v(t._s(s.title))]):t._e()])])}))],1):t._e()},i=[],n={render:e,staticRenderFns:i};s.a=n},At45:function(t,s,a){"use strict";var e=a("T2eB");a.n(e);s.a={name:"appCarousel",components:{Carousel3d:e.Carousel3d,Slide:e.Slide},data:function(){return{items:[]}},props:{autoPlay:{type:Boolean,default:!1},data:{type:Array,default:[]},disable3d:{type:Boolean,default:!1},inverseScaling:{type:Number,default:300},slideItems:{type:Number,default:5},slideHeight:{type:Number,default:240},slideWidth:{type:Number,default:360},slideSpace:{type:Number,default:240},title:String,subtitle:String}}},FDt4:function(t,s,a){"use strict";function e(t){return t.map(function(t){return{id:t.id,poster:i.a.config.IMAGE_PATH+t.poster_path,title:t.name,hasTooltip:!0,tooltipText:t.overview,labels:t.genre_ids.map(function(t){var s=i.a.options.methods.getGenreFromId(t);return s.type="genre",s}),hasRatings:!0,rating:{value:t.vote_average,count:t.vote_count},type:"show"}})}var i=a("7+uW"),n=a("Y7qi");s.a={getPopularSeries:function(t){n.a.getData(i.a.config.SEARCH_SERIES,i.a.config.SELECT_POPULAR,function(s){t(e(s))})},getDetails:function(t,s){n.a.getDetails(t,i.a.config.OMDB_SHOW_DETAILS,i.a.config.TMDB_SHOW_DETAILS,"alternative_titles%2Cchanges%2Ccontent_ratings%2Ccredits%2Cexternal_ids%2Cimages%2Ckeywords%2Csimilar%2Ctranslations%2Cvideos",function(t){s(t)})}}},FVY0:function(t,s){},IfZb:function(t,s){},Kzkt:function(t,s,a){"use strict";var e=a("8kuj"),i=a.n(e);s.a={name:"appSpinner",components:{spinner:i.a},data:function(){return{isVisible:!0}},props:{spinnerStatus:Boolean}}},LunI:function(t,s,a){"use strict";function e(t){a("u15H")}var i=a("tHmk"),n=a("wNRc"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-a690d684",null);s.a=o.exports},M93x:function(t,s,a){"use strict";function e(t){a("IfZb")}var i=a("xJD8"),n=a("VwrH"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,null,null);s.a=o.exports},MRCr:function(t,s,a){"use strict";s.a={name:"appFooter"}},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i=a("Gvdl"),n=a.n(i),r=a("aK3Z"),l=a.n(r),o=a("ORbq"),c=a("VN6J"),u=a("M93x"),p=a("YaEn");a("5hAv"),a("y9o8"),a("RYeE");e.a.use(o.a),e.a.use(l.a,n.a),e.a.use(c.a),new e.a({el:"#app",router:p.a,template:"<App/>",components:{App:u.a}})},Q7rb:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("app-spinner",{attrs:{"spinner-status":t.spinnerStatus}}),t._v(" "),t.isNotEmpty(t.omdb)&&t.isNotEmpty(t.tmdb)?a("section",{directives:[{name:"show",rawName:"v-show",value:!t.spinnerStatus,expression:"!spinnerStatus"}],staticClass:"relative"},[a("figure",{staticClass:"poster-wrapper"},[a("img",{staticClass:"poster",attrs:{src:t.backdropPath+t.tmdb.backdrop_path}}),t._v(" "),a("section",{staticClass:"overlay"})]),t._v(" "),a("section",{staticClass:"site-width clearfix statistic"},[a("img",{staticClass:"pull-left snapshot",attrs:{src:t.imagePath+t.tmdb.poster_path},on:{error:t.getDefaultPoster}}),t._v(" "),a("section",{staticClass:"pull-left metadata"},[a("h2",{staticClass:"title"},[t._v(t._s(t.tmdb.title||t.tmdb.name))]),t._v(" "),a("p",{staticClass:"captions"},t._l(t.tmdb.genres,function(s){return a("a",{key:s.id,staticClass:"bullet",attrs:{href:"#"}},[t._v("\n                        "+t._s(s.name)+"\n                    ")])})),t._v(" "),a("p",{staticClass:"certification text-small text-bold"},[a("span",{staticClass:"item"},[t._v("TV SERIES")]),t._v(" "),a("span",{staticClass:"item"},[t._v(t._s(t.tmdb.number_of_seasons)+" SEASON(S) / "+t._s(t.tmdb.number_of_episodes)+" EPISODE(S)")]),t._v(" "),a("span",{staticClass:"item"},[t._v(t._s(t.omdb.content_rating))])]),t._v(" "),a("section",{staticClass:"table credits text-small text-bold"},[a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("CREATOR(S)")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._v(t._s(t.omdb.writers.join(", ")))])]),t._v(" "),a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("STARS")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._v(t._s(t.omdb.stars.join(", ")))])])]),t._v(" "),a("p",{staticClass:"overview"},[t._v(t._s(t.omdb.description))])]),t._v(" "),a("section",{staticClass:"pull-left rating-container"},[a("section",{staticClass:"featured"},[a("p",{staticClass:"title"},[t._v(t._s(t.omdb.rating))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v(t._s(t.omdb.rating_count)+" USERS")]),t._v(" "),a("i",{staticClass:"fa fa-star icon",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("section",{staticClass:"clearfix rating-list"},[a("section",{staticClass:"pull-left one-half rating"},[a("p",{staticClass:"title"},[t._v(t._s(t.tmdb.popularity.toFixed(1)))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("POPULARITY")])]),t._v(" "),t._m(0)])])]),t._v(" "),a("section",{staticClass:"segment background"},[a("section",{staticClass:"site-width clearfix"},[a("h3",{staticClass:"section-title"},[t._v("STORYLINE")]),t._v(" "),t._m(1),t._v(" "),a("span",{staticClass:"text-regular"},[t._v(t._s(t.omdb.storyline))])])]),t._v(" "),a("section",{staticClass:"segment"},[a("h3",{staticClass:"site-width section-title"},[t._v("CAST & CREW")]),t._v(" "),t._m(2),t._v(" "),a("section",{staticClass:"content-wrapper clearfix"},[t._l(t.tmdb.credits.cast,function(s){return a("section",{key:s.credit_id,staticClass:"pull-left one-fourth rail"},[a("figure",{staticClass:"pull-left"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[a("img",{staticClass:"pull-left poster",attrs:{src:t.imagePath+s.profile_path},on:{error:t.getDefaultPerson}})]),t._v(" "),a("figcaption",{staticClass:"pull-left"},[a("p",{staticClass:"title"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[t._v("\n                                    "+t._s(s.name)+"\n                                ")])],1),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("as "+t._s(s.character))])])],1)])}),t._v(" "),t._l(t.tmdb.credits.crew,function(s){return a("section",{key:s.credit_id,staticClass:"pull-left one-fourth rail"},[a("figure",{staticClass:"pull-left"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[a("img",{staticClass:"pull-left poster",attrs:{src:t.imagePath+s.profile_path},on:{"~error":function(s){t.getDefaultPerson(s)}}})]),t._v(" "),a("figcaption",{staticClass:"pull-left content"},[a("p",{staticClass:"title"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[t._v("\n                                    "+t._s(s.name)+"\n                                ")])],1),t._v(" "),a("p",{staticClass:"subtitle"},[t._v(t._s(s.job))])])],1)])})],2)])]):t._e()],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"pull-left one-half rating"},[a("p",{staticClass:"title"},[t._v("N/A")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("METASCORE")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"site-width section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],n={render:e,staticRenderFns:i};s.a=n},RMMs:function(t,s){},RYeE:function(t,s,a){"use strict";var e=a("fZjL"),i=a.n(e);a("7+uW").a.mixin({methods:{isNotEmpty:function(t){return t&&0!==i()(t).length},getGenreFromId:function(t){return window.genres.find(function(s){return s.id===t})||{}},getDefaultPoster:function(t){t.target.src="/static/images/default-poster.jpg"},getDefaultPerson:function(t){t.target.src="/static/images/default-person.png"}}})},UvGh:function(t,s,a){"use strict";var e=a("7+uW"),i=a("Y7qi");s.a={contructCards:function(t){return t.map(function(t){return{id:t.id,poster:e.a.config.IMAGE_PATH+t.poster_path,title:t.title,hasTooltip:!0,tooltipText:t.overview,labels:t.genre_ids.map(function(t){var s=e.a.options.methods.getGenreFromId(t);return s.type="genre",s}),hasRatings:!0,rating:{value:t.vote_average,count:t.vote_count},type:"movie"}})},getNowPlayingMovies:function(t){var s=this;i.a.getData(e.a.config.SEARCH_MOVIE,e.a.config.SELECT_NOW_PLAYING,function(a){t(s.contructCards(a))})},getUpcomingMovies:function(t){var s=this;i.a.getData(e.a.config.SEARCH_MOVIE,e.a.config.SELECT_UPCOMING,function(a){t(s.contructCards(a))})},getDetails:function(t,s){i.a.getDetails(t,e.a.config.OMDB_MOVIE_DETAILS,e.a.config.TMDB_MOVIE_DETAILS,"alternative_titles%2Cchanges%2Ccredits%2Cimages%2Ckeywords%2Creleases%2Creviews%2Csimilar%2Ctranslations%2Cvideos",function(t){s(t)})}}},V4ZW:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("app-spinner",{attrs:{"spinner-status":t.spinnerStatus}}),t._v(" "),t.isNotEmpty(t.person)?a("section",{directives:[{name:"show",rawName:"v-show",value:!t.spinnerStatus,expression:"!spinnerStatus"}]},[a("section",{staticClass:"relative"},[a("figure",{staticClass:"poster-wrapper"},[a("img",{staticClass:"poster",attrs:{src:t.backdropPath+t.person.combined_credits.cast[0].backdrop_path}}),t._v(" "),a("section",{staticClass:"overlay"})]),t._v(" "),a("section",{staticClass:"site-width clearfix statistic"},[a("img",{staticClass:"pull-left snapshot",attrs:{src:t.imagePath+t.person.profile_path},on:{error:t.getDefaultPerson}}),t._v(" "),a("section",{staticClass:"pull-left metadata"},[a("h2",{staticClass:"title"},[t._v(t._s(t.person.name))]),t._v(" "),a("p",{staticClass:"certification text-small text-bold"},[a("span",{staticClass:"item"},[t._v("BORN "+t._s(t._f("toDate")(t.person.birthday))+" IN "+t._s(t.person.place_of_birth))])]),t._v(" "),a("p",{staticClass:"certification text-small text-bold"},[t.person.external_ids.twitter_id?a("a",{staticClass:"item",attrs:{href:"https://twitter.com/"+t.person.external_ids.twitter_id,target:"_blank"}},[a("i",{staticClass:"fa fa-twitter-square fa-2x color-twitter",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.person.external_ids.facebook_id?a("a",{staticClass:"item",attrs:{href:"https://facebook.com/"+t.person.external_ids.facebook_id,target:"_blank"}},[a("i",{staticClass:"fa fa-facebook-square fa-2x color-facebook",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.person.external_ids.instagram_id?a("a",{staticClass:"item",attrs:{href:"https://instagram.com/"+t.person.external_ids.instagram_id,target:"_blank"}},[a("i",{staticClass:"fa fa-instagram fa-2x color-instagram",attrs:{"aria-hidden":"true"}})]):t._e()]),t._v(" "),a("section",{staticClass:"table credits text-small text-bold"},[a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("MOVIE")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._l(t.person.movie_credits.cast,function(s,a){return a<20?[t._v("\n                                    "+t._s(s.title)),a<19?[t._v(",")]:t._e()]:t._e()})],2)]),t._v(" "),a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("TV")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._l(t.person.tv_credits.cast,function(s,a){return a<20?[t._v("\n                                    "+t._s(s.name)),a<19?[t._v(",")]:t._e()]:t._e()})],2)])])]),t._v(" "),a("section",{staticClass:"pull-left rating-container"},[a("section",{staticClass:"featured"},[a("p",{staticClass:"title"},[t._v(t._s(t.person.popularity.toFixed(1)))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("POPULARITY")])]),t._v(" "),a("section",{staticClass:"clearfix rating-list"},[a("section",{staticClass:"pull-left one-half rating"},[a("p",{staticClass:"title"},[t._v(t._s(t.person.tv_credits.cast.length))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("TV")])]),t._v(" "),a("section",{staticClass:"pull-left one-half rating"},[a("p",{staticClass:"title"},[t._v(t._s(t.person.movie_credits.cast.length))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("MOVIES")])])])])])]),t._v(" "),a("section",{staticClass:"segment background"},[a("section",{staticClass:"site-width clearfix"},[a("h3",{staticClass:"section-title"},[t._v("BIOGRAPHY")]),t._v(" "),t._m(0),t._v(" "),a("span",{staticClass:"text-regular"},[t._v(t._s(t.person.biography))])])]),t._v(" "),a("app-carousel",{attrs:{data:t.carouselData,disable3d:!0,"inverse-scaling":150,"slide-items":9,"slide-height":150,"slide-width":105,"slide-space":111,title:"Photos"}}),t._v(" "),a("section",{staticClass:"segment"},[a("h3",{staticClass:"site-width section-title"},[t._v("FILMOGRAPHY")]),t._v(" "),t._m(1),t._v(" "),a("section",{staticClass:" content-wrapper clearfix"},[t._l(t.person.combined_credits.cast,function(s){return a("section",{key:s.credit_id,staticClass:"pull-left one-third rail"},[a("figure",{staticClass:"pull-left"},[a("router-link",{attrs:{to:{name:"AppMovie",params:{id:s.id}}}},[a("img",{staticClass:"pull-left poster",attrs:{src:t.imagePath+s.poster_path},on:{error:t.getDefaultPoster}})]),t._v(" "),a("figcaption",{staticClass:"pull-left"},[a("p",{staticClass:"title"},[a("router-link",{attrs:{to:{name:"AppMovie",params:{id:s.id}}}},[t._v("\n                                    "+t._s(s.title||s.name)+"\n                                ")])],1),t._v(" "),s.character?a("p",{staticClass:"subtitle"},[t._v("as "+t._s(s.character))]):t._e(),t._v(" "),a("p",{staticClass:"captions"},t._l(s.genre_ids,function(s){return a("a",{key:s,staticClass:"bullet",attrs:{href:"#"}},[t._v("\n                                    "+t._s(t.getGenreFromId(s).name)+"\n                                ")])})),t._v(" "),a("p",{staticClass:"rating clearfix"},[a("i",{staticClass:"fa fa-star color-yellow",attrs:{"aria-hidden":"true"}}),t._v("\n                                "+t._s(s.vote_average)+" / 10 from "+t._s(t._f("format")(s.vote_count))+" users\n                            ")])])],1)])}),t._v(" "),t._l(t.person.combined_credits.crew,function(s){return a("section",{key:s.credit_id,staticClass:"pull-left one-third rail"},[a("figure",{staticClass:"pull-left"},[a("img",{staticClass:"pull-left poster",attrs:{src:t.imagePath+s.poster_path},on:{"~error":function(s){t.getDefaultPoster(s)}}}),t._v(" "),a("figcaption",{staticClass:"pull-left content"},[a("p",{staticClass:"title"},[t._v(t._s(s.title||s.name))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v(t._s(s.job))]),t._v(" "),a("p",{staticClass:"captions"},t._l(s.genre_ids,function(s){return a("a",{key:s,staticClass:"bullet",attrs:{href:"#"}},[t._v("\n                                    "+t._s(t.getGenreFromId(s).name)+"\n                                ")])})),t._v(" "),a("p",{staticClass:"rating clearfix"},[a("i",{staticClass:"fa fa-star color-yellow",attrs:{"aria-hidden":"true"}}),t._v("\n                                "+t._s(s.vote_average)+" / 10 from "+t._s(t._f("format")(s.vote_count))+" users\n                            ")])])])])})],2)])],1):t._e()],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"site-width section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],n={render:e,staticRenderFns:i};s.a=n},VwrH:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("app-header"),t._v(" "),a("router-view"),t._v(" "),a("app-footer")],1)},i=[],n={render:e,staticRenderFns:i};s.a=n},WqOr:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{directives:[{name:"show",rawName:"v-show",value:t.spinnerStatus,expression:"spinnerStatus"}],staticClass:"spinner-container"},[a("spinner",{attrs:{size:"large",message:"Loading...","line-fg-color":"#C7A605",speed:.75,spacing:255}})],1)},i=[],n={render:e,staticRenderFns:i};s.a=n},Y7qi:function(t,s,a){"use strict";var e=a("7+uW");s.a={getData:function(t,s,a){e.a.http.get(e.a.config.TMDB_BASE_URL+t+s+"?api_key="+e.a.config.TMDB_API_KEY+"&language=en-US&page=1").then(function(t){a(t.body.results)},function(t){console.error(t),a([])})},getDetails:function(t,s,a,i,n){var r=e.a.config.TMDB_BASE_URL+a+t+"?api_key="+e.a.config.TMDB_API_KEY+"&language=en-US&append_to_response="+i;e.a.config.isOffline&&(r=e.a.config.TMDB_BASE_URL+a),e.a.http.get(r).then(function(t){if(null!==s){var a=t.body;e.a.http.get(e.a.config.OMDB_BASE_URL+s+"?movie_id="+(t.body.imdb_id||t.body.external_ids.imdb_id)).then(function(t){n({omdb:t.body,tmdb:a})},function(t){console.error(t),n({})})}else n(t.body)},function(t){console.error(t),n({})})}}},YaEn:function(t,s,a){"use strict";var e=a("7+uW"),i=a("/ocq"),n=a("0jag"),r=a("s4ak"),l=a("dN1J"),o=a("txcL");e.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"AppDashboard",component:n.a},{path:"/movie/:id",name:"AppMovie",component:r.a,props:!0},{path:"/show/:id",name:"AppShow",component:l.a,props:!0},{path:"/person/:id",name:"AppPerson",component:o.a,props:!0}]})},Z6OK:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",[a("i",{staticClass:"fa fa-header",attrs:{"aria-hidden":"true"}}),t._v("\n    This is the Top Panel\n")])}],n={render:e,staticRenderFns:i};s.a=n},dIwS:function(t,s){},dN1J:function(t,s,a){"use strict";function e(t){a("dIwS")}var i=a("gnUP"),n=a("Q7rb"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-4fbf38f5",null);s.a=o.exports},fOUs:function(t,s,a){"use strict";var e=a("mp9/"),i=a("Z6OK"),n=a("VU/8"),r=n(e.a,i.a,null,null,null);s.a=r.exports},gnUP:function(t,s,a){"use strict";var e=a("7+uW"),i=a("+02k"),n=a("FDt4");s.a={name:"appShow",components:{"app-spinner":i.a},data:function(){return{imagePath:e.a.config.IMAGE_PATH,backdropPath:e.a.config.BACKDROP_PATH,omdb:{},tmdb:{},spinnerStatus:!0}},props:{id:Number|String,type:String},created:function(){this.getData()},methods:{getData:function(){var t=this;this.spinnerStatus=!0,n.a.getDetails(this.id,function(s){t.spinnerStatus=!1,t.omdb=s.omdb,t.tmdb=s.tmdb})}},watch:{$route:"getData"}}},h1g8:function(t,s,a){"use strict";function e(t){a("FVY0")}var i=a("rTqX"),n=a("+xB/"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-32dcf55a",null);s.a=o.exports},hF8l:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",[a("section",{staticClass:"site-width clearfix sitemap"},[a("ul",{staticClass:"pull-left column"},[a("li",{staticClass:"heading"},[t._v("cinemetr")]),t._v(" "),a("li",[t._v("A website to show movie metadata")])]),t._v(" "),a("ul",{staticClass:"pull-left column"},[a("li",{staticClass:"title"},[t._v("Explore")]),t._v(" "),a("li",[a("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Top Rated Movies")])])]),t._v(" "),a("ul",{staticClass:"pull-left column"},[a("li",{staticClass:"title"},[t._v("Follow")]),t._v(" "),a("li",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v("LinkedIn")])])]),t._v(" "),a("ul",{staticClass:"pull-left column"},[a("li",{staticClass:"title"},[t._v("Contact Me")]),t._v(" "),a("li",[a("a",{attrs:{href:"mailto:tamal.mukherjee10@gmail.com"}},[t._v("tamal.mukherjee10@gmail.com")])])])]),t._v(" "),a("p",{staticClass:"site-width"},[t._v("© 2017 Cinemetr. All Rights Reserved.")])])}],n={render:e,staticRenderFns:i};s.a=n},hi9F:function(t,s){},"j/l3":function(t,s,a){"use strict";function e(t){a("RMMs")}var i=a("At45"),n=a("AZtx"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,null,null);s.a=o.exports},jv2r:function(t,s,a){"use strict";var e=a("7+uW"),i=a("+02k"),n=a("h1g8"),r=a("UvGh");s.a={name:"appMovie",components:{"app-spinner":i.a,"app-segment":n.a},data:function(){return{imagePath:e.a.config.IMAGE_PATH,backdropPath:e.a.config.BACKDROP_PATH,omdb:{},tmdb:{},similarMovies:[],spinnerStatus:!0}},props:{id:Number|String,type:String},created:function(){this.getData()},methods:{getData:function(){var t=this;this.spinnerStatus=!0,r.a.getDetails(this.id,function(s){t.spinnerStatus=!1,t.omdb=s.omdb,t.tmdb=s.tmdb,t.similarMovies=r.a.contructCards(t.tmdb.similar.results)})}},watch:{$route:"getData"}}},"mp9/":function(t,s,a){"use strict";s.a={name:"appHeader"}},rTqX:function(t,s,a){"use strict";var e=a("LunI");s.a={name:"appSegment",components:{"app-card":e.a},props:{background:{type:Boolean,default:!1},data:{type:Array,default:[]},title:String,subtitle:String}}},s4ak:function(t,s,a){"use strict";function e(t){a("5Uiw")}var i=a("jv2r"),n=a("vUst"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-6303a3e8",null);s.a=o.exports},t3Ns:function(t,s,a){"use strict";function e(t){a("hi9F")}var i=a("MRCr"),n=a("hF8l"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-529a0294",null);s.a=o.exports},tHmk:function(t,s,a){"use strict";s.a={name:"appCard",props:{imagePath:String,item:{type:Object,default:{}},type:String},methods:{goToDetails:function(t){this.$router.push({name:"App"+t.type.charAt(0).toUpperCase()+t.type.slice(1),params:{id:t.id}})}}}},tpoI:function(t,s){},txcL:function(t,s,a){"use strict";function e(t){a("+MvJ")}var i=a("z0DU"),n=a("V4ZW"),r=a("VU/8"),l=e,o=r(i.a,n.a,l,"data-v-d4dfd566",null);s.a=o.exports},u15H:function(t,s){},vUst:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("app-spinner",{attrs:{"spinner-status":t.spinnerStatus}}),t._v(" "),t.isNotEmpty(t.omdb)&&t.isNotEmpty(t.tmdb)?a("section",{directives:[{name:"show",rawName:"v-show",value:!t.spinnerStatus,expression:"!spinnerStatus"}],staticClass:"relative"},[a("figure",{staticClass:"poster-wrapper"},[a("img",{staticClass:"poster",attrs:{src:t.backdropPath+t.tmdb.backdrop_path}}),t._v(" "),a("section",{staticClass:"overlay"})]),t._v(" "),a("section",{staticClass:"site-width clearfix statistic"},[a("img",{staticClass:"pull-left snapshot",attrs:{src:t.imagePath+t.tmdb.poster_path},on:{error:t.getDefaultPoster}}),t._v(" "),a("section",{staticClass:"pull-left metadata"},[a("h2",{staticClass:"title"},[t._v(t._s(t.tmdb.title)+" ("+t._s(t.omdb.year)+")")]),t._v(" "),a("p",{staticClass:"captions"},t._l(t.tmdb.genres,function(s){return a("a",{key:s.id,staticClass:"bullet",attrs:{href:"#"}},[t._v("\n                        "+t._s(s.name)+"\n                    ")])})),t._v(" "),a("p",{staticClass:"certification text-small text-bold"},[a("span",{staticClass:"item"},[t._v(t._s(t._f("toDate")(t.omdb.release_date))+" ("+t._s(t.omdb.metadata.countries.join(", "))+")")]),t._v(" "),a("span",{staticClass:"item"},[t._v(t._s(t.omdb.content_rating))]),t._v(" "),a("span",{staticClass:"item"},[t._v(t._s(t.omdb.length)+" Min")])]),t._v(" "),a("section",{staticClass:"table credits text-small text-bold"},[a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("DIRECTOR(S)")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._v(t._s(t.omdb.director))])]),t._v(" "),a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("WRITER(S)")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._v(t._s(t.omdb.writers.join(", ")))])]),t._v(" "),a("section",{staticClass:"table-row"},[a("span",{staticClass:"table-cell"},[t._v("STARS")]),t._v(" "),a("span",{staticClass:"table-cell color-yellow"},[t._v(t._s(t.omdb.stars.join(", ")))])])]),t._v(" "),a("p",{staticClass:"overview"},[t._v(t._s(t.omdb.description))])]),t._v(" "),a("section",{staticClass:"pull-left rating-container"},[a("section",{staticClass:"featured"},[a("p",{staticClass:"title"},[t._v(t._s(t.omdb.rating))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v(t._s(t.omdb.rating_count)+" USERS")]),t._v(" "),a("i",{staticClass:"fa fa-star icon",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("section",{staticClass:"clearfix rating-list"},[a("section",{staticClass:"pull-left one-half rating"},[a("p",{staticClass:"title"},[t._v(t._s(t.tmdb.popularity.toFixed(1)))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("POPULARITY")])]),t._v(" "),a("section",{staticClass:"pull-left one-half rating"},[a("p",{staticClass:"title"},[t._v(t._s(t.tmdb.reviews.total_results))]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("REVIEW(S)")])])])])]),t._v(" "),a("section",{staticClass:"segment background"},[a("section",{staticClass:"site-width clearfix"},[a("h3",{staticClass:"section-title"},[t._v("STORYLINE")]),t._v(" "),t._m(0),t._v(" "),a("span",{staticClass:"text-regular"},[t._v(t._s(t.omdb.storyline))])])]),t._v(" "),a("app-segment",{attrs:{background:!1,data:t.similarMovies,title:"Movies",subtitle:"You May Like"}}),t._v(" "),a("section",{staticClass:"segment"},[a("h3",{staticClass:"site-width section-title"},[t._v("CAST & CREW")]),t._v(" "),t._m(1),t._v(" "),a("section",{staticClass:"content-wrapper clearfix"},[t._l(t.tmdb.credits.cast,function(s){return a("section",{key:s.credit_id,staticClass:"pull-left one-fourth rail"},[a("figure",{staticClass:"pull-left"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[a("img",{staticClass:"pull-left poster",attrs:{src:t.imagePath+s.profile_path},on:{error:t.getDefaultPerson}})]),t._v(" "),a("figcaption",{staticClass:"pull-left"},[a("p",{staticClass:"title"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[t._v("\n                                    "+t._s(s.name)+"\n                                ")])],1),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("as "+t._s(s.character))])])],1)])}),t._v(" "),t._l(t.tmdb.credits.crew,function(s){return a("section",{key:s.credit_id,staticClass:"pull-left one-fourth rail"},[a("figure",{staticClass:"pull-left"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[a("img",{staticClass:"pull-left poster",attrs:{src:t.imagePath+s.profile_path},on:{"~error":function(s){t.getDefaultPerson(s)}}})]),t._v(" "),a("figcaption",{staticClass:"pull-left content"},[a("p",{staticClass:"title"},[a("router-link",{attrs:{to:{name:"AppPerson",params:{id:s.id}}}},[t._v("\n                                    "+t._s(s.name)+"\n                                ")])],1),t._v(" "),a("p",{staticClass:"subtitle"},[t._v(t._s(s.job))])])],1)])})],2)]),t._v(" "),t.tmdb.reviews.results.length?a("section",{staticClass:"segment background"},[a("h3",{staticClass:"site-width section-title"},[t._v("USER REVIEWS")]),t._v(" "),t._m(2),t._v(" "),t._l(t.tmdb.reviews.results,function(s){return a("section",{key:s.id,staticClass:"site-width feed text-regular"},[a("p",{staticClass:"title"},[t._v("By "+t._s(s.author))]),t._v(" "),a("p",{staticClass:"content"},[t._v(t._s(s.content))])])})],2):t._e()],1):t._e()],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"site-width section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"site-width section-subtitle"},[a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],n={render:e,staticRenderFns:i};s.a=n},wNRc:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("figure",{staticClass:"card clearfix",on:{click:function(s){t.goToDetails(t.item)}}},[a("img",{staticClass:"poster",attrs:{src:t.item.poster},on:{error:t.getDefaultPoster}}),t._v(" "),a("section",{staticClass:"overlay"}),t._v(" "),a("figcaption",[a("header",[t._v("\n            "+t._s(t.item.title)+"\n            "),t.item.hasTooltip?a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.item.tooltipText,expression:"item.tooltipText",modifiers:{right:!0}}],staticClass:"fa fa-fw fa-info-circle color-yellow",attrs:{"aria-hidden":"true"}}):t._e()]),t._v(" "),a("p",{staticClass:"captions"},t._l(t.item.labels,function(s){return a("a",{key:s.id,staticClass:"bullet",attrs:{href:"#"}},[t._v("\n                "+t._s(s.name)+"\n            ")])})),t._v(" "),t.item.hasRatings?a("p",{staticClass:"rating clearfix"},[a("i",{staticClass:"fa fa-star color-yellow",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.item.rating.value)+" / 10 from "+t._s(t._f("format")(t.item.rating.count))+" users\n        ")]):t._e()])])},i=[],n={render:e,staticRenderFns:i};s.a=n},xJD8:function(t,s,a){"use strict";var e=a("fOUs"),i=a("t3Ns");s.a={components:{"app-header":e.a,"app-footer":i.a},name:"app"}},y9o8:function(t,s,a){"use strict";var e=a("7+uW");e.a.filter("truncate",function(t,s){return t?t.length<=s?t:t.substr(0,s)+"...":""}),e.a.filter("format",function(t){return t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""}),e.a.filter("toDate",function(t){if(!t)return"";var s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=t.split("-");return a[2]+" "+s[Number(a[1])-1]+" "+a[0]})},z0DU:function(t,s,a){"use strict";var e=a("7+uW"),i=a("+02k"),n=a("j/l3"),r=a("3sw+");s.a={name:"appMovie",components:{"app-carousel":n.a,"app-spinner":i.a},data:function(){return{imagePath:e.a.config.IMAGE_PATH,backdropPath:e.a.config.BACKDROP_PATH,person:{},carouselData:[],spinnerStatus:!0}},props:{id:Number|String,type:String},created:function(){this.getData()},methods:{getData:function(){var t=this;this.spinnerStatus=!0,r.a.getDetails(this.id,function(s){t.spinnerStatus=!1,t.person=s,t.person.tagged_images.results.forEach(function(s){t.carouselData.push({poster:t.imagePath+s.file_path})}),t.person.images.profiles.forEach(function(s){t.carouselData.push({poster:t.imagePath+s.file_path})})})}},watch:{$route:"getData"}}}},["NHnr"]);
//# sourceMappingURL=app.bec6f926b7ffb9692d61.js.map