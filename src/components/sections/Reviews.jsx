import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "./Reviews.css";
import "../sections/About.css"; // для about-title классов

const reviews = [
  {
    text: "Очень доволен работой команды! Проект был реализован быстро и качественно, все пожелания учтены. Буду обращаться еще!",
    author: "Иван Иванов",
    meta: 'ООО "Пример", Директор по развитию',
  },
  {
    text: "Профессиональный подход и отличная коммуникация. Результат превзошел ожидания. Спасибо за сотрудничество!",
    author: "Мария Смирнова",
    meta: 'ЗАО "Технологии", Руководитель проектов',
  },
  {
    text: "Быстро, качественно, современно. Рекомендую всем, кто ценит результат и надежность.",
    author: "Алексей Кузнецов",
    meta: 'ИП "Кузнецов", Владелец бизнеса',
  },
  {
    text: "Команда проявила гибкость и внимание к деталям. Все задачи были выполнены в срок и на высоком уровне.",
    author: "Светлана Орлова",
    meta: 'ООО "Реклама+", Маркетолог',
  },
  {
    text: "Сервис на высоте! Получили не просто сайт, а полноценный инструмент для развития бизнеса.",
    author: "Дмитрий Петров",
    meta: 'ООО "СтройИнвест", Генеральный директор',
  },
  {
    text: "Спасибо за индивидуальный подход и креативные решения. Будем рекомендовать коллегам и друзьям.",
    author: "Елена Громова",
    meta: 'Фрилансер, UX/UI дизайнер',
  },
  {
    text: "Очень понравилось, что команда всегда на связи и готова помочь даже после завершения проекта.",
    author: "Виктор Сидоров",
    meta: 'ООО "Логистика", Руководитель отдела IT',
  },
  {
    text: "Работа выполнена на отлично! Все пожелания были учтены, результат превзошел ожидания.",
    author: "Анна Кузьмина",
    meta: 'ИП "Кузьмина", Владелец интернет-магазина',
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let intervalId;
    let timeoutId;

    function startCycle() {
      timeoutId = setTimeout(() => {
        setFade(false);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % reviews.length);
          setFade(true);
        }, 500);
      }, 4500);
    }

    setFade(true);
    startCycle();

    intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!fade) {
      const t = setTimeout(() => setFade(true), 500);
      return () => clearTimeout(t);
    }
  }, [index, fade]);

  const review = reviews[index];

  return (
    <section id="reviews">
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        className="about-title"
      >
        <span className="about-title-white">Отзывы</span>
        <span className="about-title-green">клиентов</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className="reviews-subtitle"
        gutterBottom
      >
        Реальные отзывы от довольных клиентов
      </Typography>
      <div className={`reviews-form-box${fade ? " reviews-fade-in" : " reviews-fade-out"}`}>
        <Typography className="reviews-text" gutterBottom>
          {review.text}
        </Typography>
        <Typography className="reviews-author" gutterBottom>
          {review.author}
        </Typography>
        <Typography className="reviews-meta" gutterBottom>
          {review.meta}
        </Typography>
      </div>
    </section>
  );
}
