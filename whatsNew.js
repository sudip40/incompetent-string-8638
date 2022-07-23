

var productsData = [
    {
      "image_url": "https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/anniversary_blog-61a35ed.jpg",
      "cat": "WHAT'S NEW",
      "name": "12 Years and Still Going Strong",
      "detail": "JEFIT is celebrating its 12th birthday this Friday, July 15th. Over these 12 years JEFIT has seen incredible growth as",
      "read":"READ MORE"
    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/blog-1-50ef21a.jpg",
        "cat":"WHAT'S NEW",
        "name":"Take on the Lunge League Challenge In July",
        "detail":"Join JEFIT's third monthly fitness challenge, available on iOS and android, the Lunge League Challenge! Find extra motivation to mix up your workout",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/hand-mudra-gesture-close-up-people-easy-seat-pose-scaled-4c65eda.jpg",
        "cat":"WHAT'S NEW",
        "name":"Why Yoga Is The Secret To Lifting More",
        "detail":"When most people think about how they're going to reach their next weight lifting goal yoga would be one of",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/Blog-fd66374.jpg",
        "cat":"WHAT'S NEW",
        "name":"Take on the Dancing Pecs Challenge in June",
        "detail":"Join JEFIT's second monthly fitness challenge, available on iOS and android, the Dancing Pecs Challenge! Find extra motivation to mix",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/smiling-muscular-build-man-practicing-deadlift-with-barbell-health-club-while-his-friends-are-cheering-him-scaled-e13ee11.jpg",
        "cat":"WHAT'S NEW",
        "name":"Double Iron Points on Referrals This National Fitness Month",
        "detail":"May is National Fitness and Sports month, and to celebrate we're giving away double iron points on referrals. Through the",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/iOS-watch_Banner-scaled-944ff57.jpg",
        "cat":"WHAT'S NEW",
        "name":"iOS Watch Release: Now You Can Streamline Your Workout",
        "detail":"Jefit is proud to bring a new watch app for iOS to market. The Apple iOS watch app is now available!",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/10m-Header_031022-2-97df51f.png",
        "cat":"WHAT'S NEW",
        "name":"Jefit Celebrates 10 Million Downloads with 25% Discount Offer",
        "detail":"Jefit, the award-winning technology company is showing its gratitude in a big way. To say thank-you to all current and future users of the app, Jefit is offering 25 percent off.",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/woman-doing-dandayamana-bharmanasana-with-resistance-band-grey-wall-scaled-53ceb64.jpg",
        "cat":"WHAT'S NEW",
        "name":"Strong Abs Equate to More Core Stabilization Exercises",
        "detail":"What is one thing an athlete and most gym-goers have in common? Both are trying to developed strong, ripped abs and developing core stabilization is important for both",
        "read":"READ MORE"

    },
    {
        "image_url":"https://cdn.jefit.com/wp/wp-content/uploads/jupiterx/images/happy-young-sportswoman-earphones-pointing-scaled-d83ff9a.jpg",
        "cat":"PRODUCT TIPS & FAQ, WHAT'S NEW",
        "name":"Android Watch Release: An Exciting New Jefit Feature",
        "detail":"Jefit is now offering a new feature just released on Android watch. A similar release will be coming soon for the Apple watch too",
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


   