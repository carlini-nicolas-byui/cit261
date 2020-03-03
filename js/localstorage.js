var editBtn = document.getElementById('editBtn');
var editables = document.querySelectorAll('#title, #author, #content');


if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('title') !== null) {
    editables[0].innerHTML = localStorage.getItem('title');
  }
  if (localStorage.getItem('author') !== null) {
    editables[1].innerHTML = localStorage.getItem('author');
  }
  if (localStorage.getItem('content') !== null) {
    editables[2].innerHTML = localStorage.getItem('content');
  }
}

editBtn.addEventListener('click', function(e) {
  if (!editables[0].isContentEditable) {
    editables[0].contentEditable = 'true';
    editables[1].contentEditable = 'true';
    editables[2].contentEditable = 'true';
    editBtn.innerHTML = 'Save Changes';
    editBtn.style.backgroundColor = 'green';
  } else {
    // Disable Editing
    editables[0].contentEditable = 'false';
    editables[1].contentEditable = 'false';
    editables[2].contentEditable = 'false';
    // Change Button Text and Color
    editBtn.innerHTML = 'Enable Editing';
    editBtn.style.backgroundColor = 'blue';
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});

  function touchFunction() {
    document.getElementById("output").innerHTML = "you are using a mobile device!";
  }

  document.getElementById("touch_me").addEventListener("touchstart", touchFunction);


var Storage_List = [];
document.addEventListener("DOMContentLoaded", function(ev){

  if(localStorage.getItem("LocalStorage_List")){
    Storage_List = JSON.parse(localStorage.getItem("LocalStorage_List"));
  }
  
  showList();
  
  document.querySelector("#btnAdd").addEventListener("click", function(ev){
    ev.preventDefault();
    var newItem = document.querySelector("#item").value;
    Storage_List.push( newItem );
    localStorage.setItem("LocalStorage_List", JSON.stringify(Storage_List) );
    //convert from Array to String.
    showList();
    return false;
  });

});

function removeItem(ev){
  //when item is clicked by user, it is removed.
  var txt = ev.currentTarget.firstChild.nodeValue;
  for(var i=0;i<Storage_List.length;i++){
  	if(Storage_List[i] == txt){
      //found the match
      Storage_List.splice(i, 1);
    }
  }
  localStorage.setItem("LocalStorage_List", JSON.stringify(Storage_List) );
  showList();
}

function showList(){
  var output = document.querySelector(".output");
  output.innerHTML = "";
  for(var i=0;i<Storage_List.length;i++){
    var p = document.createElement("p");
    p.innerHTML = Storage_List[i];
    
    output.appendChild(p);
    //this is what happens if the item is clicked:
    p.addEventListener("click", removeItem);
  }
}