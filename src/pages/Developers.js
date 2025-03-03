import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {Instagram, Twitter, LinkedIn, GitHub, WhatsApp} from "@mui/icons-material";
import Footer from "../components/Footer";
import { styled, keyframes } from "@mui/material/styles";

// Animations and Styled Components
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px #4fc3dc, 0 0 25px #58BDD7; }
  50% { box-shadow: 0 0 25px #4fc3dc, 0 0 50px #58BDD7; }
  100% { box-shadow: 0 0 5px #4fc3dc, 0 0 25px #58BDD7; }
`;

const rotateBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const DeveloperCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: theme.spacing(1.5),
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  animation: `${float} 6s ease-in-out infinite`,
  width: "100%",
  maxWidth: "280px",
  margin: "0 auto",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    zIndex: 0,
    animation: `${rotateBackground} 3s ease infinite`,
    backgroundSize: "200% 200%",
  },
}));

const ProfileImage = styled("img")({
  width: "130px",
  height: "130px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #58BDD7",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  zIndex: 1,
  animation: `${glowPulse} 2s infinite`,
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  background: "rgba(255, 255, 255, 0.1)",
  margin: theme.spacing(0.5),
  transition: "all 0.3s ease-in-out",
  position: "relative",
  zIndex: 1,
  "&:hover": {
    background: "#58BDD7",
    transform: "translateY(-3px)",
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "rgba(255, 255, 255, 0.05)",
    },
  },
  typography: {
    fontFamily: '"SilkScreen", sans-serif',
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
      backgroundColor: "#58BDD7",
      backgroundClip: "text",
      textFillColor: "transparent",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
});

// Data for team members

const facultyCoordinators = [
  {
    name: "Dr. Harshit Kulkarni",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQGYMbQHJM1uGw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1594964924912?e=1736380800&v=beta&t=y3jIGN5gX6ZbX9kXkPuP9qJjGhJVOVnLkFuCFgbRuO8",
  },
  {
    name: "Dr. Kiran Tangod  .",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHrZrPOR_mNbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1603261681807?e=1736380800&v=beta&t=OFVwtw_gBgGaNfAmQFdQLQg96HSjqY24SL9qspXmMHI",
  },
];

const generalSecretaries = [
  {
    name: "Nameet Karadi",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHCryhQO_EIqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722070027825?e=1736380800&v=beta&t=Zx_Lph6q0w0zJB-F9AMU0nbbOMDQooVovQlOTpOCdss",
    phone: "+91 8217386446",
    socials: {
      instagram:
        "https://www.instagram.com/nameet_sk/?next=%2Fsargam.fest%2F&hl=en",
      linkedin: "https://www.linkedin.com/in/nameet-karadi-228284210/",
    },
  },
  {
    name: "Raman Belgundi",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEE70c25MKLzQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730827565140?e=2147483647&v=beta&t=5JETdrNjil5yrFzIsLv7N02InDYIrdnpOa3fCFxQASo",
    phone: "+91 9741424914",
    socials: {
      instagram:
        "https://www.instagram.com/raman_2933_/profilecard/?igsh=MWJkcHZkbWN5aW8xNQ==",
      linkedin:
        "https://www.linkedin.com/in/raman-belgundi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "SUSHEEL R K",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGKH88DY9D1TQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730878021870?e=1736985600&v=beta&t=qc6JYQFlOe7Nhd1KaY2OfYzRF_LDKCWuCZFQSE_xIOQ",
    phone: "+91 7899332593",
    socials: {
      instagram: "https://www.instagram.com/_susheel_kerakalamatti_",
      linkedin: "https://www.linkedin.com/in/susheel-kerakalamatti-129b42267/",
    },
  },

  {
    name: "Mrunal Pai",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGlZEr9Vl-mIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730863962013?e=1736380800&v=beta&t=-SZN6tknTwdlrTLLTKyt4qGOFuHVJ0dKKDJHOh-_EEk",
    phone: "+91 9731056557",
    socials: {
      instagram: "https://www.instagram.com/__.mrunallllllllll",
      linkedin: "https://www.linkedin.com/in/mrunal-pai-81a9ba2a5/",
    },
  },
  {
    name: "Shivani V",
    image:
      " https://media.licdn.com/dms/image/v2/D5603AQFW4JlCCMD6ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730858885548?e=1736380800&v=beta&t=UB-nuoEfdvkIoNNJl026lAcXrlGeBdvXFNkgMzN6FTQ",
    phone: "+91 9731741220",
    socials: {
      instagram: "https://www.instagram.com/__kv_shivani",
      linkedin:
        " https://www.linkedin.com/in/shivani-viraktamath-444a24298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Ramya Bailkeri",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEkT5HTIud3cw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716350122947?e=1736380800&v=beta&t=HU2ShTU3YwV5eEQsN-0mVvtv52w0xawOGzhB4wn0rrA",
    phone: "+91 6362675207",
    socials: {
      instagram: "https://www.instagram.com/ramyabailkeri",
      linkedin:
        "https://www.linkedin.com/in/ramya-bailkeri-251866281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

// Reusable component for rendering team member cards
const TeamSection = ({ title, members, socialOptions }) => (
  <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
    <Typography
      variant="h2"
      align="center"
      sx={{
        mb: 8,
        textTransform: "uppercase",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px",
          height: "4px",
          background: "#58BDD7",
        },
      }}
    >
      {title}
    </Typography>
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {members.map((member, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeveloperCard
            sx={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <ProfileImage src={member.image} alt={member.name} />
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  mb: 1,
                  color: "white",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {member.name}
              </Typography>
              <Typography
                fontSize="1.2rem"
                sx={{
                  mt: 0,
                  mb: 1,
                  color: "#FCEE0A",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {member.phone}
              </Typography>

              <Box>
                {socialOptions.instagram && member.socials?.instagram && (
                  <SocialButton href={member.socials.instagram} target="_blank">
                    <Instagram />
                  </SocialButton>
                )}
                {socialOptions.linkedin && member.socials?.linkedin && (
                  <SocialButton href={member.socials.linkedin} target="_blank">
                    <LinkedIn />
                  </SocialButton>
                )}
              </Box>
            </Box>
          </DeveloperCard>
        </Grid>
      ))}
    </Grid>

    {/* Render additional cards below the first 4 */}
    {/* {members.length > 4 && (
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: 4,
          px: { xs: 2, sm: 3, md: 4 },
          flexWrap: "wrap",
        }}
      >
        {members.slice(4).map((member, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            key={index + 4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DeveloperCard
              
              sx={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <ProfileImage src={member.image} alt={member.name} />
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  mb: 1,
                  color: "white",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {member.name}
              </Typography>
              <Typography
                fontSize="1.2rem"
                sx={{
                  mt: 0,
                  mb: 1,
                  color: "#FCEE0A",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {member.phone}
              </Typography>

              <Box>
                {socialOptions.instagram && member.socials?.instagram && (
                  <SocialButton href={member.socials.instagram} target="_blank">
                    <Instagram />
                  </SocialButton>
                )}
                {socialOptions.linkedin && member.socials?.linkedin && (
                  <SocialButton href={member.socials.linkedin} target="_blank">
                    <LinkedIn />
                  </SocialButton>
                )}
              </Box>
            </Box>
            </DeveloperCard>
          </Grid>
        ))}
      </Grid>
    )} */}
  </Container>
);

const developers = [
  {
    name: "Avinash Pauskar",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGnSeIGhsbB2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730264201701?e=1735776000&v=beta&t=wZ2xIZUy_5K7HaHeDi-6WJKVzR8LKLBzHhaXvv1wjSA",
    phone: "+91 9008500585",
    socials: {
      instagram: "https://www.instagram.com/avinashh.5/",
      twitter: "https://wa.me/+919008500585",
      linkedin: "https://linkedin.com/in/avinash-pauskar",
      github: "https://github.com/avinash-p05",
    },
  },

  {
    name: "Ganesh Kugaji",
    phone: "+91 7204917202",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFzgmLfwH1jvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704341115201?e=1735776000&v=beta&t=3e0A4ya0x7F1VJjF062gTw9mp6G-PVtFxHp2yTENanY",
    socials: {
      instagram: "https://www.instagram.com/kugajiganesh/",
      twitter: "https://wa.me/+917204917202",
      linkedin: "https://www.linkedin.com/in/ganesh-kugaji05/",
      github: "https://github.com/Ganes5h/",
    },
  },
  {
    name: "Niraj Vernekar",
    phone: "+91 8217787117",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEnER56cE93eA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720375471682?e=1735776000&v=beta&t=S653YANriMHJB_5Ugf02_yXHukScT029Lsy6LzgR13s",
    socials: {
      instagram: "https://www.instagram.com/nirajvernekar02/",
      twitter: "https://wa.me/+918217787117",
      linkedin: "https://www.linkedin.com/in/niraj-vernekar-691875196/",
      github: "https://github.com/nirajvernekar02",
    },
  },
  {
    name: "Manoj Patil",
    phone: "+91 6363678375",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEGBSYapxkyTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715485207486?e=1735776000&v=beta&t=OweShl-Got9OmfvNZaDGBlfQh1Ewe5s3KU9GX79qDpQ",
    socials: {
      instagram: "https://www.instagram.com/mpaantoijl/",
      twitter: "https://wa.me/+916363678375",
      linkedin: "https://www.linkedin.com/in/mpaantoijl/",
      github: "https://github.com/9147",
    },
  },
];

const graphics = [
  {
    name: "Ganesh Margale",
    phone: "+91 9483120427",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGJHnDBtPG-Wg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690536679219?e=1736380800&v=beta&t=1zYrWgQW8jaWPYDnTRRuTvDm1_Q-quhzhqxP2CRQ7Bg",
    socials: {
      instagram: "https://www.instagram.com/ganesh_026/",
      twitter: "https://x.com/ganesh_026",
      linkedin: "https://www.linkedin.com/in/ganeshmargale026/",
      github: "https://github.com/GaneshMargale",
    },
  },
  {
    name: "Basavaraj KS",
    phone: "+91 9481220379",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGMGm4DaUKDJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730876411308?e=1736380800&v=beta&t=MglR6j69EZP3Mx7gH-K4i6JvHwqjTOfItXzX63bKMkU",
    socials: {
      instagram:
        "https://www.instagram.com/b4itsdaed/profilecard/?igsh=MXg5aWcyNDBkN3Vxaw==",
      linkedin:
        "https://www.linkedin.com/in/basavaraj-k-shidharaddi-83a13a2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Vinayak Awati",
    phone: "+916360629029",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGK2ZrVC2GT3w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729355248970?e=1736380800&v=beta&t=goiBK3aaT8dJRpEsi0kp-a4gNrNt7AazYmV2aDeBaMc",
    socials: {
      instagram:
        "https://www.instagram.com/vinayakawati_/profilecard/?igsh=eXJ5YnY0NWNodW5n",
      twitter: "https://x.com/vinayak_awati?s=09",
      linkedin: "https://www.linkedin.com/in/vinayak-awati-97b1b825b",
      github: "https://github.com/vinuawat",
    },
  },
];
const DevelopersSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#121211",
          minHeight: "100vh",
          py: 10,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
            top: 0,
            left: 0,
          },
        }}
      >
        {/* Animated Background Dots */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: "10px",
                height: "10px",
                background: "#FCEE0A",
                borderRadius: "50%",
                animation: `${float} ${Math.random() * 8 + 4}s linear infinite`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3,
              }}
            />
          ))}
        </Box>

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              textTransform: "uppercase",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "350px",
                height: "4px",
                background: "#58BDD7",
              },
            }}
          >
            Technical Team
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{
              px: { xs: 2, sm: 3, md: 4 },
              flexWrap: { xs: "wrap", lg: "nowrap" },
            }}
          >
            {developers.map((dev, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DeveloperCard
                  sx={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <ProfileImage src={dev.image} alt={dev.name} />
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 3,
                        mb: 1,
                        color: "white",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {dev.name}
                    </Typography>
                    <Typography
                      fontSize="1.2rem"
                      sx={{
                        mt: 0,
                        mb: 1,
                        color: "#FCEE0A",
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      {dev.phone}
                    </Typography>

                    <Box>
                      <SocialButton href={dev.socials.twitter} target="_blank">
                      <WhatsApp />
                    </SocialButton>
                      <SocialButton
                        href={dev.socials.instagram}
                        target="_blank"
                      >
                        <Instagram />
                      </SocialButton>

                      <SocialButton href={dev.socials.linkedin} target="_blank">
                        <LinkedIn />
                      </SocialButton>
                      <SocialButton href={dev.socials.github} target="_blank">
                        <GitHub />
                      </SocialButton>
                    </Box>
                  </Box>
                </DeveloperCard>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginTop={5}
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          {graphics.map((dev, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DeveloperCard
                sx={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <ProfileImage src={dev.image} alt={dev.name} />
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "white",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {dev.name}
                  </Typography>
                  <Typography
                    fontSize="1.2rem"
                    sx={{
                      mt: 0,
                      mb: 1,
                      color: "#FCEE0A",
                      fontWeight: 400,
                      textAlign: "center",
                    }}
                  >
                    {dev.phone}
                  </Typography>

                  <Box>
                    <SocialButton href={dev.socials.instagram} target="_blank">
                      <Instagram />
                    </SocialButton>
                    <SocialButton href={dev.socials.twitter} target="_blank">
                      <Twitter />
                    </SocialButton>
                    <SocialButton href={dev.socials.linkedin} target="_blank">
                      <LinkedIn />
                    </SocialButton>
                    <SocialButton href={dev.socials.github} target="_blank">
                      <GitHub />
                    </SocialButton>
                  </Box>
                </Box>
              </DeveloperCard>
            </Grid>
          ))}
        </Grid>
        <TeamSection
          title="Conveners"
          members={facultyCoordinators}
          socialOptions={{ instagram: false, linkedin: false }}
        />
        <TeamSection
          title="Secretaries"
          members={generalSecretaries}
          socialOptions={{ instagram: true, linkedin: true }}
        />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default DevelopersSection;
