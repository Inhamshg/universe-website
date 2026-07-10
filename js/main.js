// main.js — small interactive behaviors
(function(){
  document.addEventListener('DOMContentLoaded',()=>{
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileToggle && mobileMenu){
      mobileToggle.addEventListener('click', ()=>{ const open = mobileMenu.hasAttribute('hidden'); if(open){ mobileMenu.removeAttribute('hidden'); } else { mobileMenu.setAttribute('hidden',''); } });
    }

    // close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(a=>a.addEventListener('click', ()=>{ const mobileMenu = document.getElementById('mobile-menu'); if(mobileMenu) mobileMenu.setAttribute('hidden',''); }));

  });
})();
