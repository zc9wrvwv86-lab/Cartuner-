function setupLaunchCar(){
  const form=document.getElementById('tuneForm');
  const source=document.querySelector('.hero-visual img');
  if(!form||!source)return;
  const style=document.createElement('style');
  style.textContent='.launch-car{position:fixed;left:8vw;bottom:18vh;width:260px;z-index:9999;pointer-events:none;filter:drop-shadow(0 0 26px rgba(236,72,153,.8));animation:launchCarDrive .75s ease forwards}@keyframes launchCarDrive{to{left:78vw;bottom:58vh;width:80px;opacity:0;transform:scale(.6)}}';
  document.head.appendChild(style);
  form.addEventListener('submit',()=>{
    const car=document.createElement('img');
    car.className='launch-car';
    car.src=source.src;
    car.alt='Launching car';
    document.body.appendChild(car);
    setTimeout(()=>car.remove(),900);
  });
}
window.addEventListener('load',setupLaunchCar);
