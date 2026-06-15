const cars = [
  { make: "BMW", model: "M340i", engine: "B58", hp: 382, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_BMW_M340i_xDrive_in_Black_Sapphire_Metallic,_rear_left.jpg" },
  { make: "Toyota", model: "GR Supra", engine: "B58", hp: 382, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Toyota_GR_Supra_(United_States).png" },
  { make: "Nissan", model: "GT-R", engine: "VR38DETT", hp: 565, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2018_Nissan_GT-R_Premium_in_Super_Silver,_Front_Right,_10-11-2022.jpg" },
  { make: "Honda", model: "Civic Type R", engine: "K20C1", hp: 306, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2018_Honda_Civic_GT_Type_R_VTEC_2.0_Front.jpg" },
  { make: "Ford", model: "Mustang GT", engine: "Coyote 5.0", hp: 460, img: "https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Mustang_GT_5.0_facelift.jpg" },
  { make: "Tesla", model: "Model 3 Performance", engine: "Dual Motor EV", hp: 450, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_Model_3_Performance_AWD_IMG_5678.jpg", ev: true }
];

const stepsIce = [
  ["Inspect", "Check the car before planning parts."],
  ["Base setup", "Start with service items and a safe calibration."],
  ["Cooling", "Keep temperatures stable before aiming higher."],
  ["Grip", "Match tires and brakes to the power goal."],
  ["Support", "Review fuel, drivetrain and reliability needs."],
  ["Validate", "Log data, test carefully and inspect again."]
];

const stepsEv = [
  ["Inspect", "Check tires, brakes, suspension and temperatures."],
  ["Grip", "Improve tires and alignment first."],
  ["Brakes", "Upgrade pads, fluid and rotors for the car weight."],
  ["Thermal", "Watch battery and drive-unit temperatures."],
  ["Validate", "Test and inspect after repeated use."]
];

function norm(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }
function fallback(img) { img.onerror = () => { img.src = "https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Mustang_GT_5.0_facelift.jpg"; }; }

function pickCar() {
  const p = new URLSearchParams(location.search);
  return cars.find(c => norm(c.make) === norm(p.get("make")) && norm(c.model) === norm(p.get("model"))) ||
    cars.find(c => norm(c.engine) === norm(p.get("engine"))) || cars[0];
}

function render() {
  const app = document.getElementById("roadmapApp");
  const p = new URLSearchParams(location.search);
  const car = pickCar();
  const target = Number(p.get("targetHp")) || car.hp + 100;
  const steps = car.ev ? stepsEv : stepsIce;

  app.innerHTML = `
    <section class="road-hero">
      <div><p class="badge">Visual roadmap</p><h1>${car.make} ${car.model}</h1><p>${car.engine} · Base ${car.hp} HP → Target ${target} HP</p><a class="hero-btn" href="index.html#planner">Back to planner</a></div>
      <img src="${car.img}" alt="${car.make} ${car.model}">
    </section>
    <section class="road-track">
      ${steps.map((s, i) => `<article class="road-step" style="--step:${i}"><div class="road-pin">${i + 1}</div><div class="road-card"><span>Step ${i + 1}</span><h2>${s[0]}</h2><p>${s[1]}</p></div></article>`).join("")}
    </section>
    <section class="road-warning">Always verify exact fitment, local rules and professional installation requirements.</section>
  `;
  app.querySelectorAll("img").forEach(fallback);
}

render();
