var trips = [];


function Trip(name, ward, month){
  this.name = name;
  this.ward = ward;
  this.month = month;
 // localStorage.setItem("name", this.name);
//  localStorage.setItem("ward", this.ward);
//  localStorage.setItem("month", this.month);
  this.show_trip_info = function () {
    return this.name + ' - ' + this.ward + ' - ' + this.month + " "

  }
}

function show_trip_info() {
  var checkBox = document.getElementById("priority");
  var normal_list = document.createElement ("div");

   output = "";
   for(var i = 0; i < trips.length; i++) {
      output = trips[i].show_trip_info();
   }
 
  normal_list.innerHTML = output;
  var container = document.getElementById ("total_list");
  if (checkBox.checked == true) {
    container.prepend (normal_list);
  } else{
    container.appendChild (normal_list);
  }
  
}

function new_trip() {
  var trip =  new Trip(
    document.getElementById("name").value, 
    document.getElementById("ward").value, 
    document.getElementById("month").value
  );
  trips.push(trip);
  show_trip_info();
}

function addThird() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("I am a new element on the list");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

function removeThird() {
  var list = document.getElementById("myList");
list.removeChild(list.childNodes[0]);  

}