/* ============================================================
   app.js — dashboard behaviour (index.html)
   Reads from data.js (BRANDS, SCENARIO_TEMPLATES, RECENT_UPDATES,
   QUALITY_UPDATES). No data lives in this file.
   ============================================================ */

function fillTemplate(str, vars) {
  return str.replace(/{{(.*?)}}/g, (_, key) => vars[key.trim()] ?? "");
}

function renderRecentUpdates() {
  const list = document.getElementById("recent-updates-list");
  if (!list) return;
  const latestFive = RECENT_UPDATES.slice(0, 5);
  list.innerHTML = latestFive
    .map(
      (u) => `
      <li>
        <time datetime="${u.date}">${u.date}</time>
        <p>${u.title}</p>
      </li>`
    )
    .join("");
}

function renderQualityUpdates() {
  const list = document.getElementById("quality-updates-list");
  if (!list) return;
  list.innerHTML = QUALITY_UPDATES.map((point) => `<li>${point}</li>`).join("");
}

function populateBrandSelect() {
  const select = document.getElementById("brand-select");
  const options = BRANDS.map((b) => `<option value="${b.id}">${b.name}</option>`).join("");
  select.insertAdjacentHTML("beforeend", options);
}

function populateScenarioSelect() {
  const select = document.getElementById("scenario-select");
  const options = Object.entries(SCENARIO_TEMPLATES)
    .map(([key, tpl]) => `<option value="${key}">${tpl.label}</option>`)
    .join("");
  select.insertAdjacentHTML("beforeend", options);
}

function renderPreview() {
  const brandId = document.getElementById("brand-select").value;
  const scenarioKey = document.getElementById("scenario-select").value;
  const preview = document.getElementById("email-preview");

  if (!brandId || !scenarioKey) {
    preview.innerHTML = `<p class="preview-empty">Select a brand and a scenario to preview the email.</p>`;
    return;
  }

  const brand = BRANDS.find((b) => b.id === brandId);
  const template = SCENARIO_TEMPLATES[scenarioKey];
  const vars = { brand: brand.name, contact: brand.contact };

  const subject = fillTemplate(template.subject, vars);
  const body = fillTemplate(template.body, vars);

  preview.innerHTML = `
    <div class="email-card">
      <div class="email-meta">
        <div class="row"><span class="k">To</span><span class="v">${brand.name} customer</span></div>
        <div class="row"><span class="k">From</span><span class="v">${brand.name} Customer Care &lt;${brand.contact}&gt;</span></div>
        <div class="row"><span class="k">Subject</span><span class="v">${subject}</span></div>
      </div>
      <div class="email-body">${body}</div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderRecentUpdates();
  renderQualityUpdates();
  populateBrandSelect();
  populateScenarioSelect();
  renderPreview();

  document.getElementById("brand-select").addEventListener("change", renderPreview);
  document.getElementById("scenario-select").addEventListener("change", renderPreview);
});
