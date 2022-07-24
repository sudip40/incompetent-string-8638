let userArr = JSON.parse(localStorage.getItem('signD')) || [];
    document.querySelector('form').addEventListener('submit', loginFun);

    function loginFun(event){
      event.preventDefault();

      let loginobj = {
        l_email : document.querySelector('#email').value,
        l_password : document.querySelector('#password').value,

      };

      var flag = false;
      for(var i=0; i<userArr.length; i++){

        if(userArr[i].email == loginobj.l_email && userArr[i].password == loginobj.l_password)
        {
          flag = true;
          alert("Authentication successful!");
          window.location.href="redirect.html";
        }
      }
      if(flag == false){
        alert('Authentication failed!');
      }
    }