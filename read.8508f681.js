function e(e){return e.length<=115?e:e.slice(0,115)+"..."}function n(e){return e.length<72?e:e.slice(0,72)+"..."}function t(e){if(!e)return null;const n=new Date(e),t=n.getFullYear();let s=n.getMonth()+1,a=n.getDate();a<10&&(a="0"+a),s<10&&(s="0"+s);return""+(a+"/"+s+"/"+t)}const s=e=>{try{const n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(e){console.error("Get state error: ",e.message)}};Object.freeze({mobile:5,tablet:8,desktop:9});Object.freeze({mobile:320,tablet:768});Object.freeze({container:"news-container",card:"news-item",favButton:"add-news-favorite",favButtonText:"favorite-btn-text",favButtonIcon:"favorite-icon",inFavorites:"in-favorites",title:"news-title",abstract:"news-desk",section:"news-chip",media:"news-img",published_date:"news-date",url:"news-link"});const a='<path class="icon-empty-heart" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987a1.316 1.316 0 0 0 1.366 0c11.484-7.06 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6S16 8 16 8s-2.985-4-6.667-4z" />';function i({section_name:s,web_url:i,headline:l,lead_paragraph:o,pub_date:c,multimedia:d,snippet:r}){return`\n        <li class="news-item">\n        <div class="overlay"></div>\n        <div class="img-thumb">\n        <span class="readable"\n        >Already read\n        <svg class="icon-done" width="18" height="18" viewBox="0 0 32 32"><path d="M28.78 6.39c-0.277 0.008-0.54 0.124-0.733 0.323l-16.313 16.313-6.713-6.713c-0.098-0.102-0.216-0.184-0.346-0.24s-0.27-0.086-0.412-0.088c-0.142-0.001-0.283 0.025-0.414 0.079s-0.251 0.133-0.351 0.233c-0.1 0.1-0.18 0.22-0.233 0.351s-0.081 0.272-0.079 0.414c0.001 0.142 0.031 0.282 0.087 0.412s0.138 0.248 0.24 0.346l7.467 7.467c0.2 0.2 0.471 0.312 0.754 0.312s0.554-0.112 0.754-0.312l17.067-17.067c0.154-0.15 0.259-0.343 0.302-0.553s0.021-0.429-0.063-0.627c-0.084-0.198-0.225-0.366-0.406-0.482s-0.393-0.175-0.607-0.168v0z"></path></svg>\n          </span>\n          <img src="${d[0]?"https://www.nytimes.com/"+d[0].url:"https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg"}" loading="lazy" alt="${d[0].url?r:"NYTimes"}" class="news-img" />\n          <p class="news-chip">${s}</p>\n          <button type="button" class="add-news-favorite">\n            <p class="favorite-btn-text">Add to favorite</p>\n            <svg class="favorite-icon" width="16" height="16" viewBox="0 0 32 32">\n             ${a} \n            </svg> \n          </button>\n        </div>\n        <div class="news-info">\n          <h2 class="news-title disable-scroll">\n            ${n(l.main)}\n          </h2>\n          <p class="news-desk">\n          ${e(o)}\n          </p>\n          <div class="adding">\n            <p class="news-date">${t(c)}</p>\n            <a\n              href=${i}\n              class="news-link"\n              target="_blank"\n              rel="noopener noreferrer"\n              >Read more</a\n            >\n          </div>\n        </div>\n      </li> `}function l({media:s,title:i,section:l,subsection:o,abstract:c,published_date:d,url:r}){return`\n        <li class="news-item">\n        <div class="overlay"></div>\n        <div class="img-thumb">\n        <span class="readable"\n        >Already read\n        <svg class="icon-done" width="18" height="18" viewBox="0 0 32 32"><path d="M28.78 6.39c-0.277 0.008-0.54 0.124-0.733 0.323l-16.313 16.313-6.713-6.713c-0.098-0.102-0.216-0.184-0.346-0.24s-0.27-0.086-0.412-0.088c-0.142-0.001-0.283 0.025-0.414 0.079s-0.251 0.133-0.351 0.233c-0.1 0.1-0.18 0.22-0.233 0.351s-0.081 0.272-0.079 0.414c0.001 0.142 0.031 0.282 0.087 0.412s0.138 0.248 0.24 0.346l7.467 7.467c0.2 0.2 0.471 0.312 0.754 0.312s0.554-0.112 0.754-0.312l17.067-17.067c0.154-0.15 0.259-0.343 0.302-0.553s0.021-0.429-0.063-0.627c-0.084-0.198-0.225-0.366-0.406-0.482s-0.393-0.175-0.607-0.168v0z"></path></svg>\n          </span>\n          <img src="${s[0]?s[0]["media-metadata"][2].url:"https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg"}" loading="lazy" alt="${s[0]?s[0].caption:"NYTimes"}" class="news-img" />\n          <p class="news-chip">${l||o}</p>\n          <button type="button" class="add-news-favorite">\n            <p class="favorite-btn-text">Add to favorite</p>\n            <svg class="favorite-icon" width="16" height="16" viewBox="0 0 32 32">\n             ${a}\n            </svg> \n          </button>\n        </div>\n        <div class="news-info">\n          <h2 class="news-title disable-scroll">\n            ${n(i)}\n          </h2>\n          <p class="news-desk">\n          ${e(c)}\n          </p>\n          <div class="adding">\n            <p class="news-date">${t(d)}</p>\n            <a\n              href=${r}\n              class="news-link"\n              target="_blank"\n              rel="noopener noreferrer"\n              >Read more</a\n            >\n          </div>\n        </div>\n      </li> `}const o=document.querySelector(".read");function c(e){if(e.published_date)return e.published_date;const n=/(\d+-\d+-\d+)/g.exec(e.pub_date);return n?n[1]:e.pub_date}window.addEventListener("DOMContentLoaded",(function(){console.log("add All Read On Page");const e=s("read");if(void 0!==e){const n=e.sort(((e,n)=>c(n).localeCompare(c(e))));console.log("sorted",n);let s=null,a="";n.forEach((e=>{let n=c(e);s!==n&&(null!==s&&(a+="</div>"),s=n,a+=function(e){return`\n\t\t <li class="read__block">\n\t\t\t <div class="read__title">\n\t\t\t\t <div class="read__date">\n\t\t\t\t\t <span class="date">${t(e)}</span>\n\t\t\t\t </div>\n\t\t\t \t <button type="button" class="show-btn show-btn__up" id='${e}'></button>\n\t\t\t </div>\n\t\t </li>\n\t\t <div class="read__gallery" id='read__gallery-${e}'>`}(n)),Object.keys(e).includes("pub_date")?a+=i(e):a+=l(e)})),a+="</div>",o.insertAdjacentHTML("beforeend",a)}document.querySelectorAll(".show-btn").forEach((e=>{const n=document.getElementById("read__gallery-"+e.id);e.addEventListener("click",(t=>{n.classList.toggle("hidden"),e.classList.toggle("show-btn__up"),e.classList.toggle("show-btn__down")}))}))}));
//# sourceMappingURL=read.8508f681.js.map
