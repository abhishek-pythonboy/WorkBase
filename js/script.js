var clientsTable = document.getElementById("clients-table");

var count = document.getElementsByClassName("count");
var sheets = document.getElementsByClassName("sheets");
var printType = document.getElementsByClassName("printType");

var doneDiv = document.getElementsByClassName("done");
var correction = document.getElementsByClassName("correction");
var toPrint = document.getElementsByClassName("to-print");


//parsing json
var parsedJSON = JSON.parse(str);

// putting them into html
var i;
for(i=0;i<parsedJSON.length;i++) {

// creating the table
  clientsTable.innerHTML += '<tr><td scope="row" class="count">'+(i+1)+'</td><td class="sheets">'+parsedJSON[i].sheets+'</td><td class="printType">'+parsedJSON[i].printType+'</td><td class="done"></td><td class="correction"></td><td class="to-print"></td></tr>';

  if (parsedJSON[i].done) {
    doneDiv[i].className += " done-bg";
  } else {
    doneDiv[i].classList.remove("done-bg");
  }

  if (parsedJSON[i].correction) {
    correction[i].className += " correction-bg";
  } else {
    correction[i].classList.remove("correction-bg");
  }

  if (parsedJSON[i].toPrint) {
    toPrint[i].className += " to-print-bg";
  } else {
    toPrint[i].classList.remove("to-print-bg");
  }
}

//making input section
  var inputSection = '<tr id="input-section"><td scope="row" class="count"></td><td class="sheets"><input type="text" id="sheet-input" style="width:530px;"></td><td class="printType"><input type="text" id="print-type-input" style="width:130px;"></td><td class="done"></td><td class="correction"></td><td class="to-print"></td></tr>';

    clientsTable.innerHTML += inputSection;
// making variables from the input section

var saveInput = document.getElementById("save-input");

function inputSave() {
  // variables are made after onclick
var sheetInput = document.getElementById("sheet-input").value;
var sheetTypeInput = document.getElementById("print-type-input").value;
var reg1 = /\d{2}x\d{2}[- ]\d{2}[- ]?\w+.*/g;

  if (sheetInput !== "" && sheetTypeInput !== "") {
    if (reg1.test(sheetInput)) {
      var newInput = '<tr><td scope="row" class="count">'+(i+1)+'</td><td class="sheets">'+sheetInput+'</td><td class="printType">'+sheetTypeInput+'</td><td class="done"></td><td class="correction"></td><td class="to-print"></td></tr>';

      var inputTR = document.getElementById("input-section");

      clientsTable.insertBefore(newInput, inputTR);
    } else {
      alert("Invalid input");
    }
    
  } else {
    alert("fill in the form first");
  }
}