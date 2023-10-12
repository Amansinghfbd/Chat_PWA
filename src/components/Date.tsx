import { Box, Flex, Text } from "@chakra-ui/react";

const Date = () => {
  return (
    <Flex mr={"16px"} ml={"16px"} mt={"100px"} mb={"40px"}>
      <Flex alignItems={"center"} justifyContent={"center"} ml={"15px"}>
        <Box w={"116px"} bgColor={"#B7B7B7"} h={"1px"}></Box>
      </Flex>
      <Text display={"flex"} flexDirection={"column"}>
        <Text
          display={"flex"}
          color={"#B7B7B7"}
          fontFamily={"Mulish"}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"normal"}
        >
          12 JAN, 2023
        </Text>
      </Text>
      <Flex alignItems={"center"}>
        <Box w={"116px"} bgColor={"#B7B7B7"} h={"1px"}></Box>
      </Flex>
    </Flex>
  );
};

export default Date;
