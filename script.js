var i, ii, x, xcheck;
while(xcheck!=false){
    x=prompt("Please enter a number: ");
    xcheck=isNaN(x);
    if(xcheck==true){
        alert("Please enter numerical values only.");
    }
}

document.getElementById('userInput').innerHTML="Number inputted: " + x + "<br>";
if(x%2==0){
    var y=x;
    for(i=1 ; i<=x ; i++){
        for(ii=1 ; ii<=x ; ii++){
            document.write(y + " ");
        }
        document.write("<br>");
        y=y-1;
    }
}else{
    y=x;
    for(i=1 ; i<=x ; i++){
        for(ii=1 ; ii<=y ; ii++){
            document.write(y + " ");
        }
        document.write("<br>");
        y=y-1;
    }
}