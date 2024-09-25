
const one=document.getElementById("imgOne");
const tow= document.getElementById("imgTow");
tow.addEventListener("click",()=>{
    one.removeAttribute("Style")
    tow.setAttribute("Style","display:none;");
});
one.addEventListener("click",()=>{
    tow.removeAttribute("Style")
    one.setAttribute("Style","display:none;");
});