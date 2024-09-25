document.getElementById("btn").addEventListener("click",()=>{
const line =document.getElementById("boxValue").value;
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
document.getElementById("num").innerText=b;
});

