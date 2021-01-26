function SetTimer() {
  // Receive data
  var title = document.getElementById("TitleInput").value;
  var split1 = document.getElementById("Slot1").value;
  var split2 = document.getElementById("Slot2").value;
  var split3 = docuemnt.getElementById("Slot3").value;
  var split4 = document.getElementById("Slot4").value;
  var split5 = document.getElementById("Slot5").value;
  var split6 = document.getElementById("Slot6").value;
  var split7 = document.getElementById("Slot7").value;
  var split8 = document.getElementById("Slot8").value;
  var split9 = document.getElementById("Slot9").value;
  // Write data
  document.getElementById("TimerTitle").innerHTML = title;
  document.getElementById("Row1").innerHTML = split1;
  document.getElementById("Row2").innerHTML = split2;
  document.getElementById("Row3").innerHTML = split3;
  document.getElementById("Row4").innerHTML = split4;
  document.getElementById("Row5").innerHTML = split5;
  document.getElementById("Row6").innerHTML = split6;
  document.getElementById("Row7").innerHTML = split7;
  document.getElementById("Row8").innerHTML = split8;
  document.getElementById("Row9").innerHTML = split9;
}
