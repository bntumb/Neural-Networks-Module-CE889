var nextTaskDue = "Wed, 27 July 2022 13:30:00";

function calculateTimeleft() {
	let currentDate = new Date();
}


function getData(){
   var tasks = '{tasks":[' +
            '{"name":"Kieran Lowes Reflective Statements","deadline":"21/03/2022 16:03","status":"doing", "description": "4 need to get done" }]}' 
            return(tasks)
}

function setData(){
}
/*------------------------------------------------------
 *  THE FOLLOWING SECTION INCLUDES THE COMPNENTS USED
    ON THE APP 
 *------------------------------------------------------*/ 



function loadTableData( Name, Description, Time, Status ) {
    let tableBody = document.getElementById( "tableId" );

    let taskItem, taskHeader, optionsButton;
    let taskTitle, taskDescription, taskStatus;

    let tasks = '{ "tasks" : [' +
    '{ "name":"Shoulders" , "deadline":"21/03/2022 16:03", "description": "$M12i12i", "status":"doing"},' +
    '{ "name":"Legs" , "deadline":"21/03/2022 16:03" },' +
    '{ "name":"Chest" , "deadline":"21/03/2022 16:03" },'+
    '{ "name":"Delts" , "deadline":"21/03/2022 16:03" } ]}';
     let obj = JSON.parse(tasks);


    for(let i = 0; i< obj.tasks.length; i++ ){
  
        newRow( obj.tasks[i].name,  obj.tasks[i].description, obj.tasks[i].deadline, obj.tasks[i].status);
    }

}

/* This includes the table row creator component */

function newRow( Name, Description, Time, Status ) {
    let tableBody = document.getElementById( "tableId" );

    let taskItem, taskHeader, optionsButton;
    let taskTitle, taskDescription, taskStatus;


        let newRow = tableBody.appendChild( document.createElement( "tr" ) );
        newRow.setAttribute( "class", "table-row" );
        let taskCol = newRow.appendChild( document.createElement( "td" ) );
        taskItem = document.createElement( "div" );
        taskHeader = document.createElement( "div" );
        optionsButton = document.createElement( "div" );
        taskItem.setAttribute( "class", "task-item" );
        taskHeader.setAttribute( "class", "task-header" );
        taskTitle = document.createElement( "p" );
        taskDescription = document.createElement( "p" );
        taskDescription.setAttribute( "class", "description" );
        taskStatus = document.createElement( "p" );
        taskTitle.setAttribute( "class", "task-title" );
        taskTitle.appendChild( document.createTextNode( Name));
        taskDescription.appendChild( document.createTextNode( Description ) );
        taskStatus.appendChild( document.createTextNode(Status ) );
    

        taskStatus.setAttribute( "class", "status" );

        taskItem.appendChild( taskHeader );
        taskItem.appendChild( taskDescription );
        taskItem.appendChild( taskStatus );
        taskHeader.appendChild( taskTitle );
        taskCol.appendChild( taskItem );
        
        
        //createTextnode for Deadline
        let optionCol = newRow.appendChild( document.createElement( "td" ) );
        let deadlineCol = newRow.appendChild( document.createElement( "td" ) );
        deadlineCol.appendChild( ( document.createTextNode(Time) ) );

        optionsButton.setAttribute( "class", "options-button" );
        let button = document.createElement( "button" );
        button.setAttribute( "class", "search-button" );
        button.innerHTML +=
		'<svg viewbox="0 0 128 512" xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"></path></svg>';
	optionsButton.appendChild( button );
        var showTasks = document.getElementById("showTasks"), rIndex, cIndex;
    button.onclick= function() {   alert("Row index is: " + HTMLTableRowElement.rowIndex);
};
	optionCol.appendChild( optionsButton );
	
    newRow.appendChild( taskCol );
	newRow.appendChild( deadlineCol );
	newRow.appendChild( optionCol );
	tableBody.appendChild( newRow );

    

}

loadTableData();

var popUp =     document.getElementById("pop-up");
function closePopUp(){
    if(document.getElementById("pop-up").style.display === "block"){
        document.getElementById("pop-up").style.display = "none";
        if (document.body.contains(document.getElementById('form'))){
            document.getElementById('form').remove();
        }

    }
    
}

document.getElementById("blocker").addEventListener('click', function(event) {
    closePopUp();

});



let addNewTask = document.getElementById("add-button");


addNewTask.addEventListener('mouseup', function(event) {
    popUpObject("Add new task");
    document.getElementById("pop-up").style.display = "block";

 });



    function submitTasks(){
        let task, taskDate, taskTime, taskDescrp, taskStatus;
    
        task = document.getElementById("taskTitle").value;
        taskDate = document.getElementById("taskDate").value;
        taskTime = document.getElementById("taskTime").value;
        taskDescrp = document.getElementById("textarea").value;
        taskStatus = document.getElementById("taskStatus").value;
         
        if (task == "" || taskDate == "" ||taskTime == "" 
            ||taskDescrp == "" ||taskStatus == "" ){
                alert("All fields are required");
        }else{
          newRow(task, taskDescrp, taskDate+" "+taskTime, taskStatus);
            closePopUp();
    
        }

    }







function popUpObject(title){
 
    let popUp = document.getElementById( "pop-up" );
    let addTask = document.getElementById( "add-task" );
    let form = document.createElement( "div" );
    let formHeader = document.createElement( "div" );
    let dateInput = document.createElement( "div" );

    let formName= document.createElement( "p" );
    let button= document.createElement( "p" );

    form.setAttribute( "id", "form" );
    formHeader.setAttribute( "id", "form-header" );
    formName.setAttribute( "class", "form-name" );
    button.setAttribute( "id", "cancel-button" );
    dateInput.setAttribute( "class", "date-input" );

    formName.appendChild( document.createTextNode(title));
    button.appendChild( document.createTextNode("Cancel"));


    form.appendChild( formHeader );
    formHeader.appendChild( formName );
    formHeader.appendChild( button );
    button.addEventListener('click', function(event) {
        closePopUp();
    
    });
    

    for (let i = 0; i<=2; i++){
        let  input = document.createElement( "input" );

        let id, placeholder, type, className, appendTo;
        if (i==0){
            id = "taskTitle";
            placeholder ="Task";
            type = "text";
            className ="formInput"
            appendTo = form;
        }
        if (i==1){
            id = "taskDate";
            placeholder ="";
            type = "date";
            className ="formInput small"
            appendTo = dateInput;

        }

        if (i==2){
            id = "taskTime";
            placeholder ="";
            type = "time";
            className ="formInput small"
            appendTo = dateInput;

        }
        input.setAttribute( "class", className );
        input.setAttribute( "placeholder", placeholder );
        input.setAttribute( "type", type );
        input.setAttribute( "id", id );
        appendTo.appendChild( input );
    }
    form.appendChild(dateInput)

    let  textarea = document.createElement( "textarea" );
    textarea.setAttribute( "class", "formInput" );
    textarea.setAttribute( "placeholder", "Description" );
    textarea.setAttribute( "maxlength", 50 );
    textarea.setAttribute( "id", "textarea" );
    form.appendChild(textarea);

 







    
    let  charCounter = document.createElement( "div" );
    let  span1 = document.createElement( "span" );
    let  span2 = document.createElement( "span" );
    charCounter.setAttribute( "id", "the-count" );
    span1.setAttribute( "id", "current" );
    span1.appendChild( document.createTextNode("0"));
    span2.appendChild( document.createTextNode(" Characters"));
    form.appendChild(charCounter);
    charCounter.appendChild(span1);
    charCounter.appendChild(span2);
    

    textarea.addEventListener('keyup', function(event) { 
        document.getElementById("current").innerHTML = parseInt(textarea.value.length)

        if (parseInt(document.getElementById("current").innerHTML) >= 40){
            document.getElementById("the-count").style.color = "red";
            document.getElementById("current").style.fontWeight = "bold";
            
        }
        else{

            document.getElementById("the-count").style.color = "#141414";
            document.getElementById("current").style.fontWeight = "normal";

        }


    });








    let  footer = document.createElement( "div" );
    footer.setAttribute( "id", "form-footer" );
    let  select = document.createElement( "select" );
    let submitButton = document.createElement("p");
    submitButton.appendChild( document.createTextNode("Submit"));

    submitButton.setAttribute( "class", "submit" );
    submitButton.setAttribute( "id", "submit-task" );
    select.setAttribute( "id", "taskStatus" );
    select.setAttribute( "class", "formInput" );
    select.setAttribute( "placeholder", "Status" );

    let optionValue;
   for(let i = 0; i<=3;i++){
    let  option = document.createElement( "option" );

    if(i==0){
        optionValue = "Status";
       }
    if(i==1){
        optionValue = "Waiting to start";
    }
    if(i==2){
        optionValue = "Doing";
    }
    if(i==3){
        optionValue = "Stuck";
    }


    option.setAttribute( "value", optionValue );
    option.appendChild( document.createTextNode(optionValue));
    select.appendChild(option);

   }

   form.appendChild(footer);
   footer.appendChild(select);
   footer.appendChild(submitButton);
   submitButton.addEventListener("click", function(event){
       submitTasks();
   });


   addTask.appendChild( form );
   popUp.appendChild(addTask)

   
}


//flowerssssssss 