const submitBtn = document.querySelector('.submit');
const rateagainBtn = document.querySelector('.rate-again');
const thankyouState = document.querySelector('.thankyou-state');
const ratingState = document.querySelector('.rating-state');
const ratings = document.querySelectorAll('.rating');
const ratingSpan = document.querySelector('.selected-rating');

// submitBtn.addEventListener('click', () => {
//   if (thankyouState.style.display === 'none') {
//     thankyouState.style.display = 'block';
//     ratingState.style.display = 'none';
//   } else if (ratingSpan.innerHTML === '') {
//     alert('please select a rating');
//   } else {
//     thankyouState.style.display = 'none';
//   }
// });

// rateagainBtn.addEventListener('click', () => {
//   if (ratingState.style.display === 'none') {
//     ratingState.style.display = 'block';
//     thankyouState.style.display = 'none';
//   } else {
//     ratingState.style.display = 'none';
//   }
// });

submitBtn.addEventListener('click', () => {
  if (ratingSpan.innerHTML === '') {
    alert('Please choose a rating !');
  } else {
    thankyouState.classList.remove('hidden');
    ratingState.style.display = 'none';
  }
});

rateagainBtn.addEventListener('click', () => {
  thankyouState.classList.add('hidden');
  ratingState.style.display = 'block';
  ratingSpan.innerHTML = '';
});

ratings.forEach((rate) => {
  rate.addEventListener('click', () => {
    ratingSpan.innerHTML = rate.id;
    console.log(rate.id);
  });
});
