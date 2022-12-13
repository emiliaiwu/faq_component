'use strict';
const faqHeader = document.querySelectorAll('.faq_header');
const faqContent = document.querySelectorAll('.faq_content');
const content = document.querySelectorA('.content');



faqHeader.forEach((faq) => {
    faq.addEventListener('click', function () {
        deselect();
        faqContent.forEach((fq) => {
            fq.classList.toggle('active');
        })
        
        content.forEach((ct) => {
            ct.classList.toggle('hidden');
        })
      
        faq.classList.toggle('open');

    });
})


const deselect = () => {
    faqHeader.forEach((faq) => {
        faqContent.classList.remove('active');
		content.classList.add('hidden');
		faq.classList.remove('open');
    })
}