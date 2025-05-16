  async function fetchStudentData() {
  const rollNo = document.getElementById("rollInput").value.trim().toLowerCase();
  const resultBox = document.getElementById("resultBox");

  if (!rollNo) {
    resultBox.innerHTML = "Please enter a Roll Number.";
    return;
  }

  resultBox.innerHTML = "Loading...";

  const sheetURL = 'https://docs.google.com/spreadsheets/d/1eSuO8Un8sCAWwsj4Q1ZTlbfcu27eG_fwWMYGIY4UQ7k/gviz/tq?tqx=out:json';

  try {
    const res = await fetch(sheetURL);
    const text = await res.text();
    const jsonData = JSON.parse(text.substr(47).slice(0, -2));
    const rows = jsonData.table.rows;

    let found = false;
    rows.forEach(row => {
      const data = row.c.map(cell => (cell ? String(cell.v).trim() : ''));
      if (data[0].toLowerCase() === rollNo) {
        found = true;
        resultBox.innerHTML = `
          <h3>${data[1]}</h3>
          <p>Roll: <b>${data[0]}</b></p>
          <p>Exam: <b>${data[2]}</b></p>
          <p>4th Sem Fee Amount: <b>₹${data[3]}</b></p>
          <p>Total Fees Amount: <b>₹${data[5]}</b></p>
          <p>Status: <b style="color: ${data[4] === 'Paid' ? 'green' : 'red'}">${data[4]}</b></p>
          ${data[4] !== 'Paid' ? `<button onclick="openPaymentPage('${data[0]}', '${data[1]}', '${data[3]}')">Proceed to Pay</button>` : ''}
        `;
      }
    });

    if (!found) {
      resultBox.innerHTML = "Roll number not found.";
    }
  } catch (err) {
    console.error(err);
    resultBox.innerHTML = "Failed to fetch data. Please try again later.";
  }
}

function openPaymentPage(roll, name, amount) {
  const paymentURL = `payment.html?roll=${encodeURIComponent(roll)}&name=${encodeURIComponent(name)}&amount=${encodeURIComponent(amount)}`;
  window.open(paymentURL, '_blank');
}
