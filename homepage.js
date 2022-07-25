import footerLinks from "./footer/footer store links.js";
    // console.log(footerLinks());
    document.getElementById("footer").innerHTML = footerLinks();

    import navbar from "./navbar/navbar.js";
    // console.log(navbar());
    document.getElementById("sks_navba").innerHTML = navbar();






    const gotopbtn = document.querySelector(".sk_gotopbtn");

    window.addEventListener("scroll", checkHeight);

    function checkHeight() {
        if (window.scrollY > 200){
            gotopbtn.style.display = "flex";
        } else {
            gotopbtn.style.display = "none";
        }
    }

    gotopbtn.addEventListener("click", ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })



    // let images = [
    //     "./images/image1.png",
    //     "./images/image2.png",
    //     "./images/image3.png",
    //     "./images/image4.png",
    //     "./images/image5.png",
    //     "./images/image6.png",
    //     "./images/image7.png",
    //     "./images/image8.png",
    //     "./images/image9.png",
    //     "./images/image10.png",
    //     "./images/image11.png",
    //     "./images/image12.png",
    //     "./images/image13.png",
    //     "./images/image14.png",
    //     "./images/image15.png",
    //     "./images/image16.png",
    //     "./images/image17.png",
    //     "./images/image18.png",
    //     "./images/image19.png",
    //     "./images/image20.png",
    // ];
    // let i=0;
    // function slideShow() {
    //     document.querySelector("#sk_image").src = images[i];
    //     document.querySelector("#sk_image1").src = images[i];
    //     document.querySelector("#sk_image2").src = images[i];
    //     document.querySelector("#sk_image3").src = images[i];
    //     document.querySelector("#sk_image4").src = images[i];
    //     document.querySelector("#sk_image5").src = images[i];
    //     document.querySelector("#sk_image6").src = images[i];
    //     document.querySelector("#sk_image7").src = images[i];
    //     if (i<images.length-1){
    //         i++;
    //     } else {
    //         i=0;
    //     }
    //     // console.log(i);
    // }
    // setInterval(slideShow,5000);






    let photos = [
        "./photos/photo1.jpg",
        "./photos/photo2.jpg",
        "./photos/photo3.jpg",
    ];
    let j=0;
    function machao() {
        document.querySelector("#sksphoto").src = photos[j];
        if (j<photos.length-1){
            j++;
        } else {
            j=0;
        }
        console.log(j);
    }
    setInterval(machao(),1000);