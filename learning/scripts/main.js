let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
let myDuck=document.querySelector('img');
myDuck.onclick = function() {
  
let mySrc = myDuck.getAttribute('src');
  if(mySrc==='images/nolove-duck.jpg'){
  		myDuck.setAttribute('src','images/love-duck.jpg');
  }else{
      myDuck.setAttribute('src','images/nolove-duck.jpg');
  }
}

let myButton = document.querySelector("button");
function setUserName(){
	let myName = prompt('请输入你的名字');
	localStorage.setItem('name',myName);
	myHeading.textContent='welcome!'+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent='welcome!'+storedName;
}
myButton.onclick=function(){
	setUserName();
}