
const newInput = document.querySelector("#editEmail");
const meBtn = document.querySelector("#editBtn");
const form = document.querySelector("#editBottom");

const EMailKey = "email";

const getEmail = localStorage.getItem(EMailKey);

if (getEmail !== null){
const parsedEmail = JSON.parse(getEmail);
newInput.value = parsedEmail;
}


function saveData(){
const newHello = newInput.value;
localStorage.setItem(EMailKey, JSON.stringify(newHello));
}

function handleBtn(){
if (meBtn.innerText === "수정하기"){
newInput.disabled = false;
meBtn.innerText = "수정완료";
meBtn.addEventListener("click", saveData);        
} else{
newInput.disabled = true;
meBtn.innerText = "수정하기";
}
}

function handleSubmit(e){
e.preventDefault();
newInput.disabled = true;
meBtn.innerText = "수정하기";
saveData()
}


meBtn.addEventListener("click", handleBtn);
form.addEventListener("submit", handleSubmit);