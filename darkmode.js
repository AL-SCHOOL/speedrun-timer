var onOff = document.getElementById("sliderAnswer");
var buttonPress = 0;

function switchMode() {
  if (onOff.checked = true) {
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

  function switchModeBeta() {
    if (buttonPress == 0) {
      buttonPress = 1;
      document.body.style.background = "#1a1a1a";
      document.getElementById("logo").style.color = "#ffffff";
      document.getElementById("FullTimer").style.backgroundColor = "#ffffff";
      document.getElementById("FullInput").style.backgroundColor = "#ffffff";
    }
    else {
      buttonPress = 0;
      document.body.style.background = "#ffffff";
      document.getElementById("logo").style.color = "#000000";
      document.getElementById("FullTimer").style.backgroundColor = "#000000";
      document.getElementById("FullInput").style.backgroundColor = "#000000";
    }
