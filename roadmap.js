const cars = [
  { make: "BMW", model: "M340i", engine: "B58", hp: 382, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_BMW_M340i_xDrive_in_Black_Sapphire_Metallic,_rear_left.jpg" },
  { make: "Toyota", model: "GR Supra", engine: "B58", hp: 382, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Toyota_GR_Supra_(United_States).png" },
  { make: "Volkswagen", model: "Golf GTI", engine: "EA888", hp: 241, img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Volkswagen_Golf_VIII_GTI_IMG_3604.jpg" },
  { make: "Audi", model: "RS3", engine: "EA855", hp: 401, img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80" },
  { make: "Nissan", model: "GT-R", engine: "VR38DETT", hp: 565, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2018_Nissan_GT-R_Premium_in_Super_Silver,_Front_Right,_10-11-2022.jpg" },
  { make: "Honda", model: "Civic Type R", engine: "K20C1", hp: 306, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2018_Honda_Civic_GT_Type_R_VTEC_2.0_Front.jpg" },
  { make: "Ford", model: "Mustang GT", engine: "Coyote 5.0", hp: 460, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Mustang_GT_5.0_facelift.jpg" },
  { make: "Tesla", model: "Model 3 Performance", engine: "Dual Motor EV", hp: 450, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80", ev: true }
];

const stepsIce = [
  ["Inspection", "Service, scan, logs"],
  ["Base Setup", "ECU baseline calibration"],
  ["Cooling", "Temperatures under control"],
  ["Airflow", "Intake and exhaust path"],
  ["Grip & Brakes", "Tires, pads, fluid"],
  ["Final Validation", "Test, inspect, refine"]
];
const stepsEv = [
  ["Inspection", "Tires, brakes, suspension"],
  ["Grip", "Tires and alignment"],
  ["Brakes", "Pads, fluid, rotors"],
  ["Thermal", "Battery and drive-unit temps"],
  ["Validation", "Repeatable performance"]
];
function norm(value){return String(value||"").toLowerCase().replace(/[^a-z0-9]/g,"")}
function fallback(img){img.onerror=()=>{img.src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80"}}
function pickCar(){const p=new URLSearchParams(location.search);return cars.find(c=>norm(c.make)===norm(p.get("make"))&&norm(c.model)===norm(p.get("model")))||cars.find(c=>norm(c.engine)===norm(p.get("engine")))||cars[0]}
function render(){
  const app=document.getElementById("roadmapApp"),p=new URLSearchParams(location.search),car=pickCar(),target=Number(p.get("targetHp"))||car.hp+100,steps=car.ev?stepsEv:stepsIce;
  app.innerHTML=`<section class="road-hero"><a class="hero-btn" href="index.html#planner">← Back to Build</a><p class="badge">Current build</p><h1>${car.make}<br>${car.model}</h1><img src="${car.img}" alt="${car.make} ${car.model}"><p>${car.engine}</p><div class="road-spec"><span>Base ${car.hp} HP</span><span>Target ${target} HP</span></div></section><section class="road-track"><div class="windshield-hud"><span>Overall progress</span><strong>1 of ${steps.length}</strong></div>${steps.map((s,i)=>`<article class="road-step" style="--step:${i}"><div class="road-pin">${String(i+1).padStart(2,"0")}</div><div class="road-card"><span>Step ${i+1}</span><h2>${s[0]}</h2><p>${s[1]}</p></div></article>`).join("")}<div class="cockpit-frame"></div></section><section class="road-warning">Click each stage to drive forward through the roadmap. Verify fitment and local requirements before buying parts.</section>`;
  app.querySelectorAll("img").forEach(fallback);
}
render();
