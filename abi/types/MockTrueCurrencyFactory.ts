/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockTrueCurrency } from "./MockTrueCurrency";

export class MockTrueCurrencyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockTrueCurrency> {
    return super.deploy(overrides || {}) as Promise<MockTrueCurrency>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTrueCurrency {
    return super.attach(address) as MockTrueCurrency;
  }
  connect(signer: Signer): MockTrueCurrencyFactory {
    return super.connect(signer) as MockTrueCurrencyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTrueCurrency {
    return new Contract(address, _abi, signerOrProvider) as MockTrueCurrency;
  }
}

const _abi = [
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
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBlacklisted",
        type: "bool",
      },
    ],
    name: "Blacklisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "SetBurnBounds",
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
        name: "amount",
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
    name: "burnMax",
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
    inputs: [],
    name: "burnMin",
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
        name: "",
        type: "address",
      },
    ],
    name: "canBurn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
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
    stateMutability: "pure",
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
    inputs: [],
    name: "initialize",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "reclaimEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "reclaimToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rounding",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isBlacklisted",
        type: "bool",
      },
    ],
    name: "setBlacklisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_min",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    name: "setBurnBounds",
    outputs: [],
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
      {
        internalType: "bool",
        name: "_canBurn",
        type: "bool",
      },
    ],
    name: "setCanBurn",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805460ff19169055600060068190556007556103e860155534801561002a57600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3612071806100836000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80635c131d70116100f95780639a6a30a411610097578063d01dd6d211610071578063d01dd6d214610599578063dd62ed3e146105d4578063e30c39781461060f578063f2fde38b14610617576101b9565b80639a6a30a4146104f4578063a457c2d714610527578063a9059cbb14610560576101b9565b80638129fc1c116100d35780638129fc1c1461047857806388ee39cc146104805780638da5cb5b146104bb57806395d89b41146104ec576101b9565b80635c131d701461040257806370a082311461040a578063807496561461043d576101b9565b8063313ce5671161016657806340c10f191161014057806340c10f191461037f57806342966c68146103ba5780634e71e0c8146103d757806352006050146103df576101b9565b8063313ce5671461030b5780633820a686146103135780633950935114610346576101b9565b806318160ddd1161019757806318160ddd146102a257806323b872dd146102aa5780632e440403146102ed576101b9565b806302d3fdc9146101be57806306fdde03146101d8578063095ea7b314610255575b600080fd5b6101c661064a565b60408051918252519081900360200190f35b6101e0610650565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561021a578181015183820152602001610202565b50505050905090810190601f1680156102475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61028e6004803603604081101561026b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610687565b604080519115158252519081900360200190f35b6101c66106a4565b61028e600480360360608110156102c057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356106aa565b6102f5610751565b6040805160ff9092168252519081900360200190f35b6102f5610756565b61028e6004803603602081101561032957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661075b565b61028e6004803603604081101561035c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610770565b6103b86004803603604081101561039557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107d1565b005b6103b8600480360360208110156103d057600080fd5b5035610941565b6103b861094e565b6103b8600480360360408110156103f557600080fd5b5080359060200135610a50565b6101c6610b44565b6101c66004803603602081101561042057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b4a565b6103b86004803603604081101561045357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610b72565b6103b8610c34565b6103b86004803603604081101561049657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610cc7565b6104c3610e7c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101e0610e98565b6103b86004803603602081101561050a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ecf565b61028e6004803603604081101561053d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f81565b61028e6004803603604081101561057657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ffc565b6103b8600480360360408110156105af57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611010565b6101c6600480360360408110156105ea57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661115f565b6104c3611197565b6103b86004803603602081101561062d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166111b3565b60065481565b60408051808201909152600c81527f5472756543757272656e63790000000000000000000000000000000000000000602082015290565b600061069b610694611266565b848461126a565b50600192915050565b60045490565b60006106b784848461134d565b610747846106c3611266565b61074285604051806060016040528060288152602001611e9c6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600f602052604081209061070e611266565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61149616565b61126a565b5060019392505050565b600290565b601290565b60176020526000908152604090205460ff1681565b600061069b61077d611266565b8461074285600f600061078e611266565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61152d16565b60005473ffffffffffffffffffffffffffffffffffffffff16331461083d576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff16156108a25760405162461bcd60e51b8152600401808060200182810382526024815260200180611de16024913960400191505060405180910390fd5b6108ab8261158e565b156108e75760405162461bcd60e51b815260040180806020018281038252602d815260200180611ec4602d913960400191505060405180910390fd5b6108f182826115d3565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a25050565b61094b33826116f8565b50565b60015473ffffffffffffffffffffffffffffffffffffffff1633146109ba576040805162461bcd60e51b815260206004820152601260248201527f6f6e6c792070656e64696e67206f776e65720000000000000000000000000000604482015290519081900360640190fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610abc576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b80821115610afb5760405162461bcd60e51b8152600401808060200182810382526022815260200180611e7a6022913960400191505060405180910390fd5b60068290556007819055604080518381526020810183905281517f21d54a4c1f750b4f93779e3e8b4de89db3f31bab8f203e68569727fee906cc32929181900390910190a15050565b60075481565b73ffffffffffffffffffffffffffffffffffffffff166000908152600e602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bde576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260176020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015474010000000000000000000000000000000000000000900460ff1615610c5c57600080fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d33576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b158015610da357600080fd5b505afa158015610db7573d6000803e3d6000fd5b505050506040513d6020811015610dcd57600080fd5b5051604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905291519293509085169163a9059cbb916044808201926020929091908290030181600087803b158015610e4b57600080fd5b505af1158015610e5f573d6000803e3d6000fd5b505050506040513d6020811015610e7557600080fd5b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60408051808201909152600481527f5443555200000000000000000000000000000000000000000000000000000000602082015290565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f3b576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f19350505050158015610f7d573d6000803e3d6000fd5b5050565b600061069b610f8e611266565b8461074285604051806060016040528060258152602001611fe860259139600f6000610fb8611266565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61149616565b600061069b611009611266565b848461134d565b60005473ffffffffffffffffffffffffffffffffffffffff16331461107c576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b621000008273ffffffffffffffffffffffffffffffffffffffff1610156110d45760405162461bcd60e51b815260040180806020018281038252603f815260200180611ef1603f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526016602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815291517fcf3473b85df1594d47b6958f29a32bea0abff9dd68296f7bf33443646793cfd89281900390910190a25050565b73ffffffffffffffffffffffffffffffffffffffff9182166000908152600f6020908152604080832093909416825291909152205490565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461121f576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff831660009081526016602052604090205460ff16156112cf5760405162461bcd60e51b8152600401808060200182810382526029815260200180611e2b6029913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff161580611302575080155b61133d5760405162461bcd60e51b815260040180806020018281038252602b815260200180611d45602b913960400191505060405180910390fd5b611348838383611766565b505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526016602052604090205460ff16156113b25760405162461bcd60e51b8152600401808060200182810382526023815260200180611f9a6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff16156114175760405162461bcd60e51b8152600401808060200182810382526026815260200180611e546026913960400191505060405180910390fd5b6114208261158e565b1561148b57611456838361145161144485662386f26fc1000063ffffffff61187916565b859063ffffffff6118bb16565b6118fd565b6114868261148161147484662386f26fc1000063ffffffff61187916565b849063ffffffff6118bb16565b6116f8565b611348565b6113488383836118fd565b600081848411156115255760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114ea5781810151838201526020016114d2565b50505050905090810190601f1680156115175780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611587576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000621000008273ffffffffffffffffffffffffffffffffffffffff161080156115cd575073ffffffffffffffffffffffffffffffffffffffff821615155b92915050565b73ffffffffffffffffffffffffffffffffffffffff821661163b576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61164760008383611348565b60045461165a908263ffffffff61152d16565b60045573ffffffffffffffffffffffffffffffffffffffff82166000908152600e6020526040902054611693908263ffffffff61152d16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600e602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526017602052604090205460ff1661175c5760405162461bcd60e51b815260040180806020018281038252602b815260200180611fbd602b913960400191505060405180910390fd5b610f7d8282611aa7565b73ffffffffffffffffffffffffffffffffffffffff83166117b85760405162461bcd60e51b8152600401808060200182810382526024815260200180611f766024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661180a5760405162461bcd60e51b8152600401808060200182810382526022815260200180611dbf6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600f6020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600061158783836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815250611b83565b600061158783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611496565b73ffffffffffffffffffffffffffffffffffffffff831661194f5760405162461bcd60e51b8152600401808060200182810382526025815260200180611f516025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166119a15760405162461bcd60e51b8152600401808060200182810382526023815260200180611d226023913960400191505060405180910390fd5b6119ac838383611348565b6119fc81604051806060016040528060268152602001611e056026913973ffffffffffffffffffffffffffffffffffffffff86166000908152600e6020526040902054919063ffffffff61149616565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600e60205260408082209390935590841681522054611a3e908263ffffffff61152d16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600e602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600654811015611ae85760405162461bcd60e51b815260040180806020018281038252602d815260200180611d70602d913960400191505060405180910390fd5b600754811115611b295760405162461bcd60e51b815260040180806020018281038252602f81526020018061200d602f913960400191505060405180910390fd5b611b338282611be5565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b60008183611bd25760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156114ea5781810151838201526020016114d2565b50828481611bdc57fe5b06949350505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c375760405162461bcd60e51b8152600401808060200182810382526021815260200180611f306021913960400191505060405180910390fd5b611c4382600083611348565b611c9381604051806060016040528060228152602001611d9d6022913973ffffffffffffffffffffffffffffffffffffffff85166000908152600e6020526040902054919063ffffffff61149616565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600e6020526040902055600454611ccc908263ffffffff6118bb16565b60045560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573735472756543757272656e63793a20746f6b656e73207370656e64657220697320626c61636b6c69737465644275726e61626c65546f6b656e57697468426f756e64733a2062656c6f77206d696e206275726e20626f756e6445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f20616464726573735472756543757272656e63793a206163636f756e7420697320626c61636b6c697374656445524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655472756543757272656e63793a20746f6b656e73206f776e657220697320626c61636b6c69737465645472756543757272656e63793a20726563697069656e7420697320626c61636b6c69737465644275726e61626c65546f6b656e57697468426f756e64733a206d696e203e206d617845524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655472756543757272656e63793a206163636f756e74206973206120726564656d7074696f6e20616464726573735472756543757272656e63793a20626c61636b6c697374696e67206f6620726564656d7074696f6e2061646472657373206973206e6f7420616c6c6f77656445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735472756543757272656e63793a2073656e64657220697320626c61636b6c69737465645472756543757272656e63793a2063616e6e6f74206275726e2066726f6d2074686973206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f4275726e61626c65546f6b656e57697468426f756e64733a2065786365656473206d6178206275726e20626f756e64a2646970667358221220a30314ab8bec6d09224264a46778c82cee4ff15b28829b93a8340b24d1af40bb64736f6c634300060a0033";
