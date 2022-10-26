'use strict'

const nouns = ["cat", "dog", "hamster", "parrot", "dolphin"];

// Comma-separated list of words achievment
const listWords = () =>
{
  let str = "";
  for(let i = 0; i <= nouns.length-1;i++)
  {
    if(i == nouns.length-1)
    {
      nouns[i] =  " and " + nouns[i];
      str += nouns[i];
    }
    else{
      str += " " + nouns[i] + ",";
    }   
  }
  console.log("My favourite pets are the" + str + ".");
}
listWords();

//spongebob achievement 
const spongeBob = () => {
  let sent = document.getElementById('sentence').value;
  let str = "";
  for(let i = 0; i < sent.length; i++)
  {
    if(i%2 == 0)
    {
      str += sent[i].toUpperCase();
    }
    else{
      str += sent[i].toLowerCase();
    }
  }
  document.getElementById('display').innerHTML = str;
  str = "";
}