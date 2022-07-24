import footerLinks from "./footer/footer store links.js";
    // console.log(footerLinks());
    document.getElementById("footer").innerHTML = footerLinks();

    import navbar from "./navbar/navbar.js";
    console.log(navbar());
    document.getElementById("sks_navba").innerHTML = navbar();




var productsData = [
    {
      "image_url": "https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/stronger-young-muscular-caucasian-athlete-practicing-lunges-gym-with-barbell-male-model-doing-strength-exercises-training-his-lower-body-wellness-healthy-lifestyle-bodybuilding-concept-1-scaled-681385b.jpg",
      "cat": "WORKOUT TIPS",
      "name": "Some of the Best Bulking Programs Offered by Jefit App",
      "detail": "A question came in recently in our Q&A section on the Jefit app regarding best bulking programs. To find this section look under the discover tab and then in the middle of the page you'll see our Q&A section.",
      "read":"READ MORE"
    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/annoyed-woman-covering-her-ears-with-pillows-block-out-snoring-bedroom-scaled-f2342d4.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Quality of Sleep is Important for Muscle Growth",
        "detail":"When you end up not getting quality sleep during the night, you typically feel off throughout the next day. Not only can your mood and energy level be low, your workout usually suffers too.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/shirtless-man-flipping-heavy-tire-scaled-1fab59d.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Why HIIT Can Do More Than Improve Just Endurance",
        "detail":"It's no surprise that high-intensity interval training (HIIT) has become a popular form of cardio. Fitness enthusiasts and professionals all around the world are promoting this type of interval training due to its fitness potential.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/male-athlete-with-bare-torso-doing-abdominal-exercises-scaled-c5d0b11.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Get Ripped with One of These Jefit Core Programs",
        "detail":"Developing a strong core should be an important component in any exercise program. Some individuals think doing a few sets of sit-ups will get the job done.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/900-scaled-dcea6a9.jpg",
        "cat":"WORKOUT TIPS",
        "name":"One of Best Full Body Exercises You Need to Do is the Deadlift",
        "detail":"One of the best and most often used exercises is the deadlift. It can be a challenging exercise, however, for many people. It is often performed incorrectly due to a multitude of reasons.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-muscular-athlete-practicing-gym-with-weights-1-scaled-a5d4844.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Exercise Terminology Important to Know for Workouts",
        "detail":"There is so much information about working out and exercise terminology that it's hard to keep things straight at times.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/group-athletes-supporting-muscular-build-man-who-is-performing-deadlift-with-barbell-gym-scaled-aa85c34.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Get Strong From the Ground Up with These Jefit Leg Routines",
        "detail":"Jefit has literally thousands of strength training programs featured on their award-winning app. Some of those programs are designed as various leg routines. Both the Jefit staff and community build and publish these routines. Below are some of the more popular programs by both groups.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/man-doing-heavy-weight-exercise-with-barbell-scaled-3380d3e.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Want Strong Legs? Try Doing These According To Science",
        "detail":"What two leg exercises would you add to a training routine when you get back to the gym? It will depend on individual goals and what's available in terms of exercise equipment",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/horizontal-shot-athlete-runner-young-male-stretching-his-leg-running-track-stadium-preparing-working-out-caucasian-man-exercising-outdoors-wearing-blue-sportswear-sport-people-scaled-d0ef1fa.jpg",
        "cat":"WORKOUT TIPS",
        "name":"Experiencing Pain Are You Focusing Enough on Mobility",
        "detail":"You should not experience joint pain when you perform activities of daily living (known as ADL's). How does your body feel during a typical day? Do you feel pain when you move your hips, shoulders or knees through their full range of motion?",
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