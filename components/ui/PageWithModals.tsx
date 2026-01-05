"use client";

import { useEffect } from "react";

type CodeModalProps = {
  onClose: () => void;
};

export default function CodeModal({ onClose }: CodeModalProps) {
  // Close the modal when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="relative bg-gray-900 text-white p-8 rounded-xl max-w-xl w-full shadow-lg border border-yellow-500/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-200 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">Smart Contract Example</h2>
        <pre className="bg-black p-4 rounded-md overflow-x-auto text-sm border border-yellow-500/10">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, Blockchain!";

    function updateMessage(string memory newMessage) public {
        message = newMessage;
    }
}`}
        </pre>
      </div>
    </div>
  );
}
