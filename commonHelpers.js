import{a as p,i as c,S as y}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",b="44079698-e6186d09374e2a24bdfa7da89";async function S(t,s=1){const{data:i}=await p.get(L,{params:{key:b,page:s,per_page:15,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}});return i}function v(t){return t.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:r,comments:l,downloads:h})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
            class="gallery-img"
            src="${s}"
            alt="${o}"
        />
        <ul class="gallery-info">
         <li class="galery-info-item">
             <h2 class="gallery-info-title">Likes</h2>
             <p class="gallery-info-text">${e}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Views</h2>
            <p class="gallery-info-text">${r}</p>
        </li>
         <li class="gallery-info-item">
            <h2 class="gallery-info-title">Comments</h2>
            <p class="gallery-info-text">${l}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Downloads</h2>
            <p class="gallery-info-text">${h}</p>
        </li>
     </ul>
	</a>
</li>`).join("")}const f=document.querySelector(".form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader"),a=document.querySelector(".js-load-more");let m="",n=1;f.addEventListener("submit",q);a.addEventListener("click",x);function q(t){if(t.preventDefault(),u.innerHTML="",m=t.target.elements["search-input"].value.trim().toLowerCase(),!m){c.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}n=1,f.reset(),g()}function x(){n+=1,g()}function g(){d.classList.add("is-open"),S(m,n).then(t=>{if(d.classList.remove("is-open"),!t.hits.length)n===1&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("js-more-hidden");else{const s=v(t.hits);if(u.insertAdjacentHTML("beforeend",s),new y(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh(),n>1){const o=document.querySelectorAll(".gallery-item");if(o.length>0){const{height:e}=o[0].getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}t.totalHits>u.children.length?a.classList.remove("js-more-hidden"):(a.classList.add("js-more-hidden"),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}).catch(t=>{d.classList.remove("is-open"),a.classList.add("js-more-hidden"),c.error({title:"Error",message:`An error occurred: ${t.message}`,position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
