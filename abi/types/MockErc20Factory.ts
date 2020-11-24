/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockErc20 } from "./MockErc20";

export class MockErc20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<MockErc20> {
    return super.deploy(name, symbol, overrides || {}) as Promise<MockErc20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): MockErc20 {
    return super.attach(address) as MockErc20;
  }
  connect(signer: Signer): MockErc20Factory {
    return super.connect(signer) as MockErc20Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockErc20 {
    return new Contract(address, _abi, signerOrProvider) as MockErc20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200125638038062001256833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052505082518391508290620001b8906003906020850190620001e7565b508051620001ce906004906020840190620001e7565b50506005805460ff19166012179055506200028c915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022a57805160ff19168380011785556200025a565b828001600101855582156200025a579182015b828111156200025a5782518255916020019190600101906200023d565b50620002689291506200026c565b5090565b6200028991905b8082111562000268576000815560010162000273565b90565b610fba806200029c6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806340c10f191161008c57806395d89b411161006657806395d89b41146102ed578063a457c2d7146102f5578063a9059cbb1461032e578063dd62ed3e14610367576100df565b806340c10f191461026257806342966c681461029d57806370a08231146102ba576100df565b806323b872dd116100bd57806323b872dd146101c8578063313ce5671461020b5780633950935114610229576100df565b806306fdde03146100e4578063095ea7b31461016157806318160ddd146101ae575b600080fd5b6100ec6103a2565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019a6004803603604081101561017757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610456565b604080519115158252519081900360200190f35b6101b6610473565b60408051918252519081900360200190f35b61019a600480360360608110156101de57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610479565b610213610520565b6040805160ff9092168252519081900360200190f35b61019a6004803603604081101561023f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610529565b61029b6004803603604081101561027857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561058a565b005b61029b600480360360208110156102b357600080fd5b5035610598565b6101b6600480360360208110156102d057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105a5565b6100ec6105cd565b61019a6004803603604081101561030b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561064c565b61019a6004803603604081101561034457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106c7565b6101b66004803603604081101561037d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166106db565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561044c5780601f106104215761010080835404028352916020019161044c565b820191906000526020600020905b81548152906001019060200180831161042f57829003601f168201915b5050505050905090565b600061046a610463610713565b8484610717565b50600192915050565b60025490565b600061048684848461085e565b61051684610492610713565b61051185604051806060016040528060288152602001610ece6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600160205260408120906104dd610713565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610a3a16565b610717565b5060019392505050565b60055460ff1690565b600061046a610536610713565b846105118560016000610547610713565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610aeb16565b6105948282610b66565b5050565b6105a23382610ca3565b50565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561044c5780601f106104215761010080835404028352916020019161044c565b600061046a610659610713565b8461051185604051806060016040528060258152602001610f606025913960016000610683610713565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a3a16565b600061046a6106d4610713565b848461085e565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610783576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610f3c6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107ef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610e866022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166108ca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610f176025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610936576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610e416023913960400191505060405180910390fd5b610941838383610df9565b61099181604051806060016040528060268152602001610ea86026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff610a3a16565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526020819052604080822093909355908416815220546109d3908263ffffffff610aeb16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610ae3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aa8578181015183820152602001610a90565b50505050905090810190601f168015610ad55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610b5f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610be857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610bf460008383610df9565b600254610c07908263ffffffff610aeb16565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610c40908263ffffffff610aeb16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ef66021913960400191505060405180910390fd5b610d1b82600083610df9565b610d6b81604051806060016040528060228152602001610e646022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260208190526040902054919063ffffffff610a3a16565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600254610da4908263ffffffff610dfe16565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b505050565b6000610b5f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a3a56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122084426c210d5c4b16495efd7b8e33580334fcccdfe2465df24b3be34cdeb24cfd64736f6c634300060a0033";
