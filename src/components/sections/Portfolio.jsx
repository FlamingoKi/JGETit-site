import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        className="about-title"
      >
        <span className="about-title-white">Наше</span>
        <span className="about-title-green">Портфолио</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className="portfolio-subtitle"
        gutterBottom
      >
        Демонстрируем наши лучшие работы и успешные проекты
      </Typography>
      <div className="portfolio-row">
        <Card className="portfolio-card service-card" variant="outlined">
          <CardContent className="service-card-content">
            <Typography variant="h6" className="service-title" align="center" gutterBottom>
              Работа 1
            </Typography>
            <Typography variant="body2" className="service-desc" align="center">
              Краткое описание проекта или услуги, реализованной для клиента.
            </Typography>
          </CardContent>
        </Card>
        <Card className="portfolio-card service-card" variant="outlined">
          <CardContent className="service-card-content">
            <Typography variant="h6" className="service-title" align="center" gutterBottom>
              Работа 2
            </Typography>
            <Typography variant="body2" className="service-desc" align="center">
              Краткое описание проекта или услуги, реализованной для клиента.
            </Typography>
          </CardContent>
        </Card>
        <Card className="portfolio-card service-card" variant="outlined">
          <CardContent className="service-card-content">
            <Typography variant="h6" className="service-title" align="center" gutterBottom>
              Работа 3
            </Typography>
            <Typography variant="body2" className="service-desc" align="center">
              Краткое описание проекта или услуги, реализованной для клиента.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
