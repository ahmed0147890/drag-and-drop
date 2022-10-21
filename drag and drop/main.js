let btn=document.getElementById('btn');
let inp=document.getElementById('inp');
let box=document.querySelectorAll(".box");
let drag=null;



btn.onclick=function(){
    if(inp.value !=''){
        box[0].innerHTML+=`
        
        <p class='item' draggable='true'> ${inp.value}</p>
        
        
        `
        inp.value='';
    }
    getdrag();
}


function getdrag(){
    let item=document.querySelectorAll(".item");
    for(let i=0;i<item.length;i++){
        item[i].ondragstart=function(){
            drag=item[i];
            this.style.opacity='0.5';
        }
        item[i].ondragend=function(){
            drag= null;
            item[i].style.opacity='1';
        }
        for(let i=0;i<4;i++){
            box[i].ondragover=function(e){
                e.preventDefault()
                this.style.background='green';
                this.style.color='white';
            }
            box[i].ondragleave=function(){
                this.style.background='white';
                this.style.color='black';
            }
            box[i].ondrop=function(){
                this.append(drag);
                this.style.background='white';
                this.style.color='black';
            }
        }

























    }
}


