function enableRoadDrive(){
  const track=document.querySelector('.road-track');
  const steps=[...document.querySelectorAll('.road-step')];
  if(!track||!steps.length)return;
  const style=document.createElement('style');
  style.textContent='.road-track{position:relative}.road-car{position:absolute;left:18px;top:24px;z-index:5;width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:#22c55e;color:#04130a;font-weight:950;box-shadow:0 12px 30px rgba(0,0,0,.4);transition:transform .55s cubic-bezier(.2,.8,.2,1)}.road-step{border:0;text-align:left;color:inherit;cursor:pointer;background:transparent;width:100%}.road-step.active .road-card{border-color:rgba(34,197,94,.8);transform:translateX(8px)}.road-card{transition:transform .2s ease,border-color .2s ease}';
  document.head.appendChild(style);
  const marker=document.createElement('div');
  marker.className='road-car';
  marker.textContent='CAR';
  track.prepend(marker);
  function move(i){steps.forEach(s=>s.classList.remove('active'));steps[i].classList.add('active');marker.style.transform=`translateY(${steps[i].offsetTop-8}px)`}
  steps.forEach((step,i)=>{step.setAttribute('role','button');step.tabIndex=0;step.addEventListener('click',()=>move(i));step.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();move(i)}})});
  setTimeout(()=>move(0),80);
}
window.addEventListener('load',enableRoadDrive);
