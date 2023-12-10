function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} Hora(s)`
if(hora >= 5 && hora < 12){
	//bom dia
	img.src = 'img/manha.jpg'
	document.body.style.background = '#d6982f'
}else if(hora >= 12 && hora < 18){
	//boa tarde
	img.src = 'img/tarde.jpg'
	document.body.style.background = '#2833ff'
}else{
	//boa noite
	img.src = 'img/noite.jpg'
	document.body.style.background = '#4c37e8'
}
}
