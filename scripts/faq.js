document.addEventListener("DOMContentLoaded", function () {
  const faqList = document.querySelector(".faq-list");

  function createFaqItem(faq) {
    const item = document.createElement("div");
    item.classList.add("faq-item");

    const questionBtn = document.createElement("button");
    questionBtn.classList.add("faq-question");
    questionBtn.innerHTML = `
      ${faq.title}
      <span class="faq-toggle">+</span>
    `;

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("faq-answer");
    answerDiv.innerHTML = `<p>${faq.text}</p>`;

    item.appendChild(questionBtn);
    item.appendChild(answerDiv);
    return item;
  }

  // Загрузка данных
  fetch("https://sotarentalbot.ru/api/faq/all")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      faqList.innerHTML = "";
      if (Array.isArray(data.faqs)) {
        data.faqs.forEach((faq) => {
          faqList.appendChild(createFaqItem(faq));
        });
      }

      // === Инициализация аккордеона ===
      const faqItems = document.querySelectorAll(".faq-item");
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
          const isActive = item.classList.contains("active");

          // Сначала закрываем ВСЕ
          faqItems.forEach((el) => el.classList.remove("active"));

          // Если был неактивен — открываем его
          if (!isActive) {
            item.classList.add("active");
          }
          // Если был активен — остаётся закрытым (ничего не добавляем)
        });
      });
    })
    .catch((err) => {
      console.error("Ошибка загрузки FAQ:", err);
      faqList.innerHTML = `<p>Не удалось загрузить вопросы.</p>`;
    });
});