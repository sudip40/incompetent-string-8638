
var productsData = [
    {
      "image_url": "https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/2250997-scaled-cdc98ef.jpg",
      "cat": "NUTRITION TIPS",
      "name": "Healthiest Fruits and Vegetables for a Strong, Vibrant Body",
      "detail": "As many as 1 in 10 Americans are not getting the recommended amount of fruit and vegetables each day. The Centers for Disease Control & Prevention (CDC) recommends we consume an average of about 2 1/2 cups a day for both fruits and vegetables.",
      "read":"READ MORE"
    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/muscular-man-drinking-water-from-shaker-scaled-5bf819b.jpg",
        "cat":"NUTRITION TIPS",
        "name":"Are Protein Drinks Best Before or After a Workout?",
        "detail":"A qualified nutritionist will always recommend eating real, whole food as a first option in order to meet daily protein needs. This can be very challenging to do consistently over time though.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/fresh-fish-healthy-food-raw-salmon-fillet-thyme-spices-dark-stone-tabletop-copy-space-scaled-662c4ef.jpg",
        "cat":"NUTRITION TIPS",
        "name":"Paleo Diet 101: Everything You Need to Know",
        "detail":"Millions of people are now following the Paleo diet, a diet that is based on the foods our ancestors ate. However, if you're starting with the diet, there are a few things you should know to be successful.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/sportsman-drinking-water-scaled-5d85407.jpg",
        "cat":"NUTRITION TIPS",
        "name":"3 High Sugar Foods Preventing Better Health & Fitness Gains",
        "detail":"What do you think is more important diet or exercise? We know both are very important but does one outweigh the other? Strength workouts obviously plays a huge part in making gains in the gym",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/portion-gainer-whey-protein-shake-scoop-black-background-top-view-whey-protein-carbohydrates-weight-gain-scaled-15485ca.jpg",
        "cat":"NUTRITION TIPS",
        "name":"Protein Facts to Help You Build More Muscle",
        "detail":"Protein is an important macronutrient that is required for just about every bodily function and process. Eating specific foods, especially high protein sources, is needed for muscle growth to occur.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/blood-cholesterol-report-test-healthcare-scaled-4850717.jpg",
        "cat":"NUTRITION TIPS",
        "name":"The Effects of High Cholesterol on the Body",
        "detail":"Our bodies need healthy levels of cholesterol to function. Cholesterol is a fatty substance made by the liver and distributed throughout the body.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/young-woman-eating-healthy-fruit-salad-after-workout-fitness-healthy-lifestyle-concept-scaled-a261c45.jpg",
        "cat":"NUTRITION TIPS",
        "name":"Harvard Researchers Develop New Food Formula for Longevity",
        "detail":"Many people have issues when it comes to nutrition and trying to eat healthy.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/full-length-side-view-portrait-man-jacket-scaled-6d89d64.jpg",
        "cat":"NUTRITION TIPS",
        "name":"New Exercise Research on WHR, Daily Steps and Added Sugar",
        "detail":"There are many ways that you could try to make a positive impact on your health and well-being. But which of those changes are worthwhile and will result in the most bang for the buck?",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/woman-held-sugar-cube-was-feeling-ill-with-sugar-cubes-scaled-ae3afa0.jpg",
        "cat":"NUTRITION TIPS",
        "name":"How to Reduce Your Sugar Intake",
        "detail":"Whether you binge on the weekend or are eating too much sugar on a daily basis, the impact of excessive sugar on your body can leave you feeling more sour than sweet.",
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