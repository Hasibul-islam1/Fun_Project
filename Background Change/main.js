document.getElementById("box").addEventListener("click",()=>{
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    // console.log(red,green,blue);
    document.getElementById("box").style.backgroundColor=`rgb(${red},${green},${blue})`;
});