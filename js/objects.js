var trips = [];

function Trip(name, ward, month){
  this.name = name;
  this.ward = ward;
  this.month = month;
  this.show_trip_info = function () {
    return this.name + ' - ' + this.ward + ' - ' + this.month + " "
  }
}

function show_trip_info() {
   output = "";
   for(var i = 0; i < trips.length; i++) {
      output += (i + 1) + ") " + trips[i].show_trip_info();
   }
   document.getElementById("output").innerHTML = output;
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