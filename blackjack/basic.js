
// // // let saveel= document.getElementById("saveel");
// // // let countel=document.getElementById("countel");

// // let count=0;

// // function increment()
// // {
// //     count+=1;
// //     console.log(count)
// //     document.getElementById("aaa").innerText="incremented"
// // }
// // function save()
// // {
// //     cstr=count
// //    document.getElementById("sav").textContent="saved"
// //     console.log(count)
// //     sal.textContent+=" " +count
    
// //     // count.textContent=0;
// //     // head.innerText=count;
// //     // count=0;
// // }
// // function reset()
// // {
// //     count=0;
// // }



// // // var msgtouser ="u have ";
// // // let name="per "
// // // console.log(msgtouser+''+name)
// // // let names="madhu :"
// // // let gtng="hi my name is "
// // // let third=gtng+names;
// // // console.log(third)

// // // let name1="madhu";
// // // let grtng="gud mrng";
// // // let welcom =name1+grtng;
// // // console.log(welcom.innerText= welcom +":)");

// // let mypnts=3;
// //  function add()
// //  {
// //      mypnts=mypnts+3;
// //  }
// //  add()

// //  function rem()
// //  {
// //      mypnts=mypnts-1;
// //  }
// //  rem()
 
// //  if(mypnts<20)
// //  {
// //      add()
// //      add()
// //      rem()
     
// //  }
// //  console.log(mypnts)
// //  function error()
// //  {
// //      err.textContent="u cant click that"
// // }
// // var num5=12;
// // var num6=13;
// // document.getElementById("num5").textContent=num5;
// // document.getElementById("num6").textContent=num6;
// //  function addition()
// //  {
// // m=num5+num6;
// // additions.textContent="sum:"+m
// //  }
 
// //  function substraction()
// //  {
// // n=num5-num6;
// // additions.textContent="sub:"+n
// //  }
// //  function multiplication()
// //  {
// // o=num5*num6;
// // additions.textContent="mul:"+o
// //  }
// //  function division()
// //  {
// // p=num5/num6;
// // additions.textContent=p
// //  }

let player={pname:"madhu"
}
let isalive=false
let fc= getrandomcard()
let sc= getrandomcard()
let allcards=[fc,sc]
 let sum=fc+sc
 console.log(sum)
//  let cardsEl=document.getElementById("cards-El")
//  let sumEl=document.getElementById("sum-El")
let tc



//  let perchips="$120"
 
 function getrandomcard()
 {
   let randomnumber=Math.floor(Math.random()*13+1) 
      if(randomnumber>10)
   {
   return 10
   }
   else if(randomnumber==1)
   {
     return 11 
   }
   else
   {
       return randomnumber
   }
 }
 function start()
 {  for(let i=0;i<=allcards.length;i++)
    {
    cards.innerText+="cards:"+allcards[i]
}
// cards.textContent+=+"cards:"+allcards;
sud.textContent="sum:"+sum

 regame()   
}


 function regame()
{ isalive=true
    


if(sum<21)
{
     msg="do u wnat to draw a new card...?"
    isalive=true
    

}
else if(sum==21)
{
    msg="congrats u got blackjack .. :)"+
               " boom boom"
    isalive=true

}
else {
     msg="u lost....... :("
    isalive=false
    // msg="we're logging out"
}

 for( i=0;i<=allcards.length;i++)
{
    cards.textContent="cards:"+allcards }

// console.log(msg)
sud.textContent="sum:"+sum
m.textContent=msg;
grt.textContent= player.pname+" "+"$"+sum
}

function newss()
{ if(sum<=21)
  {
    
  
    let tc= getrandomcard()
    allcards.push(tc)
    sum=sum+tc
    start()
    // T()}
  }
    else {
      m.textContent="u cant draw a card "
    }
 }

function T()
 {    
  // cards.textContent+="cards:"+" "+ allcards
 sud.textContent="sum:"+sum 

}
