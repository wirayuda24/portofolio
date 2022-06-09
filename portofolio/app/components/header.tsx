import { NavLink } from "@remix-run/react";
import {
  ActionIcon,
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Text,
  Transition,
  useMantineColorScheme,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Sun, MoonStars } from "tabler-icons-react";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color: theme.colors.violet[6],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

export function HeaderResponsive({ children }: { children: React.ReactNode }) {
  const links = [
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/works",
      label: "Works",
    },
  ];
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <NavLink to={link.link} key={link.label} className={classes.link}
    >
      <Text>{link.label}</Text>
    </NavLink>
  ));

  return (
    <>
      <Header
        height={HEADER_HEIGHT}
        className={classes.root}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        })}
      >
        <Container className={classes.header}>
          <NavLink to="/" className={classes.link}>
            <Text>Wirayuda Senjaya</Text>
          </NavLink>
          <Group spacing={5} className={classes.links}>
            {items}
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
            >
              {colorScheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <MoonStars size={18} />
              )}
            </ActionIcon>
          </Group>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>

      <>{children}</>
    </>
  );
}
