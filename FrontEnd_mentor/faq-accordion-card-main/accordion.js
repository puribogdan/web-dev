const accordionItems = document.querySelectorAll('.accordion__item');
const accordionAnswer = document.querySelectorAll('.accordion__answer');
const imageBox = document.querySelector('.image__box');
const h3Elements = document.querySelectorAll('h3');
const arrow = document.querySelectorAll('.image__arrow');

accordionItems.forEach((item, index) => {
  const accordionQuestion = item.querySelector('.accordion__question');
  const h3 = h3Elements[index]; // Get the corresponding h3 element
  const arrowImage = arrow[index];

  accordionQuestion.addEventListener('click', () => {
    accordionAnswer.forEach((answer, i) => {
      if (index !== i) {
        answer.classList.remove('active');
        h3Elements[i].classList.remove('bold__h3'); // Remove bold class from all h3 elements
        arrow[i].classList.remove('rotate__image__arrow');
      }
    });

    accordionAnswer[index].classList.toggle('active');

    const hasActiveAnswer = Array.from(accordionAnswer).some((answer) =>
      answer.classList.contains('active')
    );

    if (hasActiveAnswer) {
      imageBox.classList.add('move__left');
      h3.classList.add('bold__h3'); // Add bold class to the corresponding h3
      arrowImage.classList.add('rotate__image__arrow');
    } else {
      imageBox.classList.remove('move__left');
      h3.classList.remove('bold__h3'); // Remove bold class from the corresponding h3
      arrowImage.classList.remove('rotate__image__arrow');
    }
  });
});

// const accordionItems = document.querySelectorAll('.accordion__item');
// const accordionAnswer = document.querySelectorAll('.accordion__answer');
// const imageBox = document.querySelector('.image__box');
// const h3Elements = document.querySelectorAll('h3');

// accordionItems.forEach((item, index) => {
//   const accordionQuestion = item.querySelector('.accordion__question');
//   const h3 = h3Elements[index]; // Get the corresponding h3 element

//   accordionQuestion.addEventListener('click', () => {
//     accordionAnswer[index].classList.toggle('active');

//     const hasActiveAnswer = Array.from(accordionAnswer).some((answer) =>
//       answer.classList.contains('active')
//     );

//     if (hasActiveAnswer) {
//       imageBox.classList.add('move__left');
//       h3.classList.add('bold__h3'); // Add bold class to the corresponding h3
//     } else {
//       imageBox.classList.remove('move__left');
//       h3.classList.remove('bold__h3'); // Remove bold class from the corresponding h3
//     }

//     accordionAnswer.forEach((answer, i) => {
//       if (index !== i && answer.classList.contains('active')) {
//         answer.classList.remove('active');
//       }
//     });
//   });
// });

// const accordionItems = document.querySelectorAll('.accordion__item');
// const accordionAnswer2 = document.querySelectorAll('.accordion__answer');
// const imageBox = document.querySelector('.image__box');

// accordionItems.forEach((item) => {
//   const accordionQuestion = item.querySelector('.accordion__question');
//   const accordionAnswer = item.querySelector('.accordion__answer');

//   accordionQuestion.addEventListener('click', () => {
//     accordionAnswer.classList.toggle('active');

// const hasActiveAnswer = Array.from(accordionAnswer2).some((answer) =>
//   answer.classList.contains('active')
// );

// if (hasActiveAnswer) {
//   imageBox.classList.add('move__left');
// } else {
//   imageBox.classList.remove('move__left');
// }

//     accordionAnswer2.forEach((answer) => {
//       if (answer !== accordionAnswer && answer.classList.contains('active'))
//         answer.classList.remove('active');
//     });
//   });
// });
