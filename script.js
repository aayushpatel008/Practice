let add = document.querySelector("#myid");
let checkbox1 = document.querySelector(".task-cont");
let input = document.querySelector(".task-input");
let count=0;
add.addEventListener("click", () => {
    // this is the div part which cover the button and span in list
    let div=document.createElement("div");
    div.classList.add("task-item");

    // this is the checkbox in the website
    let checkbox2= document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.classList.add("task-chechbox");

    // this the span 
    let span=document.createElement("span");
    count++;
    span.innerText= input.value;
    span.classList.add("task.text");

    // remove button
    let button=document.createElement("button");
    button.innerText="remove";
    button.classList.add("buttonadd");
    
    // remove event
    button.addEventListener("click", () => {
        div.remove();
        count--;
        console.log("the total number of list",count);
        
    });
    console.log("the total number of list",count);

    // append where to put
    div.append(checkbox2);
    div.append(span);
    div.append(button);

    checkbox1.append(div);
    input.value="";
    
});


   
