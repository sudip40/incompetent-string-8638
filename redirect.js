let userArr = JSON.parse(localStorage.getItem("signD")) || [];
let userd = JSON.parse(localStorage.getItem("bodyp")) || [];
document.querySelector("form").addEventListener('submit', bodyFun)
class Userdetail{
    constructor(d,i,c,w,g){
        this.DOB = d;
        this.Height1 = `${i} inch`;
        this.Height = `${c} cm`;
        this.Weight = w;
        this.Gender = g;

    }

}


function bodyFun(event){
    event.preventDefault();
    
    let d = document.querySelector("#dob").value;

    // let r = document.querySelector("#lb/inch").value;
    let h = document.querySelector("#height").value;
    // let r1 = document.querySelector("#cm").value;
    let h1 = document.querySelector("#cm-height").value;
    let w = document.querySelector("#weight").value;
    let gen = document.querySelector("#gender").value;
    
    let Userdetails = new Userdetail(d,h,h1,w,gen);


    localStorage.setItem("bodyp",JSON.stringify(Userdetails));

}