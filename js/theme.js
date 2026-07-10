// theme.js — simple theme toggle persisted in localStorage
(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('uv-theme');
  if(stored === 'light') root.classList.add('light');

  function toggle(){
    const isLight = root.classList.toggle('light');
    localStorage.setItem('uv-theme', isLight ? 'light' : 'dark');
  }

  window.addEventListener('DOMContentLoaded',()=>{
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.addEventListener('click',toggle);
  });
})();
