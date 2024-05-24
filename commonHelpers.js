import{a as u,i as c,S as m}from"./assets/vendor-d410933d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function g(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=g(t);fetch(t.href,a)}})();function h(e){return e.map(f).join("")}function f(e){return`
  <div class="image-container">
    <a href="${e.largeImageURL}">
      <img src="${e.webformatURL}" alt="${e.tags}" title="" />
    </a>
    
    <div class="stats">
      <div class="stat">
        <span class="label">Likes</span>
        <span class="value">${e.likes}</span>
      </div>
      <div class="stat">
        <span class="label">Views</span>
        <span class="value">${e.views}</span>
      </div>
      <div class="stat">
        <span class="label">Comments</span>
        <span class="value">${e.comments}</span>
      </div>
      <div class="stat">
        <span class="label">Downloads</span>
        <span class="value">${e.downloads}</span>
      </div>
    </div>
  </div>`}u.defaults.baseURL="https://pixabay.com/api/";const s={query:"",page:1,per_page:15,total_hits:0};function y(){const r={params:{key:"44003480-04272ce3fae5ad0292fb853b7",q:s.query,page:s.page,per_page:s.per_page,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return u.get("",r)}const v="/goit-js-hw-12/assets/blocked-295d98f9.svg";function b(){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight",timeout:3e3,close:!0,progressBar:!0,iconUrl:v})}function L(){c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"black",color:"blue",position:"topRight",timeout:3e3,close:!0,progressBar:!0})}function w(e){c.error({title:"Error",position:"topRight",message:e})}const q=new m(".gallery a",{captionsData:"alt",captionDelay:250}),o={requestForm:document.querySelector(".js-request-form"),galleryCont:document.querySelector(".js-gallery"),imageLoader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more")},l={show(){o.imageLoader.classList.remove("hide")},hide(){o.imageLoader.classList.add("hide")}},i={isActive:!1,show(){o.loadMoreBtn.classList.remove("hide"),this.isActive=!0},hide(){o.loadMoreBtn.classList.add("hide"),this.isActive=!1}};o.requestForm.addEventListener("submit",e=>{e.preventDefault(),s.query=e.currentTarget.elements.query.value.trim(),o.galleryCont.innerHTML="",s.page=1,i.hide(),p(),e.currentTarget.reset()});o.loadMoreBtn.addEventListener("click",e=>{s.page+=1,p()});async function p(){l.show();try{const{data:{hits:e,totalHits:r}}=await y();s.total_hits=r,r===0?b():o.galleryCont.insertAdjacentHTML("beforeend",h(e)),q.refresh(),s.page>1&&B(),P(),l.hide()}catch(e){w(e.message),l.hide()}}function P(){const e=Math.ceil(s.total_hits/s.per_page);s.page<=e&&!i.isActive&&i.show(),s.page>=e&&i.isActive&&(L(),i.hide())}function B(){const{height:e}=o.galleryCont.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
