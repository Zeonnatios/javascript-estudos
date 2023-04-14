/* eslint-disable no-multi-assign, no-undef, no-unused-vars */
// Exemplo de callback no browser
// ver no browser Ctrl + Shift + i

let body = document.getElementsByTagName("body")[0].onclick = () => console.log("Evento");
body = document.getElementsByTagName("body")[0].onclick = (e) => console.log(e);
body = document.getElementsByTagName("body")[0].onclick = (e) => console.log(e.target);
