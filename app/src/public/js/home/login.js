"use strict";

const id = document.querySelector("#login-id"),
  pswd = document.querySelector("#login-pw"),
  lgbt = document.querySelector("button");

lgbt.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pswd: pswd.value,
  };

  fetch("/login", {
    method: "PSOT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
