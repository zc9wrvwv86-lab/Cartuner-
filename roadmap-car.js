function enhanceRouteCar(){
  const marker=document.getElementById('carMarker');
  const carImage=document.querySelector('#carPanel img');
  if(!marker||!carImage)return;
  marker.innerHTML='';
  const img=document.createElement('img');
  img.src=carImage.src;
  img.alt='Roadmap car';
  marker.appendChild(img);
  document.querySelectorAll('.stage').forEach(stage=>{
    stage.addEventListener('click',()=>{
      marker.classList.remove('driving');
      void marker.offsetWidth;
      marker.classList.add('driving');
    });
  });
}
window.addEventListener('load',()=>setTimeout(enhanceRouteCar,80));
