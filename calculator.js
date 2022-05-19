window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setupIntialValues();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function setupIntialValues() {
  //const values = { amount: 100000, years: 10, rate: 6 };
  // const values = {};
  // let amount = document.getElementById("loan-amount").value;
  // values.amount = +amount;
  // let years = document.getElementById("loan-years").value;
  // values.years = +years;
  // let rate = document.getElementById("loan-rate").value;
  // values.rate = +rate;
  // console.log(values); //the long way
  const values = {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value
  }
  update(values);
}

function update(values) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = calculateMonthlyPayment(values);
}

function calculateMonthlyPayment(values) {
  const amount = values.amount;
  const rate = values.rate;
  const years = values.years;
  let monthlyRate = rate / 100 / 12;
  let n = years * 12;
  return ((monthlyRate * amount) / (1 - Math.pow(1 + monthlyRate, -n))).toFixed(
    2
  );
}
