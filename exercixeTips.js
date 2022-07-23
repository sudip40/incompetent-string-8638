var productsData = [
    {
      "image_url": "https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-ripped-man-bodybuilder-with-perfect-abs-shoulders-biceps-triceps-chest-posing-with-dumbbell-scaled-2e9a2a7.jpg",
      "cat": "EXERCISE TIPS",
      "name": "For Strong Biceps Try These Jefit Arm Exercises",
      "detail": "One of the muscle groups you see getting worked most often in the gym are the biceps. This muscle, along with the chest, abs and thighs are found on the front of the body.",
      "read":"READ MORE"
    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/fitness-woman-training-buttocks-with-glute-bridge-1-scaled-f53cb0e.jpg",
        "cat":"EXERCISE TIPS",
        "name":"Jefit's Best Exercises for Building Strong Hips",
        "detail":"The hip complex is made up of approximately 17 muscles groups. These muscles fall into one of four groups based on how they attach to the hip joint.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-muscular-woman-sportswear-trains-with-kettlebells-gym-healthy-lifestyle-concept-functional-training-scaled-46f2edc.jpg",
        "cat":"EXERCISE TIPS",
        "name":"Great Gym or Home Workout: Jefit Metabolic Conditioning Series",
        "detail":"It seems like we all could use a fun, effective workout these days with everything going on. A workout at home or in the gym should to be creative as well as effective. The Jefit Metabolic Conditioning four-exercise series takes care of that and more.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-muscular-man-is-doing-snatch-shoulder-press-exercise-with-barbell-hard-training-garage-gym-scaled-20e5390.jpg",
        "cat":"EXERCISE TIPS",
        "name":"The Most Popular Shoulder Exercises According to Jefit",
        "detail":"One of the great things about having an active exercise community and database is you can spot trends. The Jefit community has completed more than 92,000,000 workouts to date. The award-winning app has more than 10 million users to date.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/unhappy-cheerless-man-feeling-pain-back-while-sitting-too-much-office-scaled-b342edf.jpg",
        "cat":"EXERCISE TIPS",
        "name":"Does Sitting Too Much Really Cause Back Pain?",
        "detail":"One of the health issues many Americans have to deal with is low back pain. So much so that 85 percent of the population will experience at least one episode of back pain during their lifetime according to research.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/back-view-full-length-portrait-young-sportsman-running-scaled-bda0647.jpg",
        "cat":"EXERCISE TIPS",
        "name":"Amazing Health Benefits of Exercise During this Unprecedented Time",
        "detail":"What can you do to keep you and your family safe during an extremely stressful time? The following article takes a look at just a few of the many health benefits of exercise.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/handsome-young-muscular-man-doing-squat-exercise-with-barbell-gym-scaled-36f586a.jpg",
        "cat":"EXERCISE TIPS",
        "name":"Most Popular Leg Exercises Seen By Jefit App",
        "detail":"One of the great thing about having an interactive exercise community and database is you can spot trends. The Jefit community has completed more than 92,000,000 workouts to date.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/portrait-beautiful-muscular-sportswoman-flexing-her-muscles-scaled-a627523.jpg",
        "cat":"EXERCISE TIPS",
        "name":"How to Avoid Weight Gain with HIIT",
        "detail":"The human body is at its peak, physiologically speaking, between the ages of about 18-29 years old. Bodily changes occur thereafter, like losses in strength and aerobic capacity coupled with changes in bodyweight and body composition.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/two-athletes-greeting-each-other-with-highfive-before-sports-training-gym-copy-space-scaled-0a056a4.jpg",
        "cat":"EXERCISE TIPS",
        "name":"Need More Motivation to Exercise? Read This",
        "detail":"Can't seem to keep up the motivation to exercise? Whilst many of us understand the importance of physical activity in the long run, exercise is something that many of us still see as a chore.",
        "read":"READ MORE"

    }
]

function renderProducts(){
    document.querySelector("#container").innerHTML = '';
    productsData.forEach(function(elem,index){
    // console.log(index);
    var box=document.createElement("div");

    var imag=document.createElement("img");
    imag.setAttribute("src",elem.image_url);

    var cata =document.createElement("p");
    cata.innerText=elem.cat;

    var nam=document.createElement("h2");
    nam.innerText=elem.name;

    var detail=document.createElement("h3");
    detail.innerText=elem.detail;


    var read =document.createElement("h4");
    read.innerText=elem.read;
    read.addEventListener('click', function(){
        fun()
     }) 

    box.append(imag,cata,nam,detail,read)
    document.querySelector("#container").append(box);
   
});

   }

   renderProducts()

   function fun(){
    window.location.href = "detail.html"  
  }