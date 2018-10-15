const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("button");
button.addEventListener("click", onClick)



function createGrid(num){
    num_squared= num*num;
    fraction=""
    for(let j=0; j<num;j++){
        fraction = fraction + "1fr "; 
        console.log(fraction); 
    }
    for(let i=0; i<num_squared;i++){
        const div = document.createElement('div');
        wrapper.style.gridTemplateColumns = fraction;        
        wrapper.appendChild(div); 
        div.addEventListener("mouseover", hover);       
    }

}

function hover(){
    if(this.style.opacity === ".5"){
        this.style.opacity = ".8";
        console.log(this.style.opacity);
    }
    this.style.opacity = ".5";
    this.style.backgroundColor = "blue";
}

function onClick(e){
    console.log(e);
    deleteGrid();
    var size = prompt("Please enter the amont of squares you want per side in your new grid","32");
    createGrid(size);

}

function deleteGrid(){
wrapper.innerHTML=" ";
}