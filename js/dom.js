var spans = document.querySelectorAll("#clickSpans span");
    
for(const mySpan of spans){
    mySpan.addEventListener("click",function(event){
    highlightRole(mySpan.dataset.actor);
    });
} function highlightRole(myActor){
    for(const mySpan of spans){
        if(mySpan.dataset.actor==myActor){
            mySpan.style.backgroundColor="yellow";
        } else{mySpan.style.backgroundColor="white";}
    }
}