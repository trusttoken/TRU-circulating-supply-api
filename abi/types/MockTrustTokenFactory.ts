/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockTrustToken } from "./MockTrustToken";

export class MockTrustTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockTrustToken> {
    return super.deploy(overrides || {}) as Promise<MockTrustToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTrustToken {
    return super.attach(address) as MockTrustToken;
  }
  connect(signer: Signer): MockTrustTokenFactory {
    return super.connect(signer) as MockTrustTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTrustToken {
    return new Contract(address, _abi, signerOrProvider) as MockTrustToken;
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "",
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
    inputs: [],
    name: "epochsPassed",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [],
    name: "latestEpoch",
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
    name: "lockStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    ],
    name: "lockedBalance",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    name: "nextEpoch",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ownerFaucet",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "registerLockup",
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
        name: "newTimeLockRegistry",
        type: "address",
      },
    ],
    name: "setTimeLockRegistry",
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
    name: "timeLockRegistry",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "unlockedBalance",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600580546001600160a01b031916339081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3611e68806100606000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806370a082311161010f5780639ae697bf116100a2578063aea0e78b11610071578063aea0e78b1461061a578063dd62ed3e14610622578063e30c39781461065d578063f2fde38b14610665576101e5565b80639ae697bf1461056d5780639cb118bf146105a0578063a457c2d7146105a8578063a9059cbb146105e1576101e5565b80638da5cb5b116100de5780638da5cb5b146104f157806395d89b41146104f9578063962399e21461050157806397671bea14610534576101e5565b806370a08231146104755780637b56c2b2146104a85780638129fc1c146104e1578063881ed6db146104e9576101e5565b8063313ce5671161018757806342966c681161015657806342966c68146103e45780634e71e0c8146104015780635a6c84c6146104095780635e0fac2e14610442576101e5565b8063313ce5671461034a57806339509351146103685780633a98d88e146103a157806340c10f19146103a9576101e5565b806318160ddd116101c357806318160ddd146102ce578063238189a8146102d657806323b872dd146103075780632e4404031461034a576101e5565b806306fdde03146101ea578063095ea7b31461026757806315cb7cfa146102b4575b600080fd5b6101f2610698565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a06004803603604081101561027d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106d0565b604080519115158252519081900360200190f35b6102bc6106ee565b60408051918252519081900360200190f35b6102bc610775565b6102de61077b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102a06004803603606081101561031d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610797565b61035261083e565b6040805160ff9092168252519081900360200190f35b6102a06004803603604081101561037e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610843565b6102bc6108a4565b6103e2600480360360408110156103bf57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108e5565b005b6103e2600480360360208110156103fa57600080fd5b50356109d3565b6103e26109e0565b6103e26004803603604081101561041f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a9e565b6102bc6004803603602081101561045857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b84565b6102bc6004803603602081101561048b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610bc4565b6103e2600480360360408110156104be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610bd6565b6103e2610d09565b6102bc610db8565b6102de610dc0565b6101f2610ddc565b6103e26004803603602081101561051757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e13565b6103e26004803603604081101561054a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f9e565b6102bc6004803603602081101561058357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166110d5565b6102bc611138565b6102a0600480360360408110156105be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561116d565b6102a0600480360360408110156105f757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356111e8565b6102bc6111fc565b6102bc6004803603604081101561063857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661126d565b6102de61128a565b6103e26004803603602081101561067b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112a6565b60408051808201909152600a81527f5472757374546f6b656e0000000000000000000000000000000000000000000060208201525b90565b60006106e46106dd611359565b848461135d565b5060015b92915050565b6000635f1b1337421015610704575060006106cd565b600061071a42635f1b133763ffffffff61147016565b905062278d008110156107315760009150506106cd565b60006107596276a70061074d8462278d0063ffffffff61147016565b9063ffffffff6114b216565b9050600881111561076f576008925050506106cd565b91505090565b60015481565b60085473ffffffffffffffffffffffffffffffffffffffff1681565b60006107a48484846114f4565b610834846107b0611359565b61082f85604051806060016040528060288152602001611d586028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600360205260408120906107fb611359565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff6115c516565b61135d565b5060019392505050565b600890565b60006106e4610850611359565b8461082f8560036000610861611359565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61165c16565b60006108e06108bd6276a700600863ffffffff6116b616565b6108d4635f1b133762278d0063ffffffff61165c16565b9063ffffffff61165c16565b905090565b60055473ffffffffffffffffffffffffffffffffffffffff163314610951576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60015467020324bb546e80009061096e908363ffffffff61165c16565b116109825761097d828261170f565b6109cf565b6040805162461bcd60e51b815260206004820152601360248201527f4d617820737570706c7920657863656564656400000000000000000000000000604482015290519081900360640190fd5b5050565b6109dd3382611834565b50565b60065473ffffffffffffffffffffffffffffffffffffffff163314610a0457600080fd5b60065460055460405173ffffffffffffffffffffffffffffffffffffffff92831692839216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600680549091169055565b60055473ffffffffffffffffffffffffffffffffffffffff163314610b0a576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b6001546704064976a8dd000090610b27908363ffffffff61165c16565b1115610b7a576040805162461bcd60e51b815260206004820152601360248201527f4d617820537570706c7920457863656564656400000000000000000000000000604482015290519081900360640190fd5b6109cf828261170f565b60006106e8610b92836110d5565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600260205260409020549063ffffffff61147016565b60026020526000908152604090205481565b336000908152600960205260408120544291610bf8919063ffffffff61165c16565b1115610c355760405162461bcd60e51b8152600401808060200182810382526024815260200180611dc66024913960400191505060405180910390fd5b64174876e800811115610c795760405162461bcd60e51b8152600401808060200182810382526026815260200180611d116026913960400191505060405180910390fd5b6001546704064976a8dd000090610c96908363ffffffff61165c16565b1115610ce9576040805162461bcd60e51b815260206004820152601360248201527f4d617820537570706c7920457863656564656400000000000000000000000000604482015290519081900360640190fd5b610cf3828261170f565b5050336000908152600960205260409020429055565b60005460ff1615610d61576040805162461bcd60e51b815260206004820152601360248201527f616c726561647920696e697469616c697a656400000000000000000000000000604482015290519081900360640190fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b635f1b133790565b60055473ffffffffffffffffffffffffffffffffffffffff1690565b60408051808201909152600381527f5452550000000000000000000000000000000000000000000000000000000000602082015290565b60055473ffffffffffffffffffffffffffffffffffffffff163314610e7f576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ee7576040805162461bcd60e51b815260206004820152601660248201527f63616e6e6f74206265207a65726f206164647265737300000000000000000000604482015290519081900360640190fd5b60085473ffffffffffffffffffffffffffffffffffffffff82811691161415610f57576040805162461bcd60e51b815260206004820152601c60248201527f6d757374206265206e65772054696d654c6f636b526567697374727900000000604482015290519081900360640190fd5b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60085473ffffffffffffffffffffffffffffffffffffffff16331461100a576040805162461bcd60e51b815260206004820152601560248201527f6f6e6c792054696d654c6f636b52656769737472790000000000000000000000604482015290519081900360640190fd5b3360009081526002602052604090205481111561106e576040805162461bcd60e51b815260206004820152601460248201527f696e73756666696369656e742062616c616e6365000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260409020546110a4908263ffffffff61165c16565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600760205260409020556109cf3383836114f4565b6000806110f16110e36106ee565b60089063ffffffff61147016565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600760205260409020549091506111319060089061074d908463ffffffff6116b616565b9392505050565b6000806111436106ee565b90508061115757635f1b13379150506106cd565b61076f6108bd826276a70063ffffffff6116b616565b60006106e461117a611359565b8461082f85604051806060016040528060258152602001611e0e60259139600360006111a4611359565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6115c516565b60006106e46111f5611359565b84846114f4565b6000806112076106ee565b9050600881141561123b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9150506106cd565b8061125e576112566276a7006108d462278d006108d4611138565b9150506106cd565b61076f6276a7006108d4611138565b600360209081526000928352604080842090915290825290205481565b60065473ffffffffffffffffffffffffffffffffffffffff1690565b60055473ffffffffffffffffffffffffffffffffffffffff163314611312576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166113af5760405162461bcd60e51b8152600401808060200182810382526024815260200180611dea6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114015760405162461bcd60e51b8152600401808060200182810382526022815260200180611cc96022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600061113183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115c5565b600061113183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611915565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090205481111561156e576040805162461bcd60e51b815260206004820152601460248201527f696e73756666696369656e742062616c616e6365000000000000000000000000604482015290519081900360640190fd5b8061157884610b84565b10156115b55760405162461bcd60e51b8152600401808060200182810382526023815260200180611c846023913960400191505060405180910390fd5b6115c083838361197a565b505050565b600081848411156116545760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611619578181015183820152602001611601565b50505050905090810190601f1680156116465780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611131576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000826116c5575060006106e8565b828202828482816116d257fe5b04146111315760405162461bcd60e51b8152600401808060200182810382526021815260200180611d376021913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611777576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611783600083836115c0565b600154611796908263ffffffff61165c16565b60015573ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260409020546117cf908263ffffffff61165c16565b73ffffffffffffffffffffffffffffffffffffffff831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260409020548111156118ae576040805162461bcd60e51b815260206004820152601460248201527f696e73756666696369656e742062616c616e6365000000000000000000000000604482015290519081900360640190fd5b806118b883610b84565b101561190b576040805162461bcd60e51b815260206004820152601f60248201527f617474656d7074696e6720746f206275726e206c6f636b65642066756e647300604482015290519081900360640190fd5b6109cf8282611b24565b600081836119645760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611619578181015183820152602001611601565b50600083858161197057fe5b0495945050505050565b73ffffffffffffffffffffffffffffffffffffffff83166119cc5760405162461bcd60e51b8152600401808060200182810382526025815260200180611da16025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a1e5760405162461bcd60e51b8152600401808060200182810382526023815260200180611c616023913960400191505060405180910390fd5b611a298383836115c0565b611a7981604051806060016040528060268152602001611ceb6026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260026020526040902054919063ffffffff6115c516565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600260205260408082209390935590841681522054611abb908263ffffffff61165c16565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8216611b765760405162461bcd60e51b8152600401808060200182810382526021815260200180611d806021913960400191505060405180910390fd5b611b82826000836115c0565b611bd281604051806060016040528060228152602001611ca76022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260026020526040902054919063ffffffff6115c516565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902055600154611c0b908263ffffffff61147016565b60015560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f2061646472657373617474656d7074696e6720746f207472616e73666572206c6f636b65642066756e647345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365616d6f756e742065786365656473206d6178696d756d206f6620313030303030303030303030536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737363616e206f6e6c792063616c6c20666175636574206f6e636520706572206d696e75746545524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122019957b3a8641aac24f2a7f54cd95d3edf9cfc909d5863ee147b3374df94766b064736f6c634300060a0033";
