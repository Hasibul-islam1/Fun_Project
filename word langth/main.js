// get the calculetor button and text box value 
document.getElementById("btn").addEventListener("click",()=>{
const line =document.getElementById("boxValue").value;
// counter vareable diclar and condition 
let b;
if (line=="") {
    alert("enter your text")
}
else{
    b=1;
    for(let i=0;i<=line.length;i++){
        if(line[i]==" "){
            b++;
            console.log("hi");
        }
    }
}
let z=b.toString();
document.getElementById("num").innerText=z;
});

// reset 
document.getElementById("reset").addEventListener("click",()=>{
    let box=document.getElementById("boxValue");
    box.value="";
    document.getElementById("num").innerText="";
})