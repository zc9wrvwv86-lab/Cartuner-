function enableRoadDrive(){
  const track=document.querySelector('.road-track');
  const steps=[...document.querySelectorAll('.road-step')];
  if(!track||!steps.length)return;
  const style=document.createElement('style');
  style.textContent='.road-track{position:relative}.road-car{position:absolute;left:18px;top:24px;z-index:5;width:54px;height:54px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#ec4899,#fb923c);color:#111827;font-weight:950;box-shadow:0 12px 30px rgba(236,72,153,.45);transition:transform .7s cubic-bezier(.2,.8,.2,1)}.road-step{border:0;text-align:left;color:inherit;cursor:pointer;background:transparent;width:100%}.road-step.active .road-card{border-color:rgba(236,72,153,.9);transform:translateX(12px) scale(1.02)}.road-card{transition:transform .22s ease,border-color .22s ease}.road-step:nth-of-type(4) .road-card:after{content:"Exhaust detail";display:inline-block;margin-top:10px;padding:7px 11px;border-radius:999px;background:#07111f;color:#fff;font-size:12px;animation:smokeMove 1.6s ease-in-out infinite}@keyframes smokeMove{50%{transform:translateX(8px);opacity:.75}}';
  document.head.appendChild(style);
  const marker=document.createElement('div');
  const title=document.querySelector('.road-hero h1')?.textContent||'Car';
  marker.className='road-car';
  marker.textContent=title.includes('Golf')?'GTI':title.trim().slice(0,3).toUpperCase();
  track.prepend(marker);
  function move(i){steps.forEach(s=>s.classList.remove('active'));steps[i].classList.add('active');marker.style.transform=`translateY(${steps[i].offsetTop-8}px)`}
  steps.forEach((step,i)=>{step.setAttribute('role','button');step.tabIndex=0;step.addEventListener('click',()=>move(i));step.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();move(i)}})});
  setTimeout(()=>move(0),80);
}
window.addEventListener('load',enableRoadDrive);
