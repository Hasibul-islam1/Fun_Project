// get all data 
const addbtn=document.getElementById("addButton");
const taskBox=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");

lodeTask();

function AddTask() {
    const task=taskBox.value.trim();// trim use it remove white space remove for start and end .
    if (task) {
        CreateTaskElement(task);
        taskBox.value="";
        saveTask();
    }
    else{
        alert("Place Add a Task")
    }

}
addbtn.addEventListener("click",AddTask);

function CreateTaskElement(Task) {
    const makeLi=document.createElement("li");
    makeLi.textContent=Task;
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.className="deleteTask";
    makeLi.appendChild(deleteBtn);

    // const DoneBtn=document.createElement("button");
    // DoneBtn.textContent="Done";
    // DoneBtn.className="doneTask";
    // makeLi.appendChild(DoneBtn);
    taskList.appendChild(makeLi);
    // DoneBtn.addEventListener("click",()=>{
    //     makeLi.style.backgroundColor="green";
    // })
    deleteBtn.addEventListener("click",()=>{
        taskList.removeChild(makeLi);
        saveTask();
    })
};

function saveTask() {
    let list=[];
    taskList.querySelectorAll("li").forEach((itme)=>{
        list.push(itme.textContent.replace("Delete"," ").trim());
    })
    localStorage.setItem("task",JSON.stringify(list));
}

function lodeTask() {
    const list=JSON.parse(localStorage.getItem("task")) || []
    list.forEach(CreateTaskElement);
}