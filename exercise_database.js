import exercises from "./components/data.js";
let newexercises=[];

for(let i=0;i<12;i++){
    newexercises.push(exercises[i]);
}

let obj=JSON.parse(localStorage.getItem("exercisedata"))||{};

let display=(obj)=>{
    let img1=document.createElement("img");
    let p1=document.createElement("p");
    p1.innerText="Click to Enlarge";
    p1.setAttribute("class","p");
    let p2=document.createElement("p");
    p2.innerText="Click to Enlarge";
    p2.setAttribute("class","p");
    let p3=document.createElement("p");
    p3.innerText="1";
    p3.setAttribute("class","p");
    let p4=document.createElement("p");
    p4.innerText="2";
    p4.setAttribute("class","p");
    img1.src=obj.url;
    let img2=document.createElement("img");
    img2.src=obj.url1;
    console.log(obj.url);
    document.getElementById("imgone").append(p3,img1,p1);
    document.getElementById("imgtwo").append(p4,img2,p2);

    let mmg1=document.createElement("h4");
    mmg1.innerText="Main Muscle Group: ";
    let mmg2=document.createElement("p");
    mmg2.innerText=obj.mmg;
    let omg1=document.createElement("h4");
    omg1.innerText="Other Muscle Group: ";
    let omg2=document.createElement("p");
    omg2.innerText=obj.omg;
    let t1=document.createElement("h4");
    t1.innerText="Type: ";
    let t2=document.createElement("p");
    t2.innerText=obj.type;
    let m1=document.createElement("h4");
    m1.innerText="Machines: ";
    let m2=document.createElement("p");
    m2.innerText=obj.machine;
    let e1=document.createElement("h4");
    e1.innerText="Equipment";
    let e2=document.createElement("p");
    e2.innerText=obj.equipment;
    let d1=document.createElement("h4");
    d1.innerText="Difficulty: ";
    let d2=document.createElement("p");
    d2.innerText=obj.difficulty;
    document.getElementById("details").append(mmg1,mmg2,omg1,omg2,t1,t2,m1,m2,e1,e2,d1,d2);


    let btn1=document.createElement("button");
    btn1.innerText="Track My Progress";
    let btn2=document.createElement("button");
    btn2.innerText="+Add To Routine";
    let btn3=document.createElement("button");
    btn3.innerText="Record Logs";
    document.getElementById("buttons").append(btn1,btn2,btn3);


    let img3=document.createElement("img");
    img3.src=obj.url2;
    document.getElementById("sumidleftimgthird").append(img3);

    let h3=document.createElement("h3")
    h3.innerText=obj.name+" Images";
    document.getElementById("tophead").append(h3);
}

let displayexercises=()=>{
    newexercises.forEach((el)=>{
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.url;
    let name=document.createElement("p");
    name.innerText=el.name;
    name.setAttribute("class","name");
    box.append(img,name);
    document.getElementById("sulowerup").append(box);
    })
}
document.getElementById("star").addEventListener("click",()=>{
    let star=document.createElement("img");
    document.getElementById("star").innerText=null;
    star.src="https://p.kindpng.com/picc/s/729-7296605_golden-star-png-free-pic-gold-star-transparent.png";
    document.getElementById("star").append(star);
})

displayexercises();
display(obj);