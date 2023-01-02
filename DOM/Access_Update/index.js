function getText(){
    var lisText = document.querySelector(".one").textContent;

    alert(lisText);
}

function someText(input){
   var ul = document.querySelectorAll("ul");
   var lastChild = ul[0].lastElementChild;
   lastChild.textContent = input;
}

var newText = "Something else here";

getText();
someText(newText);