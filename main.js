
// main.js - simple interactivity
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu toggle
  var btn = document.getElementById('btnMenu');
  var nav = document.getElementById('mainNav');
  btn && btn.addEventListener('click', function(){
    nav.classList.toggle('hidden');
  });
});
