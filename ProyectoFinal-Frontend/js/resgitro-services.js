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
           message: document.querySelector("#message"),
           page : document.body
          },
        init:()=>{
            App.htmlElements.form.addEventListener(
                "submit",
                App.handlers.handleFormSubmit
            );
            App.htmlElements.page.addEventListener(
                "load",
                App.handlers.handlePageLoad()
            );  
        },
        handlers :{
            handleFormSubmit: async (e)=>{
                e.preventDefault();
                // alert(App.htmlElements.inputServiceName.value)
                //const inpFile = document.getElementById('photo');
                
                const inpFile = document.getElementById('photo').files[0];
                const formData = new FormData();
                formData.append("inpFile",inpFile)
                console.log(inpFile);

                const {data}= await axios.post('http://localhost:3000/services',
                {
                data:App.htmlElements.inputServiceName.value,
                service_description:App.htmlElements.inputServiceDescrip.value,
                price: App.htmlElements.inputPrice.value,
                categories: App.htmlElements.inputSelect.value,
                author_id: localStorage.getItem("id_user"),
                author_name:localStorage.getItem("user_name")
                });
                
                // console.log(data.data._id)
                const img = await axios.put('http://localhost:3000/img/'+data.data._id,
                formData);
                
            },
            handlePageLoad: async(e)=>{
                
                try{
                   
                    let selectData
                    const dataCategory = await axios.get(`${App.config.apiBaseUrl}category/all`);
                    dataCategory.data.data.forEach(element => {
                    //console.log(element);
                    selectData += `
                    <option value="${element.category_name}">${element.category_name}</option>
                    `
                    });
                    //console.log(selectData);
                    App.htmlElements.inputSelect.innerHTML=selectData;
                    
                }
                catch(e){
                    console.log(e);
                }
                
            }
        }
    }
    App.init();
})();