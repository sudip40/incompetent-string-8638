var indi=JSON.parse(localStorage.getItem("individual"))||[]




    
    var div = document.createElement("div");

    let img=document.createElement("img")
    
    img.setAttribute("src", indi.img);

    let h3=document.createElement("h3")

     h3.innerText=indi.name;
    div.append(img,h3)

    let mamta=document.getElementById("mamtanext")

    mamta.append(div)

