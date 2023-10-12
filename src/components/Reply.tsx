import PaperClip from "../assets/paperclip.svg";
import Send from "../assets/send-03.svg";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import Video from "../assets/video.svg";
import Doc from "../assets/Document.png";
import Camera from "../assets/camera-02.svg";

const Reply = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <Flex
      mt={"55px"}
      bottom={"15px"}
      w={"375px"}
      h={"114px"}
      direction={"column"}
      position={"relative"}
    >
      <Flex h={"42px"} p={"8px 16px"}>
        <Flex p={"11px 12px"}>
          <Flex
            justifyContent={"flex-start"}
            w={"247px"}
            justifyItems={"center"}
            mr={"16px"}
          >
            <Text
              color={"#141E0D"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"600"}
              lineHeight={"normal"}
              fontFamily={"Mulish"}
            >
              |
            </Text>
            <Text
              color={"#B7B7B7"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
              fontFamily={"Mulish"}
            >
              Reply to @Rohit Yadav
            </Text>
          </Flex>
          <Image
            src={PaperClip}
            h={"20px"}
            w={"20px"}
            mr={"16px"}
            onMouseOver={() => {
              setClick(true);
            }}
            onMouseOut={() => {
              setClick(false);
            }}
          />
          <Flex
            w={"124px"}
            h={"44px"}
            position={"absolute"}
            right={"10px"}
            bottom={"120px"}
            opacity={click ? "1" : "0"}
            _hover={{ cursor: "pointer" }}
          >
            <Flex bgColor={"#008000"} p={"12px 16px"} borderRadius={"999px"}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"16px"}
              >
                <Image src={Camera} h={"20px"} w={"20px"} />
                <Image src={Video} h={"20px"} w={"20px"} />
                <Image src={Doc} h={"20px"} w={"20px"} />
              </Flex>
            </Flex>
          </Flex>
          <Image src={Send} h={"20px"} w={"20px"} />
        </Flex>
      </Flex>
      <Flex
        h={"56px"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        mb={"8px"}
      >
        <Flex
          w={"134px"}
          h={"5px"}
          background={"black"}
          flexShrink={0}
          borderRadius={"100px"}
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default Reply;
