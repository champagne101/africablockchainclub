export default function CodeSnippet() {
    return (
      <div className="w-full overflow-hidden rounded-lg bg-neutral-900 font-mono text-md text-white shadow-md">
        <div className="flex items-center border-b border-neutral-700 bg-neutral-800 px-4 py-2">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-neutral-400">smart-contract.sol</div>
        </div>
        <pre className="p-4">
          <code className="text-s leading-relaxed">
            <span className="text-purple-400">pragma</span> <span className="text-blue-400">solidity</span> ^0.8.0;
            {"\n\n"}
            <span className="text-purple-400">contract</span>{" "}
            <span className="text-green-400">AfricaBlockchainToken</span> {"{"}
            {"\n"}
            {"    "}
            <span className="text-purple-400">mapping</span>(<span className="text-blue-400">address</span> {"=>"}{" "}
            <span className="text-blue-400">uint256</span>) <span className="text-yellow-400">public</span> balances;
            {"\n"}
            {"    "}
            <span className="text-blue-400">uint256</span> <span className="text-yellow-400">public</span> totalSupply =
            1000000 * 10**18;
            {"\n"}
            {"    "}
            <span className="text-blue-400">string</span> <span className="text-yellow-400">public</span> name ={" "}
            <span className="text-green-400">"Africa Blockchain Token"</span>;{"\n"}
            {"    "}
            <span className="text-blue-400">string</span> <span className="text-yellow-400">public</span> symbol ={" "}
            <span className="text-green-400">"ABC"</span>;{"\n"}
            {"    "}
            <span className="text-blue-400">uint8</span> <span className="text-yellow-400">public</span> decimals = 18;
            {"\n\n"}
            {"    "}
            <span className="text-purple-400">event</span> <span className="text-green-400">Transfer</span>(
            <span className="text-blue-400">address</span> indexed from, <span className="text-blue-400">address</span>{" "}
            indexed to, <span className="text-blue-400">uint256</span> value);
            {"\n\n"}
            {"    "}
            <span className="text-purple-400">constructor</span>() {"{"}
            {"\n"}
            {"        "}balances[msg.sender] = totalSupply;
            {"\n"}
            {"    "}
            {"}"}
            {"\n\n"}
            {"    "}
            <span className="text-purple-400">function</span> <span className="text-yellow-400">transfer</span>(
            <span className="text-blue-400">address</span> to, <span className="text-blue-400">uint256</span> value){" "}
            <span className="text-yellow-400">public</span> <span className="text-purple-400">returns</span> (
            <span className="text-blue-400">bool</span>) {"{"}
            {"\n"}
            {"        "}
            <span className="text-purple-400">require</span>(balances[msg.sender] {">="} value,{" "}
            <span className="text-green-400">"Insufficient balance"</span>);
            {"\n"}
            {"        "}balances[msg.sender] -= value;
            {"\n"}
            {"        "}balances[to] += value;
            {"\n"}
            {"        "}
            <span className="text-purple-400">emit</span> Transfer(msg.sender, to, value);
            {"\n"}
            {"        "}
            <span className="text-purple-400">return</span> <span className="text-blue-400">true</span>;{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    )
  }
  