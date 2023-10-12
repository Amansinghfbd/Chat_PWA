import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import Cellular from "../assets/Cellular Connection.svg";
import Battery from "../assets/Battery.svg";
import Wifi from "../assets/Wifi.svg";

const Status = () => {
  const timeC = new Date();
  const timeS = timeC.getHours() + ":" + timeC.getMinutes();
  const [time, setTime] = useState(timeS);

  setInterval(() => {
    const timeC = new Date();
    const timeS = timeC.getHours() + ":" + timeC.getMinutes();
    setTime(timeS);
  }, 1000);

  return (
    <Flex w={"100%"}>
      <Flex
        justifyContent={"space-between"}
        w={"375px"}
        p={"14px 26px 12px 27px"}
        align-items={"center"}
      >
        <Flex
          fontFamily={"SF Pro Text"}
          fontSize={"17px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"22px"}
          letterSpacing={"-0.408px"}
          w={"54px"}
          color={"#000"}
          h={"21px"}
          justifyContent={"center"}
          alignItems={"center"}
          flexShrink={"0"}
        >
          {time.slice(0)}
        </Flex>

        <Flex h={"13px"} w={"78.261px"} justify={"space-between"} mt={"5px"}>
          <Image
            src={Cellular}
            display={"flex"}
            flexShrink={"0"}
            w={"19.2px"}
            h={"12px"}
          />
          <Image
            src={Wifi}
            display={"flex"}
            flexShrink={"0"}
            w={"17px"}
            h={"12px"}
          />
          <Image
            src={Battery}
            display={"flex"}
            flexShrink={"0"}
            w={"27px"}
            h={"12px"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Status;
