import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Services.css";
import "../sections/About.css"; // добавляем стили About для заголовка
import LanguageIcon from "@mui/icons-material/Language";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TerminalIcon from "@mui/icons-material/Terminal";
import CheckIcon from "@mui/icons-material/Check";

export default function Services() {
  return (
    <section id="services">
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        className="about-title"
      >
        <span className="about-title-white">Наши</span>
        <span className="about-title-green">Услуги</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className="services-subtitle"
        gutterBottom
      >
        Комплексные цифровые решения, адаптированные под потребности вашего бизнеса
      </Typography>
      <div className="services-row">
        <Card className="service-card" variant="outlined">
          <CardContent className="service-card-content">
            <div className="service-icon-circle">
              <LanguageIcon sx={{ fontSize: 38, color: "#000" }} />
            </div>
            <Typography
              variant="h6"
              className="service-title"
              align="center"
              gutterBottom
            >
              Разработка веб-сайтов
            </Typography>
            <Typography variant="body2" className="service-desc" align="center" gutterBottom>
              Создаем потрясающие, отзывчивые веб-сайты, которые привлекают вашу аудиторию и увеличивают конверсии.
            </Typography>
            <ul>
              <li><CheckIcon className="service-check-icon" />Адаптивный дизайн</li>
              <li><CheckIcon className="service-check-icon" />SEO оптимизация</li>
              <li><CheckIcon className="service-check-icon" />Оптимизация производительности</li>
              <li><CheckIcon className="service-check-icon" />Пользовательские CMS решения</li>
            </ul>
            <div className="service-btn-wrapper">
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
                  }
                }}
              >
                Узнать больше
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="service-card" variant="outlined">
          <CardContent className="service-card-content">
            <div className="service-icon-circle">
              <SmartToyIcon sx={{ fontSize: 38, color: "#000" }} />
            </div>
            <Typography
              variant="h6"
              className="service-title"
              align="center"
              gutterBottom
            >
              Создание чат-ботов
            </Typography>
            <Typography variant="body2" className="service-desc" align="center" gutterBottom>
              Интеллектуальные чат-боты, которые улучшают клиентский опыт и автоматизируют бизнес-процессы.
            </Typography>
            <ul>
              <li><CheckIcon className="service-check-icon" />ИИ-диалоги</li>
              <li><CheckIcon className="service-check-icon" />Мультиплатформенная интеграция</li>
              <li><CheckIcon className="service-check-icon" />Поддержка клиентов 24/7</li>
              <li><CheckIcon className="service-check-icon" />Аналитика и инсайты</li>
            </ul>
            <div className="service-btn-wrapper">
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
                  }
                }}
              >
                Узнать больше
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="service-card" variant="outlined">
          <CardContent className="service-card-content">
            <div className="service-icon-circle">
              <TerminalIcon sx={{ fontSize: 38, color: "#000" }} />
            </div>
            <Typography
              variant="h6"
              className="service-title"
              align="center"
              gutterBottom
            >
              Разработка пользовательских скриптов
            </Typography>
            <Typography variant="body2" className="service-desc" align="center" gutterBottom>
              Индивидуальные скрипты автоматизации и инструменты для оптимизации ваших бизнес-операций.
            </Typography>
            <ul>
              <li><CheckIcon className="service-check-icon" />Автоматизация процессов</li>
              <li><CheckIcon className="service-check-icon" />API интеграции</li>
              <li><CheckIcon className="service-check-icon" />Обработка данных</li>
              <li><CheckIcon className="service-check-icon" />Пользовательские инструменты</li>
            </ul>
            <div className="service-btn-wrapper">
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
                  }
                }}
              >
                Узнать больше
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
