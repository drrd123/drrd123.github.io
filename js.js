
var a=0
var b=0
var c=0
function f1(){
    b+=1
    window.alert("你终于承认了！ ：D")
    if (b==3){
    document.getElementById("a2").innerHTML="tips：你静静地等十秒......"
    setInterval(function(){document.getElementById("b4").style.display="block"},1000)
    }  
}
function f11(){
    document.getElementById("b1").style.color="red"
}
function f12(){
    document.getElementById("b1").style.color="black"
}
function f21(){
    document.getElementById("b2").style.color="red"
}
function f22(){
    document.getElementById("b2").style.color="black"
}
function f3(){
    if (a==0){
        document.getElementById("b2").style.float="left"
        document.getElementById("b1").style.float="right"
        a=1
        }
    else{
        document.getElementById("b2").style.float="right"
        document.getElementById("b1").style.float="left"
        a=0
    }
}
function f4(){
    window.alert("你想关，但是关不掉（滑稽）！")
}
function f41(){
    document.getElementById("b3").style.color="red"
}
function f42(){
    document.getElementById("b3").style.color="black"
}
function f61(){
    document.getElementById("b4").style.color="red"
}
function f62(){
    document.getElementById("b4").style.color="black"
}
function f63(){
    document.getElementById("b4").innerHTML="是"
    setTimeout(function(){window.alert("哈，你还是承认你是猪！")},10)
}