//anger dumper javscript file

var count1=0;
function angerdump1()
{
count1= count1+1;
document.getElementById("countval1").innerHTML= count1;
if (count1< 25)
{
document.getElementById("countval1").innerHTML= count1;
}
else if (count1>= 25 && count1< 40)
{
document.getElementById("message1").innerHTML= "Anger is realsing and you are becoming more relaxing";
document.getElementById("anger1").style.background = "blue";
document.getElementById("anger1").style.color = "IndianRed";
document.getElementById("part2").style.color = "blue";
}
else if(count1>= 40 && count1< 55)
{
document.getElementById("message1").innerHTML= "Maximum Anger has been realsed and you are now relaxed";
document.getElementById("anger1").style.background = "yellow";
document.getElementById("anger1").style.color = "purple";
document.getElementById("part2").style.color = "yellow";
}
else if(count1>= 55 && count1< 70)
{
document.getElementById("message1").innerHTML= "you are now relaxed. Enjoy relaxing and go back to normal routine";
document.getElementById("anger1").style.background = "pink";
document.getElementById("anger1").style.color = "green";
document.getElementById("part2").style.color = "pink";
}
else 
{
document.getElementById("message1").innerHTML= "After few more dump counts, if still angry then Restart and play again and connect to anger management counsellor if needed";
document.getElementById("anger1").style.background = "white";
document.getElementById("anger1").style.color = "plum";
document.getElementById("part2").style.color = "white";
document.getElementById("angerrefresh1").style.display = "block";
}
}

function AngerRefresh1() {
count1=0;
document.getElementById("countval1").innerHTML= count1;
document.getElementById("angerrefresh1").style.display = "none";
document.getElementById("message1").innerHTML= "";
document.getElementById("anger1").style.background = "red";
document.getElementById("anger1").style.color = "black";
document.getElementById("part2").style.color = "red";
}