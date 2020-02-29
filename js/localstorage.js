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


  window.addEventListener("load", function(event) {
    var key = document.getElementById("key_name");
    var value = document.getElementById("key_value");
    var add = document.getElementById("add");
       var remove = document.getElementById("remove");
       var clear = document.getElementById("clear");
       var content = document.getElementById("values");
 
    add.addEventListener("click", function(event) {
         if (key.value !== "") {
      try {
            localStorage.setItem(key.value, value.value);
      } catch (e) {
       alert("Exceeded Storage Quota!");
      }
           refreshContents();
         }
       });
 
       remove.addEventListener("click", function(event) {
         if (key.value !== "") {
           localStorage.removeItem(key.value);
           refreshContents();
         }
       });
 
       clear.addEventListener("click", function(event) {
         localStorage.clear();
         refreshContents();
       });
 
       window.addEventListener("storage", function(event) {
         var k = event.key;
         var newValue = event.newValue;
         var oldValue = event.oldValue;
         var url = event.url;
         var storageArea = event.storageArea;
 
         alert("EVENT:n" + k + "n" + newValue + "n" + oldValue + "n" + url + "n" + storageArea);
         refreshContents();
       });
 
       function refreshContents() {
         var str = "";
 
         for (var i = 0, len = localStorage.length; i < len; i++) {
           var k = localStorage.key(i);
           var v = localStorage.getItem(k);
 
           str += "'" + k + "' = '" + v + "'<br />";
         }
 
     key.value = "";
     value.value = "";
         content.innerHTML = str;
       }
 
       refreshContents();
     });