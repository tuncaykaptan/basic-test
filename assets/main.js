function load(){
    document.getElementById("secenek1").style.display="none";
    document.getElementById("secenek2").style.display="none";
}

var soru1 = {

    Soru: "1-) Gelecekle ilgili hayallerin neler?",
    response_a: "Evlenip çoluk çocuk sahibi olmak.",
    response_b: "Okuyup iş sahibi olmak.",
    response_c: "Kendi şirketimi açıp bir şeyler başarmak.",
    foto: "url(assets/apple.webp)",

};
console.log(soru1.Soru)
var soru2 = {

Soru: "2)Birisini yapmak zorunda kalsan hangisini yapardın?",
response_a: "Habbo'yu bırakmak.",
response_b: "Dünyanın en acı biberini yemek. (Ölme ihtimalin var.)",
response_c: "Liseyi 1 yıl fazla okumak.",
foto: "url(assets/habbo.jpg)",

};
var soru3 = {

Soru: "3)Senin için hangisi daha önemli?",
response_a: "Hayallerim.",
response_b: "Aşk.",
response_c: "Dostluk.",
foto: "url(assets/dost.jpg)",

};
var soru4 = {

Soru: "4)Aşağıdakilerden birini sonsuza kadar hayatından çıkarmak zorunda kalsan hangisini seçerdin?",
response_a: "İnternet.",
response_b: "Bacakların (tekerlekli sandalye kullanacaksın).",
response_c: "Instagram.",
foto: "url(assets/media.png)",

};
var soru5 = {

Soru: "5)Aşağıdakilerden hangisi diğerlerinden farklıdır?",
Soru: "5)Aşağıdakilerden hangisi diğerlerinden farklıdır?",
response_a: "A10-b8-C6-d4-E2",
response_b: "Z77-c75-F73-g71-Ü69",
response_c: "Y52-r50-T49-ş47-M45",
foto: "url(assets/math.jpg)",

};
var s1=document.getElementById("secenek1");
var s2=document.getElementById("secenek2");
var s3=document.getElementById("secenek2");
var sorusayisi=1;
var puan=0;
function siradakisoru(x){
    if(sorusayisi==1){
        document.getElementById("secenek1").style.display="block";
        document.getElementById("secenek2").style.display="block";
        document.getElementById("aciklama").innerHTML=soru1.Soru
        document.getElementById("secenek1").innerHTML=soru1.response_a;
        document.getElementById("secenek2").innerHTML=soru1.response_b;
        document.getElementById("secenek3").innerHTML=soru1.response_c;
        document.getElementById("foto").style.background=soru1.foto;
        sorusayisi++;
    }else
    if(sorusayisi==2){
        if(x=="a"){puan=puan+1;}else
        if(x=="b"){puan=puan+2;}else
        if(x=="c"){puan=puan+3;}
        document.getElementById("aciklama").innerHTML=soru2.Soru
        document.getElementById("secenek1").innerHTML=soru2.response_a;
        document.getElementById("secenek2").innerHTML=soru2.response_b;
        document.getElementById("secenek3").innerHTML=soru2.response_c;
        document.getElementById("foto").style.background=soru2.foto;
        sorusayisi++;
    }else
    if(sorusayisi==3){
        if(x=="a"){puan=puan+1;}else
        if(x=="b"){puan=puan+3;}else
        if(x=="c"){puan=puan+3;}
        document.getElementById("aciklama").innerHTML=soru3.Soru
        document.getElementById("secenek1").innerHTML=soru3.response_a;
        document.getElementById("secenek2").innerHTML=soru3.response_b;
        document.getElementById("secenek3").innerHTML=soru3.response_c;
        document.getElementById("foto").style.background=soru3.foto;
        sorusayisi++;
    }else
    if(sorusayisi==4){
        if(x=="a"){puan=puan+3;}else
        if(x=="b"){puan=puan+1;}else
        if(x=="c"){puan=puan+3;}
        document.getElementById("aciklama").innerHTML=soru4.Soru
        document.getElementById("secenek1").innerHTML=soru4.response_a;
        document.getElementById("secenek2").innerHTML=soru4.response_b;
        document.getElementById("secenek3").innerHTML=soru4.response_c;
        document.getElementById("foto").style.background=soru4.foto;
        sorusayisi++;
    }else
    if(sorusayisi==5){
        if(x=="a"){puan=puan+2;}else
        if(x=="b"){puan=puan+1;}else
        if(x=="c"){puan=puan+3;}
        document.getElementById("aciklama").innerHTML=soru5.Soru
        document.getElementById("secenek1").innerHTML=soru5.response_a;
        document.getElementById("secenek2").innerHTML=soru5.response_b;
        document.getElementById("secenek3").innerHTML=soru5.response_c;
        document.getElementById("foto").style.background=soru5.foto;
        sorusayisi++;
    }else
    if(sorusayisi==6){
        if(x=="a"){window.open("#sonuc","_self")}else
        if(x=="b"){window.open("#sonuc","_self")}else
        if(x=="c"){
        puan=puan+1;
            window.open("#sonuc","_self")
        }

        document.getElementById("sonuc").style.width="410px";
        document.getElementById("sonuc").style.height="400px";
        document.getElementById("sonuc").style.border="1px solid black";
        document.getElementById("sonuc").style.margin="auto";

        if(puan<=4){
        document.getElementById("sonuc").innerHTML="<h2>SENİN GELECEKTEKİ NET SERVETİN:</h2><br><center><h1>100.000TL</h1></center><br><h3>Senin seçtiğin şıklara sıçam.</h3>"
        }
        if(puan>4 && puan<=9){
        document.getElementById("sonuc").innerHTML="<h2>SENİN GELECEKTEKİ NET SERVETİN:</h2><br><center><h1>1.000.000TL</h1></center><br><h3>Sen Türkiye'nin zenginlerinden birisi olacaksın. Ama bariz hataların var. Bunları düzeltmediğin sürece net servetin dolara çevrildiğinde buna pek de servet denemiyor.</h3>"
        }
        if(puan>9 && puan<13){
        document.getElementById("sonuc").innerHTML="<h2>SENİN GELECEKTEKİ NET SERVETİN:</h2><br><center><h1>1.000.000$</h1></center><br><h3>Sende gerçekten büyük bir potansiyel var! Eğer hayatına bu şekilde devam edersen gayet güzel bir hayat yaşarsın. Ancak senin potansiyelin bunun üstünde. Eğer biraz daha çabalar ve sorular hakkında düşünürsen tarihte unutlmaz biri olabilirsin.</h3>"
        }
        if(puan==13){
        document.getElementById("sonuc").innerHTML="<h2>SENİN GELECEKTEKİ NET SERVETİN:</h2><br><center><h1>100.000.000$</h1></center><br><h3>Sen geleceğin MİLYARDERİSİN! Zeka desen var, hayal desen var, potansiyel desen var! TARİH KİTAPLARINDA İSMİN GEÇECEK! Çok şanslısın dostum. Yolun açık olsun diyeceğim ama açık olacak zaten :D</h3>"
        }
    }

}