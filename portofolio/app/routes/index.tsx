import {
  Avatar,
  createStyles,
  Overlay,
  Container,
  Image,
  Title,
  Text,
  Space,
} from "@mantine/core";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import me from '../assets/me.jpg'

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  infoContainer: {
    display: "flex",
    flexDirection: "row-reverse",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: 10,
    width: 600,

    [theme.fn.smallerThan("md")]: {
      fontSize: 40,
      lineHeight: 1.2,
      width: 400,
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
      width: '100%',
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 32,
      lineHeight: 1.3,
    },
  },

  iconContainer: {
    display: "flex", 
    flexDirection: "row",
  },

  titleContainer: {
    alignSelf: "flex-end",

    [theme.fn.smallerThan("sm")]: {
      alignSelf: 'flex-start'
    },
  }
}));

export default function Index() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <div className={classes.infoContainer}>
          <Image src={me} width={300} height={300} radius="xl"/>
          <div className={classes.titleContainer}>
            <Title className={classes.title}>
              <Text
                inherit
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                WIRAYUDA
              </Text>
            </Title>
            <Title className={classes.title}>
              <Text
                inherit
                variant="gradient"
                gradient={{ from: "grape", to: "violet" }}
              >
                SENJAYA
              </Text>
            </Title>
            <Space h="md" />
            <div className={classes.iconContainer}>
              <a href="https://github.com/wirayuda24">
                <Avatar color="violet" size="lg" radius="xl" mr={10}>
                  <BrandGithub size={32} />
                </Avatar>
              </a>

              <a href="https://www.linkedin.com/in/wirayuda-senjaya-505139234/">
                <Avatar color="violet" size="lg" radius="xl">
                  <BrandLinkedin size={32} />
                </Avatar>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
