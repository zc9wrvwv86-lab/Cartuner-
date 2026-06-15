const cars=[
 {make:"BMW",model:"M340i",engine:"B58",hp:382,target:500,img:"https://commons.wikimedia.org/wiki/Special:FilePath/2020_BMW_M340i_xDrive_in_Black_Sapphire_Metallic,_rear_left.jpg"},
 {make:"Toyota",model:"GR Supra",engine:"B58",hp:382,target:550,img:"https://commons.wikimedia.org/wiki/Special:FilePath/2020_Toyota_GR_Supra_(United_States).png"},
 {make:"Volkswagen",model:"Golf GTI",engine:"EA888 Gen 3 2.0T",hp:241,target:350,img:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Volkswagen_Golf_VIII_GTI_IMG_3604.jpg"},
 {make:"Audi",model:"RS3",engine:"EA855",hp:401,target:560,img:"https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80"},
 {make:"Nissan",model:"GT-R",engine:"VR38DETT",hp:565,target:800,img:"https://commons.wikimedia.org/wiki/Special:FilePath/2018_Nissan_GT-R_Premium_in_Super_Silver,_Front_Right,_10-11-2022.jpg"},
 {make:"Honda",model:"Civic Type R",engine:"K20C1",hp:306,target:420,img:"https://commons.wikimedia.org/wiki/Special:FilePath/2018_Honda_Civic_GT_Type_R_VTEC_2.0_Front.jpg"},
 {make:"Ford",model:"Mustang GT",engine:"Coyote 5.0",hp:460,target:700,img:"https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Mustang_GT_5.0_facelift.jpg"},
 {make:"Tesla",model:"Model 3 Performance",engine:"Dual Motor EV",hp:450,target:450,img:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",ev:true}
];
const iceStages=[
 {id:1,title:"Inspection",text:"Service, scan, logs",checks:["OBD Scan","Fluid Check","Leak Inspection","Performance Log"]},
 {id:2,title:"Base Setup",text:"ECU baseline + calibration",checks:["Baseline Log","Spark Plugs","Fuel Quality","Safe Map"]},
 {id:3,title:"Cooling",text:"Intercooler and temps",checks:["IAT Review","Intercooler","Coolant Check","Heat Soak Test"]},
 {id:4,title:"Airflow",text:"Intake + exhaust",checks:["Intake Path","Exhaust Detail","Fitment","Sound Check"]},
 {id:5,title:"Grip & Brakes",text:"Tires, pads, fluid",checks:["Tires","Pads","Brake Fluid","Alignment"]},
 {id:6,title:"Final Validation",text:"Test, inspect, refine",checks:["Dyno Pull","Road Log","Leak Check","Final Review"]}
];
const evStages=[
 {id:1,title:"Inspection",text:"Tires, brakes, suspension",checks:["Tire Check","Brake Check","Alignment","Temp Review"]},
 {id:2,title:"Grip",text:"Tires and alignment",checks:["Tires","Alignment","Wheel Weight","Pressure"]},
 {id:3,title:"Brakes",text:"Pads, fluid, rotors",checks:["Pads","Rotors","Fluid","Cooling"]},
 {id:4,title:"Thermal",text:"Battery and drive temps",checks:["Battery Temps","Drive Unit","Cooling","Logs"]},
 {id:5,title:"Validation",text:"Repeatable performance",checks:["Repeat Runs","Temps","Inspection","Review"]}
];
function norm(v){return String(v||"").toLowerCase().replace(/[^a-z0-9]/g,"")}
function params(){return new URLSearchParams(location.search)}
function getCar(){const p=params();return cars.find(c=>norm(c.make)===norm(p.get("make"))&&norm(c.model)===norm(p.get("model")))||cars.find(c=>norm(c.engine)===norm(p.get("engine")))||cars[0]}
function fallback(img){img.onerror=()=>{img.src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80"}}
function setDetail(stage,car,target,index,total){document.getElementById("detailPanel").innerHTML=`<div><strong>${String(stage.id).padStart(2,"0")} ${stage.title}</strong><p>${stage.text}</p></div><div class="checks">${stage.checks.map(c=>`<span>${c}</span>`).join("")}</div><button type="button">View Details →</button>`;document.getElementById("progressBox").innerHTML=`<span>OVERALL PROGRESS</span><strong>${Math.round(((index+1)/total)*100)}%</strong><div class="progress-line"><i style="width:${Math.round(((index+1)/total)*100)}%"></i></div><p>${index+1} of ${total} stages completed</p>`;}
function render(){const car=getCar(),p=params(),target=Number(p.get("targetHp"))||car.target||car.hp+100,stages=car.ev?evStages:iceStages;document.getElementById("carPanel").innerHTML=`<a href="index.html#planner">← Back to Build</a><div class="brand-row"><span class="brand-mark">${car.make.slice(0,2).toUpperCase()}</span><div><small>${car.make}</small><h1>${car.model}</h1></div></div><img src="${car.img}" alt="${car.make} ${car.model}"><p class="engine-pill">${car.engine}</p><div class="power-row"><div><small>BASE</small><strong>${car.hp} HP</strong></div><span>→</span><div><small>TARGET</small><strong>${target} HP</strong></div></div><button class="summary-btn" type="button">View Build Summary →</button>`;document.getElementById("roadmapApp").innerHTML=`<div class="dashboard-bg"></div><div class="title-block"><h1>Build Roadmap</h1><p>Follow the path to ${target} HP.<br>${stages.length} stages. One purpose. Peak performance.</p><div class="chips"><span>${stages.length} STAGES</span><span>~8–10 WEEKS</span></div></div><div id="progressBox" class="progress-box"></div><div class="stages"><div class="route-line"></div>${stages.map((s,i)=>`<article class="stage s${i+1} ${i===0?"active":""}" data-index="${i}"><div class="num">${String(s.id).padStart(2,"0")}</div><h3>${s.title}</h3><p>${s.text}</p></article>`).join("")}<div id="carMarker" class="car-marker">${car.model.includes("Golf")?"GTI":car.make.slice(0,2).toUpperCase()}</div></div><div id="detailPanel" class="detail-panel"></div><div class="summary-strip"><span>⚡ Target Power <b>${target} HP</b></span><span>🛡 Reliability First</span><span>🏁 Track Ready</span><span>⏱ ~8–10 Weeks</span></div><div class="cockpit"></div>`;document.querySelectorAll("img").forEach(fallback);const marker=document.getElementById("carMarker");const pos=[[30,72],[24,70],[44,70],[59,69],[74,68],[88,67]];function activate(i){document.querySelectorAll(".stage").forEach(s=>s.classList.remove("active"));document.querySelector(`.stage[data-index="${i}"]`)?.classList.add("active");marker.style.left=(pos[i]?.[0]||30)+"%";marker.style.top=(pos[i]?.[1]||70)+"%";setDetail(stages[i],car,target,i,stages.length)}document.querySelectorAll(".stage").forEach(el=>el.addEventListener("click",()=>activate(Number(el.dataset.index))));activate(0)}
render();
