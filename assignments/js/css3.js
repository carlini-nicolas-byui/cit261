      // get the inputs
      const inputs = [].slice.call(document.querySelectorAll('.controls input'));

      // listen for changes for when the lisders change
      inputs.forEach(input => input.addEventListener('change', handleUpdate));
      inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

      function handleUpdate(e) {
        // we will use pixels
        const suffix = (this.id === 'base' ? '' : 'px');
        //changes the values of the properties
        document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
      }

      var borderBtn = document.getElementById('borderBtn');
      borderBtn.addEventListener('click', function(e) {
        document.getElementById("profile").classList.add("big_border");
      });

      var remBorderBtn = document.getElementById('remBorderBtn');
      remBorderBtn.addEventListener('click', function(e) {
        document.getElementById("profile").classList.remove("big_border");
      });