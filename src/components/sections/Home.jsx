import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="home-left">
        <Typography
          variant="h1"
          className="home-title"
          gutterBottom
          sx={{
            fontSize: { xs: "2.3rem", sm: "3.2rem", md: "4.2rem", lg: "4.8rem" },
            fontWeight: 900,
            lineHeight: 1.13,
            color: "#D6FE51",
            textAlign: "left",
            mb: 4,
            letterSpacing: "-0.03em",
            maxWidth: "600px"
          }}
        >
          Мы создаем сайты, которые продают.<br />
          Чат-боты, которые удивляют.<br />
          Скрипты, которые экономят время.
        </Typography>
        <div className="home-btns">
          <Button
            variant="contained"
            color="success"
            className="home-btn"
            sx={{
              borderRadius: "32px",
              background: "#D6FE51",
              color: "#000",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              border: "2px solid #D6FE51",
              boxShadow: "none",
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
              "&:hover": {
                background: "#D6FE51",
                color: "#000",
                borderColor: "#D6FE51",
                boxShadow: "0 6px 18px 0 #D6FE5180" // менее яркое свечение
              }
            }}
          >
            Начать
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className="home-btn-alt"
            sx={{
              borderRadius: "32px !important",
              background: "#000",
              color: "#D6FE51",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              border: "2px solid #D6FE51",
              boxShadow: "none",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              "& .MuiButton-startIcon, & .MuiButton-endIcon": {
                borderRadius: "32px"
              },
              "&:hover": {
                background: "#D6FE51",
                color: "#000",
                borderColor: "#D6FE51"
                // без свечения
              }
            }}
          >
            Воплотить идею в код
          </Button>
        </div>
      </div>
      <div className="home-video">
        <div className="home-video-box">
          <div className="home-welcome-text">
            <strong>Добро пожаловать!</strong>
            <br /><br />
            Мы создаем цифровые решения,<br />
            которые работают на вас
            <br /><br />
            <span style={{ fontWeight: 700 }}>Ваша идея – наш код</span>
          </div>
        </div>
      </div>
    </section>
  );
}
