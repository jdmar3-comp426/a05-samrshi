window.addEventListener("load", function () {
  function sendData() {
    console.log("submitted");

    const formdata = new FormData(document.getElementById("myForm"));

    const user = formdata.get("user");
    const pass = formdata.get("password");
    const email = formdata.get("email");

    console.log(user, pass, email)

    const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: user,
        pass: pass,
        email: email,
      }),
    };

    console.log(typeof(fetchOptions))

    fetch("/app/new", fetchOptions)
      .then((res) => res.json())
      .then((json) => alert(json.message))
      .catch((err) => alert(err));
  }

  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
