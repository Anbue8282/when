function saveData() {
    localStorage.setItem('Hải', '14');
    localStorage.setItem('Tiến', '15');
    localStorage.setItem('Trung', '16');
    console.log('Dữ liệu đã được lưu vào LocalStorage.');
}

function searchAndUpdateData() {
    let oldKey = prompt('Nhập khóa bạn muốn tìm kiếm:');
    let value = localStorage.getItem(oldKey);

    if (value !== null) {
        console.log(`Dữ liệu tìm thấy: ${value}`);
        let newKey = prompt('Nhập khóa mới:');
        let newValue = prompt('Nhập giá trị mới:');
        localStorage.removeItem(oldKey); // Xóa khóa cũ
        localStorage.setItem(newKey, newValue); // Thêm khóa mới và giá trị mới
        console.log(`Dữ liệu đã được cập nhật thành: ${newKey}: ${newValue}`);
    } else {
        console.log('Dữ liệu không tìm thấy');
    }
}

function deleteData() {
    let keyToDelete = prompt('Nhập khóa bạn muốn xóa:');
    localStorage.removeItem(keyToDelete);
    console.log(`Dữ liệu "${keyToDelete}" đã được xóa`);
}

function clearAllData() {
    localStorage.clear();
    console.log('Toàn bộ dữ liệu trong LocalStorage đã được xóa.');
}

// bài 2
    let count = 10;
    const timeId = setInterval(() => {
        document.getElementById("countdown").textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timeId);
            alert("Đã hết giờ");
        }
    }, 1000);
