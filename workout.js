let dat=[ {
    "img_src": "https://cdn.jefit.com/uc/file/0b6a31438722e97f/1.jpg",
    "Name": "Dynamic Stretching Series",
    "Name 2": "Jefit Holiday Bodyweight Workout #2"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/9418dc57b750dac9/1.jpg",
    "Name": "Stronger Legs & Core",
    "Name 2": "Post Injury Plan: Regaining Back Strength"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/87776aa7ba1d06db/1.jpg",
    "Name": "Leg Workout: Glute Focused",
    "Name 2": "Fit to the Core"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/c6809df063cf0f08/1.jpg",
    "Name": "5 Day Muscle Mass Split",
    "Name 2": "Body Weight Home Circuit Program - L 3"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/469e81200dbf6272/1.jpg",
    "Name": "1-Day Kettlebell Workout",
    "Name 2": "Lacrosse Strength Training"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/e53b0c5df567a260/1.jpg",
    "Name": "HIIT Program: Rowing Build-Up",
    "Name 2": "Barbell Leg Routine"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/c2f58ad6f17797a3/1.jpg",
    "Name": "From Fat to Fit (3-Month Plan)",
    "Name 2": "Get Rid Of That Muffin Top"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/2cc35ec18e87de63/1.jpg",
    "Name": "Total Body Strength (Phase 2)",
    "Name 2": "Machine-based Strength Program"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/4e6837f6cba13dea/1.jpg",
    "Name": "8 Exercise Push/Pull Routine",
    "Name 2": "Arms & Core Day"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/2d9a1fc648d514f2/1.jpg",
    "Name": "Smith Machine Upper Body Routine",
    "Name 2": "Football Training"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/9418dc57b750dac9/1.jpg",
    "Name": "Get Strong with Supersets",
    "Name 2": "Metabolic Conditioning (Week 3-4)"
},
{
    "img_src": "https://cdn.jefit.com/uc/file/9caa1c968aeebe1c/1.jpg",
    "Name": "Core Focused",
    "Name 2": "Shoulder Strength (Post-Rehab)"
}
]

var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];
append(dat)
function append(dat){
document.getElementById("workoutappend").innerHTML=null;

//container.innerHTML=null
dat.forEach(function(el){
    let div=document.createElement("div")

    let img=document.createElement("img")
    
    img.src=el.img_src

    let name=document.createElement("h2")

    name.innerText=el.Name


    div.append(img,name)

    div.setAttribute("class","boxmamta");

    //container.append(div)

    var add = {
        img:el.img_src,
        name: el.Name
        
      }

      div.onclick = () => {
        addtonext(add);
      };

      document.querySelector("#workoutappend").append(div);
 
   
})

}

let  addtonext= (add) => {
    console.log(add);
       localStorage.setItem("individual",JSON.stringify(add));
       window.location.href="mainpage.html";
  };









