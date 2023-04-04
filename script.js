const inputBox = document.getElementById('input-box');
const listDisp = document.getElementById('list-container');


function addTask(){
    if(inputBox.value === ''){
        window.alert("Boss write something");
        console.log("No input");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listDisp.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);

    }
    inputBox.value="";
    saveData();
}

listDisp.addEventListener('click', function(event){
    if(event.target.tagName ==='LI'){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName ==='SPAN'){
        event.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData(){
    localStorage.setItem("data",listDisp.innerHTML);
}

function showList(){
    listDisp.innerHTML = localStorage.getItem("data");
}
showList();