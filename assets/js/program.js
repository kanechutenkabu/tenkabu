const btn = document.querySelector("input");
btn.addEventListener("click",tgl_dsp);
const ancher = document.querySelectorAll("a");
ancher[0].addEventListener("click",tgl_dsp);
ancher[1].addEventListener("click",tgl_dsp);
ancher[2].addEventListener("click",tgl_dsp);
ancher[3].addEventListener("click",tgl_dsp);
ancher[4].addEventListener("click",tgl_dsp);
ancher[5].addEventListener("click",tgl_dsp);
ancher[6].addEventListener("click",tgl_dsp);
ancher[7].addEventListener("click",tgl_dsp);

function tgl_dsp() {
    const hide = document.querySelector("#ul");
    const big = document.querySelector("header")
    const nav = document.querySelector("nav")
    console.log(hide);
    console.log(big);
    console.log(nav);
    console.log(ancher);
    hide.classList.toggle("hidden");
    big.classList.toggle("big");
    nav.classList.toggle("big");
};

const rbbtn = document.querySelector("#js_rbbtn");
rbbtn.addEventListener("click",rb_tgl);

function rb_tgl() {
    const forrainbow = document.querySelectorAll("p");
    const forrainbow2 = document.querySelectorAll("h1");
    let i = 0;
    forrainbow2[0].classList.toggle("rainbowtxt");
    while (i < 100) {
        forrainbow[i].classList.toggle("rainbowtxt");
        i++;
    }
    i = 0;
};