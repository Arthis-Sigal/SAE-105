function mon_programme()
{		var i, j, Y, X;
    Y = Number(document.getElementById("form1").elements["I2"].value);
    var ch1="<table border=0>";
    var ch2="<tr><td>X</td>";
    var ch3="";
    var ch4="</tr>";
    var ch5="";
    var ch8="<table>";
    var ch9="<p><button type='button' onclick='multiple()'>Afficher les multiples</button></p>";
    var ch10="<form id=form2><label for='X'>Les multiple de</label><input type='number' id='I1'> <br/><br/></form>";

   
for(let i=0; i<=Y ; i++) {
    ch3+="<td>"+"<p>"+i+"</p>"+"</td>";
}


for(let i=0; i<=Y ; i++) {
    ch5+="<tr>";
    ch5+="<td>"+i+"</td>";
    for(let j=0; j<=Y ; j++) {
        ch5+="<td>"+ j*i+ "</td>";
    }
    ch5+="</tr>";
 
     
}
document.getElementById('x1').innerHTML=ch9+ch1+ch2+ch3+ch4+ch5+ch8;
document.getElementById('x2').innerHTML=ch10;
}

function multiple()
{		var i, j, Y, X;
    Y = Number(document.getElementById("form1").elements["I2"].value);
    X = Number(document.getElementById("form2").elements["I1"].value);
    var ch1="<table border=0>";
    var ch2="<tr><td>X</td>";
    var ch3="";
    var ch4="</tr>";
    var ch5="";
    var ch8="<table>";
    var ch9="<p><button type='button' onclick='multiple()'>Afficher les multiples</button></p>";

for(let i=0; i<=Y ; i++) {
    ch3+="<td>"+"<p>"+i+"</p>"+"</td>";
}


for(let i=0; i<=Y ; i++) {
    ch5+="<tr>";
    ch5+="<td>"+i+"</td>";
    for(let j=0; j<=Y ; j++) {
        ch5+="<td>"+ j*i+ "</td>";
    }
    ch5+="</tr>";
 
     
}
 
document.getElementById('x1').innerHTML=ch9+ch1+ch2+ch3+ch4+ch5+ch8;

let longueur = document.querySelectorAll("td").length;
//var ch=''
var x, y;
for(let i=Y+2; i<=longueur-1;i++){
    if (i%(Y+2)!=0){
            let cases = document.querySelectorAll("td")[i];
            x=Math.floor((i-(Y+3))/(Y+2));
            y = (i-(Y+3))%(Y+2);
            //ch+='('+x+','+y+'),';
                if((x*y)%X==0) {
                    if ( cases.classList.contains("nm")){
                        cases.classList.replace("nm","m");
                    }
                    else {
                        cases.classList.add("m");
                    }
                }
                else{
                    if ( cases.classList.contains("m")){
                        cases.classList.replace("m","nm");
                    }
                    else {
                        cases.classList.add("nm");
                    }
        }
    }
}
// document.getElementById('x2').innerHTML=ch;

}