(()=>{
    const App={
        config: {
            apiBaseUrl: "http://localhost:3000/service/all",
          },
        htmlElements: {
           dataResponse: document.querySelector("#data-response"),//EL QUE TIENE TODAS LAS CARDS
           userName: document.querySelector("#name_user"),
           containerBuyCart: document.querySelector("#card-items"),
           page : document.body
          },
        init:()=>{
            App.htmlElements.page.addEventListener(
                "load",
                App.handlers.handlePageLoad()
                );
            
        },
        handlers :{
            handlePageLoad: async(e)=>{
                try{
                    App.htmlElements.dataResponse.addEventListener(
                        "click",
                        App.handlers.cardClickServices
                    );
                    const {data} = await axios.get(App.config.apiBaseUrl);
                    const cardInfo =App.template.servicesCard(data);
                    App.htmlElements.userName.innerHTML = localStorage.getItem("user_name")
                    
                    App.htmlElements.dataResponse.innerHTML =cardInfo;
                }
                catch(e){
                    console.log(e);
                }
            },
            cardClickServices: (e)=>{
                e.preventDefault();
                let buyThings=[];
                if(e.target.classList.contains('add-cart')){
                    let selectProduct=e.target.parentElement.parentElement.parentElement
                    // readTheContent(selectProduct);
                    //console.log(e.target.parentElement.parentElement.parentElement);   
                    const cardContent = async(product)=>{
                        const infoProduct = {
                            image: product.querySelector('#service_img').src,
                            title: product.querySelector('#service_name').textContent,
                            price: product.querySelector('#price').textContent,
                            id: product.querySelector('#card_id').textContent,
                            amount: 1
                        }
                        console.log(infoProduct.price)
                        const {data}= await axios.get('http://localhost:3000/create-payment/'+infoProduct.price);
                        // window.location.href = data.data.links[1].href;
                        const paymentProduct = await axios.post('http://localhost:3000/create-payment')
                        console.log(paymentProduct.data.data.links[1].href);
                        console.log(data.status);
                        console.log(infoProduct);
                        window.location.href=paymentProduct.data.data.links[1].href
                        //window.open(paymentProduct.data.data.links[1].href, "Diseño Web", "width=700, height=800")
                        buyThings=[...buyThings,infoProduct]
                        loadHtml();
                    }
                    cardContent(selectProduct);
                }

                function loadHtml(){
                    buyThings.forEach(product =>{
                        const {image,title,price,id,amount}=product;
                        const row = document.createElement('div');
                        row.classList.add('item');
                        row.innerHTML= `
                        <img src="${image}" width="150px" alt="">
                        <div class="item-content">
                            <h6 class="">${title}</h6>
                            <h6 class="cart-price">Precio:<span style="color: #FF1F00;">${price}</span></h6>
                            <h6> Cantidad:<span style="color: #FF1F00;"> ${amount}</span></h6>
                        </div>
                        <span class="delete-product" id="${id}">X</span>
                        `;
                        App.htmlElements.containerBuyCart.appendChild(row)
                    });
                }
            }
        },
        template:{
            servicesCard:(data)=>{
                let cardData= '';
                data.data.forEach(element => {
                //    console.log(element);
                cardData += `
                <div class="mt-5 mb-5 ed">
                <div class="card shadow border-0" style="width: 18rem; id="${element._id}">
                    <span class="d-none" id="card_id">${element._id}</span>
                    <img id="service_img" src="../../ProyectoFinal-Backend/imgs/${element.service_photo}" class="card-img-top" alt="Imagen-promocional">
                    <div class="card-body">
                        <div class="row mb-2 card-section">
                            <div class="col-lg-4">
                                <img class="rounded-circle m-0 shadow-sm" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="foto-persona" style="width:60px; height:60px ;">
                            </div>
                            <div class="col-lg-8 card-titles">
                                <h6 class="text-nowrap mb-0 fs-6">${element.author_name}</h6>
                                <!--<p class="text-nowrap fw-bold mb-0 " style="color:#FF1F00;">Software Developer</p>-->
                            </div>
                        </div>
                        <p class="mb-0 mt-1 fw-bold text-muted">Servicio: <span class="fw-normal" id="service_name" style="color:#FF1F00;" >${element.service_name}</span></p>
                        <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <hr>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn text-white shadow-sm add-cart" style="background: #FF1F00;">
                                <span>comprar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                              </svg>
                            </div>
                            <div>
                                <label class="text-muted fw-normal">Precio:</label><span class="fw-bold" id="price" style="color:#FF1F00;"> ${element.price}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                `
               });
               return cardData
            }
        }
    }
    App.init();
})();