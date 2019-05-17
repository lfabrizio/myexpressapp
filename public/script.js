function getUserInfo(){
    const input = document.getElementById("userName").value;
    
    const url = "/showprofile/" + input;
    axios.get(url)
    .then(response => {
        document.getElementById("userInfo").innerHTML = response.data;
    })
}

