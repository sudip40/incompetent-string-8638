import footerLinks from "./footer/footer store links.js";
    // console.log(footerLinks());
    document.getElementById("footer").innerHTML = footerLinks();

    import navbar from "./navbar/navbar.js";
    console.log(navbar());
    document.getElementById("sks_navba").innerHTML = navbar();



import exercises from "./components/data.js";

let displayexercises=()=>{
    exercises.forEach((el)=>{
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.url;
    let name=document.createElement("p");
    name.innerText=el.name;
    name.setAttribute("class","name");
    let type=document.createElement("p");
    type.innerText=el.mmg+","+el.omg;
    box.append(img,name,type);
    box.addEventListener("click",()=>{
        localStorage.setItem("exercisedata",JSON.stringify(el));
        window.location.href="exercise_database.html";
    })
    document.getElementById("excersise").append(box);
    })
}
displayexercises();