let userArr = JSON.parse(localStorage.getItem("signD")) || [];
    document.querySelector("form").addEventListener('submit', signupFun)

    class signinData{
        constructor(n,e,p,cp,c){
            this.Username = n;
            this.email = e;
            this.password = p;
            this.Con_pass = cp;
            this.check = c;

        }
    }


    let signupFun = (event) =>{
        event.preventDefault();

        let name = document.querySelector('#username').value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        let con_pass = document.querySelector('#con_password').value;
        let check = document.querySelector('#checkbox').value;

       let user = new signinData(name,email,password,con_pass,check);

        if(checkemail(email) == false){
            alert("User already exist!")
            // window.location.reload();
        }else if(name == "" || email == "" || password == "" || conpass == ""){
            alert("Please fill all the credentials!")
        }else{
            userArr.push(user);
            localStorage.setItem("signD",JSON.stringify(userArr));
            alert(" Account Created Successfully!");
            // window.location.reload();
            window.location.href = "login.html";
            
        }

    }

    let checkemail = (email) => {
        let filtered = userArr.filter((elem) => {
            return email === elem.email;
        });
        if(filtered.length > 0){
            return false;

        }else{
            return true;
        }
    }