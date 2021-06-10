import "../styles/HiredLogoStyle.css";

export default function HiredEffect() {
  let hiredLogo = document.getElementById("hiredLogo");
  let computedStyle = window.getComputedStyle(hiredLogo);
  if (computedStyle.display === "block") {
    if (hiredLogo.classList.contains("hiredLogo")) {
      hiredLogo.classList.remove("hiredLogo");
      hiredLogo.style.display = "none";
      setTimeout(() => {
        hiredLogo.style.display = "block";
        hiredLogo.classList.add("hiredLogo");
      }, 10);
    }
  } else {
    hiredLogo.style.display = "block";
    hiredLogo.classList.add("hiredLogo");
  }
}
