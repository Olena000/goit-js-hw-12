import{a as b,i as d,S as E}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S="https://pixabay.com/api/",j="44079698-e6186d09374e2a24bdfa7da89";async function v(r,o=1){const{data:s}=await b.get(S,{params:{key:j,page:o,per_page:15,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}});return s}function w(r){return r.map(({webformatURL:o,largeImageURL:s,tags:l,likes:e,views:t,comments:a,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            class="gallery-img"
            src="${o}"
            alt="${l}"
        />
        <ul class="gallery-info">
         <li class="galery-info-item">
             <h2 class="gallery-info-title">Likes</h2>
             <p class="gallery-info-text">${e}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Views</h2>
            <p class="gallery-info-text">${t}</p>
        </li>
         <li class="gallery-info-item">
            <h2 class="gallery-info-title">Comments</h2>
            <p class="gallery-info-text">${a}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Downloads</h2>
            <p class="gallery-info-text">${L}</p>
        </li>
     </ul>
	</a>
</li>`).join("")}const p=document.querySelector(".form"),f=document.querySelector(".gallery"),m=document.getElementById("search-loader"),u=document.getElementById("load-more-loader"),i=document.querySelector(".js-load-more");function g(r){r.classList.add("is-open")}function c(r){r.classList.remove("is-open")}let h="",n=1;p.addEventListener("submit",x);i.addEventListener("click",M);function x(r){if(r.preventDefault(),h=r.target.elements["search-input"].value.trim().toLowerCase(),!h){d.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}n=1,p.reset(),f.innerHTML="",i.classList.add("js-more-hidden"),y("search")}function M(){n+=1,i.classList.add("js-more-hidden"),y("loadMore")}function y(r){r==="search"?g(m):r==="loadMore"&&g(u),v(h,n).then(o=>{if(c(m),c(u),!o.hits.length)n===1&&d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.classList.add("js-more-hidden");else{const s=w(o.hits);if(f.insertAdjacentHTML("beforeend",s),new E(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh(),n>1){const e=document.querySelectorAll(".gallery-item");if(e.length>0){const{height:t}=e[0].getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}o.totalHits>f.children.length?i.classList.remove("js-more-hidden"):(i.classList.add("js-more-hidden"),d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}).catch(o=>{c(m),c(u),i.classList.add("js-more-hidden"),d.error({title:"Error",message:`An error occurred: ${o.message}`,position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
