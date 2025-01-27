var hi = document.querySelector(".plus");
var world = document.querySelector(".plus2");
var bye = document.querySelector(".plus1");

hi.addEventListener("click", function(){
   world.style.display = "block";
   bye.style.display = "block";
});

var delButtons = document.querySelectorAll("#del");
del.addEventListener("click", function(event){
    event.preventDefault();
    world.style.display = "none";
    bye.style.display = "none";
});

var add = document.getElementById("add");
var container = document.querySelector(".container");
var title = document.getElementById("Title");
var author = document.getElementById("Author");
var des = document.getElementById("Description");

add.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "container-box");
    div.innerHTML = `
        <h2>${title.value}</h2>
        <h6>${author.value}</h6>
        <p>${des.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;
    container.append(div);
    world.style.display = "none";
    bye.style.display = "none";
});

function deletebook(event){
    event.target.parentElement.remove();
}