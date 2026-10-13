/* ===== Configuración: pega aquí el enlace oficial de Abac en el App Store ===== */
var APP_STORE_URL = "";
document.querySelectorAll("[data-store]").forEach(function(a){if(APP_STORE_URL){a.href=APP_STORE_URL;a.removeAttribute("onclick");a.target="_blank";a.rel="noopener"}});
/* ===== */
(function(){
var d=document,h=d.documentElement;h.classList.add('js');
var L='es';
try{var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='es'){L=q;localStorage.setItem('abac-lang',q)}else{var s=localStorage.getItem('abac-lang');if(s==='en'||s==='es')L=s}}catch(e){}
function set(l,save){
 L=l;h.lang=l;
 d.querySelectorAll('.langs button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l?'true':'false')});
 var m=window.ABAC_META&&window.ABAC_META[l];
 if(m){d.title=m.t;
  [['meta[name="description"]',m.d],['meta[property="og:title"]',m.t],['meta[property="og:description"]',m.d],['meta[name="twitter:title"]',m.t],['meta[name="twitter:description"]',m.d]].forEach(function(p){var e=d.querySelector(p[0]);if(e)e.setAttribute('content',p[1])});
  var ol=d.querySelector('meta[property="og:locale"]');if(ol)ol.setAttribute('content',l==='en'?'en_US':'es_MX');}
 if(save){try{localStorage.setItem('abac-lang',l)}catch(e){}}
}
d.querySelectorAll('.langs button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.set,true)})});
set(L,false);
var els=d.querySelectorAll('.reveal,.prv');
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('in')})}
})();
(function(){var b=document.getElementById('themebtn');if(!b)return;var r=document.documentElement;
b.addEventListener('click',function(){var t=r.getAttribute('data-theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var n=dark?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('abac-theme',n)}catch(e){}})})();

/* ABAC-MOTION: contadores y "tecleo" del teclado */
(function(){
var h=document.documentElement;
if(!(window.CSS&&CSS.registerProperty))h.classList.add('noprops');
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||!('IntersectionObserver' in window))return;
function money(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}
var cs=document.querySelectorAll('.count');
cs.forEach(function(e){e.textContent=money(0)});
var amt=document.getElementById('amt');
if(amt){amt.textContent='$0.00';amt.style.opacity='.35'}
var io=new IntersectionObserver(function(es){es.forEach(function(en){
 if(!en.isIntersecting)return;var e=en.target;io.unobserve(e);
 if(e.classList.contains('count')){var to=+e.dataset.to,t0=null;setTimeout(function(){requestAnimationFrame(function step(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1500),k=1-Math.pow(1-p,3);e.textContent=money(to*k);if(p<1)requestAnimationFrame(step)})},650)}
 else if(e.id==='amt'){var keys=document.querySelectorAll('.keys i');function key(c){var r=null;keys.forEach(function(k){if(k.dataset.k===c)r=k});if(r){r.classList.add('press');setTimeout(function(){r.classList.remove('press')},320)}}
  var seq=[['1','$1',1800],['8','$18',2300],['5','$185.00',2800]];
  seq.forEach(function(s){setTimeout(function(){key(s[0]);amt.style.opacity='1';amt.textContent=s[1]},s[2])})}
})},{threshold:.4});
cs.forEach(function(e){io.observe(e)});if(amt)io.observe(amt);
})();
