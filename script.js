//selecting elements
const firstNameInputEl = document.querySelector("#fname");
const lastNameInputEl = document.querySelector("#lname");
const emailInputEl = document.getElementById("mail");
const queryInputEl = document.getElementById("query");
const messageEl = document.querySelector("#message");
const checkEl = document.getElementById("click");
const btn_submit = document.getElementById("submit");
console.log(checkEl);

//defining event listeners
function form_submit() {
  const first_name = firstNameInputEl.value;
  const last_name = lastNameInputEl.value;
  const email = emailInputEl.value;
  const message = messageEl.value;
  console.log(first_name);

  if (first_name == "") {
    firstNameInputEl.classList.add("error");
    const form_control = firstNameInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_error");
    ValidEl.innerText = "This field is required";
  } else {
    firstNameInputEl.classList.add("success");
    const form_control = firstNameInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_success");
    ValidEl.innerText = "";
  }
  if (!last_name) {
    lastNameInputEl.classList.add("error");
    const form_control = lastNameInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_error");
    ValidEl.innerText = "This field is required";
  } else {
    lastNameInputEl.classList.add("success");
    const form_control = lastNameInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_success");
    ValidEl.innerText = "";
  }
  if (!email) {
    emailInputEl.classList.add("error");
    const form_control = emailInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_error");
    ValidEl.innerText = "Please enter a valid email address";
  } else {
    emailInputEl.classList.add("success");
    const form_control = emailInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_success");
    ValidEl.innerText = "";
  }
  if (queryInputEl.checked == false) {
    queryInputEl.classList.add("error");
    // const form_control = queryInputEl.parentElement;

    const ValidEl = document.querySelector("#query-error");

    ValidEl.classList.add("v_error");
    ValidEl.innerText = "Please select a query type";
  } else {
    queryInputEl.classList.add("success");
    const box1 = document.querySelector(".box1");
    box1.classList.add("success");
    // const form_control = queryInputEl.parentElement;

    const ValidEl = document.querySelector("#query-error");

    ValidEl.classList.add("success");
    ValidEl.innerText = "";
  }
  if (!message) {
    messageEl.classList.add("error");
    const form_control = messageEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_error");
    ValidEl.innerText = "This field is required";
  } else {
    messageEl.classList.add("success");
    const form_control = messageEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("v_success");
    ValidEl.innerText = "";
  }
  if (checkEl.checked == false) {
    const ValidEl = document.querySelector("#check-error");
    ValidEl.classList.add("v_error");
    ValidEl.innerText =
      "To submit this form, please consent to being contacted";
  } else {
    const ValidEl = document.querySelector("#check-error");
    ValidEl.classList.add("v_success");
    ValidEl.innerText = "";
  }
  if (
    first_name != "" &&
    last_name != "" &&
    email != "" &&
    queryInputEl.checked == true &&
    message != "" &&
    checkEl.checked == true
  ) {
    document.getElementById("contact-form").innerHTML = "";
    alert(
      `Message Sent! 
      Thanks for completing the form. We'll be in touch soon!`
    );
  }
}

function box1queryhandler() {
  document.getElementById("box1").style.borderColor = "green";
  document.getElementById("box2").style.borderColor = "#25686f";
  document.getElementById("box1").style.backgroundColor = "#dff1e7";
  document.getElementById("box2").style.backgroundColor = "white";
  //const box1 = document.querySelector(".box1");
  //box1.classList.add("box1");
  // console.log("calling");
}
function box2queryhandler() {
  document.getElementById("box2").style.borderColor = "green";
  document.getElementById("box1").style.borderColor = "#25686f";
  document.getElementById("box2").style.backgroundColor = "#dff1e7";
  document.getElementById("box1").style.backgroundColor = "white";
}
