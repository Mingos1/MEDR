import React from "react";
import {
  Button,
  Grid,
  Stack,
  GridItem,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";
// import axios from "axios";

const Home = () => {
  // const [state, setState] = useState("");

  // useEffect(() => {
  //   axios.get("/api/hello").then((res) => setState(res.data));
  // }, []);

  return (
    <>
      <Grid
        h="100vh"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap="6"
      >
        <GridItem />
        <GridItem colSpan={1} bg="tomato">
          <Flex h="100px" color="white" align="center" justify="center">
            <Heading size="4xl">Welcome to MEDR (HOME)</Heading>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} bg="white">
          <Center>
            <Stack
              spacing={4}
              direction="row"
              align="center"
              justifyContent="center"
            >
              <a href="http://localhost:3000/login">
                <Button colorScheme="pink">Login</Button>
              </a>
              <a href="http://localhost:3000/register">
                <Button colorScheme="pink">Register</Button>
              </a>
            </Stack>
          </Center>
        </GridItem>

        <GridItem />
      </Grid>
    </>
  );
};
export default Home;
