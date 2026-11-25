// Practicum 9: Animated Sequences for User Interactions
const pulseNoticeBtn = document.getElementById("pulseNoticeBtn");
const toggleGuideBtn = document.getElementById("toggleGuideBtn");
const urgentNoticeBanner = document.getElementById("urgentNoticeBanner");
const instructionsPanel = document.getElementById("instructions");

pulseNoticeBtn.addEventListener("click", () => {
  urgentNoticeBanner.classList.add("pulse-active");
  setTimeout(() => {
    urgentNoticeBanner.classList.remove("pulse-active");
  }, 600);
});

toggleGuideBtn.addEventListener("click", () => {
  instructionsPanel.classList.toggle("panel-collapsed");
});

// Practicum 10: DOM Manipulation for Service Request Queue
const customServiceInput = document.getElementById("customServiceInput");
const addQueueBtn = document.getElementById("addQueueBtn");
const serviceQueueList = document.querySelector("#serviceQueueList");
const queueCount = document.getElementById("queueCount");

function refreshQueueCount() {
  queueCount.textContent = String(serviceQueueList.children.length);
}

addQueueBtn.addEventListener("click", () => {
  const serviceTitle = customServiceInput.value.trim();
  if (!serviceTitle) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = serviceTitle;

  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("type", "button");
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
    refreshQueueCount();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  serviceQueueList.appendChild(li);
  customServiceInput.value = "";
  refreshQueueCount();
});

// Practicum 11: Form Validation with Constraint API
const citizenRegForm = document.getElementById("citizenRegForm");
const mobileNumberInput = document.getElementById("mobileNumber");
const regStatusMessage = document.getElementById("regStatusMessage");

mobileNumberInput.addEventListener("input", () => {
  mobileNumberInput.setCustomValidity("");
  if (!mobileNumberInput.checkValidity()) {
    mobileNumberInput.setCustomValidity("Enter a valid 10-digit mobile number starting with 6-9.");
  }
});

citizenRegForm.addEventListener("submit", (e) => {
  e.preventDefault();
  regStatusMessage.style.display = "block";
  if (!citizenRegForm.checkValidity()) {
    citizenRegForm.reportValidity();
    regStatusMessage.textContent = "Validation Error: Please complete all highlighted citizen registration fields.";
    return;
  }
  regStatusMessage.textContent = "Citizen Registration Verified! Portal Account Reference: EGOV-2026-4910.";
});

// Practicum 12: Endpoint Data Management (Fetch API)
const loadCircularsBtn = document.getElementById("loadCircularsBtn");
const circularsStatus = document.getElementById("circularsStatus");
const liveCircularsBody = document.getElementById("liveCircularsBody");

async function fetchDepartmentCirculars() {
  circularsStatus.textContent = "Loading live department circulars...";
  liveCircularsBody.textContent = "";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
    if (!response.ok) {
      throw new Error("Failed to fetch circulars");
    }
    const items = await response.json();
    items.forEach((doc) => {
      const tr = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdTitle = document.createElement("td");
      tdId.textContent = `GOV-CIR-${doc.id}`;
      tdTitle.textContent = doc.title;
      tr.appendChild(tdId);
      tr.appendChild(tdTitle);
      liveCircularsBody.appendChild(tr);
    });
    circularsStatus.textContent = "Circulars loaded successfully.";
  } catch (err) {
    circularsStatus.textContent = "Unable to connect to department server.";
  } finally {
    loadCircularsBtn.disabled = false;
  }
}

loadCircularsBtn.addEventListener("click", () => {
  loadCircularsBtn.disabled = true;
  fetchDepartmentCirculars();
});
