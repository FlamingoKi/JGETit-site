import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <Typography variant="h4" align="center" gutterBottom>
        Услуги
      </Typography>
      <Typography variant="subtitle1" align="center" className="services-subtitle" gutterBottom>
        Комплексные цифровые решения, адаптированные под потребности вашего бизнеса
      </Typography>
      <div className="services-row">
        <Card className="service-card" variant="outlined">
          <CardContent>
            <Typography variant="h6" className="service-title" gutterBottom>
              Разработка веб-сайтов
            </Typography>
            <Typography variant="body2" className="service-desc" gutterBottom>
              Создаем потрясающие, отзывчивые веб-сайты, которые привлекают вашу аудиторию и увеличивают конверсии.
            </Typography>
            <ul>
              <li>Адаптивный дизайн</li>
              <li>SEO оптимизация</li>
              <li>Оптимизация производительности</li>
              <li>Пользовательские CMS решения</li>
            </ul>
            <Button
              variant="outlined"
              color="success"
              className="service-btn"
              sx={{
                borderRadius: "32px !important",
                background: "#000",
                color: "#D6FE51",
                fontWeight: 600,
                px: 3,
                py: 1.2,
                border: "2px solid #D6FE51 !important",
                boxShadow: "none",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                "& .MuiButton-startIcon, & .MuiButton-endIcon": {
                  borderRadius: "32px"
                },
                "&:hover": {
                  background: "#D6FE51",
                  color: "#000",
                  borderColor: "#D6FE51"
                  // убрано boxShadow для этой кнопки
                }
              }}
            >
              Узнать больше
            </Button>
          </CardContent>
        </Card>
        <Card className="service-card" variant="outlined">
          <CardContent>
            <Typography variant="h6" className="service-title" gutterBottom>
              Создание чат-ботов
            </Typography>
            <Typography variant="body2" className="service-desc" gutterBottom>
              Интеллектуальные чат-боты, которые улучшают клиентский опыт и автоматизируют бизнес-процессы.
            </Typography>
            <ul>
              <li>ИИ-диалоги</li>
              <li>Мультиплатформенная интеграция</li>
              <li>Поддержка клиентов 24/7</li>
              <li>Аналитика и инсайты</li>
            </ul>
            <Button
              variant="outlined"
              color="success"
              className="service-btn"
              sx={{
                borderRadius: "32px !important",
                background: "#000",
                color: "#D6FE51",
                fontWeight: 600,
                px: 3,
                py: 1.2,
                border: "2px solid #D6FE51 !important",
                boxShadow: "none",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                "& .MuiButton-startIcon, & .MuiButton-endIcon": {
                  borderRadius: "32px"
                },
                "&:hover": {
                  background: "#D6FE51",
                  color: "#000",
                  borderColor: "#D6FE51"
                  // убрано boxShadow для этой кнопки
                }
              }}
            >
              Узнать больше
            </Button>
          </CardContent>
        </Card>
        <Card className="service-card" variant="outlined">
          <CardContent>
            <Typography variant="h6" className="service-title" gutterBottom>
              Разработка пользовательских скриптов
            </Typography>
            <Typography variant="body2" className="service-desc" gutterBottom>
              Индивидуальные скрипты автоматизации и инструменты для оптимизации ваших бизнес-операций.
            </Typography>
            <ul>
              <li>Автоматизация процессов</li>
              <li>API интеграции</li>
              <li>Обработка данных</li>
              <li>Пользовательские инструменты</li>
            </ul>
            <Button
              variant="outlined"
              color="success"
              className="service-btn"
              sx={{
                borderRadius: "32px !important",
                background: "#000",
                color: "#D6FE51",
                fontWeight: 600,
                px: 3,
                py: 1.2,
                border: "2px solid #D6FE51 !important",
                boxShadow: "none",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                "& .MuiButton-startIcon, & .MuiButton-endIcon": {
                  borderRadius: "32px"
                },
                "&:hover": {
                  background: "#D6FE51",
                  color: "#000",
                  borderColor: "#D6FE51"
                  // убрано boxShadow для этой кнопки
                }
              }}
            >
              Узнать больше
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
