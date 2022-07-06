console.log("hey calculator is working ");
var buttons = document.getElementsByTagName('button');
var display = document.getElementById('result');
display.value = "0";

for(item of buttons){
    item.addEventListener('click',function(event){
        buttonText = event.target.innerText;
        console.log("button text is ",buttonText);
        if(buttonText == 'C'){
            display.value = "0";
        }
        else if(buttonText == '←'){
            if(display.value = "Invalid Expression"){
                display.value ="0"; 
            }
            else{
                display.value = display.value.slice(0,-1);
            }
            
        }
        else if(buttonText == "="){
            var calc = display.value;
            try{
                display.value = eval(calc);
            }
            catch(e){
                console.error(e.name);
                display.value = "Invalid Expression";
            }
        }
        else if(buttonText == "("){
            display.value += "*"+"("; 
        }
        else if(buttonText == "+/-"){
            display.value = eval('-1'*display.value);
        }
        else if(buttonText == "1/x"){
            display.value = eval(1/(display.value));
        }
        else if(buttonText == "x*x"){
            display.value = eval(display.value * display.value);
        }
        else if(display.value == "0"){
            display.value = buttonText;
        }
        else if(buttonText == '+'||buttonText == '-'||buttonText == '*'||buttonText == '/'){
            var lastChar =display.value.charAt(display.value.length -1);
            // console.log("antim character is ",lastChar);
            if(lastChar == "+" ||lastChar == "-" || lastChar == "*" || lastChar == "/" ){
                display.value = display.value.slice(0,-1) + buttonText;
            }
            else{
                display.value += buttonText;
            }
        }
        else{
            display.value += buttonText;
        }
        
        console.log(display.value);
        
    })
}