const image = document.querySelector(".img");
const input = document.querySelector(".img-input");

input.onchange = function () {
    image.src = URL.createObjectURL(input.files[0]);
};

const Form = document.querySelector("#Form");
const submit = document.querySelector(".submit");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const img = document.querySelector(".img")
  const name = document.querySelector("#input-name");
  const address = document.querySelector("#input-address");
  const phone = document.querySelector("#input-phone");
  const email = document.querySelector("#input-email");
  
  const result_img = document.createElement("img");
  result_img.setAttribute("src", image.src);
  result_img.classList = "w-52 m-auto mb-4 mt-4";
  
  const result_name = document.createElement("td");
  result_name.classList = "text-yellow-400 text-2xl";
  result_name.textContent = name.value;

  const result_address = document.createElement("td");
  result_address.classList = "text-yellow-400 text-2xl";
  result_address.textContent = address.value;

  const result_phone = document.createElement("td");
  result_phone.classList = "text-yellow-400 text-2xl";
  result_phone.textContent = phone.value;
  
  const result_email = document.createElement("td");
  result_email.classList = "text-yellow-400 text-2xl";
  result_email.textContent = email.value;
  
  const tr = document.createElement("tr");
  tr.classList = "border border-yellow-300"
  tr.appendChild(result_img);
  tr.appendChild(result_name);
  tr.appendChild(result_address);
  tr.appendChild(result_email);
  tr.appendChild(result_phone);
  
  img.src = "./Assets/images/pngwing.com.png"
  name.value = "";
  address.value = "";
  phone.value = "";
  email.value = "";
  
  const table = document.querySelector("#table")
  
  table.appendChild(tr)
});
