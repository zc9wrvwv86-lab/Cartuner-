const imageFallback = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80";

const engineDatabase = {
  n54: { name: "BMW N54", safeRange: "400-500 HP with strong supporting mods", commonParts: ["ECU calibration", "Front mount intercooler", "Charge pipe", "High-flow exhaust section", "High-pressure fuel pump", "Injector health check", "Oil cooler"] },
  n55: { name: "BMW N55", safeRange: "360-450 HP depending on turbo and fuel setup", commonParts: ["ECU calibration", "Charge pipe", "Intercooler", "High-flow exhaust section", "Spark plugs", "Fuel pump upgrade", "Turbo inlet"] },
  b48: { name: "BMW B48", safeRange: "300-380 HP with careful heat management", commonParts: ["ECU calibration", "Intake", "Intercooler", "Spark plugs", "High-flow exhaust section", "Transmission tune review"] },
  b58: { name: "BMW B58", safeRange: "420-550 HP with proper calibration", commonParts: ["ECU calibration", "High-flow exhaust section", "Intake", "High-pressure fuel pump", "Transmission tune", "Heat exchanger"] },
  s55: { name: "BMW S55", safeRange: "500-650 HP with crank hub and cooling considerations", commonParts: ["ECU calibration", "Crank hub inspection", "High-flow exhaust sections", "Charge cooling", "Spark plugs", "TCU tune"] },
  s58: { name: "BMW S58", safeRange: "560-720 HP with fuel, cooling and drivetrain support", commonParts: ["ECU calibration", "Heat exchanger", "Intakes", "Fuel pump review", "Spark plugs", "Transmission calibration"] },
  s63: { name: "BMW S63", safeRange: "650-850 HP with cooling and drivetrain support", commonParts: ["ECU calibration", "Intakes", "Charge cooling", "Spark plugs", "Fueling review", "Transmission calibration"] },
  ea113: { name: "VW/Audi EA113", safeRange: "280-380 HP depending on turbo and fuel system", commonParts: ["ECU calibration", "HPFP internals", "Intercooler", "Intake", "Diverter valve", "Clutch review"] },
  ea888: { name: "VW/Audi EA888", safeRange: "300-450 HP depending on turbo generation", commonParts: ["ECU calibration", "TCU tune", "Intake", "High-flow exhaust section", "Intercooler", "Turbo inlet", "Spark plugs"] },
  ea839: { name: "Audi EA839 3.0 TFSI", safeRange: "430-560 HP with cooling and fuel review", commonParts: ["ECU calibration", "Transmission tune", "Intake", "Heat exchanger", "Spark plugs", "Fuel system review"] },
  ea855: { name: "Audi 2.5 TFSI EA855", safeRange: "450-600 HP with turbo and fueling support", commonParts: ["ECU calibration", "TCU tune", "Intercooler", "High-flow exhaust section", "Fueling upgrade", "Turbo inlet", "Spark plugs"] },
  m133: { name: "Mercedes-AMG M133", safeRange: "400-500 HP with strong cooling", commonParts: ["ECU calibration", "Intake", "Intercooler", "Spark plugs", "Charge pipes", "Transmission tune review"] },
  m139: { name: "Mercedes-AMG M139", safeRange: "430-520 HP with careful thermal management", commonParts: ["ECU calibration", "Intake", "High-flow exhaust section", "Intercooler", "Cooling upgrades", "Spark plugs"] },
  m177: { name: "Mercedes-AMG M177", safeRange: "600-750 HP with cooling and transmission support", commonParts: ["ECU calibration", "CPC/TCU tune", "High-flow exhaust sections", "Intakes", "Heat exchanger", "Spark plugs"] },
  m178: { name: "Mercedes-AMG M178", safeRange: "600-760 HP with charge cooling support", commonParts: ["ECU calibration", "Intakes", "Cooling upgrades", "Spark plugs", "Fuel system review", "Transmission tune"] },
  "2jz": { name: "Toyota 2JZ", safeRange: "500-700 HP with strong fueling and turbo setup", commonParts: ["Turbo system", "Fuel injectors", "Fuel pump", "Engine management", "Intercooler", "Clutch/transmission support"] },
  "1jz": { name: "Toyota 1JZ", safeRange: "400-600 HP with turbo and fuel support", commonParts: ["Turbo system", "Fuel system", "Engine management", "Intercooler", "Clutch", "Cooling upgrades"] },
  g16egts: { name: "Toyota G16E-GTS", safeRange: "330-420 HP with conservative torque limits", commonParts: ["ECU calibration", "Intercooler", "Intake", "Exhaust flow upgrade", "Oil cooling", "Clutch review"] },
  k20: { name: "Honda K20", safeRange: "250-400 HP depending on naturally aspirated or boosted setup", commonParts: ["ECU management", "Header or turbo system", "Fuel injectors", "Fuel pump", "Cooling upgrades", "Clutch"] },
  k20c1: { name: "Honda K20C1", safeRange: "360-480 HP with fuel and cooling support", commonParts: ["ECU calibration", "Intercooler", "Intake", "Exhaust flow upgrade", "Fuel system review", "Clutch review"] },
  k24: { name: "Honda K24", safeRange: "250-450 HP depending on boost and internals", commonParts: ["ECU management", "Turbo system or header", "Injectors", "Fuel pump", "Clutch", "Cooling upgrades"] },
  rb26: { name: "Nissan RB26", safeRange: "450-650 HP with oiling and turbo support", commonParts: ["Turbo upgrade", "Fuel system", "ECU", "Intercooler", "Oil control upgrades", "Clutch"] },
  sr20det: { name: "Nissan SR20DET", safeRange: "300-450 HP with turbo and fuel support", commonParts: ["Turbo upgrade", "Intercooler", "Fuel injectors", "Fuel pump", "ECU", "Clutch"] },
  vr30ddtt: { name: "Nissan VR30DDTT", safeRange: "450-600 HP with cooling and fuel support", commonParts: ["ECU calibration", "Heat exchanger", "Intakes", "Fuel pump review", "Spark plugs", "Transmission tune"] },
  vr38: { name: "Nissan VR38", safeRange: "650-900 HP with transmission and fuel support", commonParts: ["ECU calibration", "TCM tune", "Fuel injectors", "Fuel pumps", "Intakes", "High-flow exhaust sections", "Transmission upgrades"] },
  ls3: { name: "GM LS3", safeRange: "480-650 HP depending on cam or forced induction", commonParts: ["Cam kit", "Headers", "Intake", "ECU calibration", "Fuel system", "Clutch or torque converter"] },
  lt1: { name: "GM LT1", safeRange: "520-700 HP depending on cam or supercharger build", commonParts: ["ECU calibration", "Headers", "Intake", "Cam package", "Fuel system", "Cooling upgrades"] },
  lt4: { name: "GM LT4", safeRange: "700-850 HP with cooling and fueling support", commonParts: ["ECU calibration", "Pulley package", "Heat exchanger", "Fuel system review", "Headers", "Transmission tune"] },
  coyote: { name: "Ford 5.0 Coyote", safeRange: "500-750 HP depending on naturally aspirated or supercharger build", commonParts: ["ECU calibration", "Headers", "Cold air intake", "Supercharger system", "Fuel injectors", "Oil pump gears"] },
  ecoboost23: { name: "Ford 2.3 EcoBoost", safeRange: "320-420 HP with cooling and turbo support", commonParts: ["ECU calibration", "Intercooler", "Intake", "Spark plugs", "Turbo upgrade review", "Clutch review"] },
  hemi57: { name: "Dodge 5.7 HEMI", safeRange: "430-560 HP depending on cam and airflow", commonParts: ["ECU calibration", "Headers", "Cam kit", "Intake", "Fuel system", "Transmission tune"] },
  hemi64: { name: "Dodge 6.4 HEMI", safeRange: "500-700 HP depending on cam or supercharger", commonParts: ["ECU calibration", "Headers", "Cam kit", "Fuel system", "Cooling upgrades", "Transmission tune"] },
  hellcat62: { name: "Dodge Hellcat 6.2", safeRange: "760-950 HP with fueling and cooling support", commonParts: ["ECU calibration", "Pulley package", "Cooling upgrades", "Fuel injectors", "Fuel pumps", "Transmission tune"] },
  fa20: { name: "Subaru/Toyota FA20", safeRange: "230-350 HP with careful torque and cooling limits", commonParts: ["ECU calibration", "Header", "Flex-fuel kit", "Oil cooler", "Clutch", "Turbo or supercharger system"] },
  fa24: { name: "Subaru/Toyota FA24", safeRange: "270-380 HP with cooling and torque limits", commonParts: ["ECU calibration", "Header", "Oil cooler", "Flex-fuel kit", "Clutch", "Brake upgrade"] },
  ej257: { name: "Subaru EJ257", safeRange: "330-450 HP with reliability-focused support", commonParts: ["ECU calibration", "High-flow exhaust section", "Fuel pump", "Injectors", "Intercooler", "Air/oil separator", "Cylinder 4 cooling mod"] },
  "4g63": { name: "Mitsubishi 4G63", safeRange: "400-600 HP with turbo and fuel support", commonParts: ["Turbo upgrade", "Fuel injectors", "Fuel pump", "ECU calibration", "Intercooler", "Clutch"] },
  "4b11t": { name: "Mitsubishi 4B11T", safeRange: "360-500 HP with fuel and cooling support", commonParts: ["ECU calibration", "Intercooler", "Fuel pump", "Injectors", "Turbo upgrade review", "Clutch"] },
  "13brew": { name: "Mazda 13B-REW", safeRange: "330-500 HP with careful rotary reliability planning", commonParts: ["ECU management", "Fuel system", "Intercooler", "Cooling upgrades", "Ignition refresh", "Turbo review"] },
  mzrdisi: { name: "Mazda MZR DISI", safeRange: "300-400 HP with fuel pump and turbo support", commonParts: ["ECU calibration", "HPFP internals", "Intercooler", "Intake", "Turbo inlet", "Clutch"] },
  thetaii: { name: "Hyundai Theta II", safeRange: "320-420 HP with cooling and fuel support", commonParts: ["ECU calibration", "Intercooler", "Intake", "Spark plugs", "Fuel system review", "Clutch review"] },
  tesladualmotor: { name: "Tesla Dual Motor", safeRange: "Software and thermal limits depend on model", commonParts: ["Tires", "Brake pads", "Brake fluid", "Suspension", "Thermal monitoring", "Alignment"] }
};

const carCatalog = [
  { make: "BMW", model: "335i Coupe", engine: "N54", currentHp: 300, targetHp: 450, image: "https://source.unsplash.com/900x600/?bmw,335i,e92", note: "Twin-turbo six-cylinder BMW platform with strong bolt-on support." },
  { make: "BMW", model: "M340i", engine: "B58", currentHp: 382, targetHp: 500, image: "https://source.unsplash.com/900x600/?bmw,m340i", note: "Modern B58 daily build with cooling and fuel support." },
  { make: "BMW", model: "M3", engine: "S58", currentHp: 473, targetHp: 650, image: "https://source.unsplash.com/900x600/?bmw,m3,g80", note: "S58 performance sedan with huge tuning headroom." },
  { make: "Volkswagen", model: "Golf GTI", engine: "EA888", currentHp: 241, targetHp: 350, image: "https://source.unsplash.com/900x600/?vw,golf,gti", note: "Compact hot hatch with ECU, TCU, intake and intercooler path." },
  { make: "Volkswagen", model: "Golf R", engine: "EA888", currentHp: 315, targetHp: 430, image: "https://source.unsplash.com/900x600/?volkswagen,golf,r", note: "All-wheel-drive EA888 platform for quick street builds." },
  { make: "Audi", model: "S3", engine: "EA888", currentHp: 306, targetHp: 420, image: "https://source.unsplash.com/900x600/?audi,s3", note: "EA888 sedan/hatch platform with strong stage upgrades." },
  { make: "Audi", model: "RS3", engine: "EA855", currentHp: 401, targetHp: 560, image: "https://source.unsplash.com/900x600/?audi,rs3", note: "Five-cylinder 2.5 TFSI platform with sound and power potential." },
  { make: "Audi", model: "RS5", engine: "EA839", currentHp: 444, targetHp: 560, image: "https://source.unsplash.com/900x600/?audi,rs5", note: "Twin-turbo V6 build with cooling and drivetrain focus." },
  { make: "Mercedes-Benz", model: "A45 AMG", engine: "M139", currentHp: 416, targetHp: 500, image: "https://source.unsplash.com/900x600/?mercedes,a45,amg", note: "High-output four-cylinder AMG with thermal limits to respect." },
  { make: "Mercedes-Benz", model: "C63 AMG", engine: "M177", currentHp: 503, targetHp: 650, image: "https://source.unsplash.com/900x600/?mercedes,c63,amg", note: "V8 AMG platform with calibration, cooling and tire needs." },
  { make: "Toyota", model: "Supra", engine: "B58", currentHp: 382, targetHp: 550, image: "https://source.unsplash.com/900x600/?toyota,supra,a90", note: "A90/A91 Supra B58 build with ECU, fuel and heat exchanger path." },
  { make: "Toyota", model: "GR Corolla", engine: "G16E-GTS", currentHp: 300, targetHp: 380, image: "https://source.unsplash.com/900x600/?toyota,gr,corolla", note: "Three-cylinder turbo AWD hatch with conservative torque planning." },
  { make: "Nissan", model: "GT-R", engine: "VR38DETT", currentHp: 565, targetHp: 800, image: "https://source.unsplash.com/900x600/?nissan,gtr,r35", note: "VR38 supercar platform requiring fuel and transmission support." },
  { make: "Nissan", model: "Z", engine: "VR30DDTT", currentHp: 400, targetHp: 550, image: "https://source.unsplash.com/900x600/?nissan,z", note: "Twin-turbo Z platform with cooling and calibration focus." },
  { make: "Honda", model: "Civic Type R", engine: "K20C1", currentHp: 306, targetHp: 420, image: "https://source.unsplash.com/900x600/?honda,civic,type-r", note: "K20C1 hatch with intercooler, fuel and tire needs." },
  { make: "Ford", model: "Mustang GT", engine: "Coyote 5.0", currentHp: 460, targetHp: 700, image: "https://source.unsplash.com/900x600/?ford,mustang,gt", note: "Coyote V8 platform with naturally aspirated or supercharged routes." },
  { make: "Chevrolet", model: "Camaro SS", engine: "LT1", currentHp: 455, targetHp: 620, image: "https://source.unsplash.com/900x600/?chevrolet,camaro,ss", note: "LT1 V8 car with cam, exhaust-flow and calibration options." },
  { make: "Dodge", model: "Challenger Hellcat", engine: "Hellcat 6.2", currentHp: 717, targetHp: 850, image: "https://source.unsplash.com/900x600/?dodge,challenger,hellcat", note: "Supercharged HEMI build with cooling and fuel system checks." },
  { make: "Subaru", model: "WRX STI", engine: "EJ257", currentHp: 310, targetHp: 400, image: "https://source.unsplash.com/900x600/?subaru,wrx,sti", note: "EJ reliability build where cooling, oiling and tune quality matter." },
  { make: "Mitsubishi", model: "Evo IX", engine: "4G63", currentHp: 286, targetHp: 450, image: "https://source.unsplash.com/900x600/?mitsubishi,lancer,evolution", note: "4G63 rally legend with turbo, fuel and clutch upgrades." },
  { make: "Mazda", model: "RX-7", engine: "13B-REW", currentHp: 276, targetHp: 380, image: "https://source.unsplash.com/900x600/?mazda,rx7", note: "Rotary platform needing careful ignition, cooling and fuel planning." },
  { make: "Tesla", model: "Model 3 Performance", engine: "Tesla Dual Motor", currentHp: 450, targetHp: 450, image: "https://source.unsplash.com/900x600/?tesla,model-3,performance", note: "EV focus: tires, brakes, suspension, alignment and thermal consistency." }
];

const presets = carCatalog.slice(0, 18).map(car => ({ ...car }));
const makeOptions = [...new Set(carCatalog.map(car => car.make).concat(["Porsche", "Lexus", "Acura", "Infiniti", "Cadillac", "Volvo", "Jaguar", "Land Rover", "BYD"]))];
const modelOptions = [...new Set(carCatalog.map(car => car.model).concat(["GR86", "Jetta GLI", "TT RS", "718 Cayman", "Focus ST", "Focus RS", "Corvette C7", "Corvette C8", "370Z", "S2000", "Elantra N", "BRZ", "MX-5 Miata", "Model S Plaid"]))];
const engineOptions = [...new Set(Object.values(engineDatabase).map(engine => engine.name.replace(/^(BMW|VW\/Audi|Audi|Mercedes-AMG|Toyota|Honda|Nissan|GM|Ford|Dodge|Subaru\/Toyota|Subaru|Mitsubishi|Mazda|Hyundai|Tesla)\s*/, "")).concat(["N54", "N55", "B48", "B58", "S55", "S58", "S63", "EA113", "EA888", "EA839", "EA855", "M133", "M139", "M177", "M178", "2JZ-GTE", "1JZ-GTE", "G16E-GTS", "K20", "K20C1", "K24", "RB26DETT", "SR20DET", "VR30DDTT", "VR38DETT", "LS3", "LT1", "LT4", "Coyote 5.0", "EcoBoost 2.3", "HEMI 5.7", "HEMI 6.4", "Hellcat 6.2", "FA20", "FA24", "EJ257", "4G63", "4B11T", "13B-REW", "MZR DISI", "Theta II", "Tesla Dual Motor"]))];
const factoryHpDatabase = carCatalog.map(car => ({ make: car.make, model: car.model, engine: car.engine, hp: car.currentHp }));

const partLibrary = [
  { key: "ecu", title: "ECU / TCU Calibration", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80", text: "Controls boost, fueling, ignition, torque and safety limits. Use a reputable professional tuner." },
  { key: "intake", title: "Intake System", image: "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=900&q=80", text: "Improves airflow and sound when matched with heat shielding and proper calibration." },
  { key: "exhaust", title: "Exhaust Flow Section", image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c2d81f?auto=format&fit=crop&w=900&q=80", text: "Can improve flow and tone. Always choose parts that fit local road and emissions rules." },
  { key: "intercooler", title: "Intercooler / Heat Exchanger", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80", text: "Helps lower intake temperatures and keep power consistent during repeated pulls." },
  { key: "turbo", title: "Turbo / Supercharger", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80", text: "Large power gains require fuel, cooling, drivetrain and calibration support." },
  { key: "fuel", title: "Fuel System", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80", text: "Pumps, injectors and sensors keep the engine supplied safely at higher power." },
  { key: "brakes", title: "Brakes & Tires", image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=80", text: "More power needs better grip and stopping power: tires, pads, fluid and rotors." },
  { key: "drivetrain", title: "Drivetrain Support", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80", text: "Clutch, gearbox, differential, axles and mounts should be checked when torque rises." }
];

const exhaustOptions = [
  { title: "OEM+ Sport Cat-Back", level: "Balanced daily tone", image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c2d81f?auto=format&fit=crop&w=600&q=80", text: "Clean look, mild sound increase and comfortable daily driving." },
  { title: "Valved Performance System", level: "Quiet / loud modes", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80", text: "Switchable sound profile for comfort, weekend drives and show builds." },
  { title: "Track Sound Setup", level: "Closed-course focus", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80", text: "Aggressive tone concept for closed-course builds with legality checks first." }
];

const form = document.getElementById("tuneForm");
const results = document.getElementById("results");
const presetsEl = document.getElementById("presets");

function normalizeEngine(engine) {
  return engine.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizeText(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function setImageFallback(img) {
  img.addEventListener("error", () => {
    img.src = imageFallback;
  }, { once: true });
}

function setupAutocomplete(inputId, dropdownId, options) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !dropdown) return;

  function showOptions() {
    const value = input.value.toLowerCase().trim();
    const matches = options.filter(option => option.toLowerCase().includes(value)).slice(0, 20);
    dropdown.innerHTML = "";

    matches.forEach(option => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = option;
      item.addEventListener("mousedown", event => {
        event.preventDefault();
        input.value = option;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        dropdown.classList.remove("show");
      });
      item.addEventListener("touchstart", event => {
        event.preventDefault();
        input.value = option;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        dropdown.classList.remove("show");
      });
      dropdown.appendChild(item);
    });

    dropdown.classList.toggle("show", matches.length > 0);
  }

  input.addEventListener("focus", showOptions);
  input.addEventListener("input", showOptions);
  document.addEventListener("click", event => {
    if (!input.closest(".autocomplete")?.contains(event.target)) dropdown.classList.remove("show");
  });
}

function autoFillFactoryHp() {
  const make = document.getElementById("make").value.trim();
  const model = document.getElementById("model").value.trim();
  const engine = document.getElementById("engine").value.trim();
  const currentHpInput = document.getElementById("currentHp");
  if (!make || !model || !engine || !currentHpInput) return;

  const match = factoryHpDatabase.find(car =>
    normalizeText(car.make) === normalizeText(make) &&
    normalizeText(car.model) === normalizeText(model) &&
    normalizeText(car.engine) === normalizeText(engine)
  );

  if (match) currentHpInput.value = match.hp;
}

function getStage(percentGain) {
  if (percentGain <= 15) return { stage: "Stage 1", difficulty: "Low", budget: "€500-€1,500", description: "Software-focused build with basic bolt-ons and conservative reliability goals." };
  if (percentGain <= 35) return { stage: "Stage 2", difficulty: "Medium", budget: "€1,500-€4,000", description: "Bolt-on build with improved airflow, cooling and professional calibration." };
  if (percentGain <= 65) return { stage: "Stage 2+", difficulty: "High", budget: "€4,000-€9,000", description: "Advanced build requiring fuel, cooling, drivetrain and monitoring upgrades." };
  return { stage: "Custom Build", difficulty: "Very high", budget: "€9,000+", description: "Large power increase. Requires expert planning, engine health checks and serious supporting mods." };
}

function supportingMods(percentGain, usage, fuel) {
  const parts = [
    "Pre-build inspection: compression test, leakdown test and code scan",
    "Fresh oil, filters, spark plugs and ignition health check",
    "Professional ECU calibration from a reputable tuner",
    "Data logging: boost, AFR/lambda, knock, intake temperature and oil temperature",
    "High-quality performance tires matched to the power goal"
  ];

  if (percentGain > 5) parts.push("Panel filter or intake system if legal in your region", "Baseline dyno run before modifications");
  if (percentGain > 10) parts.push("Stage 1 ECU calibration with conservative torque limits", "Colder spark plugs where recommended by the tuner");
  if (percentGain > 20) parts.push("Intercooler or heat exchanger upgrade", "Charge pipes, boost hoses and clamps inspection", "Transmission/TCU tune where supported");
  if (percentGain > 30) parts.push("Emissions-compliant exhaust flow upgrade", "Fuel pump review or fuel system upgrade", "Brake pads, brake fluid and rotor inspection");
  if (percentGain > 40) parts.push("Upgraded fuel injectors where required", "Turbo inlet, intake manifold or throttle-body review", "Engine and gearbox mounts inspection");
  if (percentGain > 55) parts.push("Turbocharger, supercharger or hybrid turbo upgrade", "Clutch, torque converter or gearbox upgrade", "Limited-slip differential and axle/driveshaft inspection", "Oil cooler or upgraded radiator");
  if (percentGain > 75) parts.push("Built engine planning: rods, pistons, bearings and head studs", "Advanced engine management review", "Professional custom dyno calibration", "Chassis, suspension and safety inspection");
  if (fuel === "ethanol") parts.push("Ethanol content sensor", "Ethanol-safe fuel lines, pump and injector compatibility check", "Flex-fuel calibration");
  if (fuel === "race") parts.push("Closed-course calibration map only", "Fuel-specific spark, boost and safety limit setup");
  if (usage === "daily") parts.push("Daily reliability setup: conservative boost, torque and temperature limits");
  if (usage === "weekend") parts.push("Weekend setup: stronger cooling and wider performance tires");
  if (usage === "track") parts.push("Track setup: oil cooling, brake cooling, track pads and high-temp brake fluid", "Catch can or air/oil separator where suitable");
  if (usage === "show") parts.push("Show build setup: visual engine bay parts, exhaust sound, wheels and stance");
  return parts;
}

function getModVisual(part) {
  const name = part.toLowerCase();
  if (name.includes("exhaust") || name.includes("header")) return partLibrary.find(part => part.key === "exhaust");
  if (name.includes("intercooler") || name.includes("heat exchanger") || name.includes("cooling") || name.includes("radiator")) return partLibrary.find(part => part.key === "intercooler");
  if (name.includes("intake") || name.includes("airflow") || name.includes("inlet")) return partLibrary.find(part => part.key === "intake");
  if (name.includes("turbo") || name.includes("supercharger")) return partLibrary.find(part => part.key === "turbo");
  if (name.includes("fuel") || name.includes("injector") || name.includes("ethanol") || name.includes("pump")) return partLibrary.find(part => part.key === "fuel");
  if (name.includes("brake") || name.includes("tire") || name.includes("suspension")) return partLibrary.find(part => part.key === "brakes");
  if (name.includes("ecu") || name.includes("tune") || name.includes("calibration") || name.includes("dyno")) return partLibrary.find(part => part.key === "ecu");
  if (name.includes("clutch") || name.includes("gearbox") || name.includes("transmission") || name.includes("drivetrain") || name.includes("differential")) return partLibrary.find(part => part.key === "drivetrain");
  return { title: "Performance Part", image: imageFallback, text: "Check fitment, reliability and compatibility with the complete build." };
}

function openModModal(part) {
  const visual = getModVisual(part);
  const modal = document.getElementById("modModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = visual.image;
  setImageFallback(modalImage);
  document.getElementById("modalTitle").textContent = visual.title;
  document.getElementById("modalText").textContent = `${part}: ${visual.text}`;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function setupModModalClicks() {
  document.querySelectorAll(".part").forEach(card => {
    card.addEventListener("click", () => openModModal(card.dataset.part));
  });
}

function getCarImage(make, model) {
  const car = carCatalog.find(item => normalizeText(item.make) === normalizeText(make) && normalizeText(item.model) === normalizeText(model));
  return car?.image || imageFallback;
}

function generatePlan(data) {
  const gain = data.targetHp - data.currentHp;
  const percentGain = Math.round((gain / data.currentHp) * 100);
  const stage = getStage(percentGain);
  const engineKey = normalizeEngine(data.engine);
  const engineInfo = engineDatabase[engineKey] || engineDatabase[engineKey.replace("dett", "")] || engineDatabase[engineKey.replace("gte", "")];

  if (gain <= 0) {
    results.innerHTML = `<h2>Target must be higher</h2><p>Your target horsepower should be higher than your current horsepower.</p>`;
    return;
  }

  const image = getCarImage(data.make, data.model);
  const parts = supportingMods(percentGain, data.usage, data.fuel);
  const engineParts = engineInfo ? engineInfo.commonParts : [];

  results.innerHTML = `
    <div class="result-hero"><img src="${image}" alt="${data.make} ${data.model}"></div>
    <div class="result-header">
      <div><h2>${data.make} ${data.model}</h2><p>${data.engine} · ${data.currentHp} HP → ${data.targetHp} HP</p></div>
      <span class="stage">${stage.stage}</span>
    </div>
    <p>${stage.description}</p>
    <div class="meta">
      <div><span>Power gain</span><strong>+${gain} HP</strong></div>
      <div><span>Increase</span><strong>${percentGain}%</strong></div>
      <div><span>Difficulty</span><strong>${stage.difficulty}</strong></div>
    </div>
    <p><strong>Estimated budget:</strong> ${stage.budget}</p>
    ${engineInfo ? `<div class="warning">Known engine: ${engineInfo.name}. Typical tuning range: ${engineInfo.safeRange}.</div>` : `<div class="warning">Unknown engine. This is a generic plan. Verify compatibility before buying parts.</div>`}
    <h3>Recommended build path</h3>
    <div class="parts">
      ${[...new Set([...parts, ...engineParts])].map(part => `<button class="part" type="button" data-part="${part.replace(/"/g, "&quot;")}"><strong>${part}</strong><span>Tap to view image, explanation and fitment notes.</span></button>`).join("")}
    </div>
    <h3>Reliability checklist</h3>
    <p>Before major upgrades, inspect fluids, scan for codes, verify engine health and monitor knock, AFR, boost, oil temperature and intake temperature.</p>
  `;
  const resultImg = results.querySelector(".result-hero img");
  if (resultImg) setImageFallback(resultImg);
  setupModModalClicks();
}

function renderPresets() {
  if (!presetsEl) return;
  presetsEl.innerHTML = "";
  presets.forEach(preset => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "preset";
    card.style.setProperty("--image", `url("${preset.image}")`);
    card.innerHTML = `<strong>${preset.make} ${preset.model}</strong><p>${preset.engine}: ${preset.currentHp} HP → ${preset.targetHp} HP</p>`;
    card.addEventListener("click", () => {
      document.getElementById("make").value = preset.make;
      document.getElementById("model").value = preset.model;
      document.getElementById("engine").value = preset.engine;
      document.getElementById("currentHp").value = preset.currentHp;
      document.getElementById("targetHp").value = preset.targetHp;
      generatePlan({ ...preset, usage: "daily", fuel: "premium" });
      document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
    });
    presetsEl.appendChild(card);
  });
}

function makeGarageSection() {
  if (document.getElementById("garage")) return;
  const presetSection = presetsEl?.closest(".card");
  if (!presetSection) return;

  const garage = document.createElement("section");
  garage.id = "garage";
  garage.className = "card section-card garage-section";
  garage.innerHTML = `
    <div class="section-heading">
      <div><p class="badge">Second site area</p><h2>Cars & parts garage</h2></div>
      <p>Browse more public car-photo cards and a visual parts library. Tap a car to load it into the planner.</p>
    </div>
    <div class="garage-tabs" role="tablist" aria-label="Garage tabs">
      <button class="garage-tab active" type="button" data-tab="cars">Cars</button>
      <button class="garage-tab" type="button" data-tab="parts">Parts</button>
    </div>
    <div id="garageCars" class="garage-panel active"></div>
    <div id="partsGallery" class="garage-panel"></div>
  `;
  presetSection.insertAdjacentElement("afterend", garage);

  garage.querySelectorAll(".garage-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      garage.querySelectorAll(".garage-tab").forEach(item => item.classList.remove("active"));
      garage.querySelectorAll(".garage-panel").forEach(panel => panel.classList.remove("active"));
      tab.classList.add("active");
      garage.querySelector(tab.dataset.tab === "cars" ? "#garageCars" : "#partsGallery").classList.add("active");
    });
  });
}

function renderGarageCars() {
  const garageCars = document.getElementById("garageCars");
  if (!garageCars) return;
  garageCars.innerHTML = `<div class="garage-grid">${carCatalog.map(car => `
    <article class="garage-car">
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <div><span>${car.engine}</span><h3>${car.make} ${car.model}</h3><p>${car.note}</p><button type="button" data-car="${car.make}|${car.model}|${car.engine}|${car.currentHp}|${car.targetHp}">Load build</button></div>
    </article>
  `).join("")}</div>`;
  garageCars.querySelectorAll("img").forEach(setImageFallback);
  garageCars.querySelectorAll("button[data-car]").forEach(button => {
    button.addEventListener("click", () => {
      const [make, model, engine, currentHp, targetHp] = button.dataset.car.split("|");
      document.getElementById("make").value = make;
      document.getElementById("model").value = model;
      document.getElementById("engine").value = engine;
      document.getElementById("currentHp").value = currentHp;
      document.getElementById("targetHp").value = targetHp;
      generatePlan({ make, model, engine, currentHp: Number(currentHp), targetHp: Number(targetHp), usage: "daily", fuel: "premium" });
      document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderPartsGallery() {
  const partsGallery = document.getElementById("partsGallery");
  if (!partsGallery) return;
  partsGallery.innerHTML = `<div class="parts-showcase">${partLibrary.map(part => `
    <button class="part-tile" type="button" data-part="${part.title}">
      <img src="${part.image}" alt="${part.title}">
      <strong>${part.title}</strong>
      <span>${part.text}</span>
    </button>
  `).join("")}</div>`;
  partsGallery.querySelectorAll("img").forEach(setImageFallback);
  partsGallery.querySelectorAll(".part-tile").forEach(tile => tile.addEventListener("click", () => openModModal(tile.dataset.part)));
}

function makeExhaustDemo() {
  if (document.getElementById("partsDemo")) return;
  const garage = document.getElementById("garage");
  if (!garage) return;
  const demo = document.createElement("section");
  demo.id = "partsDemo";
  demo.className = "card section-card exhaust-demo";
  demo.innerHTML = `
    <div class="section-heading">
      <div><p class="badge">Animated preview</p><h2>Swipe exhaust setups into the car</h2></div>
      <p>Choose an exhaust concept below. The selected part slides into the car preview.</p>
    </div>
    <div class="install-preview">
      <div class="preview-car"><img src="${carCatalog[1].image}" alt="Preview car"><div class="preview-glow"></div></div>
      <article id="activeExhaust" class="active-exhaust"></article>
    </div>
    <div id="exhaustSlider" class="exhaust-slider"></div>
  `;
  garage.insertAdjacentElement("afterend", demo);
  setImageFallback(demo.querySelector(".preview-car img"));
}

function renderExhaust(index = 0) {
  const active = document.getElementById("activeExhaust");
  const slider = document.getElementById("exhaustSlider");
  if (!active || !slider) return;
  const option = exhaustOptions[index];
  active.classList.remove("slide-in");
  void active.offsetWidth;
  active.classList.add("slide-in");
  active.innerHTML = `<img src="${option.image}" alt="${option.title}"><div><span>${option.level}</span><h3>${option.title}</h3><p>${option.text}</p></div>`;
  setImageFallback(active.querySelector("img"));
  slider.innerHTML = exhaustOptions.map((item, itemIndex) => `<button class="exhaust-choice ${itemIndex === index ? "active" : ""}" type="button" data-index="${itemIndex}"><strong>${item.title}</strong><span>${item.level}</span></button>`).join("");
  slider.querySelectorAll("button").forEach(button => button.addEventListener("click", () => renderExhaust(Number(button.dataset.index))));
}

function setupSwipe() {
  const demo = document.getElementById("partsDemo");
  if (!demo) return;
  let startX = 0;
  let activeIndex = 0;
  demo.addEventListener("touchstart", event => { startX = event.touches[0].clientX; }, { passive: true });
  demo.addEventListener("touchend", event => {
    const diff = event.changedTouches[0].clientX - startX;
    if (Math.abs(diff) < 35) return;
    activeIndex = diff < 0 ? (activeIndex + 1) % exhaustOptions.length : (activeIndex - 1 + exhaustOptions.length) % exhaustOptions.length;
    renderExhaust(activeIndex);
  });
}

setupAutocomplete("make", "makeDropdown", makeOptions);
setupAutocomplete("model", "modelDropdown", modelOptions);
setupAutocomplete("engine", "engineDropdown", engineOptions);
["make", "model", "engine"].forEach(id => {
  document.getElementById(id)?.addEventListener("input", autoFillFactoryHp);
  document.getElementById(id)?.addEventListener("change", autoFillFactoryHp);
});

form?.addEventListener("submit", event => {
  event.preventDefault();
  generatePlan({
    make: document.getElementById("make").value.trim(),
    model: document.getElementById("model").value.trim(),
    engine: document.getElementById("engine").value.trim(),
    currentHp: Number(document.getElementById("currentHp").value),
    targetHp: Number(document.getElementById("targetHp").value),
    usage: document.getElementById("usage").value,
    fuel: document.getElementById("fuel").value
  });
});

document.getElementById("closeModal")?.addEventListener("click", () => {
  const modal = document.getElementById("modModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

document.getElementById("modModal")?.addEventListener("click", event => {
  if (event.target.id === "modModal") {
    event.currentTarget.classList.remove("show");
    event.currentTarget.setAttribute("aria-hidden", "true");
  }
});

renderPresets();
makeGarageSection();
renderGarageCars();
renderPartsGallery();
makeExhaustDemo();
renderExhaust(0);
setupSwipe();
