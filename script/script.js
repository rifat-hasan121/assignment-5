const allBtn = callElementById("shop-btn");
console.log(allBtn)

let newDate = new Date();
let values = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").textContent = newDate.toLocaleDateString('en-US', values);
