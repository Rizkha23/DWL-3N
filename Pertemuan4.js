var text = document.getElementById('Judul')
text.innerHTML = "Contoh Penerapan Eksternal JS dan Inner HTML";

var text = document.getElementById('sub-Judul').style.fontFamily = "Forte";
var text = document.getElementById('sub-Judul').style.color = "#92beea";
var text = document.getElementById('sub-Judul').style.animation = "atasbawah 4s ease";

function darkMode()
{
	document.body.style.backgroundColor = "#333";
	document.body.style.color = "#fff";
}

function lightMode()
{
	document.body.style.backgroundColor = "#fff";
	document.body.style.color = "#333";
}