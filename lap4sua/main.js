//tao ds chưa lyrics
const lyrics =[
            "Tuyết trắng xóa rơi rơi trên thân liễu sầu",
            "Lấp kín lối nơi rừng núi cao",
            "Chấp nét bút, thơ ai ngân lên ngất trời",
            "Từ chốn nhân chạm thiên",
            "Nàng tiên nhân ta đây thân vốn tiểu sinh dưới trần",
            "Mệnh thiên ban ngàn đời cấm ngăn tiên ái nhân",
            "Mặc lời trời, duyên kia đan hồng tơ kéo ta đến gần",
            "Tuy nhất niệm được ở bên vẹn thương nhớ",
            "Tiếng đàn phát lên tiễn đưa",
            "Trời ban chiếu thu hồi",
            "Nữ thần trái quy",
            "Phạt trăm năm xa cách",
            "Chàng vượt chông gai, mây mù giăng tứ phương",
            "Muôn trùng xa để đến bên ai",
            "Đường xa xăm ta vẫn sẽ cứ đi dù tình ngang trái",
            "Nhặt trăm hoa, kết đôi lời",
            "Có bao năm kiếp này",
            "Nguyện bên em dẫu sai ý trời",
            "Nàng tiên nhân ta đây thân vốn tiểu sinh dưới trần",
            "Mệnh thiên ban ngàn đời cấm ngăn tiên ái nhân",
            "Mặc lời trời duyên kia đan hồng tơ kéo ta đến gần",
            "Tuy nhất niệm được ở bên vẹn thương nhớ",
            "Tiếng đàn phát lên tiễn đưa",
            "Trời ban chiếu thu hồi",
            "Nữ thần trái quy",
            "Phạt trăm năm xa cách",
            "Chàng vượt chông gai, mây mù giăng tứ phương",
            "Muôn trùng xa để đến bên ai",
            "Đường xa xăm ta vẫn sẽ cứ đi dù tình ngang trái",
            "Nhặt trăm hoa, kết đôi lời",
            "Có bao năm kiếp này",
            "Nguyện bên em dẫu sai ý trời",
            "Chàng vượt chông gai, mây mù giăng tứ phương",
            "Muôn trùng xa để đến bên ai",
            "Đường xa xăm ta vẫn sẽ cứ đi dù tình ngang trái",
            "Nhặt trăm hoa, kết đôi lời",
            "Có bao năm kiếp này",
            "Nguyện bên em dẫu sai ý trời",
            "Ngước lên cao tựa lưng góc trần",
            "Vài đôi câu hỏi trời kia thấu chăng",
            "Nghìn dặm xa mệt không lơi, chân rã rời",
            "Thì ta vẫn nghịch thiên để tìm em"
];


// tao vong lap in loi bai hat =>in len html file





//tao elemt cho html (DOM)
const words=document.getElementById("words");
function createElement(lyrics){
    words.innerHTML +=`<p>${lyrics}</p>`;

}
// setTimeout

//tao loi bai hat lien tuc cách 1 s
var count = 0;
const show_lyrics=setInterval(function(){
    createElement(lyrics[count]);
    count++;

    if (count === lyrics.length){
        clearInterval(show_lyrics);

    }

},1000);
