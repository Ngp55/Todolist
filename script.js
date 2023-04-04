// Get source from html pages
const inputBox = document.getElementById('input-box');
// Get list container
const listDisp = document.getElementById('list-container');

//This function loads when user clicks 'add' button
function addTask(){
    if(inputBox.value === ''){
        // If user had not entered any data then this block run
        window.alert("Boss write something");
        console.log("No input");
    }
    else{
        // Taking input from user into inputBox variable and displaying using listDisp variable
        //createElement will create an li element
        let li = document.createElement('li');
        // this statement takes input using innerHTML in 'li' local variable
        li.innerHTML = inputBox.value;
        listDisp.appendChild(li);
        // Here 'span' will created in html file and added deleting text 
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);

    }
    // This statement will make clear the textbox
    inputBox.value="";
    // Updating localStorage 
    saveData();
}

listDisp.addEventListener('click', function(event){
    if(event.target.tagName ==='LI'){
        event.target.classList.toggle('checked');
        // Updating localStorage 
        saveData();
    }
    else if(event.target.tagName ==='SPAN'){
        event.target.parentElement.remove();
        // Updating localStorage 
        saveData();
    }

}, false);


function saveData(){
    localStorage.setItem("data",listDisp.innerHTML);
}

function showList(){
    listDisp.innerHTML = localStorage.getItem("data");
}
// To show the list 
showList();