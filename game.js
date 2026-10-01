(async()=>{
 const box=document.getElementById('game'),id=new URLSearchParams(location.search).get('id');
 let g;try{g=(await loadGames()).find(x=>String(x.id)===id)}catch(e){}
 if(!g){box.innerHTML='<div class="empty">Game not found.<br><br><a class="btn" href="games.html">Back to Games</a></div>';return}
 document.title=g.title+' | Yahya Games';
 box.innerHTML=`<div class="gp"><img src="${esc(g.thumbnail)}" alt="${esc(g.title)}"><div><span class="tag">${esc(g.category)}</span><h1>${esc(g.title)}</h1><p>${esc(g.description)}</p><div class="acts"><button class="btn" id="play">▶ Play</button><button class="btn alt" id="fs">⛶ Fullscreen</button><button class="btn alt" id="sh">Share</button><a class="btn alt" href="games.html">← Back to Games</a></div></div></div><div id="stage" hidden></div>`;
 const st=document.getElementById('stage'),$=i=>document.getElementById(i);
 const start=()=>{if(!st.firstChild){const f=document.createElement('iframe');f.src=g.gameUrl;f.allow='fullscreen;autoplay;gamepad';f.allowFullscreen=true;st.append(f)}st.hidden=false};
 $('play').onclick=()=>{start();st.scrollIntoView({behavior:'smooth'})};
 $('fs').onclick=()=>{start();(st.requestFullscreen||st.webkitRequestFullscreen).call(st)};
 $('sh').onclick=async()=>{try{navigator.share?await navigator.share({title:g.title,url:location.href}):(await navigator.clipboard.writeText(location.href),$('sh').textContent='Link copied ✓')}catch(e){}};
})();
