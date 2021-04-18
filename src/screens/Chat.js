import React, { useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Fire from "./Fire";

function ChatScreen() {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState([]);
  const user = {
    _id: Fire.shared.uid,
    name: "Joey",
    avatar: "https://avatars0.githubusercontent.com/u/25695219?v=4",
  };

  useEffect(() => {
    Fire.shared.on((messages) =>
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      )
    );
    return () => {
      Fire.shared.off();
    };
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={Fire.shared.send}
      user={user}
      bottomOffset={insets.bottom}
    />
  );
}

export default ChatScreen;
