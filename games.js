(async()=>{
 const grid=document.getElementById('grid'),q=document.getElementById('q'),chips=document.getElementById('chips'),cnt=document.getElementById('count');
 let all=[],cat='All';
 try{all=await loadGames()}catch(e){grid.innerHTML='<div class="empty">Could not load games.json</div>';return}
 const cats=['All',...new Set(all.map(g=>g.category))];
 chips.innerHTML=cats.map(c=>`<button class="chip${c==='All'?' on':''}">${esc(c)}</button>`).join('');
 function render(){const t=q.value.trim().toLowerCase();
  const r=all.filter(g=>(cat==='All'||g.category===cat)&&(!t||[g.title,g.description,g.category].join(' ').toLowerCase().includes(t)));
  cnt.textContent=r.length;
  grid.innerHTML=r.length?r.map(card).join(''):'<div class="empty" style="grid-column:1/-1">😕 No games found. Try another search or category.</div>'}
 chips.onclick=e=>{if(!e.target.matches('.chip'))return;cat=e.target.textContent;[...chips.children].forEach(c=>c.classList.toggle('on',c===e.target));render()};
 q.oninput=render;render();
 if(location.hash==='#search')q.focus();
})();
