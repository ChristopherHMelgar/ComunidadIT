var asterisco = "*"
var total = ""
var num = 0
var cont = 13

while(num <= 14){
    total = total + asterisco
    num++;
    if(total.length == cont){
        console.log(total)
        num=0;
        cont--
        total=""
    }       
}