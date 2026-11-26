(function(){
var PID='3005703556454522',KEY='kira_cookies',loaded=false;
function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
function loadPixel(){
  if(loaded)return;loaded=true;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init',PID);fbq('track','PageView');
}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href*="wa.me"],a[href*="api.whatsapp.com"]');
  if(a&&window.fbq&&loaded)fbq('track','Contact',{content_name:'WhatsApp'});
},true);
var css='#ckb{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:min(620px,calc(100% - 24px));background:#fff;color:#3b2a4d;border:2px solid #7B1FA2;border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.28);padding:14px 16px;z-index:99999;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:none}#ckb.on{display:block}#ckb p{margin:0 0 10px}#ckb a{color:#7B1FA2;font-weight:700}#ckb .r{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap}#ckb button{border:0;border-radius:99px;padding:9px 18px;font:700 14px system-ui,sans-serif;cursor:pointer}#ckb .ok{background:#7B1FA2;color:#fff}#ckb .no{background:#efe6f5;color:#5b2a86}.ckl{display:block;text-align:center;font:12px system-ui,sans-serif;color:#7a6a88;padding:10px 8px 16px}.ckl a{color:#7B1FA2}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function build(){
  var b=document.getElementById('ckb');if(b)return b;
  b=document.createElement('div');b.id='ckb';b.setAttribute('role','dialog');b.setAttribute('aria-label','Aviso de cookies');
  b.innerHTML='<p>Usamos cookies e o Pixel da Meta para entender como o site é usado e mostrar anúncios da Kira Padaria Pet. Você pode aceitar ou recusar. Saiba mais na <a href="/politica-de-privacidade">Política de Privacidade</a>.</p><div class="r"><button class="no" type="button">Recusar</button><button class="ok" type="button">Aceitar</button></div>';
  b.querySelector('.ok').onclick=function(){set('1');b.classList.remove('on');loadPixel()};
  b.querySelector('.no').onclick=function(){set('0');b.classList.remove('on')};
  document.body.appendChild(b);return b;
}
function init(){
  var v=get();
  if(v==='1')loadPixel();else if(v===null)build().classList.add('on');
  var f=document.getElementById('ckfoot');
  if(f&&!f.innerHTML)f.innerHTML='<a href="/politica-de-privacidade">Política de Privacidade</a> · <a href="#" id="ckre">Gerenciar cookies</a>';
  var re=document.getElementById('ckre');if(re)re.onclick=function(e){e.preventDefault();build().classList.add('on')};
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
