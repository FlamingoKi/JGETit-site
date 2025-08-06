import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import "./Portfolio.css";
import "../sections/About.css"; // для about-title классов

const portfolioData = [
  {
    title: "Работа 1",
    desc: "Краткое описание проекта или услуги, которую вы реализовали для клиента.",
    img: "https://via.placeholder.com/180",
  },
  {
    title: "Работа 2",
    desc: "Краткое описание проекта или услуги, которую вы реализовали для клиента.",
    img: "https://via.placeholder.com/180",
  },
  {
    title: "Работа 3",
    desc: "Краткое описание проекта или услуги, которую вы реализовали для клиента.",
    img: "https://via.placeholder.com/180",
  },
];

// Добавьте компонент Transition для анимации появления
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // Сбросить фокус с карточки после закрытия диалога
  const lastActiveRef = React.useRef(null);

  const handleOpen = (item, e) => {
    setSelected(item);
    setOpen(true);
    // Сохраняем элемент, который был активен
    if (e && e.currentTarget) {
      lastActiveRef.current = e.currentTarget;
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelected(null);
      // Сбросить фокус с карточки
      if (lastActiveRef.current) {
        lastActiveRef.current.blur();
        lastActiveRef.current = null;
      }
    }, 300);
  };

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
        {portfolioData.map((item) => (
          <Card
            className="portfolio-card"
            variant="outlined"
            key={item.title}
            onClick={(e) => handleOpen(item, e)}
            style={{ cursor: "pointer" }}
            tabIndex={0}
          >
            <CardContent className="portfolio-card-content">
              <Typography
                variant="h6"
                className="portfolio-card-title"
                align="center"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                className="portfolio-card-desc"
                align="center"
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        TransitionComponent={Transition} // добавляем анимацию появления
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: "#181f13",
            color: "#fff",
            minWidth: { xs: "99vw", sm: "1200px" },
            maxWidth: "1600px",
            width: { xs: "99vw", sm: "1200px" },
            height: { xs: "95vh", sm: "800px" },
            maxHeight: "95vh",
            position: "relative",
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 2, sm: 8 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: 8,
              minWidth: { xs: 240, sm: 900 },
            }}
          >
            {/* Фото слева */}
            <Box
              sx={{
                flex: "0 0 auto",
                width: { xs: 420, sm: 600 }, // увеличено
                height: { xs: 320, sm: 600 }, // увеличено
                borderRadius: 3,
                overflow: "hidden",
                background: "#222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 4, sm: 0 },
              }}
            >
              <img
                src={selected?.img}
                alt={selected?.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 20,
                  background: "#222",
                }}
              />
            </Box>
            {/* Информация справа */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="h3" sx={{ color: "#D6FE51", mb: 3 }}>
                {selected?.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: "1.45rem" }}
              >
                {selected?.desc}
              </Typography>
            </Box>
            {/* Кнопка закрытия */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 24,
                right: 24,
                color: "#D6FE51",
              }}
              aria-label="Закрыть"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </section>
  );
}
