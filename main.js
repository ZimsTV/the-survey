"use strict";

alert ("After Team Spirit won the Dota 2 tournament, we decided to ask people what they knew about this game. ");


let FirstQuestion = confirm('Do you know, what is " Valve"?'); 
let SecondQuestion = confirm('Do you know, what is " Dota 2"?');
let ThirdQuestion = confirm('Do you know, what is " The International"?');
let FourthQuestion = prompt('Which team won the first International Tournament ?'); //Natus Vincere
let FifthQuestion = prompt('How many teams played on "The International 10"?'); //18
let SixthQuestion = prompt('How many teams from the CIS played on "The International 10"?'); //2
alert('Congratulations! You have completed the survey and these are your answers.');

alert(' Do you know, what is " Valve"? : ' + FirstQuestion
  + '\n Do you know, what is " Dota 2"? : ' + SecondQuestion
  + '\n Do you know, what is " The International"? : ' + ThirdQuestion
  + '\n Which team won the first International Tournament ? : ' + FourthQuestion
  + '\n How many teams played on "The International 10"? : ' + FifthQuestion
  + '\n How many teams from the CIS played on "The International 10"? : ' + SixthQuestion );