let expression = prompt("Please, input number of excercise");
// document.getElementById('userNumber').style.visibility = "hidden";
// document.getElementById('send_b').style.visibility = "hidden";

switch(expression) {

    case "0":
        document.getElementById("excercise").innerHTML = "List of nums, which is even to 4";

        let a = Number(prompt("Please, input start number"))
        let b = Number(prompt("Please, input end number"))
        let text = ""

        for (a; a <= b; a ++) {

            if (a % 4 == 0){

                text += a + "<br>";
            }
          }
        
        document.getElementById("answer").innerHTML = text;
      break;

    case "1":
        let n = Number(prompt("Please, input positive number"))

        while (n <= 0){

            n = Number(prompt("Please, input positive number"))
        }
    
        document.getElementById("excercise").innerHTML = "Thanks";
        document.getElementById("answer").innerHTML = " ";
      break;

    case "2":
        document.getElementById("excercise").innerHTML = "List of nums, which isn't even to 2";

        let a2 = Number(prompt("Please, input start number"))
        let b2 = Number(prompt("Please, input end number"))
        let text2 = ""

        for (a2; a2 <= b2; a2 ++) {

            if (a2 % 2 != 0){

                text2 += a2 + "<br>";
            }
          }
        
        document.getElementById("answer").innerHTML = text2;
      break;

    case "3":
        let n3 = Number(prompt("Please, input start number"))
        document.getElementById("excercise").innerHTML = "Nums [50:100] / " + n3;
        
        let text3 = ""

        for (let i3 = 50; i3 <= 100; i3++) {

          text3 += (i3/n3).toFixed(2) + " <br> ";
          }
        
        document.getElementById("answer").innerHTML = text3;
      break;

    case "4":
        let n4 = Number(prompt("Please, input start number"))
        
        let text4 = ""
        
        if (n4 > 0){

          document.getElementById("excercise").innerHTML = "Nums [0:"  + n4 + "], which even";
          for (n4; n4 > 0; n4-=1) {

            if (n4 % 2 == 0){

              text4 += n4 + " <br> ";
            }
            }
            
            text4 += 0 ;
        }

        if (n4 < 0){

          document.getElementById("excercise").innerHTML = "Nums [" + n4 + ": 0], which even";
          for (n4; n4 <= 0; n4++) {

            if (n4 % 2 == 0){

              text4 += n4 + " <br> ";
            }
            }
        }
        document.getElementById("answer").innerHTML = text4;
      break;
      
    case "5":
        let a5 = Number(prompt("Please, input end number"))
        document.getElementById("excercise").innerHTML = "List of the first "+a5+" powers of the number 2";
        let text5 = ""

        for (let i5 = 1; i5 <= a5; i5 ++) {

            text5 += (2 ** i5) + "<br>";
            
        }
        
        document.getElementById("answer").innerHTML = text5;
      break;

    case "6":
        let a6 = Number(prompt("Please, input the number of values"))
        let sum6 = 0
        let text6 = ""
        let n6 = 0

        for (let i6 = 1; i6 <= a6; i6 ++) {

            n6 = Number(prompt("Please, input the number"))
            sum6 += n6;
            text6 += n6 + ", "
            
        }
        
        document.getElementById("excercise").innerHTML = "Sum of list: "+text6;
        document.getElementById("answer").innerHTML = sum6;
      break;
    
    case "7":
        document.getElementById("excercise").innerHTML = 
        "The program randomly selects a number between 1 and 100. Please select the number from 0 to 100";
        let n7 = Math.floor(Math.random() * 101);
        let a7 = -1

        while (a7 != n7){
            a7 = Number(prompt("The program randomly selects a number between 1 and 100. Please select the number from 0 to 100"))
        }

        document.getElementById("answer").innerHTML = "Num: "+n7;
          
      break;  
    default:
      // code block
  }