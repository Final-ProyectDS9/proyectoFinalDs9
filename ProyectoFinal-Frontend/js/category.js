(()=>{
    const App={
        config: {
            apiBaseUrl: "http://localhost:3000/category",
          },
          htmlElements: {
            form: document.querySelector("#category-form"),
           inputCategory: document.querySelector("#category")
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
                if(App.htmlElements.inputCategory.value !=''){
                    try {
                        const {data} = await axios.post(App.config.apiBaseUrl,
                            {
                             category_name: App.htmlElements.inputCategory.value
                            }
                            );
                        console.log(data) 
                    }catch(error){
                        console.log(error);
                    }
                }
                
            }  
        }
    }
    App.init();
})();