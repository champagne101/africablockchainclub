"use client";

import { useConversation } from "@elevenlabs/react";
import { useState, useCallback } from "react";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";

interface VoiceAgentProps {
  agentId: string;
}

export default function VoiceAgent({ agentId }: VoiceAgentProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log("Connected to ElevenLabs agent"),
    onDisconnect: () => console.log("Disconnected from agent"),
    onError: (error) => console.error("Conversation error:", error),
  });

  const startConversation = useCallback(async () => {
    if (!agentId) {
      console.error("No agent ID provided");
      return;
    }
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId, connectionType: "webrtc" });
    } catch (error) {
      console.error("Failed to start:", error);
    } finally {
      setIsConnecting(false);
    }
  }, [conversation, agentId]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === "connected";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={isConnected ? stopConversation : startConversation}
        disabled={isConnecting}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isConnected
            ? "bg-red-500 hover:bg-red-600"
            : "bg-amber-500 hover:bg-amber-600"
        } ${conversation.isSpeaking ? "animate-pulse" : ""}`}
      >
        {isConnecting ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : isConnected ? (
          <PhoneOff className="w-6 h-6 text-white" />
        ) : (
          <Phone className="w-6 h-6 text-white" />
        )}
      </button>
      
      {isConnected && (
        <div className="absolute -top-2 -right-2">
          {conversation.isSpeaking ? (
            <Mic className="w-5 h-5 text-green-400 animate-pulse" />
          ) : (
            <MicOff className="w-5 h-5 text-gray-400" />
          )}
        </div>
      )}
    </div>
  );
}



