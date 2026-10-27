const $=id=>document.getElementById(id);
const fmt=n=>new Intl.NumberFormat('es-AR',{style:'currency',currency:'USD'}).format(Number(n)||0);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cotiwoPortal=location.pathname.includes('clientes.html')?'buyer':'company';
async function api(url,opts={}){const r=await fetch(url,{...opts,headers:opts.body instanceof FormData?{'X-Cotiwo-Portal':cotiwoPortal,...(opts.headers||{})}:{'Content-Type':'application/json','X-Cotiwo-Portal':cotiwoPortal,...(opts.headers||{})}});let d;try{d=await r.json()}catch{d={detail:'Respuesta inesperada del servidor'}}if(!r.ok)throw Error(typeof d.detail==='string'?d.detail:JSON.stringify(d.detail));return d}
function toast(s){$('toast').textContent=s;$('toast').style.display='block';setTimeout(()=>$('toast').style.display='none',3200)}
function show(id){document.querySelectorAll('[data-screen]').forEach(el=>el.classList.add('hide'));$(id).classList.remove('hide')}
function formValue(id){return $(id).value.trim()}
async function logout(){await api('/api/logout',{method:'POST'});location.href='/'}
function icon(category){let c=(category||'').toLowerCase();return c.includes('motor')?'⚙️':c.includes('ilumin')?'💡':c.includes('eléctr')?'🔌':c.includes('sensor')?'📟':c.includes('herr')?'🧰':c.includes('neum')?'🧪':'📦'}
