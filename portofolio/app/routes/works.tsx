import {
  Container,
  Card,
  createStyles,
  Overlay,
  Title,
  Grid,
} from "@mantine/core";
import { worksData } from "~/components/worksData";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    height: "calc(100vh - 60px)",
    justifyContent: "center",
    padding: "15px 25px",
  },

  card: {
    width: 600,
    height: 300,
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("lg")]: {
      width: "calc(50vw - 30px)",
    },

    [theme.fn.smallerThan("md")]: {
      width: "calc(100vw - 30px)",
    },
  },

  cardTitle: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    color: "white",
  },
}));

export default function Works() {
  const { classes } = useStyles();
  const items = worksData.map((i) => (
    <Grid.Col md={6} key={i.title}>
      <a href={i.link}>
        <Card
          radius="md"
          style={{ backgroundImage: `url(${i.img})` }}
          className={classes.card}
        >
          <Overlay
            gradient={`linear-gradient(0deg, #000 20%, #312f2f 50%, #212529 100%)`}
            opacity={0.5}
            zIndex={0}
          />
          <Title className={classes.cardTitle}>{i.title}</Title>
        </Card>
      </a>
    </Grid.Col>
  ))

  return (
    <div className={classes.container}>
      <Container size="xl" px={0}>
        <Grid>
          {items}
        </Grid>
      </Container>
    </div>
  );
}
