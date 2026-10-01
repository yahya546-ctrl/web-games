const PAGES=[['index.html','Home'],['games.html','Games'],['about.html','About'],['games.html#search','Search']];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function loadGames(){const r=await fetch('games.json');if(!r.ok)throw 0;return(await r.json()).sort((a,b)=>(b.releaseDate||'').localeCompare(a.releaseDate||''))}
const isNew=g=>g.releaseDate&&(Date.now()-new Date(g.releaseDate))<30*864e5;
function card(g,i=0){const u='game.html?id='+encodeURIComponent(g.id);return `<div class="card" style="animation-delay:${i*60}ms"><a href="${u}"><img loading="lazy" src="${esc(g.thumbnail)}" alt="${esc(g.title)}"></a><div class="b"><h3>${esc(g.title)}</h3><p>${esc(g.description)}</p><div><span class="tag">${esc(g.category)}</span>${isNew(g)?'<span class="tag new">NEW</span>':''}</div><a class="btn" href="${u}">PLAY</a></div></div>`}
(function(){
 const cur=location.pathname.split('/').pop()||'index.html';
 document.body.insertAdjacentHTML('afterbegin',`<div id="loader"><i></i></div><nav><div class="wrap"><a class="logo" href="index.html">🎮 Yahya Games</a><ul>${PAGES.map(([h,t])=>`<li><a href="${h}" class="${h===cur?'on':''}">${t}</a></li>`).join('')}</ul></div></nav>`);
 document.body.insertAdjacentHTML('beforeend','<footer>© <span id="yr"></span> Yahya Games</footer>');
 document.getElementById('yr').textContent=new Date().getFullYear();
 addEventListener('load',()=>{const l=document.getElementById('loader');l.style.opacity=0;setTimeout(()=>l.remove(),400)});
})();
