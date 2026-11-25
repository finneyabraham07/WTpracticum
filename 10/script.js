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
