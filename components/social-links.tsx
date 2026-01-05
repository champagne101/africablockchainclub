import Link from "next/link"
import { Twitter, Linkedin, MessageSquare, Send } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://twitter.com/africablockchain"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-amber-500"
        aria-label="Twitter"
      >
        <Twitter size={18} />
      </Link>
      <Link
        href="https://linkedin.com/company/africasblockchainclub"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-amber-500"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </Link>
      <Link
        href="https://t.me/africasblockchainclub"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-amber-500"
        aria-label="Telegram"
      >
        <Send size={18} />
      </Link>
      <Link
        href="https://discord.gg/africasblockchainclub"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-amber-500"
        aria-label="Discord"
      >
        <MessageSquare size={18} />
      </Link>
    </div>
  )
}
