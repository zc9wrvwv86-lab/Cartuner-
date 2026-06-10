const engineDatabase = {
  n54: {
    name: "BMW N54",
    safeRange: "400–500 HP with strong supporting mods",
    commonParts: ["ECU tune", "Intercooler", "Charge pipe", "Downpipes", "High-pressure fuel pump", "Index 12 injectors check", "Oil cooler"]
  },
  n55: {
    name: "BMW N55",
    safeRange: "360–450 HP depending on turbo and fuel setup",
    commonParts: ["ECU tune", "Charge pipe", "Intercooler", "Downpipe", "Spark plugs", "Fuel pump upgrade", "Turbo inlet"]
  },
  b58: {
    name: "BMW B58",
    safeRange: "420–550 HP with proper calibration",
    commonParts: ["ECU tune", "Downpipe", "Intake", "High-pressure fuel pump", "Transmission tune", "Heat exchanger"]
  },
  s55: {
    name: "BMW S55",
    safeRange: "500–650 HP with crank hub and cooling considerations",
    commonParts: ["ECU tune", "Crank hub inspection", "Downpipes", "Charge cooling", "Spark plugs", "TCU tune"]
  },
  ea888: {
    name: "VW/Audi EA888",
    safeRange: "300–450 HP depending on turbo generation",
    commonParts: ["ECU tune", "TCU tune", "Intake", "Downpipe", "Intercooler", "Turbo inlet", "Spark plugs"]
  },
  ea855: {
    name: "Audi 2.5 TFSI EA855",
    safeRange: "450–600 HP with turbo and fueling support",
    commonParts: ["ECU tune", "TCU tune", "Intercooler", "Downpipe", "Fueling upgrade", "Turbo inlet", "Spark plugs"]
  },
  m177: {
    name: "Mercedes-AMG M177",
    safeRange: "600–750 HP with cooling and transmission support",
    commonParts: ["ECU tune", "CPC/TCU tune", "Downpipes", "Intakes", "Heat exchanger", "Spark plugs"]
  },
  m139: {
    name: "Mercedes-AMG M139",
    safeRange: "430–520 HP with careful thermal management",
    commonParts: ["ECU tune", "Intake", "Downpipe", "Intercooler", "Cooling upgrades", "Spark plugs"]
  },
  "2jz": {
    name: "Toyota 2JZ",
    safeRange: "500–700 HP with strong fueling and turbo setup",
    commonParts: ["Turbo kit", "Fuel injectors", "Fuel pump", "Standalone ECU", "Intercooler", "Clutch/transmission support"]
  },
  b58supra: {
    name: "Toyota Supra B58",
    safeRange: "450–600 HP with ECU/fuel support",
    commonParts: ["ECU tune", "Downpipe", "Intake", "Fuel pump", "Heat exchanger", "Transmission tune"]
  },
  k20: {
    name: "Honda K20",
    safeRange: "250–400 HP depending on NA or turbo setup",
    commonParts: ["ECU management", "Header or turbo kit", "Fuel injectors", "Fuel pump", "Cooling upgrades", "Clutch"]
  },
  k24: {
    name: "Honda K24",
    safeRange: "250–450 HP depending on boost and internals",
    commonParts: ["ECU management", "Turbo kit or header", "Injectors", "Fuel pump", "Clutch", "Cooling upgrades"]
  },
  rb26: {
    name: "Nissan RB26",
    safeRange: "450–650 HP with oiling and turbo support",
    commonParts: ["Twin or single turbo upgrade", "Fuel system", "ECU", "Intercooler", "Oil control upgrades", "Clutch"]
  },
  vr38: {
    name: "Nissan VR38",
    safeRange: "650–900 HP with transmission and fuel support",
    commonParts: ["ECU tune", "TCM tune", "Fuel injectors", "Fuel pumps", "Intakes", "Downpipes", "Transmission upgrades"]
  },
  ls3: {
    name: "GM LS3",
    safeRange: "480–650 HP depending on cam or forced induction",
    commonParts: ["Cam kit", "Headers", "Intake", "ECU tune", "Fuel system", "Clutch or torque converter"]
  },
  coyote: {
    name: "Ford 5.0 Coyote",
    safeRange: "500–750 HP depending on NA or supercharger build",
    commonParts: ["ECU tune", "Headers", "Cold air intake", "Supercharger kit", "Fuel injectors", "Oil pump gears"]
  },
  hemi: {
    name: "Dodge 6.4 HEMI",
    safeRange: "500–700 HP depending on cam or supercharger",
    commonParts: ["ECU tune", "Headers", "Cam kit", "Fuel system", "Cooling upgrades", "Transmission tune"]
  },
  fa20: {
    name: "Subaru/Toyota FA20",
    safeRange: "230–350 HP with careful torque and cooling limits",
    commonParts: ["ECU tune", "Header", "Flex fuel kit", "Oil cooler", "Clutch", "Turbo or supercharger kit"]
  },
  ej257: {
    name: "Subaru EJ257",
    safeRange: "330–450 HP with reliability-focused support",
    commonParts: ["ECU tune", "Downpipe", "Fuel pump", "Injectors", "Intercooler", "Air/oil separator", "Cylinder 4 cooling mod"]
  },
   "4g63": {
    name: "Mitsubishi 4G63",
    safeRange: "400–600 HP with turbo and fuel support",
    commonParts: ["Turbo upgrade", "Fuel injectors", "Fuel pump", "ECU tune", "Intercooler", "Clutch"]
  }
};
const presets = [
  { make: "BMW", model: "335i", engine: "N54", currentHp: 300, targetHp: 450, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=80" },
  { make: "BMW", model: "M340i", engine: "B58", currentHp: 382, targetHp: 500, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80" },
  { make: "VW", model: "Golf GTI", engine: "EA888", currentHp: 230, targetHp: 350, image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=700&q=80" },
  { make: "Audi", model: "RS3", engine: "EA855", currentHp: 400, targetHp: 560, image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=700&q=80" },
  { make: "Toyota", model: "Supra", engine: "B58", currentHp: 382, targetHp: 550, image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=700&q=80" },
  { make: "Nissan", model: "GT-R", engine: "VR38", currentHp: 565, targetHp: 800, image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=700&q=80" },
  { make: "Honda", model: "Civic Type R", engine: "K20", currentHp: 306, targetHp: 400, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=700&q=80" },
  { make: "Ford", model: "Mustang GT", engine: "Coyote", currentHp: 460, targetHp: 700, image: "https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=700&q=80" }
];
const makeOptions = [
  "Toyota", "Volkswagen", "BMW", "Mercedes-Benz", "Audi",
  "Porsche", "Ford", "Chevrolet", "Dodge", "Nissan",
  "Honda", "Hyundai", "Kia", "Subaru", "Mitsubishi",
  "Mazda", "Lexus", "Acura", "Infiniti", "Cadillac",
  "Volvo", "Jaguar", "Land Rover", "Tesla", "BYD"
];

const modelOptions = [
  "Supra", "GR86", "GR Corolla", "Yaris GR", "IS 350", "IS 500", "RC F",
  "Golf GTI", "Golf R", "Arteon", "Jetta GLI", "Polo GTI",
  "335i", "340i", "M2", "M3", "M4", "M5", "M140i", "M240i", "M340i",
  "A3", "S3", "RS3", "S4", "RS4", "RS5", "RS6", "TT RS", "R8",
  "A45 AMG", "C43 AMG", "C63 AMG", "E63 AMG", "GT 63 AMG",
  "911", "718 Cayman", "718 Boxster", "Panamera", "Macan", "Cayenne",
  "Mustang GT", "Mustang EcoBoost", "Focus ST", "Focus RS", "Fiesta ST", "F-150",
  "Camaro SS", "Camaro ZL1", "Corvette C6", "Corvette C7", "Corvette C8",
  "Challenger R/T", "Challenger Scat Pack", "Challenger Hellcat", "Charger Hellcat",
  "GT-R", "370Z", "350Z", "Z", "Silvia", "Skyline",
  "Civic Si", "Civic Type R", "Integra Type S", "S2000", "NSX",
  "Elantra N", "i30 N", "Veloster N", "Genesis G70", "Stinger GT",
  "WRX", "WRX STI", "BRZ", "Forester XT", "Legacy GT",
  "Evo VIII", "Evo IX", "Evo X", "Eclipse GSX", "3000GT VR-4",
  "MX-5 Miata", "RX-7", "RX-8", "Mazdaspeed3", "Mazdaspeed6",
  "Model 3 Performance", "Model S Plaid", "Model Y Performance",
  "BYD Seal", "BYD Han", "BYD Dolphin", "BYD Atto 3"
];

const engineOptions = [
  "N54", "N55", "B48", "B58", "S55", "S58", "S63",
  "EA113", "EA888", "EA839", "EA855", "EA825",
  "M133", "M139", "M156", "M157", "M177", "M178", "OM606",
  "2JZ-GTE", "1JZ-GTE", "7M-GTE", "3S-GTE", "4A-GE", "2GR-FE", "G16E-GTS",
  "RB20DET", "RB25DET", "RB26DETT", "SR20DET", "VQ35DE", "VQ37VHR", "VR30DDTT", "VR38DETT",
  "K20", "K20C1", "K24", "B16", "B18", "F20C", "J35",
  "LS1", "LS2", "LS3", "LS7", "LT1", "LT2", "LT4", "L99",
  "Coyote 5.0", "EcoBoost 2.3", "EcoBoost 3.5", "Voodoo 5.2", "Predator 5.2",
  "HEMI 5.7", "HEMI 6.4", "Hellcat 6.2",
  "EJ205", "EJ207", "EJ255", "EJ257", "FA20", "FA24",
  "4G63", "4B11T", "6G72TT",
  "13B-REW", "13B-MSP", "MZR DISI",
  "Theta II", "Lambda II", "Smartstream G1.6T",
  "Tesla Dual Motor", "Tesla Plaid Tri Motor", "BYD Blade EV"
];



function setupAutocomplete(inputId, dropdownId, options) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);

  function showOptions() {
    const value = input.value.toLowerCase().trim();

    const matches = options
      .filter(option => option.toLowerCase().includes(value))
      .slice(0, 20);

    dropdown.innerHTML = "";

    matches.forEach(option => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = option;

      item.addEventListener("mousedown", event => {
        event.preventDefault();
        input.value = option;
        dropdown.classList.remove("show");
      });

      item.addEventListener("touchstart", event => {
        event.preventDefault();
        input.value = option;
        dropdown.classList.remove("show");
      });

      dropdown.appendChild(item);
    });

    dropdown.classList.add("show");
  }

  input.addEventListener("focus", showOptions);
  input.addEventListener("input", showOptions);

  document.addEventListener("click", event => {
    if (!input.closest(".autocomplete").contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });
}
setupAutocomplete("make", "makeDropdown", makeOptions);
setupAutocomplete("model", "modelDropdown", modelOptions);
setupAutocomplete("engine", "engineDropdown", engineOptions);
const form = document.getElementById("tuneForm");
const results = document.getElementById("results");
const presetsEl = document.getElementById("presets");

function normalizeEngine(engine) {
  return engine.toLowerCase().replace(/\s+/g, "").replace(/-/g, "");
}

function getStage(percentGain) {
  if (percentGain <= 15) {
    return {
      stage: "Stage 1",
      difficulty: "Low",
      budget: "€500–€1,500",
      description: "Software-focused build with basic bolt-ons and conservative reliability goals."
    };
  }

  if (percentGain <= 35) {
    return {
      stage: "Stage 2",
      difficulty: "Medium",
      budget: "€1,500–€4,000",
      description: "Bolt-on build with improved airflow, cooling and professional calibration."
    };
  }

  if (percentGain <= 65) {
    return {
      stage: "Stage 2+",
      difficulty: "High",
      budget: "€4,000–€9,000",
      description: "Advanced build requiring fuel, cooling, drivetrain and monitoring upgrades."
    };
  }

  return {
    stage: "Custom Build",
    difficulty: "Very high",
    budget: "€9,000+",
    description: "Large power increase. Requires expert planning, engine health checks and serious supporting mods."
  };
}

function supportingMods(percentGain, usage, fuel) {
  const parts = [
    "Pre-build inspection: compression test, leakdown test, scan for codes",
    "Fresh oil, filters, spark plugs and ignition health check",
    "Professional ECU calibration from a reputable tuner",
    "Data logging: boost, AFR/lambda, knock, intake temperature and oil temperature",
    "High-quality performance tires matched to the power goal"
  ];

  if (percentGain > 5) {
    parts.push("Panel filter or intake system if legal in your region");
    parts.push("Baseline dyno run before modifications");
  }

  if (percentGain > 10) {
    parts.push("Stage 1 ECU tune with conservative torque limits");
    parts.push("Colder spark plugs where recommended by the tuner");
  }

  if (percentGain > 20) {
    parts.push("Intercooler or heat exchanger upgrade");
    parts.push("Charge pipes, boost hoses and clamps inspection");
    parts.push("Transmission/TCU tune where supported");
  }

  if (percentGain > 30) {
    parts.push("Emissions-compliant exhaust flow upgrade");
    parts.push("Fuel pump review or fuel system upgrade");
    parts.push("Brake pads, brake fluid and rotor inspection");
  }

  if (percentGain > 40) {
    parts.push("Upgraded fuel injectors where required");
    parts.push("Turbo inlet, intake manifold or throttle-body review");
    parts.push("Engine and gearbox mounts inspection");
  }

  if (percentGain > 55) {
    parts.push("Turbocharger, supercharger or hybrid turbo upgrade");
    parts.push("Clutch, torque converter or gearbox upgrade");
    parts.push("Limited-slip differential and axle/driveshaft inspection");
    parts.push("Oil cooler or upgraded radiator");
  }

  if (percentGain > 75) {
    parts.push("Built engine planning: rods, pistons, bearings and head studs");
    parts.push("Standalone ECU or advanced engine management review");
    parts.push("Professional custom dyno calibration");
    parts.push("Chassis, suspension and safety inspection");
  }

  if (fuel === "ethanol") {
    parts.push("Ethanol content sensor");
    parts.push("Ethanol-safe fuel lines, pump and injector compatibility check");
    parts.push("Flex-fuel calibration");
  }

  if (fuel === "race") {
    parts.push("Closed-course calibration map only");
    parts.push("Fuel-specific spark, boost and safety limit setup");
  }

  if (usage === "daily") {
    parts.push("Daily reliability setup: conservative boost, torque and temperature limits");
  }

  if (usage === "weekend") {
    parts.push("Weekend setup: stronger cooling and wider performance tires");
  }

  if (usage === "track") {
    parts.push("Track setup: oil cooling, brake cooling, track pads and high-temp brake fluid");
    parts.push("Catch can or air/oil separator where suitable");
  }

  if (usage === "show") {
    parts.push("Show build setup: visual engine bay parts, exhaust sound, wheels and stance");
  }

  return parts;
}

const modVisuals = {
  exhaust: {
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c2d81f?auto=format&fit=crop&w=1200&q=80",
    title: "Exhaust System",
    text: "An exhaust upgrade can improve flow, sound and heat control. Choose emissions-compliant parts for road use."
  },
  intercooler: {
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    title: "Intercooler / Heat Exchanger",
    text: "Cooling upgrades help reduce intake temperatures and keep power more consistent under load."
  },
  intake: {
    image: "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=80",
    title: "Intake System",
    text: "An intake can improve airflow and sound, but it should be matched with proper calibration and heat shielding."
  },
  turbo: {
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80",
    title: "Turbo / Supercharger Upgrade",
    text: "Forced-induction upgrades can create large power gains, but require fuel, cooling, drivetrain and tuning support."
  },
  fuel: {
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    title: "Fuel System Upgrade",
    text: "Fuel pumps, injectors and ethanol-compatible parts help keep the engine supplied safely at higher power."
  },
  brakes: {
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80",
    title: "Brake Upgrade",
    text: "More power needs better stopping power. Pads, fluid, rotors and cooling are important for spirited or track use."
  },
  tune: {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "ECU / TCU Calibration",
    text: "A professional calibration controls boost, fueling, ignition, torque and safety limits."
  },
  drivetrain: {
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    title: "Drivetrain Support",
    text: "Clutch, gearbox, differential, axles and mounts should be checked when torque increases."
  },
  default: {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    title: "Performance Part",
    text: "This part should be checked for fitment, legal use, reliability and compatibility with the full build."
  }
};

function getModVisual(part) {
  const name = part.toLowerCase();

  if (name.includes("exhaust") || name.includes("downpipe") || name.includes("header")) return modVisuals.exhaust;
  if (name.includes("intercooler") || name.includes("heat exchanger") || name.includes("cooling") || name.includes("radiator")) return modVisuals.intercooler;
  if (name.includes("intake") || name.includes("airflow") || name.includes("inlet")) return modVisuals.intake;
  if (name.includes("turbo") || name.includes("supercharger")) return modVisuals.turbo;
  if (name.includes("fuel") || name.includes("injector") || name.includes("ethanol") || name.includes("pump")) return modVisuals.fuel;
  if (name.includes("brake") || name.includes("tire") || name.includes("suspension")) return modVisuals.brakes;
  if (name.includes("ecu") || name.includes("tune") || name.includes("calibration") || name.includes("dyno")) return modVisuals.tune;
  if (name.includes("clutch") || name.includes("gearbox") || name.includes("transmission") || name.includes("drivetrain") || name.includes("differential")) return modVisuals.drivetrain;

  return modVisuals.default;
}

function openModModal(part) {
  const visual = getModVisual(part);

  document.getElementById("modalImage").src = visual.image;
  document.getElementById("modalTitle").textContent = visual.title;
  document.getElementById("modalText").textContent = `${part}: ${visual.text}`;
  document.getElementById("modModal").classList.add("show");
}

function setupModModalClicks() {
  document.querySelectorAll(".part").forEach(card => {
    card.addEventListener("click", () => {
      openModModal(card.dataset.part);
    });
  });
}
function generatePlan(data) {
  const gain = data.targetHp - data.currentHp;
  const percentGain = Math.round((gain / data.currentHp) * 100);
  const stage = getStage(percentGain);
  const engineKey = normalizeEngine(data.engine);
  const engineInfo = engineDatabase[engineKey];

  if (gain <= 0) {
    results.innerHTML = `
      <h2>Target must be higher</h2>
      <p>Your target horsepower should be higher than your current horsepower.</p>
    `;
    return;
  }

  const parts = supportingMods(percentGain, data.usage, data.fuel);
  const engineParts = engineInfo ? engineInfo.commonParts : [];

  results.innerHTML = `
    <div class="result-header">
      <div>
        <h2>${data.make} ${data.model}</h2>
        <p>${data.engine} · ${data.currentHp} HP → ${data.targetHp} HP</p>
      </div>
      <span class="stage">${stage.stage}</span>
    </div>

    <p>${stage.description}</p>

    <div class="meta">
      <div><span>Power gain</span><strong>+${gain} HP</strong></div>
      <div><span>Increase</span><strong>${percentGain}%</strong></div>
      <div><span>Difficulty</span><strong>${stage.difficulty}</strong></div>
    </div>

    <p><strong>Estimated budget:</strong> ${stage.budget}</p>

    ${engineInfo ? `
      <div class="warning">
        Known engine: ${engineInfo.name}. Typical tuning range: ${engineInfo.safeRange}.
      </div>
    ` : `
      <div class="warning">
        Unknown engine. This is a generic plan. Verify compatibility before buying parts.
      </div>
    `}

    <h3>Recommended build path</h3>
<div class="parts">
  ${[...new Set([...parts, ...engineParts])].map(part => `
    <button class="part" type="button" data-part="${part.replace(/"/g, "&quot;")}">
      <strong>${part}</strong>
      <span>Tap to view image, explanation and fitment notes.</span>
    </button>
  `).join("")}
</div>

    <h3>Reliability checklist</h3>
    <p>
      Before major upgrades, do a compression/leakdown test, scan for codes, inspect fluids, monitor knock, AFR, boost, oil temperature and intake temperature.
    </p>
  `;
}

form.addEventListener("submit", event => {
  event.preventDefault();

  generatePlan({
    make: document.getElementById("make").value.trim(),
    model: document.getElementById("model").value.trim(),
    engine: document.getElementById("engine").value.trim(),
    currentHp: Number(document.getElementById("currentHp").value),
    targetHp: Number(document.getElementById("targetHp").value),
    usage: document.getElementById("usage").value,
    fuel: document.getElementById("fuel").value
  })  `;

  setupModModalClicks();
});

presets.forEach(preset => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "preset";
  card.style.setProperty("--image", `url("${preset.image}")`);
  card.innerHTML = `
    <strong>${preset.make} ${preset.model}</strong>
    <p>${preset.engine}: ${preset.currentHp} HP → ${preset.targetHp} HP</p>
  `;

  card.addEventListener("click", () => {
    document.getElementById("make").value = preset.make;
    document.getElementById("model").value = preset.model;
    document.getElementById("engine").value = preset.engine;
    document.getElementById("currentHp").value = preset.currentHp;
    document.getElementById("targetHp").value = preset.targetHp;

    generatePlan({
      ...preset,
      usage: "daily",
      fuel: "premium"
    });

    document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
  });

  presetsEl.appendChild(card);
});
