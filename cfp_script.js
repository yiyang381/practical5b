/*
   Practical 7B
   Filename: cfp_script.js
*/

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
}

  
