import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Back from "../assets/Back.svg";
import edit from "../assets/edit-05.svg";
import img1 from "../assets/Rectangle 12.png";
import img2 from "../assets/Rectangle 13.png";
import img3 from "../assets/Rectangle 14.png";
import img4 from "../assets/Rectangle 15.png";
import dots from "../assets/dots-vertical.svg";

export const Middle = () => {
  return (
    <Flex
      h={"130px"}
      w={"375px"}
      justifyContent={"center"}
      display={"inline-flex"}
      direction={"column"}
      alignItems={"center"}
    >
      <Flex mb={"16px"} width={"90%"} alignItems={"center"}>
        <Box
          transform={"scale(0.8)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={Back} />
        </Box>
        <Box
          w={"80%"}
          ml={"8px"}
          fontFamily={"mullish"}
          fontSize={"24px"}
          fontStyle={"normal"}
          lineHeight={"normal"}
          fontWeight={"700"}
          color={"#141E0D"}
        >
          Trip 1
        </Box>
        <Box>
          <Image src={edit} />
        </Box>
      </Flex>
      <Flex alignItems={"center"} h={"62px"} width={"90%"}>
        <Box>
          <Flex h={"52px"} w={"52px"} direction={"column"} mr={"16px"}>
            <Flex w={"100%"} h={"50%"}>
              <Flex w={"50%"} h={"100%"}>
                <Image
                  borderTopLeftRadius={"100%"}
                  h={"100%"}
                  w={"100%"}
                  src={img1}
                />
              </Flex>
              <Flex w={"50%"} h={"100%"}>
                <Image
                  borderTopRightRadius={"100%"}
                  h={"100%"}
                  w={"100%"}
                  src={img2}
                />
              </Flex>
            </Flex>
            <Flex w={"100%"} h={"50%"}>
              <Flex w={"50%"} h={"100%"}>
                <Image
                  borderBottomLeftRadius={"100%"}
                  h={"100%"}
                  w={"100%"}
                  src={img3}
                />
              </Flex>
              <Flex w={"50%"} h={"100%"}>
                <Image
                  borderBottomRightRadius={"100%"}
                  h={"100%"}
                  w={"100%"}
                  src={img4}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Flex direction={"column"} w={"215px"} mr={"12px"}>
          <Text display={"flex"} gap={1} alignItems={"center"}>
            <Text
              color={"#606060"}
              fontFamily={"mullish"}
              fontSize={"16px"}
              fontStyle={"normal"}
              lineHeight={"normal"}
              fontWeight={"500"}
            >
              From{" "}
            </Text>
            <Text
              color={"#141E0D"}
              fontFamily={"mullish"}
              fontSize={"18px"}
              fontStyle={"normal"}
              lineHeight={"normal"}
              fontWeight={"700"}
            >
              {" "}
              IGI Airport, T3
            </Text>
          </Text>
          <Text display={"flex"} gap={1} alignItems={"center"}>
            <Text
              color={"#606060"}
              fontFamily={"mullish"}
              fontSize={"16px"}
              fontStyle={"normal"}
              lineHeight={"normal"}
              fontWeight={"500"}
            >
              {" "}
              To
            </Text>
            <Text
              color={"#141E0D"}
              fontFamily={"mullish"}
              fontSize={"18px"}
              fontStyle={"normal"}
              lineHeight={"normal"}
              fontWeight={"700"}
            >
              {" "}
              Sector 28
            </Text>
          </Text>
        </Flex>

        <Flex>
          <Image
            src={dots}
            ml={"12px"}
            display={"flex"}
            w={"24px"}
            h={"24px"}
            flexShrink={"0"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
