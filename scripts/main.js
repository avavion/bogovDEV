const scrollOn = () => {
  document.body.style.overflow = "";
};

const scrollOff = () => {
  document.body.style.overflow = "hidden";
};

const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

const toggleTheme = () => {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
};

const themeSwitcher = (themeSwitchSelectors) => {
  const switcher = document.querySelectorAll(themeSwitchSelectors);
  switcher.forEach((item) => {
    item.addEventListener("click", toggleTheme);
  });
};

const modal = (triggerButtonSelector, modalWindowSelector) => {
  console.log("Здесь будет модальное окно");
};

window.addEventListener("load", () => {
  themeSwitcher("#toggleTheme");
  modal();
});
