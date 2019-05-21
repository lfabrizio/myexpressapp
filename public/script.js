function getUserInfo(){
    const input = document.getElementById("userName").value;
    
    const url = "/showprofile/" + input;
    axios.get(url)
    .then(response => {
        document.getElementById("userInfo").innerHTML = response.data;
    })
}

function handleSubmit(){
    const userName = document.getElementById("user-name").value;
    const userId = document.getElementById("user-id").value;
     const message = document.getElementById("message").value;
     console.log(userName, userId, message);
     const payload = {
         username: userName,
         id: userId,
         message
     }
     
     
     //making a post request with axios
     axios.post("/api/", payload)
     .then(response => {
         console.log(response.data)
     })
}

    function getAllUsers() {
        axios.get("/getallusers/")
        .then(response => {
            document.getElementById("result").innerHTML = 
            response.data
        })
    }