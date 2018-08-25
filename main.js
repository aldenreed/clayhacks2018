var breath = 0;
var beats = 0;
var thoughts = 0;

function breathe(){
    breath++;
    //console.log(breath);
    $('.breaths').html(breath);
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
    //console.log(thoughts);
    $('.thoughts').html(thoughts);
    if(thoughts == 1){
        transformColor();
    }
}

function addBeat(){
    $('.heart').show();
}

function addThought(){
    $('.brain').show();
}
