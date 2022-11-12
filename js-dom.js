//1
function changeInnerHtml(){
    document.getElementById("text").innerHTML="Hello World";
    document.getElementById("text").style.color="red";
    document.getElementById("text").style.fontWeight="bold";
    document.getElementById("text").style.textTransform="uppercase";
}

//3
function add(){
  const input1=  document.getElementById("input1").value;
  const input2= document.getElementById("input2").value;
  let result=0;
  if(!isNaN(input1) && !isNaN(input2)){
   result= +input1 + +input2;
  }else{
    result=input1+input2;
  }
  document.getElementById("addResult").innerHTML=result;
}

//4th answer
//In script tag, type="text/javascript" is not provided

//5
function logInConsole(){
    console.log("hello");
}

//6. Using alert, prevent a person from leaving the screen using JS DOM.
window.onbeforeunload = s => "";

//8.
document.write("<h4>8. Created h4 tag using js dom</h4>")

//9.
function remove(){
const element = document.getElementById("remove");
const button = document.getElementById("removeButton");
element.remove();
button.remove();
}

//10
function getNoOfPTags(){
var totalPara=document.getElementsByTagName("p");
document.getElementById("noOfPTags").innerHTML=totalPara.length; 
}

//11
function getFormValue(){
    const form1 = document.forms.form1;
const formData = new FormData(form1);
const name = formData.get('name');
alert("Name is: "+name);
}



