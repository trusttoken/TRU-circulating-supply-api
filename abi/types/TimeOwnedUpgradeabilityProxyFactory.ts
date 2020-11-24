/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TimeOwnedUpgradeabilityProxy } from "./TimeOwnedUpgradeabilityProxy";

export class TimeOwnedUpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TimeOwnedUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<
      TimeOwnedUpgradeabilityProxy
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimeOwnedUpgradeabilityProxy {
    return super.attach(address) as TimeOwnedUpgradeabilityProxy;
  }
  connect(signer: Signer): TimeOwnedUpgradeabilityProxyFactory {
    return super.connect(signer) as TimeOwnedUpgradeabilityProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeOwnedUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TimeOwnedUpgradeabilityProxy;
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
        indexed: false,
        internalType: "address",
        name: "currentOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "NewPendingOwner",
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
    name: "ProxyOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "claimProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expiration",
    outputs: [
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingProxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newExpirationTime",
        type: "uint256",
      },
    ],
    name: "setExpiration",
    outputs: [],
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
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610023336001600160e01b0361005116565b610035336001600160e01b0361005116565b61004c62a37a0042016001600160e01b0361006316565b610118565b600080516020610bcd83398151915255565b6100746001600160e01b0361010516565b6001600160a01b0316336001600160a01b0316146100cc576040805162461bcd60e51b815260206004820152601060248201526f37b7363c90283937bc3c9027bbb732b960811b604482015290519081900360640190fd5b604080517f7472757374746f6b656e2e65787069726174696f6e0000000000000000000000815290519081900360150190206000190155565b600080516020610bcd8339815191525490565b610aa6806101276000396000f3fe60806040526004361061007f5760003560e01c8063515a20ba1161004e578063515a20ba146101505780635c60da1b1461017a5780639965b3d61461018f578063f1739cae146101a45761008e565b8063025313a2146100965780630add8140146100d45780633659cfe6146100e95780634665096d146101295761008e565b3661008e5761008c6101e4565b005b61008c6101e4565b3480156100a257600080fd5b506100ab610229565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100e057600080fd5b506100ab61024e565b3480156100f557600080fd5b5061008c6004803603602081101561010c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610273565b34801561013557600080fd5b5061013e610395565b60408051918252519081900360200190f35b34801561015c57600080fd5b5061008c6004803603602081101561017357600080fd5b50356103ed565b34801561018657600080fd5b506100ab610564565b34801561019b57600080fd5b5061008c610589565b3480156101b057600080fd5b5061008c600480360360208110156101c757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106ae565b6040517f6e41e0fbe643dfdb6043698bf865aada82dc46b953f754a3468eaa272a362dc790363d82373d3d368385545af43d6000833e808015610225573d83f35b3d83fd5b7f6279e8199720cf3557ecd8b58d667c8edc486bd1cf3ad59ea9ebdfcae0d0dfac5490565b7f8ddbac328deee8d986ec3a7b933a196f96986cb4ee030d86cc56431c728b83f45490565b61027b610229565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461031457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b61031c610395565b421061038957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f61667465722065787069726174696f6e20646174650000000000000000000000604482015290519081900360640190fd5b610392816107d3565b50565b604080517f7472757374746f6b656e2e65787069726174696f6e0000000000000000000000815290519081900360150190207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015490565b6103f5610229565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461048e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b610496610395565b421061050357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f61667465722065787069726174696f6e2074696d650000000000000000000000604482015290519081900360640190fd5b80421061055b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180610a486029913960400191505060405180910390fd5b61039281610907565b7f6e41e0fbe643dfdb6043698bf865aada82dc46b953f754a3468eaa272a362dc75490565b61059161024e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461062a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6f6e6c792070656e64696e672050726f7879204f776e65720000000000000000604482015290519081900360640190fd5b61063261024e565b73ffffffffffffffffffffffffffffffffffffffff16610650610229565b73ffffffffffffffffffffffffffffffffffffffff167f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd960405160405180910390a36106a261069d61024e565b6109ff565b6106ac6000610a23565b565b6106b6610229565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461074f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661076f57600080fd5b61077881610a23565b7fb3d55174552271a4f1aaf36b72f50381e892171636b3fb5447fe00e995e7a37b6107a1610229565b6040805173ffffffffffffffffffffffffffffffffffffffff928316815291841660208301528051918290030190a150565b6107db610229565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461087457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b7f6e41e0fbe643dfdb6043698bf865aada82dc46b953f754a3468eaa272a362dc780549073ffffffffffffffffffffffffffffffffffffffff80831690841614156108be57600080fd5b82815560405173ffffffffffffffffffffffffffffffffffffffff8416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2505050565b61090f610229565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109a857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b604080517f7472757374746f6b656e2e65787069726174696f6e0000000000000000000000815290519081900360150190207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0155565b7f6279e8199720cf3557ecd8b58d667c8edc486bd1cf3ad59ea9ebdfcae0d0dfac55565b7f8ddbac328deee8d986ec3a7b933a196f96986cb4ee030d86cc56431c728b83f45556fe6e65772065787069726174696f6e2074696d65206d75737420626520696e2074686520667574757265a2646970667358221220f9243161d148b5c0d2ab89a0dcec37c784e8aeef2b819431e6882a5b097437b964736f6c634300060a00336279e8199720cf3557ecd8b58d667c8edc486bd1cf3ad59ea9ebdfcae0d0dfac";
