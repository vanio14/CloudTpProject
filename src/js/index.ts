let contenElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("myButton");
let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("options");

buttonElement.addEventListener("click",
    (getChildrensChildren:any) => {
        var par = document.createElement("li");
        var element = document.getElementById("newLine");
        var numberOfChildren = element.childElementCount + 1;
        var setNumberOfChildren = numberOfChildren;
        
        switch (selectElement.value) {
            case "UpperCase":
                {
                    var aa = inputElement.value.toUpperCase();
                    break;
                }
            
            case "LowerCase":
                {
                    var aa = inputElement.value.toLowerCase();
                    break;
                }
        }
        if(aa.length != 0)
        {

               par.innerHTML = aa;
               var xd= "" + numberOfChildren++;   
               var y = document.getElementById("newLine").append(xd, par ); 
          
            }
        else
        {
            window.alert("Write something");
        }
  
       
         
        console.log(xd)
             
       
        
    });






