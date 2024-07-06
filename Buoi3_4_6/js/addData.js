// bat su kien cho nut cancel
document.getElementById("home-btn").onclick = () => {
  location.href = "../index.html";
};

// bat su kien cho nut submit (add user vao local storage)
document.querySelector("#create-user-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  addUser();
});

// bat su kien cho nut submit (add product vao local storage)
document
  .querySelector("#create-product-btn")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    addProduct();
  });

// function add items in local storage
function addUser() {
  // get input values from form of HTML
  const fistName = document.getElementById("userFistName").value;
  const lastName = document.getElementById("userLastName").value;
  // vi phan user tu API name la 1 obj gom 2 thuoc tinh => phai lam giong cho phan add user
  const name = { firstname: fistName, lastname: lastName };
  const email = document.getElementById("userEmail").value;
  const phone = document.getElementById("userPhone").value;

  //validate form
  //todo

  // get old list in local storage
  const dataList = JSON.parse(localStorage.getItem("users"));
  // tao id tu dong
  const id = createAutoId(dataList);
  dataList.push({id: id, name: name, email: email, phone: phone });
  // add again in local storage
  localStorage.setItem("users", JSON.stringify(dataList));

  //load lai trang de xoa het du lieu vua nhap + dam bao van o form de nguoi dung co the nhap tiep
  alert("Adding successfully!");
  location.reload();
}

// function add items in local storage
function addProduct() {
  // get input values from form of HTML
  const productName = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  // phai doi price ve kieu number
  price = Number.parseFloat(price);
  const image = document.getElementById("ProductImage").value;

  //validate form
  //todo

  // get old list in local storage
  const dataList = JSON.parse(localStorage.getItem("cards"));
  // tao id tu dong
  const id = createAutoId(dataList);
  dataList.push({ id, productName, price, image });
  // add again in local storage
  localStorage.setItem("cards", JSON.stringify(dataList));

  //load lai trang de xoa het du lieu vua nhap + dam bao van o form de nguoi dung co the nhap tiep
  alert("Adding successfully!");
  location.reload();
}

function createAutoId(dataList) {
  return dataList[dataList.length - 1].id + 1;
}
