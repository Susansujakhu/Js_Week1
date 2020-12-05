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
	var seconds = date.getSeconds();
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
		result = (2*3.14*radius).toFixed(2);
		console.log(2*3.14*radius);
		document.getElementById('Result').innerText = "The Circumference is : " + result;
	}
}

window.onload = function(){
	array_elements();
}



function array_elements() {
	var fav_place = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

	fav_place.forEach( function(value, index){
		document.getElementById('default_array').innerHTML += "<li>"+value+"</li>"; 
		//console.log(value);
	});
	document.getElementById('default_array_length').innerHTML = "The Lenth of Array is : " + fav_place.length;

	var point;
	fav_place.splice(4, 0, "Bhaktapur", "Banepa");
	fav_place.forEach( function(value, index){
		document.getElementById('add_2_places').innerHTML += "<li>"+value+"</li>";
		if (value == 'Kathmandu'){
			point = index;
		}
		//console.log(value);
	});
	document.getElementById('added_array_length').innerHTML = "The Lenth of Array is : " + fav_place.length;
	//console.log(fav_place);
	
	fav_place.splice(point,1);
	fav_place.forEach( function(value, index){
		document.getElementById('remove_ktm').innerHTML += "<li>"+value+"</li>"; 
		//console.log(value);
	});
	//console.log(fav_place);

	document.getElementById('array_length').innerHTML = "The Lenth of Array is : " + fav_place.length;

}



function tips_calculate() {
	var amount = document.getElementById('amount').value;
	var percent = document.getElementById('percent').value;
	if (amount == '') {
		document.getElementById('amount').style.border = '2px solid red';
		document.getElementById('tips').innerText = '';
	}
	else if (percent == '') {
		document.getElementById('percent').style.border = '2px solid red';
		document.getElementById('tips').innerText = '';
	}
	else {
		var tips_amount = ((amount * percent) / 100).toFixed(2);
		console.log(tips_amount);
		document.getElementById('tips').innerText = "Tips Amount is Rs. " + tips_amount;
	}
}
