// kieu du lieu js
// kieu nguyen thuy
/**
 * str "abc"
 * int: 123
 * float: 1.2
 * null
 * underlined
 * symbol
 */


//kieu phuc tap
/**
 * obj
 * array
 */


let products = {
    data: [
        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3466712209076_ae4321ce93b91a2070108a17a0654259__1__7f92c24d6bf748b5b765d90067d3377e_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

        {
            productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
            price: "37",
            image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
        },

        {
            productName: "LEVENTS® EARTH TEE/ PURPLE",
            price: "36",
            image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
        },

        {
            productName: "LEVENTS® PLAY LOGO TEE/ PINK",
            price: "29",
            image: "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg"
        },
    ]
}

// ham t card
function createCard(name,price,img_link){
    //card 
    let card =document.createElement("div");
    card.classList.add('card');
    card.style.width= '18rem';
    //img
    let img = document.createElement("img");
    img.classList.add('card-img-top');
    img.src =img_link;
    img.alt=name;
   
    //card body
    let card_body_1=document.createElement("div");
    card_body_1.classList.add('card-body');

    //name
    let card_title=document.createElement("h5");
    card_title.classList.add('card-title');
    card_title.innerText=name;
    card_body_1.appendChild(card_title);//add child
    //price
    let card_content=document.createElement("p");
    card_content.classList.add("card-text");
    card_content.classList.add("text-danger");
    card_content.innerText=price;
    card_body_1.appendChild(card_content);//add child
    card.appendChild(card_body_1);
    //card body 2 

    let card_body_2 =document.createElement("div");
    card_body_2.classList.add('card-body');
    //edit button 
    let edit_btn =document.createElement("a");
    edit_btn.classList.add("card_link");
    edit_btn.innerText="Edit";
    edit_btn.href="#";
    card_body_2.appendChild(edit_btn);
    //delêt btn
    let del_btn =document.createElement("a");
    del_btn.classList.add("card_link");
    del_btn.innerText="Delete";
    del_btn.href="#";
    card_body_2.appendChild(del_btn);
    card.appendChild(card_body_2);
    return card; // tra ve trong html








}


// vng lap t danh sach card theo tu khoa 

function getCardBySearchKey(search_key){
    //khaio bao ds
    let results=[];
    //lay du lieu 
    cards = JSON.parse(localStorage.getItem('cards'));
    if(cards.lenght){
        for (const obj of cards) {
            if (obj.productName.includes(search_key.toLowerCase())){
                console.log(obj);
                results.push(obj);


            }
            //ko co du lieu ohu hop
            if (!results.lenght){
                alert("No data")
                return; //undefine
            }

            
        }
                
            }
        

        else{
        //alear 
        alert("no data");
        return; // undeline

    }
    return results;
}
//luu du lieu khi ms chay web
if (!localStorage.getItem('card')){
    // tao du lieu moi
    localStorage.setItem('cards' , JSON.stringify(products.data));

}


//bat su kien 
document.querySelector('#search-bar input').addEventListener('input',()=> {
    const search_key =document.querySelector('#search-bar input').value;
    getCardBySearchKey(search_key.toUpperCase());
})



// bat su kien


