const btn=document.querySelector("input");btn.addEventListener("click",tgl_dsp);const ancher=document.querySelectorAll("a");for (let i=1;i<6;i++){ancher[i].addEventListener("click",tgl_dsp)}function tgl_dsp(){document.querySelector("#ul").classList.toggle("hidden");document.querySelector("header").classList.toggle("big");document.querySelector("nav").classList.toggle("big")}const rbbtn=document.querySelector("#js_rbbtn");rbbtn.addEventListener("click",rb_tgl);function rb_tgl(){document.querySelector("h1").classList.toggle("rainbowtxt");for(let i=0;i<13;i++){document.querySelectorAll("p")[i].classList.toggle("rainbowtxt")}}