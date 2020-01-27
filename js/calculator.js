     //displays
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
     }
     //lets clear the display
     function clear_display()
     {
        document.getElementById("equation").value = ""
     }