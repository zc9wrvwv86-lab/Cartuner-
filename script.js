const engineDatabase = {
  n54: {
    name: "BMW N54",
    safeRange: "400–500 HP with strong supporting mods",
    commonParts: ["ECU tune", "Intercooler", "Charge pipe", "Downpipes", "High-pressure fuel pump", "Spark plugs", "Oil cooler"]
  },
  b58: {
    name: "BMW B58",
    safeRange: "420–550 HP with proper calibration",
    commonParts: ["ECU tune", "Downpipe", "Intake", "Intercooler", "Fuel pump", "Transmission tune"]
  },
  ea888: {
    name: "VW/Audi EA888",
    safeRange: "300–450 HP depending on turbo and generation",
    commonParts: ["ECU tune", "TCU tune", "Intake", "Downpipe", "Intercooler", "Turbo inlet", "Spark plugs"]
  },
  "2jz": {
    name: "Toyota 2JZ",
    safeRange: "500–700 HP with strong fueling and turbo setup",
    commonParts: ["Turbo kit", "Fuel injectors", "Fuel pump", "Standalone ECU", "Intercooler", "Clutch/transmission support"]
  },
  k20: {
    name: "Honda K20",
    safeRange: "250–400 HP depending on NA or turbo build",
    commonParts: ["ECU management", "Header or turbo kit", "Fuel injectors", "Fuel pump", "Cooling upgrades", "Clutch"]
  }
};

const presets = [
  { make: "BMW", model: "335i", engine: "N54", currentHp: 300, targetHp: 450 },
  { make: "BMW", model: "M340i", engine: "B58", currentHp: 382, targetHp: 500 },
  { make: "VW", model: "Golf GTI", engine: "EA888", currentHp: 230, targetHp: 350 },
  { make: "Toyota", model: "Supra", engine: "2JZ", currentHp: 320, targetHp: 600 },
  { make: "Honda", model: "Civic Type R", engine: "K20", currentHp: 306, targetHp: 400 }
];

const form = document.getElementById("tuneForm");
const results = document.getElementById("results");
const presetsEl = document.getElementById("presets");

function normalizeEngine(engine) {
  return engine.toLowerCase().replace(/\s+/g, "");
}

function getStage(percentGain) {
  if (percentGain <= 15) {
    return {
      stage: "Stage 1",
      difficulty: "Low",
      budget: "€500–€1,500",
      description: "Software-focused build with minor bolt-ons."
    };
  }

  if (percentGain <= 35) {
    return {
      stage: "Stage 2",
      difficulty: "Medium",
      budget: "€1,500–€4,000",
      description: "Bolt-on build with improved airflow, cooling, and calibration."
    };
  }

  if (percentGain <= 65) {
    return {
      stage: "Stage 2+",
      difficulty: "High",
      budget: "€4,000–€9,000",
      description: "Advanced build requiring fuel, cooling, drivetrain, and professional tuning."
    };
  }

  return {
    stage: "Custom Build",
    difficulty: "Very high",
    budget: "€9,000+",
    description: "Large power increase. Requires engine health checks and expert build planning."
  };
}

function supportingMods(percentGain, usage, fuel) {
  const parts = ["Professional ECU calibration", "Fresh spark plugs", "Full maintenance service", "High-quality tires"];

  if (percentGain > 10) parts.push("Performance intake or improved airflow");
  if (percentGain > 20) parts.push("Intercooler or heat management upgrade");
  if (percentGain > 30) parts.push("Exhaust flow upgrade where legal");
  if (percentGain > 35) parts.push("Fuel system upgrade");
  if (percentGain > 45) parts.push("Clutch or transmission support");
  if (percentGain > 55) parts.push("Brake upgrade and suspension inspection");
  if (fuel === "ethanol") parts.push("Ethanol-compatible fuel system check");
  if (fuel === "race") parts.push("Closed-course fuel calibration");
  if (usage === "daily") parts.push("Conservative torque limits for reliability");
  if (usage === "track") parts.push("Oil cooling, brake cooling, and fluid upgrades");

  return parts;
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
        Known engine: ${engineInfo.name}. Typical safe range: ${engineInfo.safeRange}.
      </div>
    ` : `
      <div class="warning">
        Unknown engine. Treat this as a generic plan and verify parts compatibility.
      </div>
    `}

    <h3>Recommended build path</h3>
    <div class="parts">
      ${[...parts, ...engineParts].map(part => `
        <div class="part">
          <strong>${part}</strong>
          <span>Check compatibility, emissions laws, and professional installation requirements.</span>
        </div>
      `).join("")}
    </div>

    <h3>Safety notes</h3>
    <p>
      Get a compression/leakdown test before major upgrades. Use a reputable tuner, monitor AFR/knock/IAT/oil temperature, and keep the car legal for your location.
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
  });
});

presets.forEach(preset => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "preset";
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
    generatePlan({ ...preset, usage: "daily", fuel: "premium" });
  });

  presetsEl.appendChild(card);
});
