function load(){
    document.getElementById("secenek1").style.display="none";
    document.getElementById("secenek2").style.display="none";
}

var jsons = {
    "sorular":[
      {
        "Soru": "1)Gelecekle ilgili hayallerin neler?",
        "response_a": "Evlenip çoluk çocuk sahibi olmak.",
        "response_b": "Okuyup iş sahibi olmak.",
        "response_c": "Kendi şirketimi açıp bir şeyler başarmak.",
        "foto": "url(assets/apple.webp)"
      },
      {
        "Soru": "2)Birisini yapmak zorunda kalsan hangisini yapardın?",
        "response_a": "Habbo'yu bırakmak.",
        "response_b": "Dünyanın en acı biberini yemek. (Ölme ihtimalin var.)",
        "response_c": "Liseyi 1 yıl fazla okumak.",
        "foto": "url(assets/habbo.jpg)"
      },
      {
        "Soru": "3)Senin için hangisi daha önemli?",
        "response_a": "Hayallerim.",
        "response_b": "Aşk.",
        "response_c": "Dostluk.",
        "foto": "url(assets/dost.jpg)"
      },
      {
        "Soru": "4)Aşağıdakilerden birini sonsuza kadar hayatından çıkarmak zorunda kalsan hangisini seçerdin?",
        "response_a": "İnternet.",
        "response_b": "Bacakların (tekerlekli sandalye kullanacaksın).",
        "response_c": "Instagram.",
        "foto": "url(assets/media.png)"
      },
      {
        
        "Soru": "5)Aşağıdakilerden hangisi diğerlerinden farklıdır?",
        "response_a": "A10-b8-C6-d4-E2",
        "response_b": "Z77-c75-F73-g71-Ü69",
        "response_c": "Y52-r50-T49-ş47-M45",
        "foto": "url(assets/math.jpg)"
          
      }
    
    ]
    };
    

    
var soru=document.getElementById("aciklama");
var s1=document.getElementById("secenek1");
var s2=document.getElementById("secenek2");
var s3=document.getElementById("secenek2");
var sorusayisi=0;
var puan=0;
function siradakisoru(x){
        document.getElementById("secenek1").style.display="block";
        document.getElementById("secenek2").style.display="block";
        
        soruver(sorusayisi);
        puanver(sorusayisi,x);
        sorusayisi++;
        console.log(sorusayisi)
        
        
        }

function soruver(sorusayisi){
        if(sorusayisi>=5){
            stop;
        }else{
        document.getElementById("aciklama").innerHTML=jsons.sorular[sorusayisi].Soru;
        document.getElementById("secenek1").innerHTML=jsons.sorular[sorusayisi].response_a;
        document.getElementById("secenek2").innerHTML=jsons.sorular[sorusayisi].response_b;
        document.getElementById("secenek3").innerHTML=jsons.sorular[sorusayisi].response_c;
        document.getElementById("foto").style.background=jsons.sorular[sorusayisi].foto;
        }
}



function puanver(sorusayisi,x){
    if(sorusayisi==1){
        if(x=="a"){puan=puan+1;}
        if(x=="b"){puan=puan+2;}
        if(x=="c"){puan=puan+3;}
        console.log("puan "+puan);
    }else
    if(sorusayisi==2){
        if(x=="a"){puan=puan+1;}
        if(x=="b"){puan=puan+3;}
        if(x=="c"){puan=puan+3;}
        console.log("puan "+puan);
    }else
    if(sorusayisi==3){
        if(x=="a"){puan=puan+3;}
        if(x=="b"){puan=puan+1;}
        if(x=="c"){puan=puan+3;}
        console.log("puan "+puan);
    }else
    if(sorusayisi==4){
        if(x=="a"){puan=puan+1;}
        if(x=="b"){puan=puan+1;}
        if(x=="c"){puan=puan+3;}
        console.log("puan "+puan);
    }else
    if(sorusayisi==5){
        if(x=="a"){window.open("#sonuc","_self");}
        if(x=="b"){window.open("#sonuc","_self");}
        if(x=="c"){puan=puan+1; window.open("#sonuc","_self");}
        console.log("puan "+puan);
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
        else if(sorusayisi>=7){stop;}
}