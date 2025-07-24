import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Home.css";
import "./Home.animations.css";
import "./Home.nofocus.css";

const fullText = [
  "Мы создаем сайты, которые продают.",
  "Чат-боты, которые удивляют.",
  "Скрипты, которые экономят время."
];

export default function Home() {
  const [typedLines, setTypedLines] = useState(["", "", ""]);
  const [typingDone, setTypingDone] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Эффект печати текста (фикс: печатаем по строкам, не допускаем undefined)
  useEffect(() => {
    let line = 0, char = 0;
    let typingTimeout;
    function typeNext() {
      if (line < fullText.length) {
        if (char < fullText[line].length) {
          setTypedLines(prev => {
            const updated = [...prev];
            updated[line] = fullText[line].slice(0, char + 1);
            return updated;
          });
          char++;
          // Сделать задержку между символами постоянной (например, 28мс)
          typingTimeout = setTimeout(typeNext, 28);
        } else {
          line++;
          char = 0;
          // Можно уменьшить паузу между строками, например, до 150мс
          typingTimeout = setTimeout(typeNext, 150);
        }
      } else {
        setTypingDone(true);
      }
    }
    typeNext();
    return () => clearTimeout(typingTimeout);
  }, []);

  // Показать кнопки после печати
  useEffect(() => {
    if (typingDone) {
      const t = setTimeout(() => setShowButtons(true), 350);
      return () => clearTimeout(t);
    }
  }, [typingDone]);

  // Показать форму после кнопок
  useEffect(() => {
    if (showButtons) {
      const t = setTimeout(() => setShowForm(true), 350);
      return () => clearTimeout(t);
    }
  }, [showButtons]);

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
          <span>
            {typedLines[0]}
            {typedLines[0].length < fullText[0].length && <span className="typing-cursor" />}
          </span>
          <br />
          <span>
            {typedLines[1]}
            {typedLines[0].length === fullText[0].length && typedLines[1].length < fullText[1].length && <span className="typing-cursor" />}
          </span>
          <br />
          <span>
            {typedLines[2]}
            {typedLines[1].length === fullText[1].length && typedLines[2].length < fullText[2].length && <span className="typing-cursor" />}
          </span>
        </Typography>
        <div className={`home-btns home-animated-btns${showButtons ? " home-btns-in" : ""}`}>
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
                boxShadow: "0 6px 18px 0 #D6FE5180"
              }
            }}
            tabIndex={showButtons ? 0 : -1}
            style={{ pointerEvents: showButtons ? "auto" : "none" }}
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
              }
            }}
            tabIndex={showButtons ? 0 : -1}
            style={{ pointerEvents: showButtons ? "auto" : "none" }}
          >
            Воплотить идею в код
          </Button>
        </div>
      </div>
      <div className={`home-video${showForm ? " home-form-in" : ""}`}>
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
