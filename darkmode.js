function switchMode() {
  onOff = document.getElementById("sliderAnswer");
  if (onOff.checked) {
    document.body.style.background = "#1a1a1a";
    document.getElementById("logo").style.color = "#ffffff";
    document.getElementById("FullTimer").style.backgroundColor = "#ffffff";
    document.getElementById("FullInput").style.backgroundColor = "#ffffff";
  }
  else {
    document.body.style.background = "#ffffff";
    document.getElementById("logo").style.color = "#000000";
    document.getElementById("FullTimer").style.backgroundColor = "#000000";
    document.getElementById("FullInput").style.backgroundColor = "#000000";
  }
