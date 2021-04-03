import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello World!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://avatars0.githubusercontent.com/u/25695219?v=4",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      bottomOffset={insets.bottom}
      user={{
        _id: 1,
      }}
    />
  );
};

export default MessageScreen;
