const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  
  if(divider < 0){
    result.innerText = 'Division not performed. Invalid number provided. Try again'; 
    console.error(error.stack);}

 try{
    if (dividend =='' || divider == ''){
        result.innerText = 'Division not performed. Both values are required in inputs. Try again';} 
        else{result.innerText = Math.round(dividend / divider);}
        }
        catch(err){
            document.querySelector('body').innerHTML = 'Something critical went wrong. Please reload the page';
}
    
});
