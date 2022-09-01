const passwordInputs = document.querySelectorAll("input[type='password']");
[...passwordInputs].forEach((element) => {
  element.addEventListener("keyup", (e) => {
    if (passwordInputs[0].value === passwordInputs[1].value) {
      passwordInputs.forEach((e) => e.classList.add("matching"));
      document
        .querySelector(".password-matching-text")
        .setAttribute("hidden", "");
    } else {
      passwordInputs.forEach((e) => e.classList.remove("matching"));
      document
        .querySelector(".password-matching-text")
        .removeAttribute("hidden");
    }
  });
});
