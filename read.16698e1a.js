!function(){function e(e){return e.length<=115?e:e.slice(0,115)+"..."}function t(e){return e.length<72?e:e.slice(0,72)+"..."}function n(e){if(!e)return null;var t,n,a;n=/(\d+-\d+-\d+)/g,e=null!==(a=(t=e).match(n))?a[0]:t;var s=new Date(e),c=s.getFullYear(),i=s.getMonth()+1,o=s.getDate();return o<10&&(o="0"+o),i<10&&(i="0"+i),"".concat(o+"/"+i+"/"+c)}var a=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};Object.freeze({mobile:5,tablet:8,desktop:9});Object.freeze({mobile:320,tablet:768});Object.freeze({container:"news-container",card:"news-item",favButton:"add-news-favorite",favButtonText:"favorite-btn-text",favButtonIcon:"favorite-icon",inFavorites:"in-favorites",title:"news-title",abstract:"news-desk",section:"news-chip",media:"news-img",published_date:"news-date",url:"news-link"});var s='<path class="icon-empty-heart" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987a1.316 1.316 0 0 0 1.366 0c11.484-7.06 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6S16 8 16 8s-2.985-4-6.667-4z" />';function c(a){var c=a.media,i=a.title,o=a.section,l=a.subsection,r=a.abstract,d=a.published_date,u=a.url;return'\n        <li class="news-item">\n        <div class="overlay"></div>\n        <div class="img-thumb">\n            <img src="'.concat(c[0]?c[0]["media-metadata"][2].url:"https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg",'" loading="lazy" alt="').concat(c[0]?c[0].caption:"NYTimes",'" class="news-img" />\n            <p class="news-chip">').concat(o||l,'</p>\n            <span class="readable"\n                    >Already read\n                    <svg class="icon-done" width="18" height="18" viewBox="0 0 32 32"><path d="M28.78 6.39c-0.277 0.008-0.54 0.124-0.733 0.323l-16.313 16.313-6.713-6.713c-0.098-0.102-0.216-0.184-0.346-0.24s-0.27-0.086-0.412-0.088c-0.142-0.001-0.283 0.025-0.414 0.079s-0.251 0.133-0.351 0.233c-0.1 0.1-0.18 0.22-0.233 0.351s-0.081 0.272-0.079 0.414c0.001 0.142 0.031 0.282 0.087 0.412s0.138 0.248 0.24 0.346l7.467 7.467c0.2 0.2 0.471 0.312 0.754 0.312s0.554-0.112 0.754-0.312l17.067-17.067c0.154-0.15 0.259-0.343 0.302-0.553s0.021-0.429-0.063-0.627c-0.084-0.198-0.225-0.366-0.406-0.482s-0.393-0.175-0.607-0.168v0z"></path></svg>\n            </span>\n            <button type="button" class="add-news-favorite">\n              <p class="favorite-btn-text">Add to favorite</p>\n              <svg class="favorite-icon" width="16" height="16" viewBox="0 0 32 32">\n               ').concat(s,'\n              </svg>\n            </button>\n        </div>\n        <div class="news-info">\n          <h2 class="news-title disable-scroll">\n            ').concat(t(i),'\n          </h2>\n          <p class="news-desk">\n          ').concat(e(r),'\n          </p>\n          <div class="adding">\n            <p class="news-date">').concat(n(d),"</p>\n            <a\n              href=").concat(u,'\n              class="news-link"\n              target="_blank"\n              rel="noopener noreferrer"\n              >Read more</a\n            >\n          </div>\n        </div>\n      </li> ')}function i(){if("null"!==String(localStorage.getItem("read"))){var e=document.querySelectorAll('[class="news-item"]'),t=JSON.parse(localStorage.getItem("read")).map((function(e){return e.url?e.url:e.web_url?e.web_url:void 0}));e.forEach((function(e){t.includes(e.querySelector(".news-link").getAttribute("href"))&&e.classList.add("read-card")}))}}var o=document.querySelector(".read"),l="read",r='<path d="M3.76 6.857 0 10.336l16 14.806 16-14.806-3.76-3.479L16 18.159 3.76 6.857z"/>',d='<path d="M3.76 25.143 0 21.664 16 6.858l16 14.806-3.76 3.479L16 13.841 3.76 25.143z"/>';function u(e){var t=e.published_date||e.pub_date,n=/(\d+-\d+-\d+)/g.exec(t);return n?n[1]:t}window.addEventListener("DOMContentLoaded",(function(){console.log("add All Read On Page");var v=a(l);if(void 0!==v){var g=v.sort((function(e,t){return u(t).localeCompare(u(e))}));console.log("sorted",g);var p=null,h="";g.forEach((function(a){var i,o,l,v,g,w,m,b,f=u(a);p!==f&&(null!==p&&(h+="</div>"),p=f,h+=function(e){return'\n\t\t <li class="read__block">\n\t\t\t <div class="read__title">\n\t\t\t\t <div class="read__date">\n\t\t\t\t\t <span class="date">'.concat(n(e),'</span>\n\t\t\t\t </div>\n\t\t\t \t <button type="button" class="show-btn show-btn__up" id=\'').concat(e,'\'>\n\t\t\t\t  \t\t<svg class="icon read__icon--down hidden" viewBox="0 0 32 32">').concat(r,'</svg>\n\t\t\t\t\t\t<svg class="icon read__icon--top" viewBox="0 0 32 32">').concat(d,'</svg>\n\t\t\t\t </button>\n\t\t\t </div>\n\t\t </li>\n\t\t <div class="read__gallery" id=\'read__gallery-').concat(e,"'>")}(f)),Object.keys(a).includes("pub_date")?h+=(o=(i=a).section_name,l=i.web_url,v=i.headline,g=i.lead_paragraph,w=i.pub_date,m=i.multimedia,b=i.snippet,'\n        <li class="news-item">\n        <div class="overlay"></div>\n        <div class="img-thumb">\n        <span class="readable"\n        >Already read\n        <svg class="icon-done" width="18" height="18" viewBox="0 0 32 32"><path d="M28.78 6.39c-0.277 0.008-0.54 0.124-0.733 0.323l-16.313 16.313-6.713-6.713c-0.098-0.102-0.216-0.184-0.346-0.24s-0.27-0.086-0.412-0.088c-0.142-0.001-0.283 0.025-0.414 0.079s-0.251 0.133-0.351 0.233c-0.1 0.1-0.18 0.22-0.233 0.351s-0.081 0.272-0.079 0.414c0.001 0.142 0.031 0.282 0.087 0.412s0.138 0.248 0.24 0.346l7.467 7.467c0.2 0.2 0.471 0.312 0.754 0.312s0.554-0.112 0.754-0.312l17.067-17.067c0.154-0.15 0.259-0.343 0.302-0.553s0.021-0.429-0.063-0.627c-0.084-0.198-0.225-0.366-0.406-0.482s-0.393-0.175-0.607-0.168v0z"></path></svg>\n          </span>\n          <img src="'.concat(m[0]?"https://www.nytimes.com/"+m[0].url:"https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg",'" loading="lazy" alt="').concat(m[0].url?b:"NYTimes",'" class="news-img" />\n          <p class="news-chip">').concat(o,'</p>\n          <button type="button" class="add-news-favorite">\n            <p class="favorite-btn-text">Add to favorite</p>\n            <svg class="favorite-icon" width="16" height="16" viewBox="0 0 32 32">\n             ').concat(s,' \n            </svg> \n          </button>\n        </div>\n        <div class="news-info">\n          <h2 class="news-title disable-scroll">\n            ').concat(t(v.main),'\n          </h2>\n          <p class="news-desk">\n          ').concat(e(g),'\n          </p>\n          <div class="adding">\n            <p class="news-date">').concat(n(w),"</p>\n            <a\n              href=").concat(l,'\n              class="news-link"\n              target="_blank"\n              rel="noopener noreferrer"\n              >Read more</a\n            >\n          </div>\n        </div>\n      </li> ')):h+=c(a)})),h+="</div>",o.insertAdjacentHTML("beforeend",h)}w=document.querySelectorAll(".show-btn"),m=document.querySelector(".read__icon--down"),b=document.querySelector(".read__icon--top"),console.log("icons",m,b),w.forEach((function(e){var t=document.getElementById("read__gallery-"+e.id);e.addEventListener("click",(function(e){t.classList.toggle("hidden"),b.classList.toggle("hidden"),m.classList.toggle("hidden")}))})),i();var w,m,b}))}();
//# sourceMappingURL=read.16698e1a.js.map
