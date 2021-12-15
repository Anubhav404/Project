uname = document.getElementById("username");
uage = document.getElementById("userage");
teen = document.getElementById("teen");
above8 = document.getElementById("above8");
above45 =  document.getElementById("above45");
above65 =  document.getElementById("above65");
submitButton = document.getElementById("submitButton");
form = document.getElementById("mainForm");

var select = document.getElementById('selectMenu');
var selected_value = select.options[select.selectedIndex].value;

// below details are for the result page 
playerName = document.getElementById("playerName");
playerAge = document.getElementById("playerAge");
playerCategory = document.getElementById("playerCategory");

submitButton.addEventListener("click", (event) => {
  localStorage.setItem("uname" , uname.value);
  
  return false;
});



// submitButton.addEventListener("click", (event) => {
//   playerName.innerHTML = "anubha";
//   playerAge.innerHTML = "soni";
//   playerCategory.innerHTML = " is the best ";
    
    
//   });

// get_button = document.getElementById("details_button");
// get_button.addEventListener("click" , () => {
//   alert("This is working whohoooo!!!!!!!!!");
// })
  
