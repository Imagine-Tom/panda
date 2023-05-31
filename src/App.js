

import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'a8e001dce540477f783ef89dce0586d4'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import ScrollToTop from "./components/ScrollToTop";
import { etherUnits } from "viem";

function App() {
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Suspense fallback={<Loading />}> */}
          <Navigation />
          <Home />
          {/* <About /> */}
          <Roadmap />
          <Showcase />
          {/* <Team /> */}
          <Faq />
          <Footer />
          {/* <ScrollToTop scrollPosition={y}/> */}
          <ScrollToTop />{" "}
        {/* </Suspense> */}
      </ThemeProvider>
    </main>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
