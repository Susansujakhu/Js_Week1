window.setInterval(function() {
	myFunction();
}, 1000);

function myFunction() {

	var date = new Date();
	var month = date.toLocaleString('default', { month: 'long' });
	var day = date.toLocaleString('en-us', {  weekday: 'long' });
	var hours= date.getHours();
	if (hours == 0){ hours = 12};
	var minutes = date.getMinutes();
	if (minutes == 0){ minuter = 12};
	var seconds = date.getSeconds();
	if (seconds == 0){ seconds = 12};
	document.getElementById("time").innerHTML = hours+ ':' + minutes + ':' + seconds;
	document.getElementById("date").innerHTML = date.getDate() + ' ' + month + ' ' + date.getFullYear() + ' ' + day;

}

function calcCircumfrence() {
	var radius = document.getElementById('radius').value;
	
	if (radius == '') {
		document.getElementById('radius').style.border = '2px solid red';
		document.getElementById('Result').innerText = '';
	}
	else{
		result = 2*3.14*radius;
		console.log(2*3.14*radius);
		document.getElementById('Result').innerText = "The Circumference is : " + result;
	}
}