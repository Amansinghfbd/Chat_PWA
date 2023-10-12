import React, { useState, useEffect, useRef } from "react";
import { fetchChats } from "./apiServices";
import Loader from "./components/Loader";
import style from "./chatScreen.module.css";
import { Flex, Image, Text } from "@chakra-ui/react";
import verified from "./assets/check-verified-02.svg";

interface ChatMessage {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

const ChatScreen: React.FC = () => {
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadChats = async () => {
      setLoading(true);
      try {
        const response = await fetchChats(page);
        setChats((prevChats) => [...prevChats, ...response.data.chats]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setLoading(false);
      }
    };

    if (chatContainerRef.current) {
      // Add scroll event listener to load older chats
      chatContainerRef.current.addEventListener("scroll", () => {
        if (
          chatContainerRef.current &&
          chatContainerRef.current.scrollTop === 0 &&
          !loading
        ) {
          loadChats();
        }
      });
    }

    loadChats();
  }, []);

  return (
    <div ref={chatContainerRef} className={style.wrapper}>
      {chats.map((chat) => {
        return (
          <Flex ml={"16px"} mr={"40px"} mb={"20px"}>
            <Flex
              flexShrink={"0"}
              mr={"8px"}
              position={"relative"}
              w={"26px"}
              h={"26px"}
            >
              <Image
                src={chat.sender.image}
                borderRadius={"12px"}
                w={"100%"}
                h={"100%"}
              />
              <Image
                src={verified}
                w={"7.636px"}
                h={"7.636px"}
                position={"absolute"}
                bottom={"10%"}
                right={"5%"}
              />
            </Flex>
            <Flex
              bgColor={"#fff"}
              alignSelf={"stretch"}
              borderRadius={"0px 12px 12px 12px"}
              boxShadow={"base"}
            >
              <Text
                color={"#606060"}
                fontFamily={"Mulish"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"normal"}
                p={"8px"}
              >
                {chat.message}
              </Text>
            </Flex>
          </Flex>
        );
      })}
      {loading && <Loader />}
    </div>
  );
};

export default ChatScreen;
