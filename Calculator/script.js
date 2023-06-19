let display = document.getElementById("display");
let number = Array.from(document.getElementsByClassName("number"))
console.log(number)

number.map((item)=>{
    item.addEventListener("click",(event)=>{
        
        switch(event.target.innerText){
            case "C":
                display.innerText = "" 
            break;

            case "Del":
                if (display.innerText) { 
                    display.innerText =  display.innerText.slice(0,-1)
                } 
            break;

            case "=" :
                try {
                    display.innerText = eval(display.innerText) 
                }catch {
                    display.innerText = "error";
                }
            break;

            default:
                display.innerText += event.target.innerText
        }
    })
})