var breath = 0;
var beats = 0;
var thoughts = 0;
var blinks = 0;
var age = 0;
var happiness = 100;
var hunger = 0;
var knowledge = 0;


function breathe(){
    breath++;
    //console.log(breath);
    $('.beats').html(breath);
    if(breath == 10){
        addBeat();
    }
}

function beat(){
    beats++;
    //console.log(beats);
    $('.breaths').html(beats);
    if(beats == 10){
        addThought();
    }
}

function think(){
    thoughts++;
    addTurn();
    //console.log(thoughts);
    $('.thoughts').html(thoughts);
    if(thoughts == 1){
        transformColor();
        addStats();
    }
}

function blink(){
    blinks++;
    //console.log(blinks);
    $('.blinks').html(blinks);
}

function addTurn(){
    age += 0.05; //to be balanced
    happiness -= 0.05;
    hunger += 0.05;
}

function addBeat(){
    $('.heart').show();
}

function addThought(){
    $('.brain').show();
}

function addStats(){
    $('.stats').show();
}
