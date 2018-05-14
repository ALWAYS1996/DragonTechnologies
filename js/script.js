//Dynamic site content

var content ={
	'hyperx-cloud-revolver-s':{
		'name':"Cloud Revolver", 
		'image':"img/headset/hyperx-cloud-revolver-s.jpg",
		'brand':"HyperX",
		'price' : 18000
	},

	'marvo-hg8952-silver':{
		'name':"HG8952",
		'image':"img/headset/marvo-hg8952-silver.jpg",
		'brand':"Marvo",
		'price' : 22000
	},

	'msi-ds502':{
		'name':"DS502",
		'image':"img/headset/msi-ds502.jpg",
		'brand':"ReDragon",
		'price' : 25000
	},

	'razer-mano-war':{
		'name':"ManoWar",
		'image':"img/headset/razer-mano-war.jpg",
		'brand':"Razer",
		'price' : 60000
	},

	'sennheiser-gsp-303':{
		'name':"GSP 303",
		'image':"img/headset/sennheiser-gsp-303.jpg",
		'brand':"Sennheiser",
		'price' : 33000
	},

	'corsair-k63-wireless':{
		'name':"K63",
		'image':"img/keyboard/corsair-k63-wireless.jpg",
		'brand':"Corsair",
		'price' : 55000
	},

	'razer-ornata-chroma':{
		'name':"Ornata Chroma",
		'image':"img/keyboard/razer-ornata-chroma.jpg",
		'brand':"Razer",
		'price' : 80000
	},

	'redragon-k503-harpe-rgb':{
		'name':"H503 Harpe",
		'image':"img/keyboard/redragon-k503-harpe-rgb.jpg",
		'brand':"ReDragon",
		'price' : 10000
	},

	'redragon-k552-kumara':{
		'name':"H522 Kumara",
		'image':"img/keyboard/redragon-k552-kumara.jpg",
		'brand':"ReDragon",
		'price' : 25000
	},

	'redragon-k556-rk-devarajas-retro':{
		'name':"K566 Devarajas",
		'image':"img/keyboard/redragon-k556-rk-devarajas-retro.jpg",
		'brand':"ReDragon",
		'price' : 40000
	},

	'acer-ed242qr-144-hz':{
		'name':"ED242",
		'image':"img/monitor/acer-ed242qr-144-hz.jpg",
		'brand':"Acer",
		'price' : 110000
	},

	'acer-v206hql':{
		'name':"V206",
		'image':"img/monitor/acer-v206hql.jpg",
		'brand':"Acer",
		'price' : 130000
	},

	'aoc-e2275swj':{
		'name':"E2275",
		'image':"img/monitor/aoc-e2275swj.jpg",
		'brand':"AOC",
		'price' : 125000
	},

	'asus-rog-swift-pg278qr':{
		'name':"PG278",
		'image':"img/monitor/asus-rog-swift-pg278qr.jpg",
		'brand':"Asus",
		'price' : 150000
	},

	'asus-vp247qg':{
		'name':"VP247",
		'image':"img/monitor/asus-vp247qg.jpg",
		'brand':"Asus",
		'price' : 180000
	},

	'genius-gx-maurus':{
		'name':"Maurus",
		'image':"img/mouse/genius-gx-maurus.jpg",
		'brand':"Genius",
		'price' : 18000
	},

	'logitech-g903-lightspeed':{
		'name':"G903",
		'image':"img/mouse/logitech-g903-lightspeed.jpg",
		'brand':"Logitech",
		'price' : 22000
	},

	'marvo-m212':{
		'name':"M212",
		'image':"img/mouse/marvo-m212.jpg",
		'brand':"Marvo",
		'price' : 30000
	},

	'razer-abyssus-v2':{
		'name':"Abyssus",
		'image':"img/mouse/razer-abyssus-v2.jpg",
		'brand':"Razer",
		'price' : 62000
	},

	'redragon-m901-perdition':{
		'name':"M901 Perdition",
		'image':"img/mouse/redragon-m901-perdition.jpg",
		'brand':"ReDragon",
		'price' : 25000
	},

	'xtremepc-level-1-intel':{
		'name':"XtremePC LVL 1",
		'image':"img/pc/xtremepc-level-1-intel.jpg",
		'brand':"Intel",
		'price' : 260000
	},

	'xtremepc-vega':{
		'name':"XtremePC Vega",
		'image':"img/pc/xtremepc-vega.jpg",
		'brand':"AMD",
		'price' : 300000
	},

	'xtremepc-vega-5':{
		'name':"XtremePC Vega 5",
		'image':"img/pc/xtremepc-vega-5.jpg",
		'brand':"AMD",
		'price' : 320000
	},

	'xtremepc-vega-elite':{
		'name':"XtremePC Vega Elite",
		'image':"img/pc/xtremepc-vega-elite.jpg",
		'brand':"AMD",
		'price' : 380000
	},

	'xtremepc-vega-elite-3':{
		'name':"XtremePC Vega Elite 3",
		'image':"img/pc/xtremepc-vega-elite-3.jpg",
		'brand':"AMD",
		'price' : 420000
	}
}

var contentKeys = ['hyperx-cloud-revolver-s','marvo-hg8952-silver','msi-ds502', 'razer-mano-war', 
'sennheiser-gsp-303','corsair-k63-wireless','razer-ornata-chroma','redragon-k503-harpe-rgb', 
'redragon-k552-kumara','redragon-k556-rk-devarajas-retro','acer-ed242qr-144-hz', 'acer-v206hql',
'aoc-e2275swj','asus-rog-swift-pg278qr','asus-vp247qg','genius-gx-maurus','logitech-g903-lightspeed',
'marvo-m212','razer-abyssus-v2','redragon-m901-perdition','xtremepc-level-1-intel','xtremepc-vega',
'xtremepc-vega-5','xtremepc-vega-elite','xtremepc-vega-elite-3']

var selection = window.location.search.substr(1)

//Methods

function generateAds(){
	document.getElementById('ads').innerHTML = '<img alt="add" src="img/ads/' + Math.floor((Math.random()*3)+1) + '.jpg">'
}

function generateCart(){
	var text = ""
	if(localStorage.length != 0){
		for(var i = 0; i < localStorage.length; i++){
		text += '<div id="cart"> <image class="cartImg" src="'+ content[localStorage.key(i)]["image"] +'">'
		+'<div id="cart"><label>'+ content[localStorage.key(i)]["brand"] + ': ' + content[localStorage.key(i)]["name"] +'</label></div>'
		+'<div id="cart"><label>Quantity ' + localStorage.getItem(localStorage.key(i)) + '</label></div>'
		+'<div id="cart"><label>Price ' + price(i) + '</label></div>'
		+'<div id="cart"><button id="cartButton" onclick="removeItemFromCart(this)" title="' + localStorage.key(i) + '">Remove</button></div></div>'
		}
		text += '<label>Prices with * have a total 20% discount</label>'	
	}
	else{
		text = "<label>No items in cart yet</label>"
	}
	return text
}

function price(i){
	if(Number(localStorage.getItem(localStorage.key(i))) >= 3){
		return (Number(content[localStorage.key(i)]['price']) * Number(localStorage.getItem(localStorage.key(i))))* 0.80 + "*"
	}
	else{
		return (Number(content[localStorage.key(i)]['price']) * Number(localStorage.getItem(localStorage.key(i))))
	}
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
	var text = ""

	if(selection == ""){
		document.getElementById('main').innerHTML = '<image id="image" src="img/home.jpg"><br><label id="mainLabel">Welcome to Dragon Technologies</label>'
	}

	if(selection == "contact"){
		document.getElementById('main').innerHTML = '<p class="contact"><a href="https://www.twitter.com"><img id="imageContact" src="img/twitter-logo.png"><label>Twitter</label></a></p>'
		+'<p class="contact"><a href="https://www.youtube.com"><img id="imageContact" src="img/yt-logo.png"><label>YouTube</label></a></p>'
		+'<p class="contact"><a href="https://www.facebook.com"><img id="imageContact" src="img/facebook-logo.png"><label>Facebook</label></a></p>'
	}

	else if(selection == "mouse" || selection == "keyboard" || selection == "monitor" || selection == "headset" || selection == "pc"){
		for(var i = 0; i < contentKeys.length; i++){
			if(content[contentKeys[i]]['image'].includes(selection)){
				text += '<div id="cart"><img class="cartImg" src=' + content[contentKeys[i]]['image'] + '>'
				+'<div id="cart"><label><a href="?' + contentKeys[i] + '">' + content[contentKeys[i]]['name']+ '</a></label></div></div>'
			}
		}
		document.getElementById('main').innerHTML = text
	}

	else if(selection == "cart"){
		document.getElementById('main').innerHTML = generateCart()
	}

	else{
		document.getElementById('name').innerHTML = content[selection]['name']
		document.getElementById('price').innerHTML = content[selection]['price']
		document.getElementById('brand').innerHTML = content[selection]['brand']
		document.getElementById('image').setAttribute('src', content[selection]['image'])
		document.getElementById('addToCart').setAttribute('title', selection)
	}
}

function addItemToCart(target){
	if(!localStorage.getItem(target.getAttribute('title'))){
		localStorage.setItem(target.getAttribute('title'), 1)
	}else{
		localStorage.setItem(target.getAttribute('title'), Number(localStorage.getItem(target.getAttribute('title'))) + 1) 
	}
	window.location.replace("?cart")
}

function removeItemFromCart(target){
	if(!localStorage.getItem(target.getAttribute('title'))){
		alert("Page must be reloaded for changes to be maded")
	}
	else{
		localStorage.removeItem(target.getAttribute('title'))
		location.reload()
	}
}

//Storage

if(typeof(Storage) == "undefined"){
	alert("Local storage is not supported")
}