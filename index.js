function SetTimer() {
  // Receive data
  var title = document.getElementById("Title").value;
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
  document.getElementById("Split1").innerHTML = split1;
  document.getElementById("Split2").innerHTML = split2;
  document.getElementById("Split3").innerHTML = split3;
  document.getElementById("Split4").innerHTML = split4;
  document.getElementById("Split5").innerHTML = split5;
  document.getElementById("Split6").innerHTML = split6;
  document.getElementById("Split7").innerHTML = split7;
  document.getElementById("Split8").innerHTML = split8;
  document.getElementById("Split9").innerHTML = split9;
}
