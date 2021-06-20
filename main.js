window.onload = init;

function init() {
    console.log("Function has run");

    Granda();
    BEWM();
    MTG();
    Sun_Runner();
    Protein_Protector();
}

function Granda(){
    let GrandaText = document.querySelector(".GrandaText");
    let Granda = document.querySelector("#Granda_Five");
    Granda.onmouseover = function(){
        GrandaText.hidden = false;
    }

    Granda.onmouseout = function(){
        GrandaText.hidden = true;
    }
}

function BEWM(){
    let BEWMText = document.querySelector(".BEWMText");
    let Blue_Eyes_White_Magician = document.querySelector("#Blue_Eyes_White_Magician");
    Blue_Eyes_White_Magician.onmouseover = function(){
        BEWMText.hidden = false;
    }

    Blue_Eyes_White_Magician.onmouseout = function(){
        BEWMText.hidden = true;
    }
}

function MTG(){
    let MTGText = document.querySelector(".MTGText");
    let Magic_Card_Finder = document.querySelector("#Magic_Card_Finder");
    Magic_Card_Finder.onmouseover = function(){
        MTGText.hidden = false;
    }

    Magic_Card_Finder.onmouseout = function(){
        MTGText.hidden = true;
    }
}

function Sun_Runner(){
    let Sun_Runner_Text = document.querySelector(".Sun_Runner_Text");
    let Sun_Runner = document.querySelector("#Sun_Runner");
    Sun_Runner.onmouseover = function(){
        Sun_Runner_Text.hidden = false;
    }

    Sun_Runner.onmouseout = function(){
        Sun_Runner_Text.hidden = true;
    }
}

function Protein_Protector(){
    let Protein_Protector_Text = document.querySelector(".Protein_Protector_Text");
    let Protein_Protector = document.querySelector("#Protein_Protector");
    Protein_Protector.onmouseover = function(){
        Protein_Protector_Text.hidden = false;
    }

    Protein_Protector.onmouseout = function(){
        Protein_Protector_Text.hidden = true;
    }
}