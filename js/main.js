async function loginUser(){
  let email = document.getElementById("email").value;

  let res = await fetch("data/users.json");
  let users = await res.json();

  let user = users.find(u => u.email === email);

  if(!user){
    alert("User Not Found");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  window.location = "dashboard.html";
}

function getUser(){
  let user = localStorage.getItem("user");
  if(!user){
    window.location = "index.html";
  }
  return JSON.parse(user);
}
