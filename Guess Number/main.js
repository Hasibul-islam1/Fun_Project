const box=document.getElementById("box");
const massage=document.getElementById("message");

document.getElementById("btn").addEventListener("click",()=>{
    const num=Math.floor(Math.random()*100);
 const count = Number(box.value);
  if (count===num) {
    massage.innerText=`Your Guessed Right,Your Number Was${num}`
    // console.log(num);
  }
  else if(count<num){
    massage.innerText=`Your Guessed To Low, Number was ${num}`;
    // console.log(num);
  }
  else{
    massage.innerText=`Your Guessed To High,Number was ${num}`;
    // console.log(num);
  }
});