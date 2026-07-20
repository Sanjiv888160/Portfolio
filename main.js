let close = document.getElementById("close");
let bar = document.getElementById("bar");
let menu = document.getElementById("menu");

bar.addEventListener("click", () =>{
    menu.style.right = "0";
});

close.addEventListener("click", () =>{
    menu.style.right = "-17rem";
});


