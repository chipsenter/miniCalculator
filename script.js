function myFunction() {

    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var mode = document.getElementById('mode').value;
    var result = 0;
    
    switch(mode) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
        default:
    }
    

    // Output result to user
    document.getElementById('output').innerHTML = Math.round(result);
    document.getElementById('output').style.borderStyle = "inset";
    
  }
  
  
  function cleanFunc() {
    document.getElementById('output').innerHTML = "";
    document.getElementById('num1').innerHTML = "";
    document.getElementById('num2').innerHTML = "";
  }

 