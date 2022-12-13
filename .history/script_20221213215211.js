'use strict';
const faqHeader = document.querySelectorAll('.faq_header');
const faqContent = document.querySelectorAll('.faq_content');


faqHeader.forEach((faq, idx) => {
    faq.addEventListener('click', function () {
        faqContent.forEach((fq, index) => {
            if(idx )
        })

        // if (faq.parentElement.children) {
        //     faq.classList.toggle('active');
        // }



        const allSiblings = Array.from(faq.parentElement.children).filter(
					(siblings) => siblings.id !== card.id
				);

    });
})


