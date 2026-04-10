async function loadNews() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=se&apiKey=DIN_API_KEY`
  );
  const data = await res.json();

  const container = document.getElementById("news");
  container.innerHTML = data.articles
    .slice(0, 5)
    .map(a => `<p><a href="${a.url}" target="_blank">${a.title}</a></p>`)
    .join("");
}

loadNews();
