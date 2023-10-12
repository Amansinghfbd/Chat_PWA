import "./App.css";
import ChatScreen from "./ChatScreen";
import Status from "./components/Status";
import Date from "./components/Date";
import { Flex } from "@chakra-ui/react";
import { Middle } from "./components/Middle";
import Reply from "./components/Reply";

function App() {
  return (
    <Flex
      h={"812px"}
      w={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"black"}
      ml={"0"}
    >
      <Flex
        w={"375px"}
        h={"800px"}
        background={"#FAF9F4"}
        textColor={"black"}
        direction={"column"}
        borderRadius={"32px"}
      >
        <Status />
        <Middle />
        <Date />
        <ChatScreen />
        <Reply />
      </Flex>
    </Flex>
  );
}

export default App;
