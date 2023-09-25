document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('.main');
  const thank_you = document.querySelector('.thank_you');
  const submit = document.querySelector('.submit');
  const rate_again = document.querySelector('.rate_again');
  const rating_button = document.querySelectorAll('.rating_btn');
  const rate = document.querySelector('.rate');

  submit.addEventListener('click', () => {
    thank_you.classList.remove('hidden');
    main.classList.add('hidden');
  });

  rate_again.addEventListener('click', () => {
    main.classList.remove('hidden');
    thank_you.classList.add('hidden');
  });

  rating_button.forEach((rating) => {
    rating.addEventListener('click', () => {
      if()
      rate.innerHTML = rating.innerHTML;
    });
  });
});
