const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  
  try {
    
    if (dividend == "" || divider == "") {
      result.innerText =
        "Division not performed. Both values are required in inputs. Try again";
    }
  
    if (divider < 0) {
      result.innerText =
        "Division not performed. Invalid number provided. Try again";
      throw new Error();
    }

    if (typeof divider !== Number || typeof dividend !== Number) {
      result.innerText =
        "Something critical went wrong. Please reload the page";
      throw new Error();
    }

    result.innerHTML = Math.round(dividend/divider);
  } catch (err) {
    console.error(err);
  }
});
