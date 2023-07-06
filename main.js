function weightConverter(valNum) {
	document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
  }
var weight, height, measure, bmi, error ;
bmi=bmi

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
	const form=document.getElementById("form-post");
	const usernameInput = document.querySelector('#username');

	form.addEventListener('submit',function(e){
		e.preventDefault();
		
		const Payload=new FormData(form);
		
		console.log([...Payload]);
		fetch('https://httpbin.org/post',{
			method:"POST",
			body:Payload
		})
		.then(res=>res.json())
		.then(data=>console.log(data))
		.catch(error=>console.log(error));
	})
	
}


var users = [];
function handleSubmit(event) {
  event.preventDefault();
  var usernameInput = document.getElementById("username");
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var commentsInput = document.getElementById("comments");
  var username = usernameInput.value;
  var weight = weightInput.value;
  var height = heightInput.value;
  var comments = commentsInput.value;
  var userData = {
    username: username,
    weight: weight,
    height: height,
    comments: comments
  };
  users.push(userData);
  usernameInput.value = "";
  weightInput.value = "";
  heightInput.value = "";
  commentsInput.value = "";
}
function displayUsers() {
  var userList = document.getElementById("userList");
  userList.innerHTML = ""; 
  users.forEach(function (user) {
    var listItem = document.createElement("li");
    listItem.textContent = "Username: " + user.username + ", Weight: " + user.weight + ", Height: " + user.height + ", Comments: " + user.comments;
    userList.appendChild(listItem);
  });
}
function searchByUsername() {
  var searchInput = document.getElementById("searchUsername").value;

  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = ""; 
  users.forEach(function (user) {
    if (user.username === searchInput) {
      var listItem = document.createElement("li");
      listItem.textContent = "Username: " + user.username + ", Weight: " + user.weight + ", Height: " + user.height + ", Comments: " + user.comments;
      searchResults.appendChild(listItem);
    }
  });
}
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", handleSubmit);g
var form = document.getElementById("form-post");
form.addEventListener("submit", function(event) {
  event.preventDefault();
});
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchByUsername);
