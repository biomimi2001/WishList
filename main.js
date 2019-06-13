function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById('myUL').innerHTML = li;
  document.getElementById("myInput").value = "";

}

function removeAll{
  document.getElementById("myUL").innerHTML = "";

}
const removeBtn = document.getElementById('.RBtn');
const addBtn = document.getElementById('.AddBtn');

addBtn.addEventListener('click', newElement);
removeBtn.addEventListener('click', removeAll);
