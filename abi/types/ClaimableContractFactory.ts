/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClaimableContract } from "./ClaimableContract";

export class ClaimableContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ClaimableContract> {
    return super.deploy(overrides || {}) as Promise<ClaimableContract>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClaimableContract {
    return super.attach(address) as ClaimableContract;
  }
  connect(signer: Signer): ClaimableContractFactory {
    return super.connect(signer) as ClaimableContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimableContract {
    return new Contract(address, _abi, signerOrProvider) as ClaimableContract;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "claimOwnership",
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
  "0x608060405234801561001057600080fd5b50600580546001600160a01b031916339081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36103ae806100606000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100d9578063dd62ed3e1461010a578063e30c397814610145578063f2fde38b1461014d5761007d565b806318160ddd146100825780634e71e0c81461009c57806370a08231146100a6575b600080fd5b61008a610180565b60408051918252519081900360200190f35b6100a4610186565b005b61008a600480360360208110156100bc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610244565b6100e1610256565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61008a6004803603604081101561012057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610272565b6100e161028f565b6100a46004803603602081101561016357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102ab565b60015481565b60065473ffffffffffffffffffffffffffffffffffffffff1633146101aa57600080fd5b60065460055460405173ffffffffffffffffffffffffffffffffffffffff92831692839216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600680549091169055565b60026020526000908152604090205481565b60055473ffffffffffffffffffffffffffffffffffffffff1690565b600360209081526000928352604080842090915290825290205481565b60065473ffffffffffffffffffffffffffffffffffffffff1690565b60055473ffffffffffffffffffffffffffffffffffffffff16331461033157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fea2646970667358221220b1c5cbab647c4ed056e3a74a570366fc34d8dcba35c2aea6585b6f2e4162340864736f6c634300060a0033";
