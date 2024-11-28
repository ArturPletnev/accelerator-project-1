import { faqData } from './fag-data';

const initFaqTabs = () => {
  const ANSWER_INDEX = 1;
  const QUESTION_INDEX = 2;
  const faqListButtonNodes = document.querySelectorAll('.faq__button');
  const faqQuestionNodes = document.querySelectorAll('.fag-accordion__item span:not([class])');
  const faqAnswerNodes = document.querySelectorAll('.fag-accordion__item p');
  const updateFaqContent = (category) => {
    const faqContent = faqData[category] || [];
    faqQuestionNodes.forEach((question, index) => {
      const questionText = faqContent[index * QUESTION_INDEX] || '';
      question.textContent = questionText;
    });
    faqAnswerNodes.forEach((answer, index) => {
      const answerText = faqContent[index * QUESTION_INDEX + ANSWER_INDEX] || '';
      answer.textContent = answerText;
    });
  };
  faqListButtonNodes.forEach((button) => {
    button.addEventListener('click', () => {
      faqListButtonNodes.forEach((btn) => btn.classList.remove('faq__button--active'));
      button.classList.add('faq__button--active');
      updateFaqContent(button.textContent);
    });
  });
};

export { initFaqTabs };
