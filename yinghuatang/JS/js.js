/**
 * Created by Administrator on 2017/4/4.
 */
window.onload=function () {
    gogogo();
};

function gogogo() {
    var about1 = document.getElementById("about-1");
    var ab1li = about1.getElementsByTagName("li");
    var about2 = document.getElementById("about-2");
    var ab2li = about2.getElementsByTagName("li");
    for(var j=0; j<ab1li.length;j++){
        ab2li[j].style.display = "none";
    }
    ab2li[0].style.display = "block";
    ab1li[0].lastChild.className="dyli_sp"
    for(var i=0;i<ab1li.length;i++){
        ab1li[i].id=i;
        ab1li[i].onclick = function () {
            for(var j=0; j<ab1li.length;j++){
                ab2li[j].style.display = "none";
                 ab1li[j].lastChild.className=""
            }
            ab2li[this.id].style.display = "block";
            ab1li[this.id].lastChild.className="dyli_sp"
        }
    }
}

