
var productsData = [
    {
      "image_url": "https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/full-shot-man-doing-yoga-mat-scaled-1e9a520.jpg",
      "cat": "GENERAL FITNESS",
      "name": "How to Incorporate Mindfulness into Your Exercise Routine",
      "detail": "Exercise can be an explosive, powerful act of working out your body. However, it's also important to take time to work out your mind as well. Practicing mindfulness is the easiest way to do this.",
      "read":"READ MORE"
    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/fit-lifestyle-girl-summer-woman-scaled-5cd7b18.jpg",
        "cat":"GENERAL FITNESS",
        "name":"How to Start Walking 10,000 Steps a Day",
        "detail":"Walking 10,000 steps each day is one of the simplest and most natural ways to get healthy. And it's also a great way to de-stress. But there are many reasons why so many people don't walk as much as they should, including forgetting how good it feels, not having enough time, or even believing that walking isn't all that important for health.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/health-care-medical-concept-metabolic-syndrome-disease-soft-focus-caliper-measuring-tape-hands-female-doctor-nutritionist-endocrinologist-wearing-blue-diabetes-awareness-ribbon-scaled-ce9a2bd.jpg",
        "cat":"GENERAL FITNESS",
        "name":"A Few Things to Look For to Avoid Metabolic Syndrome?",
        "detail":"According to the American Heart Association, 34 million American have metabolic syndrome. That is about one out of every six",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-healthy-man-athlete-doing-exercises-pull-ups-gym-scaled-a12d1f6.jpg",
        "cat":"GENERAL FITNESS",
        "name":"Five Fitness Components You Should Know About",
        "detail":"It can be easy to fall into the trap of doing the same ole same ole regarding your exercise routine. Meaning, if you're a runner, you only run and if you lift weights, you typically do only that.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/self-building-young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-with-ball-concept-sport-bodybuilding-healthy-lifestyle-motion-action-scaled-c65f801.jpg",
        "cat":"GENERAL FITNESS",
        "name":"5 Proven Exercise Strategies to Improve Mood and Anxiety",
        "detail":"Packaging the health benefits of exercise into a bottle or pill would be comparable to finding the Holy Grail. Though that won't happen any time soon, you can still take advantage of what exercise has to offer",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/blue-moonlight-young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-with-weight-concept-sport-bodybuilding-healthy-lifestyle-motion-action-scaled-4538e8f.jpg",
        "cat":"GENERAL FITNESS",
        "name":"Preventing Muscle & Strength Loss is Vital for Healthy Lifestyle",
        "detail":"Many bodily changes occur by the time a person celebrates their 70th birthday. These changes happen on a physiological and physical level respectively.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/cropped-image-strong-young-man-doing-lunges-with-heavy-dumbbells-hands-when-working-out-home-due-coronavirus-pandemic-scaled-f1a9d05.jpg",
        "cat":"GENERAL FITNESS",
        "name":"Get Strong with this Beginner Home Workout",
        "detail":"After two years of dealing with Covid, gyms are back open around the country. In the meantime, more people are keeping fit with their own home workout.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/sport-fit-couple-gym-work-pairs-with-dumbbells-scaled-912346a.jpg",
        "cat":"GENERAL FITNESS",
        "name":"How Taking Care of Your Body Can Affect Your Mind",
        "detail":"What part of your body weighing about 3-pounds has more than 86 billion nerve cells? That's right, the brain!",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/sven-mieke-EuwD039Svug-unsplash-scaled-91ffd06.jpg",
        "cat":"GENERAL FITNESS",
        "name":"Is Cardio Better than Strength Training for Stress Management?",
        "detail":"When considering the benefits of regular exercise, most people immediately think of things like improved strength, stamina, and overall physical",
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
