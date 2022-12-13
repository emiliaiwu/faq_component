'use strict';
const faqHeader = document.querySelectorAll('.faq_content');


faqContent.forEach((faq) => {
    faq.addEventListener('click', function () {
        faq.classList.toggle('active');

    });
})
