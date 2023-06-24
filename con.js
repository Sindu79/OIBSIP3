function convert(){
    let deg=document.getElementById("degrees").value;
    if(isNaN(deg)){
        alert("Invalid entry! Please enter a number");
    }
    else{
        if(document.getElementById("type").value=="fahrenheit"){
          let c = ((parseFloat(deg) - 32)*5)/9;
          document.getElementById("result").value = c.toFixed(4).concat(" C");
        }
        else{
            let f = ((parseFloat(deg) * 9) / 5) + 32;
            document.getElementById("result").value = f.toFixed(4).concat(" F");
        }
    }
}