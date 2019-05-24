function getUserInfo() {
  const input = document.getElementById("userName").value;
  const url = "/showprofile/" + input;
  axios.get(url)
    .then(response => {
      document.getElementById("userInfo").innerHTML = JSON.stringify(response.data);
    })
}

function handleSubmit() {
  // Getting values from user inputs
  const userName = document.getElementById("user-name").value;

  const message = document.getElementById("message").value;

  // Creating a payload object
  const payload = {
    username: userName,
    message
  }

  // Making a post request with axios
  axios.post("/api/", payload)
    .then(response => {
      console.log(response.data)
    })
}

function getAllUsers() {
  axios.get("/getallusers/")
    .then(response => {
      document.getElementById("result").innerHTML = JSON.stringify(response.data)
    })
}