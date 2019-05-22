const getUserInfo = () => {
  const input = document.querySelector("#userName").value;
  console.log(input)

  //    console.log(`ES6 ${input}`)
  const url = "/showprofile/" + input;

  axios.get(url).then(response => {
    document.querySelector("#userInfo").innerHTML = response.data;
  });
};

const handleSubmit = () => {
  const username = document.querySelector("#user-Name").value;
  console.log(username)
  const id = document.querySelector("#userId").value;
  const message = document.querySelector("#userMsg").value;

  const url2 = "api/";

  axios.post(url2, {  username, id, message }).then(response => {
    console.log(response);
    document.querySelector("#submitInfo").innerHTML = response.data;
  });
};

const getAllUsers = () => {
    const url3 = '/getallusers'; 
    axios.get(url3)
        .then(response => {
            document.querySelector('#result').innerHTML = JSON.stringify(response.data)
        })
}