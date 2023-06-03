import React, { useEffect } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { usePrepareContractWrite,useContractWrite,useWaitForTransaction,parseEther } from 'wagmi'
import { utils } from 'ethers';
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`
import ABI from './abi.json';
const NFTAddress="0x76c3c96e8add781d812c989bbc49b11558cf27d7";

const TypeWriterText = () => {
  const [tokenId, setTokenId] = React.useState("1");
  // const recoveredAddress = React.useRef<string>();
  // const { data, error, isLoading, signMessage, variables } = useSignMessage()
  // useEffect(() => {
  //     const contractAddress = NFTAddress; // 合约地址
  //     const contractABI = ABI; // 合约ABI
  
  //     const contract = new ethers.Contract(contractAddress, contractABI, library.getSigner(account));
  //     console.log(contract,"ccccc")
  //     // 在这里可以使用contract对象进行合约写入操作
  // }, []);
  
  const { config } = usePrepareContractWrite({
    address: NFTAddress,
    abi: ABI,
    functionName: "mintPandas",
    // chainId: optimism.id,
    args: [parseInt(1)],
    value:utils.parseEther('0.005'),
    onSuccess(data) {
      console.log('Success', data)
    },
    onError(error) {
      console.log('Error', error)
    },
  });
  const { data, write } = useContractWrite(config);
  console.log(data,"CCCCCC")

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

 
  const handleMint = () => {
    console.log(config,"cccc")
    if (config && config.data) {
      write?.();
    }
  };

  return (
    <>
      <Title>
        Discover the Panda Encryption World
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">NFTs.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">Collectible Items.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">Chip Pandas!</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Mint is coming soon.</SubTitle>
      <ButtonContainer>
        {/* <button onClick={handleMint} disabled={!config || isLoading}>
          {isLoading ? "Minting..." : "Mint"}
        </button> */}
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;