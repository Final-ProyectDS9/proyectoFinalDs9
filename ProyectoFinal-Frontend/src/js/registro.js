(()=>{
    const App={
        config: {
            apiBaseUrl: "http://localhost:3000/",
          },
          htmlElements: {
            form: document.querySelector("#register-form"),
           inputUser: document.querySelector("#mail"),
           inputPassword: document.querySelector("#password"),
           inputName: document.querySelector("#name"),
           inputBirthday: document.querySelector("#birthday"),
           inputPhone: document.querySelector("#phone"),
           inputSelect: document.querySelector("#select-option"),
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
                    alert('Ingrese su Correo');
                }
                try {
                    const {data} = await axios.get(App.config.apiBaseUrl+App.htmlElements.inputUser.value+'/'+md5(App.htmlElements.inputPassword.value)+`/${App.htmlElements.inputName.value}/${App.htmlElements.inputPhone.value}/${App.htmlElements.inputBirthday.value}/${App.htmlElements.inputSelect.value}`);
                   if(data.create === false){
                    App.htmlElements.message.className=('alert alert-danger');
                    if(data.type.code ==11000){
                        App.htmlElements.message.innerHTML="[Error]:Usuario Duplicado";
                    }
                    else {
                        App.htmlElements.message.innerHTML="[Error]:En la creación de Usuario";
                    }
                   }
                   else{
                    App.htmlElements.message.className=('alert alert-success');
                    App.htmlElements.message.innerHTML="Usuario creado correctamente";
                   }
                    console.log(data);
                    //console.log(data.type.code);
                }catch(error){
                    console.log(error);
                }
            }  
        }
    }
    App.init();
})();