import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Import react-transition-group
import DrAlex from "../../assets/man-dr.png";
import SurmeiDR from "../../assets/surmeiDR.png";
import IonitaDR from "../../assets/DrIonita.png";

const teamMembers = [
  { name: "Dr. Elena Surmei ", role: "Medic Specialist Estetică și Protetică", image: SurmeiDR },
  { name: "Dr. Sabina Cristina Ioniță", role: "Medic Specialist Endodonție", image: IonitaDR },
  { name: "Dr. Alexandru Polinic", role: "Chirurgie Dento Alveolară", image: DrAlex },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const isTablet = useMediaQuery("(max-width:899px)");
  const isMobile = useMediaQuery("(max-width:599px)");

  // Determinăm câți membri se afișează
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  // Calculăm paginile
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // Generăm grupuri de membri, păstrând întotdeauna același număr de membri pe pagină
  const visibleMembers = [];
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * itemsPerPage;
    const membersForPage = teamMembers.slice(startIndex, startIndex + itemsPerPage);

    // Dacă nu avem destui membri pentru ultima pagină, completăm cu primii membri
    while (membersForPage.length < itemsPerPage) {
      membersForPage.push(teamMembers[membersForPage.length]);
    }

    visibleMembers.push(membersForPage);
  }

  // Obținem membrii care vor fi vizibili în funcție de indexul curent
  const membersToDisplay = visibleMembers[Math.floor(index / itemsPerPage)];

  // Funcție pentru navigare prin puncte
  const handleDotClick = (idx) => {
    setIndex(idx * itemsPerPage);
  };

  return (
    <Box textAlign="center" sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Typography variant="h5" gutterBottom style={{ marginBottom: "50px" }}>
        Echipa Noastră
      </Typography>
      <TransitionGroup
        component={Box}
        display="grid"
        gap={2}
        sx={{
          gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`, // 1, 2 sau 3 coloane
          justifyContent: "center",
        }}
      >
      {membersToDisplay.map((member, idx) => (
        <CSSTransition key={idx} timeout={500} classNames="fade">
          <Box textAlign="center">
            <Box
              component="img"
              src={member.image}
              sx={{
                width: isMobile ? 200 : 400, // Dacă ecranul e sub 400px, imaginea va avea 200px
                height: isMobile ? 200 : 400, // La fel și pentru înălțime
                objectFit: "cover",
                mx: "auto", // Centrează imaginea
              }}
            />
            <Typography variant="h6" sx={{ fontSize: isMobile ? "1rem" : "1.25rem" }}>
              {member.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>
              {member.role}
            </Typography>
          </Box>
        </CSSTransition>
      ))}
    </TransitionGroup>

      {/* Punctele apar doar sub 900px */}
      {isTablet && (
        <Box display="flex" justifyContent="center" mt={2}>
          {[...Array(totalPages)].map((_, idx) => (
            <Box
              key={idx}
              onClick={() => handleDotClick(idx)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: idx === Math.floor(index / itemsPerPage) ? "primary.main" : "grey.400",
                mx: 0.5,
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
