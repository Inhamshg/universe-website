// animations.js — small scroll reveal and count-up
(function(){
  function onScroll(){
    document.querySelectorAll('.reveal').forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80) el.classList.add('visible');
    });
  }
  function runCountUp(){
    document.querySelectorAll('.count').forEach(el=>{
      if(el.dataset.started) return; el.dataset.started = '1';
      const target = +el.dataset.target || 0; let cur = 0; const step = Math.max(1,Math.floor(target/80));
      const id = setInterval(()=>{ cur += step; if(cur>=target){ el.textContent = target.toLocaleString(); clearInterval(id);} else el.textContent = cur.toLocaleString(); },16);
    });
  }
  window.addEventListener('scroll', onScroll);
  window.addEventListener('DOMContentLoaded', ()=>{ onScroll(); runCountUp(); });
})();
