var clientName = document.getElementById("client-name");
var clientsTable = document.getElementById("clients-table");

var count = document.getElementsByClassName("count");
var date = document.getElementsByClassName("date");
var sheets = document.getElementsByClassName("sheets");
var printType = document.getElementsByClassName("printType");

var doneDiv = document.getElementsByClassName("done");
var correction = document.getElementsByClassName("correction");
var toPrint = document.getElementsByClassName("to-print");

var i;

// function dropdownLoad() {

// }

function showData(client) {

//clear every data from previous load
clientsTable.innerHTML = "";

//parsing json
var str = JSON.stringify(client);
var parsedJSON = JSON.parse(str);


for(i=0;i<parsedJSON.length;i++) {

// creating the table
  clientsTable.innerHTML += '<tr><td scope="row" class="count">'+(i+1)+'</td><td class="date">'+parsedJSON[i].date+'</td>'+'</td><td class="sheets">'+parsedJSON[i].sheets+'</td><td class="printType">'+parsedJSON[i].printType+'</td><td class="done"></td><td class="correction"></td><td class="to-print"></td></tr>';

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

// ------------ changing the bgcolor on clickevent 

  for (var k=0;k<doneDiv.length;k++) {
      doneDiv[k].addEventListener("click", function(){
          
          this.classList.toggle("done-bg");
      })

      correction[k].addEventListener("click", function(){
          
          this.classList.toggle("correction-bg");
      })

      toPrint[k].addEventListener("click", function(){
          
          this.classList.toggle("to-print-bg");
      })
  }
}




var saveInput = document.getElementById("save-input");

// update table with new input date and save to query for final save
function inputSave() {
  // variables are made after onclick
var dateInput = document.getElementById("date-input").value;
var sheetInput = document.getElementById("sheet-input").value;
var sheetTypeInput = document.getElementById("print-type-input").value;
var reg1 = /\d{2}x\d{2}[- ]\d{2}[- ]?\w+.*/g;
var reg2 = /^\d{1,2}\/\d{1,2}\/\d{2}/g;



  if (sheetInput !== "" && sheetTypeInput !== "") {
    if (reg1.test(sheetInput) && reg2.test(dateInput)) {
      clientsTable.innerHTML += '<tr><td class="count">'+(i+1)+'</td><td class="sheets">'+dateInput+'</td><td class="sheets">'+sheetInput+'</td><td class="printType">'+sheetTypeInput+'</td><td class="done"></td><td class="correction"></td><td class="to-print"></td></tr>';

      i++; //increment count number

      document.getElementById("date-input").value = "";
      document.getElementById("sheet-input").value = "";
      document.getElementById("print-type-input").value = "";

    } else {
      alert("Invalid input");
    }
    
  } else {
    alert("fill in the form first");
  }
}
