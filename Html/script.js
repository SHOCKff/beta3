let c1=[-1,-3];
let j=2;
let time=[];
//localStorage.clear()
let curr=[];
let arr=[];
var learn,translation,Main_lang,Trans_lang;
let block="block",none="none";
let surahno=document.getElementById("num").innerText;
//hidden dropdown
document.getElementById("hidden").innerHTML=`<div id="backgrnd_translation" style="display:none" >
<div id="All_languages">
  <div id="wrap">
  <h3><p style="color: aliceblue;">Selet a translation Language</p></h2>
 <label>
     <select id="dropdown">
         <option value=0>ENGLISH</option>
         <option value=38>TELUGU</option>
         <option value=37>HINDI</option>
         <option value=43>TAMIL</option>
         <option value=42>PUNJABI</option>
         <option value=40>MALAYALAM</option>
         <option value=12>TURKISH</option>
         <option value=4>FRENCH</option>
     </select>
 </label>
 <br>
 <br>
 <br>
 </div>
 <div>
 <button class="same" id="close">close</button>
 <button class="same" id="apply_cng">Apply changes</button>
</div>
<div class="loader" id="loader" style="display:none"></div>
</div>`
time[0]=parseInt(0,10)
newcall=(ids)=>{ 

  location.reload();
}
uncall=(p,ids,s1)=>{
  console.log("uncalling")
  p.setAttribute("id",ids);
  let ind=p.getAttribute("value");//uncalled tra
  s1.currentTime=0;
  s1.pause();
  s1.currentTime=0;
  curr.pop();
  index--;
  untranscall(ind);
 // console.log(index);
 console.log("uncalled");
}
index=0
call=(id)=>{       //uncalling
  let p=document.getElementById(id);
  let s=p.getAttribute("value");
  p.setAttribute("id","clicked");
  n=parseInt(s,10)
  s1=sounds[n]
  let ids=id;
  s1.play();
  curr.push("1");
  index++;
  transcall(n);
  if(index>1){
           uncall(x1,x2,x3);
            x1=p;
            x2=ids;
            x3=s1;
          }
  else{
   x1=p;
   x2=ids;
   x3=s1;
   }
};
let audio=document.getElementsByClassName("audi");
sounds=[];
for(let j=0;j<audio.length;j++){ 
    sounds.push(audio[j]);
}
let array=document.getElementsByClassName("ayas");
let ayahsarray=[];
for(let i=0;i<array.length;i++){ 
    ayahsarray.push(array[i]);
};
ayahsarray.forEach(element => {
   element.addEventListener("click",()=>{
     let id=element.getAttribute("id"); 
     c1.push(parseInt(element.getAttribute("value"),10))
     i=j-1;
     console.log(c1)
     if(c1[j]!=c1[i])
     {call(id);}
    else
    {newcall(id);}
    j=j+1;
   }
   )
});
let bi=document.getElementById("bi");
  bi.innerText="Bismillahi Rahmani Raheem";
////loop (repeat)setting
loopval=0;
let loop=document.getElementById("loopbox");
loop.onclick=()=>{
    if(loop.checked){localStorage.removeItem("loop"),localStorage.setItem("learn",true)}
    else{localStorage.removeItem("loop"),localStorage.setItem("learn",false)};
    if(loopval%2==0){
    sounds.forEach(every=> {
    every.loop=true;
    })
    if(loopval%2==0&&time.length>1)
     {
      alert("Cannot use loop and autoplay at once")
    }
    }else{
    sounds.forEach(every=> {
    every.loop=false;
    });
    };
    loopval++;
};
let work=document.getElementById("workspace");
settingval=0
let setting=document.getElementById("settingsicon");
setting.onclick=()=>{
    if(settingval%2==0){
      work.setAttribute("style","display:block");
      setting.innerText="❌";
      autoclose();
      console.log("call");
      
    }
    else{
      work.setAttribute("style","display:none");
      setting.innerText="⚙️";
    };
    settingval++;
  }
autoclose=()=>{
  setTimeout(()=>{
    work.setAttribute("style","display:none")},10000);
    setting.innerText="⚙️";
};
Transval=0;
let nedar=[];
let Tr=document.getElementsByClassName("E-ayas");
let tb=document.getElementById("Translationbox");
tb.onclick=()=>{
  if(tb.checked){localStorage.removeItem("translation"),localStorage.setItem("translation",true)}
  else{localStorage.removeItem("translation"),localStorage.setItem("translation",false)};
    if(Transval%2==0){
       nedar.push(1);
    }  
    else{
      nedar.pop(1);
    };
    Transval++;
}; 
transcall=(ind)=>{
  if(nedar.length==1)
  {
  Tr[ind].setAttribute("style","display:block");
  }
};
untranscall=(ind)=>{
  Tr[ind].setAttribute("style","display:none");
};
//Autoplay
aplay=0;
let ap=document.getElementById("Autoplaybox");
ap.onclick=()=>{
  if(aplay%2==0&&curr.length==0){
    sounds.forEach(tt =>
    time.push(tt.duration));
    autoplay();
    }
  else{
    location.reload();
      }
  console.log(time);
  aplay++;
};
//autoplay
let sa=0;
ij=parseInt(1,10)
autoplay=()=>{
  setTimeout(()=>
  {
    if(sa<array.length+1)
    {
     if(sa<array.length)
        call(`${array[sa].getAttribute("id")}`);
        sa++;
    autoplay();}
    else{
      sa=0;
      autoplay();
    }
},ij+time[sa]*1000);
console.log(time[sa])
};
let apicall_button=document.getElementById("apply_cng");
//translation elements

//API code
//annimation function call
//changable language
languagearray=[
  "english_rwwad",
  "english_saheeh",
  "english_hilali_khan",
  "french_montada",
  "french_rashid",
  "french_hameedullah",
  "spanish_montada_eu",
  "spanish_garcia",
  "spanish_montada_latin",
  "portuguese_nasr",
  "german_bubenheim",
  "turkish_shaban",
  "turkish_rwwad",
  "turkish_shahin",
  "azeri_musayev",
  "albanian_nahi",
  "bosnian_rwwad",
  "bosnian_mihanovich",
  "serbian_rwwad",
  "lithuanian_rwwad",
  "uzbek_rwwad",
  "uzbek_mansour",
  "tajik_arifi",
  "kyrgyz_hakimov",
  "indonesian_sabiq",
  "indonesian_affairs",
  "indonesian_complex",
  "tagalog_rwwad",
  "chinese_makin",
  "chinese_suliman",
  "uyghur_saleh",
  "japanese_saeedsato",
  "vietnamese_rwwad",
  "khmer_cambodia",
  "persian_ih",
  "kurdish_bamoki",
  "urdu_junagarhi",
  "hindi_omari",
  "telugu_muhammad",
  "gujarati_omari",
  "malayalam_kunhi",
  "assamese_rafeeq",
  "punjabi_arif",
  "tamil_omar",
  "tamil_baqavi",
  "sinhalese_mahir",
  "swahili_barawani",
  "somali_yacob",
  "amharic_sadiq",
  "yoruba_mikail",
  "hausa_gummi",
  "oromo_ababor",
  "afar_hamza",
  "ankobambara_dayyan",
  "kinyarwanda_assoc",
  "ikirundi_gehiti",
  "lingala_zakaria"]
async function apicall(lanArray_index,surahno){//animation starts
url=`https://quranenc.com/api/v1/translation/sura/${languagearray[lanArray_index]}/${surahno}`
let text=await fetch(url)
 .then(text => text.json())
 .then(data => arr=(data.result))  //arr stores the objects as array elements 
 createarray();
 Animate(none);
 //if(localStorage.length!=0)    {alert("Changes saved")};
 //alert("Changes saved");
 }//transalte function  call here
 //annimation function call
createarray=()=>{
  console.log(arr)
  for(let i=0;i<(arr.length);i++){
    Tr[i].innerText=arr[i].translation
  }
    arr.splice(0,arr.length);
    console.log(arr);
}
//1. task clickable button apply changes
if(localStorage.length==0){
  localStorage.setItem("Trans_lang",0);
  apicall(0,surahno);}//Dfault langugae english(0)localStorage.getItem("Trans_lang")
else{
  apicall( localStorage.getItem("Trans_lang"),surahno);
  }; //api call to get transalted array
//2.local storage{true/false; language values}
let blk_box=document.getElementById("backgrnd_translation");
let triangle=document.getElementById("triangle");
triangle.addEventListener("click",()=>{
  blk_box.setAttribute("style","display:block");
})
document.getElementById("close").onclick=()=>{    //bocoz button has inbuilt character of on click
  blk_box.setAttribute("style","display:none");
}
document.getElementById("apply_cng").onclick=()=>{ 
 drop_val=document.getElementById("dropdown").value; 
 apicall(drop_val,surahno);
 Animate(block);
 localStorage.removeItem("Trans_lang");
 localStorage.setItem("Trans_lang",drop_val);
}
Animate=(tell)=>{
 document.getElementById("loader").setAttribute("style",`display:${tell}`);
}
window.addEventListener("load",()=>{
  if(localStorage.getItem("learn")=="true"){
    loop.checked=true;
    loop.onclick();
  }
  else{  loop.checked=false;
  };
  if(localStorage.getItem("translation")=="true"){
    tb.checked=true;
    tb.onclick();
  }
  else{  tb.checked=false;
      };  
  apicall(localStorage.getItem("Trans_lang"),surahno); 
})

