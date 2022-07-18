(()=>{
    const App={
        config: {
            apiBaseUrl: "http://localhost:3000/",
          },
          htmlElements: {
           form: document.querySelector("#register-form"),
           inputServiceName: document.querySelector("#service-name"),
           inputServiceDescrip: document.querySelector("#service-descripcion"),
           inputPrice: document.querySelector("#price"),
           inputSelect: document.querySelector("#select-option"),
           inputFile: document.querySelector("#photo"),
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
                // alert(App.htmlElements.inputServiceName.value)
                const {data}= await axios.post('http://localhost:3000/services',
                {
                data:App.htmlElements.inputServiceName.value,
                service_description:App.htmlElements.inputServiceDescrip.value,
                price: App.htmlElements.inputPrice.value,
                categories: App.htmlElements.inputSelect.value,
                service_photo: App.htmlElements.inputFile.value
                });
                console.log(data);
            }  
        }
    }
    App.init();
})();