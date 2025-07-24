import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="home-left">
        <Typography variant="h4" className="home-title" gutterBottom>
          Мы создаем сайты,<br />которые продают.<br />Чат-боты, которые<br />удивляют.<br />Скрипты, которые<br />экономят время.
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
              transition: "background 0.2s, color 0.2s",
              "&:hover": {
                background: "#D6FE51",
                color: "#000",
                borderColor: "#D6FE51"
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
              borderRadius: "32px !important", // принудительно округляем
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
              }
            }}
          >
            Воплотить идею в код
          </Button>
        </div>
      </div>
      <div className="home-video">
        <div className="home-video-box">
          Здесь будет видео
        </div>
      </div>
    </section>
  );
}
