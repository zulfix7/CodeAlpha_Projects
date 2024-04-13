function calAge(){
    let dob= new Date(document.getElementById("date").value);
    let ageDiff= Date.now()-dob.getTime();
    let ageDate= new Date(ageDiff);
    let age= Math.abs(ageDate.getUTCFullYear()-1970)
    let month= ageDate.getUTCMonth();
    let days= ageDate.getUTCDate()-1
    document.getElementById("output").innerHTML= age+" years "+month+" months "+days+" days"
    }