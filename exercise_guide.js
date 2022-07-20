let exercises=[
    {
        url:"https://www.jefit.com/images/exercises/800_600/4656.jpg",
        name:"Cable Tricep Kickback",
        type:"Triceps",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/2008.jpg",
        name:"Bent Knee Side Angle Pose",
        type:"Abs, Back, Chest",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/3272.jpg",
        name:"Inverted Row",
        type:"Back, Back, Chest",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/2472.jpg",
        name:"Dumbbell Fly on Stability Ball",
        type:"Chest, Back, Chest",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/56.jpg",
        name:"Cable Reverse Grip Tricep Extension",
        type:"Triceps, Biceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/4684.jpg",
        name:"Cable Rope High Pulley Tricep Extension",
        type:"Triceps, Biceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/4684.jpg",
        name:"Cable Rope High Pulley Tricep Extension",
        type:"Triceps, Biceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/3244.jpg",
        name:"Low Back Chair Stretch",
        type:"Back, Biceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/2680.jpg",
        name:"Ab Draw Leg Slide",
        type:"Abs, Biceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/2832.jpg",
        name:"Cable One-Arm High Curl",
        type:"Biceps, Biceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/1604.jpg",
        name:"Barbell Bradford Rocky Press",
        type:"Shoulders, Triceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/1668.jpg",
        name:"Kettlebell Alternating Press",
        type:"Shoulders, Triceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/648.jpg",
        name:"Barbell Front Raise Pullover",
        type:"Chest, Triceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/504.jpg",
        name:"Barbell Reverse Wrist Curl",
        type:"Forearm, Triceps, Shoulders",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/1308.jpg",
        name:"Hip Raise",
        type:"Abs, Glutes, Back",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/4388.jpg",
        name:"Cable Standing Behind the Back Wrist Curl",
        type:"Forearm, Glutes, Back",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/3452.jpg",
        name:"Weight Plate Hand Squeeze",
        type:"Forearm, Glutes, Back",
    },
    {
        url:"https://www.jefit.com/images/exercises/800_600/3940.jpg",
        name:"Bench Lying Cable Knee Raise",
        type:"Abs, Glutes, Back",
    },
]

let displayexercises=()=>{
    exercises.forEach((el)=>{
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.url;
    let name=document.createElement("p");
    name.innerText=el.name;
    name.setAttribute("class","name");
    let type=document.createElement("p");
    type.innerText=el.type;
    box.append(img,name,type);
    document.getElementById("excersise").append(box);
    })
}
displayexercises();