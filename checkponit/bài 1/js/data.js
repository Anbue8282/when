if (!localStorage.getItem('menu')) {
    let menu = ["rau xào", "thịt luộc", "gà rán"];
    localStorage.setItem('menu', JSON.stringify(menu));
}

function manageMenu() {
    let continueManaging = true;

    while (continueManaging) {
        const action = prompt("Nhập một ký tự trong 4 ký tự sau: C, R, U, D hoặc Q để thoát");

        switch (action) {
            case 'C':
                create();
                break;
            case 'R':
                read();
                break;
            case 'U':
                update();
                break;
            case 'D':
                deleteItem();
                break;
            case 'Q':
                continueManaging = false;
                alert("Chương trình kết thúc.");
                break;
            default:
                alert("Ký tự không hợp lệ");
        }
    }
}

function create() {
    let newDish = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    if (newDish) {
        let menu = JSON.parse(localStorage.getItem('menu'));
        if (menu.indexOf(newDish) === -1) {
            menu.push(newDish);
            localStorage.setItem('menu', JSON.stringify(menu));
            alert("Món ăn đã được thêm vào menu.");
        } else {
            alert("Món ăn đã tồn tại trong menu.");
        }
    }
}

function read() {
    let menu = JSON.parse(localStorage.getItem('menu'));
    alert("Danh sách món ăn hiện tại: " + menu.join(", "));
}

function update() {
    let menu = JSON.parse(localStorage.getItem('menu'));
    let oldDish = prompt("Mời người dùng nhập vào tên món muốn update");
    let index = menu.indexOf(oldDish);

    if (index !== -1) {
        let newDish = prompt("Mời người dùng nhập vào tên món ăn mới");
        if (newDish && menu.indexOf(newDish) === -1) {
            menu[index] = newDish;
            localStorage.setItem('menu', JSON.stringify(menu));
            alert("Menu đã được cập nhật.");
        } else {
            alert("Món ăn mới đã tồn tại trong menu hoặc tên món ăn không hợp lệ.");
        }
    } else {
        alert("Món ăn không tồn tại trong menu.");
    }
}

function deleteItem() {
    let menu = JSON.parse(localStorage.getItem('menu'));
    let dishToDelete = prompt("Mời người dùng nhập vào tên món muốn Delete");
    let index = menu.indexOf(dishToDelete);

    if (index !== -1) {
        menu.splice(index, 1);
        localStorage.setItem('menu', JSON.stringify(menu));
        alert("Món ăn đã được xóa khỏi menu.");
    } else {
        alert("Món ăn không tồn tại trong menu.");
    }
}

manageMenu();
