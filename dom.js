function fun(){
    var table=document.getElementById("mytable");
    var newrow=document.createElement("tr");
    var Name= document.getElementById("Name").value;
    var textNode=document.createTextNode(Name);
    var Nametd= document.createElement("td");
    Nametd.appendChild(textNode);
    newrow.appendChild(Nametd);
    var EMAIL= document.getElementById("EMAIL").value;
    var textNode=document.createTextNode(EMAIL);
    var EMAILtd= document.createElement("td");
    EMAILtd.appendChild(textNode);
    newrow.appendChild(  EMAILtd);
    var PHONE= document.getElementById("PHONE").value;
    var textNode=document.createTextNode(PHONE);
    var PHONEtd= document.createElement("td");
    PHONEtd.appendChild(textNode);
    newrow.appendChild(PHONEtd);
    var ADDRESS= document.getElementById("ADDRESS").value;
    var textNode=document.createTextNode(ADDRESS);
    var ADDRESStd= document.createElement("td");
    ADDRESStd.appendChild(textNode);
    newrow.appendChild(ADDRESStd);
    var button=document.createElement("button");
    var textNode=document.createTextNode("DELETE");
    var buttontd= document.createElement("td");
    button.appendChild(textNode);
    buttontd.appendChild( button);
    newrow.appendChild(buttontd);
    table.appendChild(newrow);
    buttontd.addEventListener('click',()=>{
        // alert("hey");
       var x =  buttontd.parentNode.parentNode.removeChild(buttontd.parentNode);
        //  .removeChild(this.parentNode);
      
         
            });;


        //  =this.value
        // alert(Name);
        // });
        // document.getElementById("EMAIL").addEventListener("onkeyup",()=>{
        //     var Name=this.value;
        //     });
        //  document.getElementById("PHONE").addEventListener("onkeyup",()=>{
        //         var Name=this.value;
        //         });
        //  document.getElementById("ADDRESS").addEventListener("onkeyup",()=>{
        //             var Name=this.value;
        //             });

};


