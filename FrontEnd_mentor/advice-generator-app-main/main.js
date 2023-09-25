const adviceId = document.querySelector('.advice__id');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('.btn');
const url = 'https://api.adviceslip.com/advice';

async function generate() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerHTML = 'advice #' + data.slip.id;
      adviceText.innerHTML = `"${data.slip.advice}"`;
    });
}

generate();
btn.addEventListener('click', () => {
  generate();
});
