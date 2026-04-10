async function loadQuote() {
  const res = await fetch("https://zenquotes.io/api/random");
  const data = await res.json();
  document.getElementById("quote").innerText = data[0].q + " — " + data[0].a;
}

loadQuote();
