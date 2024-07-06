//edt du lieu
export function edititem(id){
    //lay ds product tu local storage
    product_list = JSON.parse(localStorage.getItem('cards'));


    //lay du lieu cu
    const currentproduct =product_list.filter((e)=>e.id===id)[0];

    //thay doi du lieu (dom)

    //tat popup
    document.getElementById('editpopup').classList.remove('show');


}

//bat popup
export function openPopup(){
    document.getElementById('editpopup').onclick = ()=>{
        document.getElementById('editpopup').classList.add('show');

    }


}


//xo du lieu 
export function deleteitem(id){
    const storage_cards =JSON.parse(localStorage.getItem('cards'));
    console.log(storage_cards);
    //loc du lieu
    //xoa du lieu 
    // cach 1
    // for (let index = 0; index < storage_cards.length; index++) {
    //     if (storage_cards[index].id===id){
    //         storage_cards.splice(index,1);
    //     }
        
    // }
    //cach 2 
    const c = storage_cards?.filter(card=> card.id === id)[0];
    storage_cards.splice(storage_cards.indexOf(c),1);


    // set du lieu

    //set lai du lieu 
    localStorage.setItem("cards",JSON.stringify(storage_cards));
    //reload trang 
    location.reload();



    
}

