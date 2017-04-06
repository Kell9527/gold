/**
 * Created by Administrator on 2017/4/4.
 */
window.onload=function () {
    gogogo();
};

function gogogo() {
    var xueyuan1 = document.getElementById("xueyuan-1");
    var lli = xueyuan1.getElementsByTagName("li");
    var xueyuan2 = document.getElementById("xueyuan-2");
    var rli = xueyuan2.getElementsByTagName("li");
    for(var j=0; j<lli.length;j++){
        rli[j].style.display = "none";
        lli[j].firstChild.className  = "";
    }
    lli[0].firstChild.className = "xueyuan-a";
    rli[0].style.display = "block";
    for(var i=0;i<lli.length;i++){
        lli[i].id=i;
        lli[i].onclick = function () {
            for(var j=0; j<lli.length;j++){
                rli[j].style.display = "none";
                lli[j].firstChild.className  = "";
            }
            rli[this.id].style.display = "block";
            lli[this.id].firstChild.className  = "xueyuan-a";
        }
    }
}