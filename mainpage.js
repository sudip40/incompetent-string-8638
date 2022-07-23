var indi=JSON.parse(localStorage.getItem("individual"))||[]




    
    var div = document.createElement("div");

    let img=document.createElement("img")
    
    img.setAttribute("src", indi.img);

    let na=document.createElement("h3")

     na.innerText=indi.name;
        let free= document.querySelector(".fre")
        free.innerText=indi.Frequency;
    let type=document.querySelector(".type");
    type.innerText=indi.Category;
    let diffcult=document.querySelector(".diffcult");
    diffcult.innerText=indi.Exp_Level;
    let Views_Downloads =document.querySelector(".download");
    Views_Downloads.innerText=indi.Views_Downloads;
    
    div.append(img)

    let mamta=document.getElementById("mamtanext")

    mamta.append(div)


// let mishra= [{
//     "img_src": "https://www.jefit.com/assets/img/routine/banner-large/wide_general_m.png",
//     "name": "Marilyn's Pixar Mom Routine",
//     "Frequency": "4 days",
//     "Category": "Maintaining",
//     "Exp_Level": "Beginner",
//     "Views_Downloads": "6/0",
//     "created_by": "zagbapu",
//     "EliteFree": "Free",
//     "vipicon": "",
//     "logo":"https://www.jefit.com/images/lifting_log_icon_20.png"
// },

// {
//     "img_src": "https://www.jefit.com/assets/img/routine/banner-large/wide_general_m.png",
//     "name": "The UNSUITED 3-Day Split",
//     "Frequency": "3 days",
//     "Category": "Maintaining",
//     "Exp_Level": "Beginner",
//     "Views_Downloads": "14/1",
//     "created_by": "mbiegun",
//     "EliteFree": "Free",
//     "vipicon": "VIP",
//     "logo":"https://www.jefit.com/images/lifting_log_icon_20.png"
// },]

//     mamtaa(mishra);
// function mamtaa(data){
// let city=document.getElementById("ashok")

// city.innerHTML=null
// data.forEach(function(el){


//     let tr=document.createElement("tr")
//     let img=document.createElement("img")
//     img.src=el.img_src;
//     let name=document.createElement("p")

//     name.innerText=el.name
//     let td=document.createElement("td")
//     let td2=document.createElement("td");
//     td2.innerText=el.Frequency;
//     let td3=document.createElement("td");
//     td3.innerText=el.Exp_Level;

//     let td4=document.createElement("td");
//     td4.innerText=el.Views_Downloads;
//     let td5=document.createElement("td");
// td5.innerText=el.EliteFree;
// let img2=document.createElement("img")
// img2.setAttribute("class","linktonext");
// img2.src=el.logo;
// let a=document.createElement("a");
// a.append(img2);
// let td6=document.createElement("td");
// td6.append(a)



// td.append(img,name)

// tr.append(td,td2,td3,td4,td5,td6)
// td.addEventListener("click",function(){
// addfunction(el)
// })
// city.append(tr)


// })

// }
// let nextperson=JSON.parse(localStorage.getItem("nextperson"))||[];
// function addfunction(el){

//   localStorage.setItem("nextperson",JSON.stringify(el));
 
// console.log(nextperson)

