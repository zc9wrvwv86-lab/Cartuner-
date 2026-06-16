const cars=[
  {brand:"Toyota",model:"Supra",engine:"3.0L I6 Turbo (B58)",hp:382,target:600,torque:"368 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/2020_Toyota_GR_Supra_(United_States).png"},
  {brand:"Volkswagen",model:"Golf GTI",engine:"EA888 Gen 3 2.0T",hp:241,target:350,torque:"273 LB-FT",image:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Volkswagen_Golf_VIII_GTI_IMG_3604.jpg"},
  {brand:"BMW",model:"M340i",engine:"B58",hp:382,target:500,torque:"369 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/2020_BMW_M340i_xDrive_in_Black_Sapphire_Metallic,_rear_left.jpg"},
  {brand:"Audi",model:"RS3",engine:"EA855 2.5T",hp:401,target:560,torque:"369 LB-FT",image:"https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80"},
  {brand:"Nissan",model:"GT-R",engine:"VR38DETT",hp:565,target:800,torque:"467 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/2018_Nissan_GT-R_Premium_in_Super_Silver,_Front_Right,_10-11-2022.jpg"},
  {brand:"Honda",model:"Civic Type R",engine:"K20C1",hp:306,target:420,torque:"295 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/2018_Honda_Civic_GT_Type_R_VTEC_2.0_Front.jpg"},
  {brand:"Ford",model:"Mustang GT",engine:"Coyote 5.0",hp:460,target:700,torque:"420 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Mustang_GT_5.0_facelift.jpg"},
  {brand:"Porsche",model:"911 Turbo S",engine:"3.8L Twin Turbo",hp:640,target:760,torque:"590 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Porsche_911_Turbo_S_IMG_0793.jpg"},
  {brand:"Mercedes-AMG",model:"C63 S",engine:"M177 4.0 BiTurbo",hp:503,target:650,torque:"516 LB-FT",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_C_63_S_Edition_1_%28W_205%29_%E2%80%93_Frontansicht%2C_15._M%C3%A4rz_2015%2C_D%C3%BCsseldorf.jpg"}
];

const make=document.getElementById("make");
const model=document.getElementById("model");
const engine=document.getElementById("engine");
const currentHp=document.getElementById("currentHp");
const targetHp=document.getElementById("targetHp");
const form=document.getElementById("tuneForm");
const heroCar=document.getElementById("heroCar");

function unique(values){return [...new Set(values)]}
function option(value){const item=document.createElement("option");item.value=value;item.textContent=value;return item}
function selectedCar(){
  return cars.find(car=>car.brand===make.value&&car.model===model.value&&car.engine===engine.value)||cars[0];
}
function fillSelect(select,values,preferred){
  select.innerHTML="";
  values.forEach(value=>select.appendChild(option(value)));
  select.value=values.includes(preferred)?preferred:values[0];
}
function syncModels(){
  const available=cars.filter(car=>car.brand===make.value);
  fillSelect(model,unique(available.map(car=>car.model)),model.value);
  syncEngines();
}
function syncEngines(){
  const available=cars.filter(car=>car.brand===make.value&&car.model===model.value);
  fillSelect(engine,unique(available.map(car=>car.engine)),engine.value);
  syncPower();
}
function syncPower(){
  const car=selectedCar();
  currentHp.value=car.hp;
  if(!targetHp.value||Number(targetHp.value)<=car.hp) targetHp.value=car.target;
  if(heroCar){
    heroCar.src=car.image;
    heroCar.alt=`${car.brand} ${car.model}`;
  }
}
function openRoadmap(){
  const car=selectedCar();
  const params=new URLSearchParams({
    make:car.brand,
    model:car.model,
    engine:car.engine,
    currentHp:car.hp,
    targetHp:Number(targetHp.value)||car.target,
    torque:car.torque,
    image:car.image
  });
  window.location.href=`roadmap.html?${params.toString()}`;
}

fillSelect(make,unique(cars.map(car=>car.brand)),"Toyota");
syncModels();
make.addEventListener("change",syncModels);
model.addEventListener("change",syncEngines);
engine.addEventListener("change",syncPower);
form.addEventListener("submit",event=>{event.preventDefault();openRoadmap()});
