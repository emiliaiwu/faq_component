'use strict';
const faqHeader = document.querySelectorAll('.faq_header');
const faqContent = document.querySelector('.faq_content');
const content = document.querySelector('.content');



faqHeader.forEach((faq) => {
    faq.addEventListener('click', function () {
        faqContent.classList.add('active');
        content.classList.remove('hidden');
        faq.

    });
})