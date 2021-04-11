const myBtn = document.getElementById("myBtn");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

myBtn.addEventListener("click", () => {
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;

  let users = { userName: usernameValue, passWord: passwordValue };
  console.log(usernameValue);

  fetch(`http://localhost:3010/api/user/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
});
