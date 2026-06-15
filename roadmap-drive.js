function enableRoadDrive(){
  const track=document.querySelector('.road-track');
  const steps=[...document.querySelectorAll('.road-step')];
  if(!track||!steps.length)return;
  const marker=document.createElement('div');
  const title=document.querySelector('.build-card h1')?.textContent||'Car';
  marker.className='road-car';
  marker.textContent=title.includes('Golf')?'GTI':title.trim().slice(0,3).toUpperCase();
  track.prepend(marker);
  function move(i){steps.forEach(x=>x.classList.remove('active'));steps[i].classList.add('active');marker.style.transform=`translateY(${steps[i].offsetTop-8}px)`}
  steps.forEach((step,i)=>step.addEventListener('click',()=>move(i)));
  setTimeout(()=>move(0),80);
}
window.addEventListener('load',enableRoadDrive);
