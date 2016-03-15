window.onload = function(){

	bindData();


	option.onclick = function(){
		
		getPrice();
	};
	profile.onchange = function(){
		getPrice();
	};
	
	width.onblur = height.onblur = function(){
		getPrice();
	};
	
	var radios = document.querySelectorAll(".pack");
	for(i=0;i<radios.length;i++){
		radios[i].onclick = function(){
			getPrice();
		};
	}
	
};

function getPrice(){
	var _price = 0;
	if(option.checked){
		_price+= Number(option.value);
	}
	var w = Number(width.value);
	var h = Number(height.value);
	if(profile.value){
		_price += (w+h)*2*Number(profile.value);
	}
	var packet = document.querySelector(".pack:checked");
	if(packet){
		_price+= ((w*h)/100)*Number(packet.value);
	}
	
	price.innerHTML = _price + " грн";
	
}

/*function changeResult(result){
	document.getElementById('result').innerHTML = result;
}

function calculateForm(){
	var result = (document.getElementById('profile').value*1+document.getElementById('packets').value*1+document.getElementById('width').value*getElementById('height').value*2);
	changeResult(result);
}

function getArea(){
	var result = 1;
	result *= parseFloat(document.getElementById('width').value);
	result *= parseFloat(document.getElementById('height').value); 
	document.getElementById('price').innerHTML = result;
};*/

function bindData(){
	for(i=0; i<components.profile.length; i++){
		profile.innerHTML += "<option value='"+components.profile[i].price+"'>"+components.profile[i].name+"</option>";
	}
	
	for(i=0; i<components.packet.length; i++){
		packets.innerHTML += "<input type='radio' class='pack' name='packet' value='"+components.packet[i].price+"'>"+components.packet[i].name+"<br>";
	}
	
	option.value = components.fort;
};