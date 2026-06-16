const fallbackCar={
  make:"Volkswagen",
  model:"Golf GTI",
  engine:"EA888 Gen 3 2.0T",
  hp:241,
  target:350,
  torque:"273 LB-FT",
  image:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Volkswagen_Golf_VIII_GTI_IMG_3604.jpg"
};

const stages=[
  {title:"Inspection",text:"Service, scan, logs",state:"In Progress",days:"1-2 Days",checks:["OBD Scan","Fluid Check","Leak Inspection","Performance Log"]},
  {title:"Base Setup",text:"ECU baseline + calibration",state:"Queued",days:"2-3 Days",checks:["Baseline Log","Spark Plugs","Fuel Quality","Safe Map"]},
  {title:"Cooling",text:"Control heat before adding power",state:"Queued",days:"1-2 Days",checks:["IAT Review","Intercooler","Coolant Check","Heat Soak Test"]},
  {title:"Airflow",text:"Intake and exhaust flow",state:"Queued",days:"2-4 Days",checks:["Intake Path","Downpipe Plan","Fitment","Sound Check"]},
  {title:"Grip & Brakes",text:"Tires, pads, fluid",state:"Queued",days:"2-3 Days",checks:["Tires","Pads","Brake Fluid","Alignment"]},
  {title:"Final Validation",text:"Test, inspect, refine",state:"Queued",days:"1-2 Days",checks:["Dyno Pull","Road Log","Leak Check","Final Review"]}
];

const colors=["#ff1493","#1788ff","#ad42ff","#ff6d2d","#ff3f73","#d520ff"];
const params=new URLSearchParams(window.location.search);
const car={
  make:params.get("make")||fallbackCar.make,
  model:params.get("model")||fallbackCar.model,
  engine:params.get("engine")||fallbackCar.engine,
  hp:Number(params.get("currentHp"))||fallbackCar.hp,
  target:Number(params.get("targetHp"))||fallbackCar.target,
  torque:params.get("torque")||fallbackCar.torque,
  image:params.get("image")||fallbackCar.image
};

const carPanel=document.getElementById("carPanel");
const stageRail=document.getElementById("stageRail");
const detailPanel=document.getElementById("detailPanel");
const progressBox=document.getElementById("progressBox");
const summaryStrip=document.getElementById("summaryStrip");
const roadmapIntro=document.getElementById("roadmapIntro");

function safeImage(img){img.onerror=()=>{img.src=fallbackCar.image}}
function progressFor(index){return Math.round(((index+1)/stages.length)*100)}
function renderCarPanel(){
  carPanel.innerHTML=`
    <a href="index.html#planner"><- Back to Build</a>
    <div class="vehicle-title">
      <span class="vehicle-logo">${car.make.slice(0,1)}</span>
      <div><small>${car.make}</small><h2>${car.model}</h2></div>
    </div>
    <img src="${car.image}" alt="${car.make} ${car.model}">
    <p class="engine-pill">${car.engine}</p>
    <div class="power-grid">
      <div><small>Base</small><strong>${car.hp} HP</strong><small>${car.torque}</small></div>
      <span>-></span>
      <div class="target"><small>Target</small><strong>${car.target} HP</strong><small>380 LB-FT</small></div>
    </div>
    <button class="summary-btn" type="button">View Build Summary -></button>
  `;
  safeImage(carPanel.querySelector("img"));
}
function renderStages(){
  stageRail.innerHTML=stages.map((stage,index)=>`
    <button class="stage-card ${index===0?"active":""}" type="button" data-index="${index}" style="color:${colors[index]}">
      <span class="stage-number">${String(index+1).padStart(2,"0")}</span>
      <h3>${stage.title}</h3>
      <p>${stage.text}</p>
      ${index===0?`<span class="stage-state">${stage.state}</span>`:""}
      <i class="route-dot"></i>
    </button>
  `).join("");
  stageRail.querySelectorAll(".stage-card").forEach(button=>{
    button.addEventListener("click",()=>activateStage(Number(button.dataset.index)));
  });
}
function renderProgress(index){
  const progress=progressFor(index);
  progressBox.innerHTML=`
    <header><span>Overall Progress</span><strong>${progress}%</strong></header>
    <div class="progress-line"><i style="width:${progress}%"></i></div>
    <p>${index+1} of ${stages.length} stages completed</p>
  `;
}
function renderDetail(index){
  const stage=stages[index];
  detailPanel.innerHTML=`
    <div>
      <h2><span>${String(index+1).padStart(2,"0")}</span>${stage.title}</h2>
      <p>${stage.text} to ensure your car is ready.</p>
    </div>
    <div class="checks">
      ${stage.checks.map((check,checkIndex)=>`<span>${check}<br><small>${checkIndex===3&&index===0?"In Progress":"Completed"}</small></span>`).join("")}
    </div>
    <div class="detail-time">
      <small>Est. Time</small>
      <strong>${stage.days}</strong>
      <button type="button">View Details -></button>
    </div>
  `;
}
function renderSummary(){
  summaryStrip.innerHTML=`
    <div><small>Target Power</small><strong>${car.target} HP</strong></div>
    <div><small>Reliability First</small><strong>Proven Parts & Tuned Safety</strong></div>
    <div><small>Track Ready</small><strong>Performance You Can Feel</strong></div>
    <div><small>Total Est. Time</small><strong>~8-10 Weeks</strong></div>
  `;
}
function activateStage(index){
  stageRail.querySelectorAll(".stage-card").forEach(card=>card.classList.remove("active"));
  stageRail.querySelector(`[data-index="${index}"]`)?.classList.add("active");
  renderProgress(index);
  renderDetail(index);
}

roadmapIntro.innerHTML=`Follow the path to ${car.target} HP.<br>Six stages. One purpose. Peak performance.`;
renderCarPanel();
renderStages();
renderSummary();
activateStage(0);
