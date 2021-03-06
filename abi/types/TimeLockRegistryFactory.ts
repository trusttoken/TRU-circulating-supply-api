/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TimeLockRegistry } from "./TimeLockRegistry";

export class TimeLockRegistryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TimeLockRegistry> {
    return super.deploy(overrides || {}) as Promise<TimeLockRegistry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimeLockRegistry {
    return super.attach(address) as TimeLockRegistry;
  }
  connect(signer: Signer): TimeLockRegistryFactory {
    return super.connect(signer) as TimeLockRegistryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLockRegistry {
    return new Contract(address, _abi, signerOrProvider) as TimeLockRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "distribution",
        type: "uint256",
      },
    ],
    name: "Cancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "distribution",
        type: "uint256",
      },
    ],
    name: "Claim",
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
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "distribution",
        type: "uint256",
      },
    ],
    name: "Register",
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
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
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
    inputs: [
      {
        internalType: "contract TimeLockedToken",
        name: "_token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "distribution",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [],
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
    name: "registeredDistributions",
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
    name: "token",
    outputs: [
      {
        internalType: "contract TimeLockedToken",
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
  "0x608060405234801561001057600080fd5b50600580546001600160a01b031916339081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610d9a806100606000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80638da5cb5b1161008c578063dd62ed3e11610066578063dd62ed3e14610246578063e30c397814610281578063f2fde38b14610289578063fc0c546a146102bc576100df565b80638da5cb5b146101af578063c2b3f72f146101e0578063c4d66de814610213576100df565b80634e71e0c8116100bd5780634e71e0c81461013b5780636d705ebb1461014357806370a082311461017c576100df565b806318160ddd146100e45780634c33fe94146100fe5780634e71d92d14610133575b600080fd5b6100ec6102c4565b60408051918252519081900360200190f35b6101316004803603602081101561011457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102ca565b005b61013161055d565b6101316106ba565b6101316004803603604081101561015957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610778565b6100ec6004803603602081101561019257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ae2565b6101b7610af4565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100ec600480360360208110156101f657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b10565b6101316004803603602081101561022957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b22565b6100ec6004803603604081101561025c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c0f565b6101b7610c2c565b6101316004803603602081101561029f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c48565b6101b7610d15565b60015481565b60055473ffffffffffffffffffffffffffffffffffffffff16331461035057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600860205260409020546103e157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f742072656769737465726564000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff808216600090815260086020908152604080832080549084905560075482517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905292519195169363a9059cbb93604480850194919392918390030190829087803b15801561047157600080fd5b505af1158015610485573d6000803e3d6000fd5b505050506040513d602081101561049b57600080fd5b505161050857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff841681526020810183905281517f27f83af92b39768b17fe0c8d6922452702717efb8626d97e7a754e0b27d4f6d2929181900390910190a15050565b336000908152600860205260409020546105d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f742072656769737465726564000000000000000000000000000000000000604482015290519081900360640190fd5b3360008181526008602052604080822080549083905560075482517f97671bea0000000000000000000000000000000000000000000000000000000081526004810195909552602485018290529151909373ffffffffffffffffffffffffffffffffffffffff909216926397671bea926044808201939182900301818387803b15801561066457600080fd5b505af1158015610678573d6000803e3d6000fd5b5050604080513381526020810185905281517f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d49450908190039091019150a150565b60065473ffffffffffffffffffffffffffffffffffffffff1633146106de57600080fd5b60065460055460405173ffffffffffffffffffffffffffffffffffffffff92831692839216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600680549091169055565b60055473ffffffffffffffffffffffffffffffffffffffff1633146107fe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821661088057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a65726f20616464726573730000000000000000000000000000000000000000604482015290519081900360640190fd5b806108ec57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f446973747269627574696f6e203d203000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602052604090205415610968576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610d326033913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808316600090815260086020908152604080832085905560075481517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810187905291519416936323b872dd93606480840194938390030190829087803b1580156109f757600080fd5b505af1158015610a0b573d6000803e3d6000fd5b505050506040513d6020811015610a2157600080fd5b5051610a8e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff841681526020810183905281517e7dc6ab80cc84c043b7b8d4fcafc802187470087f7ea7fccd2e17aecd0256a1929181900390910190a15050565b60026020526000908152604090205481565b60055473ffffffffffffffffffffffffffffffffffffffff1690565b60086020526000908152604090205481565b60005460ff1615610b9457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f416c726561647920696e697469616c697a656400000000000000000000000000604482015290519081900360640190fd5b6007805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790556005805490911633179055600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b600360209081526000928352604080842090915290825290205481565b60065473ffffffffffffffffffffffffffffffffffffffff1690565b60055473ffffffffffffffffffffffffffffffffffffffff163314610cce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60075473ffffffffffffffffffffffffffffffffffffffff168156fe446973747269627574696f6e20666f722074686973206164647265737320697320616c72656164792072656769737465726564a2646970667358221220f7984b86cfedf005a66fbc6f7a5dbfbae71e39cbdfc92fcaeb842cbad0a26b2f64736f6c634300060a0033";
