

var productsData = [
    {
      "image_url": "https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/fitness-woman-gym-with-workout-icons-health-care-technology-concept-scaled-e60f9a7.jpg",
      "cat": "PRODUCT TIPS & FAQ",
      "name": "Body Stat Goals: How to Set and Track Them",
      "detail": "Keeping track of body stats can be an extremely motivational factor for many fitness fanatics. JEFIT makes this easy as",
      "read":"READ MORE"
    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/group-athletes-supporting-muscular-build-man-who-is-performing-deadlift-with-barbell-gym-scaled-aa85c34.jpg",
        "cat":"PRODUCT TIPS & FAQ",
        "name":"Group Chats are the Best Tool for Learning Something New",
        "detail":"JEFIT users are able to create or join different types of group chats. Each has a different focus but all",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-cheerful-couple-two-friends-guy-woman-white-pink-empty-t-shirts-posing-scaled-942ad8a.jpg",
        "cat":"PRODUCT TIPS & FAQ",
        "name":"Use the Referral Program to Earn Free Elite",
        "detail":"Enjoying your experience with JEFIT? Interested in earning an Elite membership for free? With our referral program you can! Refer",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/stylish-handsome-trainer-modern-gym-attractive-young-man-waiting-train-gym-scaled-d502be2.jpg",
        "cat":"PRODUCT TIPS & FAQ",
        "name":"How to Reorder Exercises - Android and IOS",
        "detail":"Never wait for the equipment to be available again! JEFIT allows you to reorder exercises so that you can rearrange",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/disassembled-barbell-medicine-ball-kettlebell-dumbbell-lying-floor-gym-sports-equipment-workout-with-free-weight-functional-training-scaled-2dcc3a9.jpg",
        "cat":"PRODUCT TIPS & FAQ",
        "name":"How To Create Custom Workout Plans",
        "detail":"Not interested in a pre-built workout plan and instead want to use your own? Create your own custom workout plan",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/shirtless-man-flipping-heavy-tire-scaled-dc06d1c.jpg",
        "cat":"PRODUCT TIPS & FAQ",
        "name":"How to Add a Custom Exercise",
        "detail":"The award winning app, JEFIT, offers users the ability to build custom exercises. When looking to add a custom exercise",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/motivated-active-ethnic-couple-run-up-stairs-together-jump-highly-train-climbing-staircase-city-wear-comfortable-sportsclothes-drink-water-from-bottle-climb-challenge-choose-difficult-path-scaled-7d82cb4.jpg",
        "cat":"PRODUCT TIPS & FAQ",
        "name":"How to Join the Motivational Quarterly Group Challenges",
        "detail":"JEFIT hosts group challenges once per season giving users the chance to earn Elite for free. These group challenges are",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/happy-young-sportswoman-earphones-pointing-scaled-d83ff9a.jpg",
        "cat":"PRODUCT TIPS & FAQ, WHAT'S NEW",
        "name":"Android Watch Release: An Exciting New Jefit Feature",
        "detail":"Jefit is now offering a new feature just released on Android watch. A similar release will be coming soon for the Apple watch too",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/muscular-young-man-using-cell-phone-gym-scaled-f46a171.jpg",
        "cat":"PRODUCT TIPS & FAQ, WHAT'S NEW",
        "name":"Jefit App New Release: “Mix” Workout Feature",
        "detail":"Thinking about making some changes to your strength training program? Well, Jefit has the answer for you.",
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
