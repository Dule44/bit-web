function validation(){
    var form = document.querySelector("form");
    var list = form.querySelectorAll("input");

    list.forEach(function(el){
        if(el.hasAttribute("required") && el.value === ""){
            el.classList.value = "redBorders"
        }
    })
}

validation();