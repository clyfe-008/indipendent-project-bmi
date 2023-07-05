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
		const username = usernameInput.value;

		const prePayload=new FormData(form);
		const Payload=new URLSearchParams(prePayload);
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
