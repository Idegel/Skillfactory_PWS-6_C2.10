const cat_form = document.querySelector("#cat_form");
const dog_form = document.querySelector("#dog_form");
const parrot_form = document.querySelector("#parrot_form");
const cat_button = document.querySelector("#cat");
const dog_button = document.querySelector("#dog");
const parrot_button = document.querySelector("#parrot");

cat_button.onclick = ()=>{
	cat_form.submit();
	result();
	console.log("for a cat");
}

dog_button.onclick = ()=>{
	dog_form.submit();
	result();
	console.log("for a dog");
}

parrot_button.onclick = ()=>{
	parrot_form.submit();
	result();
	console.log("for a parrot");
}

function result(){
	location.href = "result.html"
}

