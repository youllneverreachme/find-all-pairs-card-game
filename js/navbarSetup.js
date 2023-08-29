import { getElement } from "./utils.js";
import { navTags } from "./data.js";
import { displayRadioBtns } from "./radioButtons.js";
const nav = getElement(".nav");
const hero = getElement(".hero");
const tagBtns = [...document.querySelectorAll(".nav-btn")];
const settingsSubmenu = getElement(".submenu");

// navbar setup
tagBtns.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("nav-btn")) {
      removeGradient();
      hideSettingsSubmenu();
      const text = e.currentTarget.textContent;
      const tempBtn = e.currentTarget.getBoundingClientRect();
      const bottom = tempBtn.bottom - 3;
      const center = (tempBtn.left + tempBtn.right) / 2;
      e.target.classList.add("gradient-hover-effect");
      settingsSubmenu.classList.add("show-submenu");
      settingsSubmenu.style.left = `${center}px`;
      settingsSubmenu.style.top = `${bottom}px`;
      settingsSubmenu.innerHTML = navTags
        .map((setting) => {
          const { tag, subtags } = setting;
          if (tag === text)
            return subtags
              .map((subtag) => {
                const { subtagName, subtagClass } = subtag;
                return `<div class="single-setting">
        <button class="settings-btn checkbox-btn" data-tag="${tag}" data-subtag="${subtagClass}">
          <div class="checkbox-btn-middle-part">
            <div class="checkbox-btn-middle-part"></div>
          </div>
        </button>
        <span>${subtagName}</span>
      </div>`;
              })
              .join("");
        })
        .join("");
      // radio btns functionality
      const radioBtns = [...settingsSubmenu.querySelectorAll(".settings-btn")];
      displayRadioBtns(radioBtns);
    }
  });
});

function removeGradient() {
  tagBtns.forEach((tagBtn) => {
    if (tagBtn.classList.contains("gradient-hover-effect")) {
      tagBtn.classList.remove("gradient-hover-effect");
    }
  });
}
function hideSettingsSubmenu() {
  if (settingsSubmenu.classList.contains("show-submenu")) {
    settingsSubmenu.classList.remove("show-submenu");
  }
}
hero.addEventListener("mouseover", function () {
  removeGradient();
  hideSettingsSubmenu();
});
nav.addEventListener("mouseover", function (e) {
  if (
    !e.target.classList.contains("nav-btn") &&
    !settingsSubmenu.classList.contains("settings")
  ) {
    removeGradient();
    hideSettingsSubmenu();
  }
});
