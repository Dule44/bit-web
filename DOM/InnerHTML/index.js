function dropDown(arr, el){
  var body =  document.documentElement.children[1];
  body.appendChild(el);

  var select = document.createElement("select");
   el.appendChild(select);

   for(var i = 0; i < arr.length; i++){
    var option =  document.createElement('option');
    option.textContent = arr[i];
    select.appendChild(option);
   }
}

dropDown(["Home","About","Contact"],document.querySelector("div"));
dropDown(["Navbar","Pricing","Link"],document.querySelector("body").lastChild);