import{i as a,S as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"44079698-e6186d09374e2a24bdfa7da89",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${r}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function g(i){return i.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:l,downloads:f})=>`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            class="gallery-img"
            src="${r}"
            alt="${o}"
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
            <p class="gallery-info-text">${l}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Downloads</h2>
            <p class="gallery-info-text">${f}</p>
        </li>
     </ul>
	</a>
</li>`).join("")}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");u.addEventListener("submit",h);function h(i){i.preventDefault(),c.innerHTML="";const r=i.target.elements["search-input"].value.trim().toLowerCase();if(!r){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}u.reset(),n.classList.add("is-open"),p(r).then(s=>{if(n.classList.remove("is-open"),!s.hits.length)a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const o=g(s.hits);c.insertAdjacentHTML("beforeend",o),new m(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}}).catch(s=>{n.classList.remove("is-open"),a.error({title:"Error",message:`An error occurred: ${s.message}`,position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
