import {
  createStyles,
  Image,
  Text,
  Title,
  Space,
  Container,
  Grid,
} from "@mantine/core";
import { motion } from "framer-motion";
import { stackData } from "~/components/stackData";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    height: "calc(100vh - 60px)",
    justifyContent: "center",
    padding: "15px 25px",
  },
}));

export default function About() {
  const { classes } = useStyles();

  const items = stackData.map((l) => (
    <Grid.Col span={6} md={4} key={l.title}>
      <motion.div
        whileHover={{
          rotate: [0, -5, 5, -5, 0],
        }}
        transition={{ duration: 0.3 }}
      >
        <Image src={l.img} height={160} />
        <Title order={3} align="center" mt={3}>
          {l.title}
        </Title>
      </motion.div>
    </Grid.Col>
  ));

  return (
    <div className={classes.container}>
      <div>
        <Title>About Me</Title>
        <Container size="sm" px={0}>
          <Text>
            Hello, my name is Wirayuda Senjaya. I'm a frontend developer who is eager to learn new techologies and frameworks.
          </Text>
        </Container>

        <Space h="lg" />

        <Title>Technologies Used</Title>
        <Space h="md" />
        <Container size="sm" px={0}>
          <Grid>{items}</Grid>
        </Container>
      </div>
    </div>
  );
}
