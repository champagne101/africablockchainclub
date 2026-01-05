import SlideIn from "./animations/slide-in";
import CodeSnippet from "./code-snippet";
import JoinCommunityButton from "./join-community-button";
import BlockchainModel from "./ui/blockchain-modal";
import BlockchainTerms from "./ui/blockchain-terms";

export default function BuildOnBlockchain(){
    return (
        <section className="bg-black/30 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="mb-6 font-mono text-5xl font-bold">Build on Blockchain</h2>
                        <p className="mb-4 text-white">
                            Our community develops smart contracts and decentralized applications to solve real-world problems in
                            Africa.
                        </p>
                        <p className="mb-6 text-white">
                            Join our weekly coding sessions and learn how to write secure, efficient blockchain code with
                            experienced mentors.
                        </p>
                        <JoinCommunityButton/>
                        <SlideIn direction="left">
                            <div className="flex py-20">
                                <div className="relative h-64 w-full max-w-lg bg-black/10 rounded-lg border border-amber-500/10 p-2">
                                    <BlockchainModel />
                                </div>
                            </div>
                        </SlideIn>
                    </div>

                    {/* CodeSnippet - Hidden on mobile, shown on desktop */}
                    <div className="hidden md:block">
                        <CodeSnippet />
                    </div>
                </div>
            </div>
        </section>
    )
}