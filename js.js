var i=1;
        var puan=0;
        function siradakisoru(x){
            if(i==1){
                document.getElementById("aciklama").innerHTML="1)Gelecekle ilgili hayallerin neler?";
                document.getElementById("aciklama").style.fontWeight="bold";
                document.getElementById("secenek1").innerHTML="Evlenip çoluk çocuk sahibi olmak.";
                document.getElementById("secenek2").innerHTML="Okuyup iş sahibi olmak.";
                document.getElementById("secenek3").innerHTML="Kendi şirketimi açıp bir şeyler başarmak.";
                document.getElementById("foto").style.backgroundImage="url(apple.webp)";
                i++;
            }else if(i==2){
                document.getElementById("aciklama").innerHTML="2)Birisini yapmak zorunda kalsan hangisini yapardın?";
                document.getElementById("secenek1").innerHTML="Habbo'yu bırakmak.";
                document.getElementById("secenek2").innerHTML="Dünyanın en acı biberini yemek. (Ölme ihtimalin var.)";
                document.getElementById("secenek3").innerHTML="Liseyi 1 yıl fazla okumak.";
                document.getElementById("foto").style.backgroundImage="url(habbo.jpg)";

                i++;
                if(x=="a"){
                    puan=puan+1;
                }
                if(x=="b"){
                    puan=puan+2;
                }
                if(x=="c"){
                    puan=puan+3;
                }
            } else if(i==3){
                document.getElementById("aciklama").innerHTML="3)Senin için hangisi daha önemli?";
                document.getElementById("secenek1").innerHTML="Hayallerim.";
                document.getElementById("secenek2").innerHTML="Aşk.";
                document.getElementById("secenek3").innerHTML="Dostluk.";
                document.getElementById("foto").style.backgroundImage="url(dost.jpg)";
                i++;
                if(x=="a"){
                    puan++;
                }
                if(x=="b"){
                    puan=puan+3;
                }
                if(x=="c"){
                    puan=puan+3;
                }
            }else if(i==4){
                document.getElementById("aciklama").innerHTML="4)Aşağıdakilerden birini sonsuza kadar hayatından çıkarmak zorunda kalsan hangisini seçerdin?";
                document.getElementById("secenek1").innerHTML="İnternet.";
                document.getElementById("secenek2").innerHTML="Bacakların (tekerlekli sandalye kullanacaksın).";
                document.getElementById("secenek3").innerHTML="Instagram.";
                document.getElementById("foto").style.backgroundImage="url(media.png)";
                i++;
                if(x=="a"){
                    puan=puan+3;
                }
                if(x=="b"){
                    puan=puan+1;
                }
                if(x=="c"){
                    puan=puan+3;
                }
            }else if(i==5){
                document.getElementById("aciklama").innerHTML="5)Aşağıdakilerden hangisi diğerlerinden farklıdır?";
                document.getElementById("secenek1").innerHTML="A10-b8-C6-d4-E2";
                document.getElementById("secenek2").innerHTML="Z77-c75-F73-g71-Ü69";
                document.getElementById("secenek3").innerHTML="Y52-r50-T49-ş47-M45";
                document.getElementById("foto").style.backgroundImage="url(math.jpg)";
                i++;
                if(x=="a"){
                    puan=puan+2;
                }
                if(x=="b"){
                    puan=puan+1;
                }
                if(x=="c"){
                    puan=puan+3;
                }
                }else if(i==6){
                if(x=="a"){
                    puan=puan+0;
                    window.open("#sonuc","_self")
                }else if(x=="b"){
                    puan=puan+0;
                    window.open("#sonuc","_self")
                }else if(x=="c"){
                    puan=puan+1;
                    window.open("#sonuc","_self")
                }
                i++;
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
            }else if(x>=7){
                stop;
            }
        }