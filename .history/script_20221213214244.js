'use strict';
const faqHeader = document.querySelectorAll('.faq_header');


faqHeader.forEach((faq, index) => {
    faq.addEventListener('click', function () {
        faq.classList.toggle('active');

        if (index === faq) {
            faq.classList.toggle('active');
        }

    });
})
