var contenido ={
	'hxcrs':{
		'name':"Cloud Revolver", 
		'image':"",
		'brand':"HyperX",
		'price' : 18000, 
	},

	'mhgs':{
		'name':"HG8952",
		'image':"",
		'brand':"Marvo",
		'price' : 22000,
	},

	'msids':{
		'name':"DS502",
		'image':"",
		'brand':"ReDragon",
		'price' : 25000,
	},

	'rzmw':{
		'name':"ManoWar",
		'image':"",
		'brand':"Razer",
		'price' : 60000,
	},

	'shgsp':{
		'name':"GSP 303",
		'image':"",
		'brand':"Sennheiser",
		'price' : 33000,
	}
}

function generateAds(){
	document.getElementById('ads').innerHTML = '<img alt="add" src="img/ads/' + Math.floor((Math.random())+1)+ '.jpg">'
}

function openModal(target){
	var url = target.getAttribute("src")
	document.getElementById("modalImage").setAttribute("src", url)
	document.getElementsByClassName("modal")[0].classList.remove("hidden")
}

function closeModal(){
	document.getElementsByClassName("modal")[0].classList.add("hidden")
}

function generateContent(){
	var selection = window.location.search.substr(1)
	if(selection == ""){
		document.getElementById('main').innerHTML = ""
	}

	else if(selection == "promotions" || selection == "contact"){
		document.getElementById('container').innerHTML = ""
	}

	else{
		document.getElementById('name').innerHTML = contenido[selection]['name']
		document.getElementById('price').innerHTML = contenido[selection]['price']
		document.getElementById('description').innerHTML = contenido[selection]['description']
	}
}

//mediaQuery para ser responsive