'use strict';
const faqContent = document.querySelectorAll('.faq_content');
const content = document.querySelector('.content');



faqContent.forEach((faq) => {
    faq.addEventListener('click', function () {
        // deselect();
        faq.classList.toggle('active');

    });
})


// const deselect = () => {
//     faqHeader.forEach((faq) => {
//         faqContent.classList.remove('active');
// 		content.classList.add('hidden');
// 		faq.classList.remove('open');
//     })
// }