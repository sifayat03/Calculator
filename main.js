let mobilemenu = document.querySelector(".menu");
let navbar= document.querySelector(".navbar")

var iconvalue= true;

mobilemenu.addEventListener("click",()=>{
  navbar.classList.toggle('mobiletags')
  

 if(iconvalue){
    mobilemenu.innerHTML = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="18" height="18" rx="2" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9L9 15" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
<path d="M9 9L15 15" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
</svg>`;
    iconvalue=false;
  }
  else if (!iconvalue) {
    mobilemenu.innerHTML = `    <svg fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 297 297" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M279.368,24.726H102.992c-9.722,0-17.632,7.91-17.632,17.632V67.92c0,9.722,7.91,17.632,17.632,17.632h176.376
				c9.722,0,17.632-7.91,17.632-17.632V42.358C297,32.636,289.09,24.726,279.368,24.726z"/>
			<path d="M279.368,118.087H102.992c-9.722,0-17.632,7.91-17.632,17.632v25.562c0,9.722,7.91,17.632,17.632,17.632h176.376
				c9.722,0,17.632-7.91,17.632-17.632v-25.562C297,125.997,289.09,118.087,279.368,118.087z"/>
			<path d="M279.368,211.448H102.992c-9.722,0-17.632,7.91-17.632,17.633v25.561c0,9.722,7.91,17.632,17.632,17.632h176.376
				c9.722,0,17.632-7.91,17.632-17.632v-25.561C297,219.358,289.09,211.448,279.368,211.448z"/>
			<path d="M45.965,24.726H17.632C7.91,24.726,0,32.636,0,42.358V67.92c0,9.722,7.91,17.632,17.632,17.632h28.333
				c9.722,0,17.632-7.91,17.632-17.632V42.358C63.597,32.636,55.687,24.726,45.965,24.726z"/>
			<path d="M45.965,118.087H17.632C7.91,118.087,0,125.997,0,135.719v25.562c0,9.722,7.91,17.632,17.632,17.632h28.333
				c9.722,0,17.632-7.91,17.632-17.632v-25.562C63.597,125.997,55.687,118.087,45.965,118.087z"/>
			<path d="M45.965,211.448H17.632C7.91,211.448,0,219.358,0,229.081v25.561c0,9.722,7.91,17.632,17.632,17.632h28.333
				c9.722,0,17.632-7.91,17.632-17.632v-25.561C63.597,219.358,55.687,211.448,45.965,211.448z"/>
		</g>
	</g>
</g>
</svg>`;
    iconvalue=true; 
  }
});

//756993