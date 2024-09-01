function addNewWE(){
   const newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.setAttribute("rows",3);
   newNode.style.marginTop="5px";
   newNode.setAttribute("placeholder","Enter here");

   const we=document.getElementById("we");
   const weAddButton =document.getElementById("weAddButton");
   
   we.insertBefore(newNode,weAddButton);
    
}


function addNewEQ(){
   const newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.setAttribute("rows",3);
   newNode.style.marginTop="5px";
   newNode.setAttribute("placeholder","Enter here");

   const eq=document.getElementById("eq");
   const eqAddButton =document.getElementById("eqAddButton");
   
   eq.insertBefore(newNode,eqAddButton);
}

//genrating cv
function genrateCV(){
    const nameField=document.getElementById("nameField").value;
     
    const nameT1 =document.getElementById("nameT");
    nameT1.textContent=nameField;


    document.getElementById("nameT2").textContent=document.getElementById("nameT").value;
    document.getElementById("contactT").textContent=document.getElementById("ContactField").value;
    document.getElementById("addressT").textContent=document.getElementById("AddressField").value;
    document.getElementById("fbT").textContent=document.getElementById("fbField").value;
    document.getElementById("instaT").textContent=document.getElementById("instaField").value;
    document.getElementById("LinkedT").textContent=document.getElementById("linkField").value;
    document.getElementById("objectiveT").textContent=document.getElementById("objectiveField").value;
    // document.getElementById("LinkedT").textContent=document.getElementById("linkField").value;
    // document.getElementById("LinkedT").textContent=document.getElementById("linkField").value;

    //we
    let wes=document.querySelectorAll('.weField');
    let str='';

    for(let e of wes){
        str+=`<li>${e.value}</li>`
    }

    document.getElementById('weT').innerHTML=str;

    let eqs=document.querySelectorAll('.eqField')
    let str1='';

    for(let e of eqs){
        str1+=`<li>${e.value}</li>`
    }

    document.getElementById('eqT').innerHTML=str1;

    //code for setting image
    const file=document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template
    //document.getElementById("imgT").src=reader.result;
    reader.onloadend=function(){
        document.getElementById("imgT").setAttribute("src",reader.result);  
    }
    document.getElementById("imgT").setAttribute("src",reader.result);
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

function printCV(){
    window.print();
}
