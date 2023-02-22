Object.freeze({mobile:5,tablet:8,desktop:9});const t={mobile:320,tablet:768};Object.freeze(t);const e={container:"news-container",card:"news-item",favButton:"add-news-favorite",favButtonText:"favorite-btn-text",favButtonIcon:"favorite-icon",inFavorites:"in-favorites",title:"news-title",abstract:"news-desk",section:"news-chip",media:"news-img",published_date:"news-date",url:"news-link"};Object.freeze(e);function n(t,e=null,n=null){let o=[];const a=localStorage.getItem(t);if(a)try{o=JSON.parse(a)}catch(t){console.log(t.message)}return n&&(n(o,e),localStorage.setItem(t,JSON.stringify(o))),o}function o(t,o){const a=o.querySelector(`.${e.title}`).textContent.trim();return n(t).findIndex((t=>t.title===a))}function a(t,e){t.splice(e,1)}function r(t,n){t.unshift(function(t){return{media:[{url:t.querySelector(`.${e.media}`).src,caption:t.querySelector(`.${e.media}`).alt}],title:t.querySelector(`.${e.title}`).textContent.trim(),section:t.querySelector(`.${e.section}`).textContent,subsection:"",abstract:t.querySelector(`.${e.abstract}`).textContent,published_date:t.querySelector(`.${e.published_date}`).textContent,url:t.querySelector(`.${e.url}`).href}}(n))}function c(t){t.querySelector(`.${e.favButtonText}`).textContent="In favorite",t.querySelector(`.${e.favButtonIcon}`).innerHTML='<path class="icon-heart" d="M8.381 2.286C4.174 2.286.762 5.663.762 9.829c0 3.363 1.333 11.345 14.458 19.413a1.501 1.501 0 0 0 1.56 0c13.125-8.069 14.458-16.05 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543S16 6.857 16 6.857s-3.412-4.571-7.619-4.571z"/>'}document.querySelector(".read").addEventListener("click",(function(t){if(!t.target.classList.contains(e.favButton)&&!t.target.parentNode.classList.contains(e.favButton)&&"path"!==t.target.tagName)return;const i=function(t,e){let n=e;for(;!n.classList.contains(t);)n=n.parentElement;return n}(e.card,t.target),s=o("favPagesData",i);s>-1?function(t,o,r){n(t,o,a),r.querySelector(`.${e.favButtonText}`).textContent="Add to favorite",r.querySelector(`.${e.favButtonIcon}`).innerHTML='<path class="icon-empty-heart" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987a1.316 1.316 0 0 0 1.366 0c11.484-7.06 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6S16 8 16 8s-2.985-4-6.667-4z" />'}("favPagesData",s,i):function(t,e){n(t,e,r),c(e)}("favPagesData",i)})),function(){const t=document.querySelectorAll(`.${e.card}`);for(let e of t)e.classList.contains("weather__card")||o("favPagesData",e)>-1&&c(e)}();
//# sourceMappingURL=read.39859b76.js.map
