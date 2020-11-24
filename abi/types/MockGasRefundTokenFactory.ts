/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockGasRefundToken } from "./MockGasRefundToken";

export class MockGasRefundTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockGasRefundToken> {
    return super.deploy(overrides || {}) as Promise<MockGasRefundToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockGasRefundToken {
    return super.attach(address) as MockGasRefundToken;
  }
  connect(signer: Signer): MockGasRefundTokenFactory {
    return super.connect(signer) as MockGasRefundTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockGasRefundToken {
    return new Contract(address, _abi, signerOrProvider) as MockGasRefundToken;
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "refundGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingGasRefundPool",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingSheepRefundPool",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sponsorGas",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sponsorGas2",
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
  "0x60806040526005805460ff19169055600060068190556007556103e860155534801561002a57600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36124a3806100836000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806365542ebc1161010f5780639a6a30a4116100a2578063d01dd6d211610071578063d01dd6d214610637578063dd62ed3e14610672578063e30c3978146106ad578063f2fde38b146106b5576101f0565b80639a6a30a414610575578063a457c2d7146105a8578063a9059cbb146105e1578063caffb7b61461061a576101f0565b806381a084fd116100de57806381a084fd146104f957806388ee39cc146105015780638da5cb5b1461053c57806395d89b411461056d576101f0565b806365542ebc1461046657806370a082311461048357806380749656146104b65780638129fc1c146104f1576101f0565b8063313ce5671161018757806342966c681161015657806342966c68146104165780634e71e0c814610433578063520060501461043b5780635c131d701461045e576101f0565b8063313ce567146103695780633820a6861461037157806339509351146103a457806340c10f19146103dd576101f0565b80631814ac44116101c35780631814ac44146102f857806318160ddd1461030057806323b872dd146103085780632e4404031461034b576101f0565b806302d3fdc9146101f557806306fdde031461020f578063095ea7b31461028c57806317c931bd146102d9575b600080fd5b6101fd6106e8565b60408051918252519081900360200190f35b6102176106ee565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610251578181015183820152602001610239565b50505050905090810190601f16801561027e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c5600480360360408110156102a257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610725565b604080519115158252519081900360200190f35b6102f6600480360360208110156102ef57600080fd5b5035610742565b005b6101fd6107e8565b6101fd61080d565b6102c56004803603606081101561031e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610813565b6103536108ba565b6040805160ff9092168252519081900360200190f35b6103536108bf565b6102c56004803603602081101561038757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108c4565b6102c5600480360360408110156103ba57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108d9565b6102f6600480360360408110156103f357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561093a565b6102f66004803603602081101561042c57600080fd5b5035610aaa565b6102f6610ab4565b6102f66004803603604081101561045157600080fd5b5080359060200135610bb6565b6101fd610caa565b6102f66004803603602081101561047c57600080fd5b5035610cb0565b6101fd6004803603602081101561049957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610da6565b6102f6600480360360408110156104cc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610dce565b6102f6610e90565b6101fd610f23565b6102f66004803603604081101561051757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610f2b565b6105446110e0565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102176110fc565b6102f66004803603602081101561058b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611133565b6102c5600480360360408110156105be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356111e5565b6102c5600480360360408110156105f757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611260565b6102f66004803603602081101561063057600080fd5b5035611274565b6102f66004803603604081101561064d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156112d0565b6101fd6004803603604081101561068857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661141f565b610544611457565b6102f6600480360360208110156106cb57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611473565b60065481565b60408051808201909152600c81527f5472756543757272656e63790000000000000000000000000000000000000000602082015290565b6000610739610732611526565b848461152a565b50600192915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ae576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006107b8610f23565b11156107cc576107c78161160d565b6107e5565b6107e56107e082600363ffffffff61165016565b611699565b50565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5490565b60045490565b6000610820848484611721565b6108b08461082c611526565b6108ab856040518060600160405280602881526020016122ce6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600f6020526040812090610877611526565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61186a16565b61152a565b5060019392505050565b600290565b601290565b60176020526000908152604090205460ff1681565b60006107396108e6611526565b846108ab85600f60006108f7611526565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61190116565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109a6576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff1615610a0b5760405162461bcd60e51b81526004018080602001828103825260248152602001806122136024913960400191505060405180910390fd5b610a148261195b565b15610a505760405162461bcd60e51b815260040180806020018281038252602d8152602001806122f6602d913960400191505060405180910390fd5b610a5a82826119a0565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a25050565b6107e53382611ac5565b60015473ffffffffffffffffffffffffffffffffffffffff163314610b20576040805162461bcd60e51b815260206004820152601260248201527f6f6e6c792070656e64696e67206f776e65720000000000000000000000000000604482015290519081900360640190fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c22576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b80821115610c615760405162461bcd60e51b81526004018080602001828103825260228152602001806122ac6022913960400191505060405180910390fd5b60068290556007819055604080518381526020810183905281517f21d54a4c1f750b4f93779e3e8b4de89db3f31bab8f203e68569727fee906cc32929181900390910190a15050565b60075481565b307f601b8060093d393df33d33730000000000000000000000000000000000000000176000527f185857ff000000000000000000000000000000000000000000000000000000006020527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff54807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0360005b83811015610d7f576024600080f082557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90910190600101610d42565b5050017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55565b73ffffffffffffffffffffffffffffffffffffffff166000908152600e602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e3a576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260176020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015474010000000000000000000000000000000000000000900460ff1615610eb857600080fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055565b620fffff5490565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f97576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b15801561100757600080fd5b505afa15801561101b573d6000803e3d6000fd5b505050506040513d602081101561103157600080fd5b5051604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905291519293509085169163a9059cbb916044808201926020929091908290030181600087803b1580156110af57600080fd5b505af11580156110c3573d6000803e3d6000fd5b505050506040513d60208110156110d957600080fd5b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60408051808201909152600481527f5443555200000000000000000000000000000000000000000000000000000000602082015290565b60005473ffffffffffffffffffffffffffffffffffffffff16331461119f576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f193505050501580156111e1573d6000803e3d6000fd5b5050565b60006107396111f2611526565b846108ab8560405180606001604052806025815260200161241a60259139600f600061121c611526565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61186a16565b600061073961126d611526565b8484611721565b620fffff80548281019091557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff621000009091018181556000905b600184038210156112ca5760019081018381559101906112af565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461133c576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b621000008273ffffffffffffffffffffffffffffffffffffffff1610156113945760405162461bcd60e51b815260040180806020018281038252603f815260200180612323603f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526016602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815291517fcf3473b85df1594d47b6958f29a32bea0abff9dd68296f7bf33443646793cfd89281900390910190a25050565b73ffffffffffffffffffffffffffffffffffffffff9182166000908152600f6020908152604080832093909416825291909152205490565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114df576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff831660009081526016602052604090205460ff161561158f5760405162461bcd60e51b815260040180806020018281038252602981526020018061225d6029913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff1615806115c2575080155b6115fd5760405162461bcd60e51b815260040180806020018281038252602b815260200180612177602b913960400191505060405180910390fd5b611608838383611b33565b505050565b620fffff548181101561161e578091505b8161162557005b620fffff81018281035b80821115611646576000825560018203915061162f565b505003620fffff55565b600061169283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611c46565b9392505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff54818110156116c7578091505b816116ce57005b80198281015b808210156116fa5781546000806000806000855af15050600082556001820191506116d4565b5050037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55565b73ffffffffffffffffffffffffffffffffffffffff831660009081526016602052604090205460ff16156117865760405162461bcd60e51b81526004018080602001828103825260238152602001806123cc6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff16156117eb5760405162461bcd60e51b81526004018080602001828103825260268152602001806122866026913960400191505060405180910390fd5b6117f48261195b565b1561185f5761182a838361182561181885662386f26fc1000063ffffffff611cab16565b859063ffffffff611ced16565b611d2f565b61185a8261185561184884662386f26fc1000063ffffffff611cab16565b849063ffffffff611ced16565b611ac5565b611608565b611608838383611d2f565b600081848411156118f95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118be5781810151838201526020016118a6565b50505050905090810190601f1680156118eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611692576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000621000008273ffffffffffffffffffffffffffffffffffffffff1610801561199a575073ffffffffffffffffffffffffffffffffffffffff821615155b92915050565b73ffffffffffffffffffffffffffffffffffffffff8216611a08576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611a1460008383611608565b600454611a27908263ffffffff61190116565b60045573ffffffffffffffffffffffffffffffffffffffff82166000908152600e6020526040902054611a60908263ffffffff61190116565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600e602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526017602052604090205460ff16611b295760405162461bcd60e51b815260040180806020018281038252602b8152602001806123ef602b913960400191505060405180910390fd5b6111e18282611ed9565b73ffffffffffffffffffffffffffffffffffffffff8316611b855760405162461bcd60e51b81526004018080602001828103825260248152602001806123a86024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611bd75760405162461bcd60e51b81526004018080602001828103825260228152602001806121f16022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600f6020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60008183611c955760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156118be5781810151838201526020016118a6565b506000838581611ca157fe5b0495945050505050565b600061169283836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815250611fb5565b600061169283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061186a565b73ffffffffffffffffffffffffffffffffffffffff8316611d815760405162461bcd60e51b81526004018080602001828103825260258152602001806123836025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611dd35760405162461bcd60e51b81526004018080602001828103825260238152602001806121546023913960400191505060405180910390fd5b611dde838383611608565b611e2e816040518060600160405280602681526020016122376026913973ffffffffffffffffffffffffffffffffffffffff86166000908152600e6020526040902054919063ffffffff61186a16565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600e60205260408082209390935590841681522054611e70908263ffffffff61190116565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600e602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600654811015611f1a5760405162461bcd60e51b815260040180806020018281038252602d8152602001806121a2602d913960400191505060405180910390fd5b600754811115611f5b5760405162461bcd60e51b815260040180806020018281038252602f81526020018061243f602f913960400191505060405180910390fd5b611f658282612017565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b600081836120045760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156118be5781810151838201526020016118a6565b5082848161200e57fe5b06949350505050565b73ffffffffffffffffffffffffffffffffffffffff82166120695760405162461bcd60e51b81526004018080602001828103825260218152602001806123626021913960400191505060405180910390fd5b61207582600083611608565b6120c5816040518060600160405280602281526020016121cf6022913973ffffffffffffffffffffffffffffffffffffffff85166000908152600e6020526040902054919063ffffffff61186a16565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600e60205260409020556004546120fe908263ffffffff611ced16565b60045560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573735472756543757272656e63793a20746f6b656e73207370656e64657220697320626c61636b6c69737465644275726e61626c65546f6b656e57697468426f756e64733a2062656c6f77206d696e206275726e20626f756e6445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f20616464726573735472756543757272656e63793a206163636f756e7420697320626c61636b6c697374656445524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655472756543757272656e63793a20746f6b656e73206f776e657220697320626c61636b6c69737465645472756543757272656e63793a20726563697069656e7420697320626c61636b6c69737465644275726e61626c65546f6b656e57697468426f756e64733a206d696e203e206d617845524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655472756543757272656e63793a206163636f756e74206973206120726564656d7074696f6e20616464726573735472756543757272656e63793a20626c61636b6c697374696e67206f6620726564656d7074696f6e2061646472657373206973206e6f7420616c6c6f77656445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735472756543757272656e63793a2073656e64657220697320626c61636b6c69737465645472756543757272656e63793a2063616e6e6f74206275726e2066726f6d2074686973206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f4275726e61626c65546f6b656e57697468426f756e64733a2065786365656473206d6178206275726e20626f756e64a2646970667358221220161e8cf0f9b765778cfb1c3578f733424db0e22b010d6da4c83b281d9480c7ef64736f6c634300060a0033";