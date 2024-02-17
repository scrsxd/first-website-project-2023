function tick() {
          var hours, minutes, seconds, ap;
          var intHours, intMinutes, intSeconds;
          var today;
        
          today = new Date();
        
          intHours = today.getHours();
          intMinutes = today.getMinutes();
          intSeconds = today.getSeconds();
        
              hours = intHours+":";
        
        
          if (intMinutes < 10) {
             minutes = "0"+intMinutes+":";
          } else {
             minutes = intMinutes+":";
          }
        
          if (intSeconds < 10) {
             seconds = "0"+intSeconds+" ";
          } else {
             seconds = intSeconds+" ";
          } 
        
          timeString = hours+minutes+seconds;
          //Clock.innerHTML = timeString;
          document.getElementById('hodiny').innerHTML = timeString;
          window.setTimeout("tick();", 100);
        }
        
window.onload = tick;
