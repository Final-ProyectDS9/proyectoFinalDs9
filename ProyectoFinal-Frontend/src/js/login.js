(()=>{
    const App={
        config: {
            apiBaseUrl: "http://localhost:3000/autenticate/",
          },
          htmlElements: {
            form: document.querySelector("#login-form"),
           inputUser: document.querySelector("#user"),
           inputPassword: document.querySelector("#password"), 
           message: document.querySelector("#message")
          },
        init:()=>{
            App.htmlElements.form.addEventListener(
                "submit",
                App.handlers.handleFormSubmit
              );
        },
        handlers :{
            handleFormSubmit: async (e)=>{
                e.preventDefault();
                // alert(`${App.htmlElements.inputPassword.value}/${App.htmlElements.inputUser.value}`);
                if(App.htmlElements.inputPassword.value ===''){
                alert('Ingrese su contraseña');
                }
                if(App.htmlElements.inputUser.value ===''){
                    alert('Ingrese su Usuario');
                }
                try {
                    const {data} = await axios.get(App.config.apiBaseUrl+App.htmlElements.inputUser.value+'/'+md5(App.htmlElements.inputPassword.value));
                    if(data.login_status === false){
                        App.htmlElements.message.className=('alert alert-danger');
                        App.htmlElements.message.innerHTML="Usuario o Contraseña malo";

                    }
                    else {
                        App.htmlElements.message.className=('alert alert-success');
                        App.htmlElements.message.innerHTML="Usuario Logueado";
                    }
                    console.log(data);
                }catch(error){
                    console.log(error);
                }
            }  
        }
    }
    App.init();
})();