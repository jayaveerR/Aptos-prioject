import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AccountInfo";
import { TransferAPT } from "@/components/TransferAPT";
import { MessageBoard } from "@/components/MessageBoard";
import { TopBanner } from "@/components/TopBanner";

function App() {
  const { connected } = useWallet();

  return (
    <>
      <TopBanner />
      <Header />
     <h1>hello world</h1>
    </>
  );
}

export default App;
