

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
