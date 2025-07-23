import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Typography variant="h4" align="center" gutterBottom>
        Портфолио
      </Typography>
      <Typography variant="subtitle1" align="center" className="portfolio-subtitle" gutterBottom>
        Демонстрируем наши лучшие работы и успешные проекты
      </Typography>
      <div className="portfolio-row">
        <Card className="portfolio-card" variant="outlined">
          <CardContent>
            <Typography variant="body1" align="center">
              Работа 1
            </Typography>
          </CardContent>
        </Card>
        <Card className="portfolio-card" variant="outlined">
          <CardContent>
            <Typography variant="body1" align="center">
              Работа 2
            </Typography>
          </CardContent>
        </Card>
        <Card className="portfolio-card" variant="outlined">
          <CardContent>
            <Typography variant="body1" align="center">
              Работа 3
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
