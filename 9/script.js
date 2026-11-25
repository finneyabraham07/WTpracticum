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
