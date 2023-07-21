const setOfWords=[
"Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day,",
"I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book. Nancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent head.",
"The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious."
];
const msg=document.getElementById('msg');
const mytext=document.getElementById('mytext');
const btn=document.getElementById('btn');
let startTime, endTime;

const playGames = ()=>{
    let randomNum =Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNum];
    let date = new Date();
    startTime = date.getTime();
       btn.innerText= "Done";

}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime =((endTime - startTime)/1000);
    // console.log(totalTime);
    let totalString = mytext.value;
    let wordCount = wordCounter(totalString);
    let speed = Math.round((wordCount/totalTime)*60);
    // console.log(speed);
     let finalmsg = "Your total speed is " + speed + " words per minutes, "
      finalmsg += compareWords(msg.innerText,totalString);
     msg.innerText = finalmsg;

}
const compareWords = (str1,str2) => {

let w1=str1.split(" ");
let w2=str2.split(" ");
let cnt=0;
        w1.forEach(function(item, index) {
          if(item ==w2[index]){
            cnt++;
          }
        })
        let error = (w1.length - cnt);
        return (" " +cnt + " correct Out of " + w1.length +
        " words and the total number of error are "+ error + ".");
}
const wordCounter = (str) => {
     let response =str.split(" ").length;
    //  console.log(response);
     return response;
}
// by pressing button we can see some text
btn.addEventListener('click',function(){
    if(this.innerText== 'Start'){
        mytext.disbaled = false;
        playGames();
    }else if(this.innerText == "Done"){
        mytext.disbaled = true;
        btn.innerText ="Start";
        endPlay();
    }
})
