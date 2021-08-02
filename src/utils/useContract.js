import abi from '../contract/abi.json';
import { Web3Instance } from './useWeb3';

export function ContractInstance() {
  // const contractAddress = '0x288d3A87a87C284Ed685E0490E5C4cC0883a060a';
  const contractAddress = '0xa7f2421fa3d3f31dbf34af7580a1e3d56bcd3030';

  const web3 = Web3Instance();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return contract;
}
