
function getFile(e){		

						var iframe = document.createElement("IFRAME");		
						iframe.src = document.getElementById("file").value;				
						iframe.id = "iframe"		
						iframe.style.width  = "100%";		
						iframe.style.height = "300px";						
						document.getElementById("area").appendChild(iframe);

						}	
	
	window.onload = function(){ 		

						document.getElementById('load').onclick	 = getFile;
						document.getElementById('read').onclick	 = readTextFile;
						document.getElementById('mudanca').onclick = buscaNoGoogle
					};

	function readTextFile() {
		
								const largeImage = document.getElementById('area');
								largeImage.style.display = 'block';
								largeImage.style.width = 200 + 'px';
								largeImage.style.heigth=200+'px';
								const url = largeImage.getAttribute('src');
								open('alfio.jpeg','image','width = largeImage.style.width,heigth=largeImage.style.heigth, resizable = 1');

  								 }

  	function buscaNoGoogle(){

  		window.location = 'https://www.google.com/search?source=hp&ei=N5-2W7HpHYKFwQSvmbygDQ&q=' + enter.value;
  	}
  								


