import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Reviews.css";

export default function Reviews() {
  return (
    <section id="reviews">
      <Typography variant="h4" align="center" gutterBottom>
        Что говорят наши клиенты
      </Typography>
      <Typography variant="subtitle1" align="center" className="reviews-subtitle" gutterBottom>
        Реальные отзывы от довольных клиентов
      </Typography>
      <Card className="reviews-box" variant="outlined">
        <CardContent>
          <Typography variant="body1" align="center">
            Здесь будет форма с отзывами
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
}
