function openTab(evt, tabId) {
  const contents = document.getElementsByClassName("tab-content");
  const buttons = document.getElementsByClassName("tab-button");

  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}