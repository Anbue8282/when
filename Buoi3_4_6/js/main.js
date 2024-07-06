// edit du lieu ---------------------------------------
export function editItem(id) {
  // lay danh sach product tu local storage
  let product_list = JSON.parse(localStorage.getItem("cards"));

  // lay du lieu cu
  const current_product = product_list.filter((e) => e.id === id)[0];

  const product_name = document.getElementById("name").value;
  const product_price = document.getElementById("price").value;
  const product_img = document.getElementById("img").value;
  // add lai du lieu da sua vao trong local storage
  if (product_name && product_price && product_img) {
    if (
      product_name != current_product.productName ||
      product_price != current_product.price ||
      product_img != current_product.image
    ) {
      // update lai du lieu trong local storage
      const newList = product_list.map((e) => {
        if (e.id == id) {
          e.productName = product_name;
          e.price = product_price;
          e.image = product_img;
        }
        return e;
      });
      console.log(newList);
      // dat lai du lieu cho local storage
      localStorage.setItem("cards", JSON.stringify(newList));
    }
  }

  // tat popup
  document.getElementById("editPopup").classList.remove("show");
}

export function cancelPopup() {
  document.getElementById("editPopup").classList.remove("show");
}

// bat popup
export function openPopup(id) {
  // lay danh sach product tu local storage
  let product_list = JSON.parse(localStorage.getItem("cards"));
  // lay du lieu cu
  const current_product = product_list.filter((e) => e.id === id)[0];

  // thay doi du lieu (DOM)
  const product_name = document.getElementById("name");
  product_name.value = current_product.productName;

  const product_price = document.getElementById("price");
  product_price.value = current_product.price;

  const product_img = document.getElementById("img");
  product_img.value = current_product.image;

  document.getElementById("editPopup").classList.add("show");
}

// xoa du lieu -----------------------------------------
export function deleteItem(id) {
  // lay du lieu
  const storage_cards = JSON.parse(localStorage.getItem("cards"));
  console.log(storage_cards);
  // xoa du lieu
  // cach 1
  for (let index = 0; index < storage_cards.length; index++) {
    if (storage_cards[index].id === id) {
      storage_cards.splice(index, 1);
    }
  }

  // cach 2
  // loc du lieu theo id
  //   const c = storage_cards?.filter((card) => card.id === id)[0];
  //   storage_cards.splice(storage_cards.indexOf(c), 1);

  // set lai du lieu cho local storage
  localStorage.setItem("cards", JSON.stringify(storage_cards));
  // reload trang hien tai
  location.reload();
}
