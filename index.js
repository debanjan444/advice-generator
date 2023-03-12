

window.onload = getAdvice();
document.querySelector(".button").addEventListener("click",getAdvice);





function getAdvice(){fetch('https://api.adviceslip.com/advice').then((response) => {
  return response.json();
}).then(adviceData => {
 const adviceObj  = adviceData.slip;
 const myAdvice = adviceObj.advice;
 const myAdviceno = adviceObj.id;
 document.getElementById("advice101").innerHTML = myAdvice;
 document.querySelector(".adviece-no").innerHTML = myAdviceno;

 console.log(myAdvice);
 console.log(myAdviceno);
}).catch(error => {
  console.log(error);
});
}
