window.addEventListener('DOMContentLoaded', () => {
  const adder = document.getElementById("adder");
  const todobox = document.getElementById("todolist");
  const clearbutt = document.getElementById("clearbutt");
  const enterbox = document.getElementById("enterbox");
  const setthedate = document.getElementById("setthedate");
  const date = new Date();
  let day = String(date.getDate()).padStart(2,'0');
  let month = String(date.getMonth()+1).padStart(2,"0");
  let year = date.getFullYear();
  setthedate.innerHTML = month + "-" + day + "-" + year;

  adder.addEventListener("click",function(){
    if (enterbox.value!=""){
        var list = document.createElement("li");
        var check = document.createElement("input");
        var label = document.createElement("label");
        check.setAttribute("name",enterbox.value);
        check.setAttribute("type","checkbox");
        label.setAttribute("for",enterbox.value);
        label.innerHTML = enterbox.value;
        check.setAttribute("class","task");
        label.setAttribute("class","task");
        list.setAttribute("class","task");

        list.appendChild(check);
        list.appendChild(label);

        todobox.appendChild(list);
        enterbox.value="";
    }
  })
  clearbutt.addEventListener("click",function(){
    const todolist = document.querySelectorAll('.task');
    todolist.forEach( todo =>{
        todo.remove();
    })
  });
});