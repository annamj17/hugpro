let form = document.getElementById("nameForm");

if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

function processForm(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  let formData = new FormData(form);
  let name = formData.get("name");

  if (name) {
    let greeting = "";

    fetch("/api/greeting/" + name)
      .then(resp => resp.json())
      .then(data => {
        greeting = data.greeting;
        document.getElementById("results").innerHTML = greeting;
      });
  }
}
