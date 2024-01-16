"use client";

import { Box, Flex, Input, Text } from "@artsy/palette";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const scrollMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollMeRef.current) {
      scrollMeRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <Flex flexDirection="column" width={1} maxWidth={500} m="auto" pb={100}>
      {messages.map((m) => (
        <Text key={m.id} py={1} style={{ whiteSpace: "pre-wrap" }}>
          <Text as="span" fontWeight={900}>
            {m.role === "user" ? "You" : "Artsy"}:{` `}
          </Text>

          {m.content}
        </Text>
      ))}

      <div ref={scrollMeRef}>
        {/* invisible element that will be scrolled into view as `messages` gets updated */}
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          position={"fixed"}
          maxWidth={500}
          bottom={0}
          mb={4}
          style={{boxShadow: "0px 0px 10px 10px #ffffff"}}
          value={input}
          placeholder="Chat with Artsy"
          onChange={handleInputChange}
        />
      </form>
    </Flex>
  );
}
