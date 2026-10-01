(async()=>{
 try{const all=await loadGames();
  document.getElementById('count').textContent=all.length;
  document.getElementById('feat').innerHTML=all.filter(g=>g.featured).map(card).join('')||'<div class="empty">No featured games yet.</div>';
  document.getElementById('new').innerHTML=all.slice(0,4).map(card).join('');
 }catch(e){document.getElementById('feat').innerHTML='<div class="empty">Could not load games.json</div>'}
})();
