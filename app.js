var container = document.getElementsByClassName("container")
var list = document.createElement("div")
var ul = document.createElement("ul")
list.setAttribute("id","list")
var deleteAllBtn = document.getElementById('push2');


function added() {
    deleteAllBtn.style.display = "block"
    deleteAllBtn.setAttribute("onclick", "deletAll()");
    console.log("Button dab gaya")
    var taskInput = document.getElementById("fname")
    var li = document.createElement("li")
    li.setAttribute("class", "mymainLi")
    var icon = document.createElement("i")
    var myMainDiv = document.createElement('div');
    var liText = document.createElement('li');
    icon.setAttribute("class","far fa-square")
    icon.setAttribute("onclick","check(this)")

    // Del Button
    var delBtn = document.createElement("button")
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    delBtn.setAttribute("onclick","del(this)");
    delBtn.setAttribute("class","liBtn")
    // editButton
    var editBtn = document.createElement("button")
    editBtn.innerHTML = '<i class="fa fa-pen" aria-hidden="true"></i>'
    editBtn.setAttribute("onclick","edit(this)")
    editBtn.setAttribute("class","editBtn")
    liText.innerText = taskInput.value;
    //button All Del
    
    // var delAll=document.createElement("button")
    // delAll.setAttribute("onclick","delAll(this)")
    // delAll.setAttribute("class","delAll")
    // delAll.innerHTML= '<i class="fas fa-trash-alt"></i>';
    // console.log(delAll)

    console.log(taskInput)
    container[0].appendChild(list)
    list.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(icon)
    li.appendChild(liText)
    li.appendChild(myMainDiv)
    myMainDiv.appendChild(delBtn)
    myMainDiv.appendChild(editBtn)
    // myMainDiv.appendChild(delAll)
    taskInput.value = "";
    

    
}



function del(f){
    f.parentNode.parentNode.remove();
};

function edit(e){

    // e.parentNode.parentNode
    console.log(e.parentNode.parentNode.firstElementChild.innerText)
    var editedText = prompt("Write Your Edited Task here", e.parentNode.parentNode.firstElementChild.innerText);
    e.parentNode.parentNode.firstElementChild.innerText = editedText

}

function deletAll(){
    var askUser = prompt("Are you sure you want to delete everything", "Yes/No")

    if(askUser.toLowerCase() == "yes") {
        for(i = ul.children.length -1 ; i>=0; i--) {
            ul.children[i].remove();
            console.log(i);
        }
    } else {
        console.log("it was by mistake")
    }

};
function check(c){
    // <i class="far fa-check-square"></i>
    if(c.className == "far fa-square") {
        c.className = "far fa-check-square"
    } else {
        c.className = "far fa-square"
    }
    // c.setAttribute('class', "")


}
