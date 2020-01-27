//Create an array to the the history of the anwsers
var calculation_history = [];

//display
function display_text(val)
{
   document.getElementById("equation").value+=val
}
//this wille evaluate the equation
function answer()
{
   let x = document.getElementById("equation").value
   let y = eval(x)
   document.getElementById("equation").value = y
   calculation_history.push(y);
   console.log(calculation_history);
}
//lets clear the display
function clear_display()
{
   document.getElementById("equation").value = ""
}

   //lets clear the display
function show_history()
{
   var answer = window.confirm("Are you sure you want to view your results history??")
   if (answer) {
      //calling a function with a parameter
      display_history_msg(calculation_history)
 
   }

}

//example on how to us a parameter
function display_history_msg(x) {
   console.log(x);
      window.alert("Your last results were: " + x);
   return ;
 }

 function set_name() { 
   var first_name = prompt("Please enter your first name", "Nicolas"); 
   var last_name = prompt("Please enter your last name", "Carlini");

 console.log(first_name);
 console.log(last_name);
   var person = {firstName: first_name, lastName: last_name};
   console.log(person.firstName);
   document.getElementById("names").innerHTML = "Hello " + person["firstName"] + " " + person["lastName"] + ". Welcome to my fluency evidence page. I hope you have fun!" ;
} 

function hide_image() {
   var x = document.getElementById("nowyouseeme");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }