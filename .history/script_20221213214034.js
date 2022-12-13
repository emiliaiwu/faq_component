'use strict';
const faqHeade = document.querySelectorAll('.faq_content');


faqContent.forEach((faq) => {
    faq.addEventListener('click', function () {
        faq.classList.toggle('active');

    });
})
