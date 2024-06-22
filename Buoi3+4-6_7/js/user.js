//get user list (max 10)
async function getuser(limit) {
     let user_list =[];
     try {
     const response = await fetch('https://fakestoreapi.com/users?limit='+ limit);
     if (!response.ok){
        // /quang loi  
        throw new Error("responsen was not ok");

     }
     const data = await response.json();
     console.log(data);
     return data;

     } catch(err){
        console.log(err);
        return;
     }
}
function renderTavleUI(){}
