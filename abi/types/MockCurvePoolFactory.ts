/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockCurvePool } from "./MockCurvePool";

export class MockCurvePoolFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockCurvePool> {
    return super.deploy(overrides || {}) as Promise<MockCurvePool>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCurvePool {
    return super.attach(address) as MockCurvePool;
  }
  connect(signer: Signer): MockCurvePoolFactory {
    return super.connect(signer) as MockCurvePoolFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCurvePool {
    return new Contract(address, _abi, signerOrProvider) as MockCurvePool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "amounts",
        type: "uint256[4]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    name: "calc_withdraw_one_coin",
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
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    name: "coins",
    outputs: [
      {
        internalType: "contract IYToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "curve",
    outputs: [
      {
        internalType: "contract ICurve",
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
        internalType: "contract IERC20",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "set_withdraw_price",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612c78806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637165485d1161005b5780637165485d1461017d578063c4d66de814610185578063cc2b27d7146101b8578063fc0c546a146101f057610088565b8063029b2f341461008d57806323746eb8146100e35780633142dc361461012c578063517a55a314610149575b600080fd5b6100e1600480360360a08110156100a357600080fd5b810190808060800190600480602002604051908101604052809291908260046020028082843760009201919091525091945050903591506101f89050565b005b610103600480360360208110156100f957600080fd5b5035600f0b6103ea565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100e16004803603602081101561014257600080fd5b5035610407565b6100e16004803603608081101561015f57600080fd5b508035906020810135600f0b90604081013590606001351515610495565b610103610716565b6100e16004803603602081101561019b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610732565b6101de600480360360408110156101ce57600080fd5b5080359060200135600f0b6109d1565b60408051918252519081900360200190f35b610103610a6f565b6033546060830151604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101929092525173ffffffffffffffffffffffffffffffffffffffff909216916323b872dd916064808201926020929091908290030181600087803b15801561027d57600080fd5b505af1158015610291573d6000803e3d6000fd5b505050506040513d60208110156102a757600080fd5b5050603454603554604080517f87269729000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff938416936340c10f19933393911691638726972991600480820192602092909190829003018186803b15801561032257600080fd5b505afa158015610336573d6000803e3d6000fd5b505050506040513d602081101561034c57600080fd5b50516060860151670de0b6b3a7640000028161036457fe5b046040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156103ce57600080fd5b505af11580156103e2573d6000803e3d6000fd5b505050505050565b5060365473ffffffffffffffffffffffffffffffffffffffff1690565b603554604080517f3142dc3600000000000000000000000000000000000000000000000000000000815260048101849052905173ffffffffffffffffffffffffffffffffffffffff90921691633142dc369160248082019260009290919082900301818387803b15801561047a57600080fd5b505af115801561048e573d6000803e3d6000fd5b5050505050565b603454604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052905173ffffffffffffffffffffffffffffffffffffffff909216916323b872dd916064808201926020929091908290030181600087803b15801561051557600080fd5b505af1158015610529573d6000803e3d6000fd5b505050506040513d602081101561053f57600080fd5b5050603454604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101879052905173ffffffffffffffffffffffffffffffffffffffff909216916342966c689160248082019260009290919082900301818387803b1580156105b457600080fd5b505af11580156105c8573d6000803e3d6000fd5b5050603354603554604080517f87269729000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff938416955063a9059cbb94503393670de0b6b3a76400009316916387269729916004808301926020929190829003018186803b15801561064d57600080fd5b505afa158015610661573d6000803e3d6000fd5b505050506040513d602081101561067757600080fd5b505188028161068257fe5b046040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156106ec57600080fd5b505af1158015610700573d6000803e3d6000fd5b505050506040513d60208110156103e257600080fd5b60355473ffffffffffffffffffffffffffffffffffffffff1690565b600054610100900460ff168061074b575061074b610a8b565b80610759575060005460ff16155b6107ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612c15602e913960400191505060405180910390fd5b600054610100900460ff1615801561081457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617905560405161086090610a91565b604051809103906000f08015801561087c573d6000803e3d6000fd5b50603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556040516108ce90610a9e565b604051809103906000f0801580156108ea573d6000803e3d6000fd5b50603580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905560405161093c90610aab565b604051809103906000f080158015610958573d6000803e3d6000fd5b50603680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905580156109cd57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b603554604080517f87269729000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916387269729916004808301926020929190829003018186803b158015610a3c57600080fd5b505afa158015610a50573d6000803e3d6000fd5b505050506040513d6020811015610a6657600080fd5b50519392505050565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b303b1590565b610fd980610ab983390190565b61017b80611a9283390190565b61100880611c0d8339019056fe608060405234801561001057600080fd5b50610fb9806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806342966c6811610097578063a457c2d711610066578063a457c2d71461034f578063a9059cbb14610388578063a91ee0dc146103c1578063dd62ed3e146103f457610100565b806342966c68146102c657806370a08231146102e35780637b1039991461031657806395d89b411461034757610100565b80632e440403116100d35780632e4404031461022c578063313ce5671461024a578063395093511461025257806340c10f191461028b57610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101cf57806323b872dd146101e9575b600080fd5b61010d61042f565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb6004803603604081101561019857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610466565b604080519115158252519081900360200190f35b6101d7610483565b60408051918252519081900360200190f35b6101bb600480360360608110156101ff57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610489565b610234610530565b6040805160ff9092168252519081900360200190f35b610234610535565b6101bb6004803603604081101561026857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561053a565b6102c4600480360360408110156102a157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561059b565b005b6102c4600480360360208110156102dc57600080fd5b50356105a9565b6101d7600480360360208110156102f957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105b6565b61031e6105c8565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61010d6105e4565b6101bb6004803603604081101561036557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561061b565b6101bb6004803603604081101561039e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610696565b6102c4600480360360208110156103d757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106aa565b6101d76004803603604081101561040a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166106f1565b60408051808201909152600781527f5472756555534400000000000000000000000000000000000000000000000000602082015290565b600061047a61047361070e565b8484610712565b50600192915050565b60015481565b6000610496848484610859565b610526846104a261070e565b61052185604051806060016040528060288152602001610ecd6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600360205260408120906104ed61070e565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610a3716565b610712565b5060019392505050565b600290565b601290565b600061047a61054761070e565b84610521856003600061055861070e565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610ae816565b6105a58282610b63565b5050565b6105b33382610ca2565b50565b60026020526000908152604090205481565b60075473ffffffffffffffffffffffffffffffffffffffff1690565b60408051808201909152600481527f5455534400000000000000000000000000000000000000000000000000000000602082015290565b600061047a61062861070e565b8461052185604051806060016040528060258152602001610f5f602591396003600061065261070e565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a3716565b600061047a6106a361070e565b8484610859565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600360209081526000928352604080842090915290825290205481565b3390565b73ffffffffffffffffffffffffffffffffffffffff831661077e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610f3b6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107ea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610e856022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166108c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610f166025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610931576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610e406023913960400191505060405180910390fd5b61093c838383610df8565b61098c81604051806060016040528060268152602001610ea76026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260026020526040902054919063ffffffff610a3716565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526002602052604080822093909355908416815220546109ce908263ffffffff610ae816565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610ae0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aa5578181015183820152602001610a8d565b50505050905090810190601f168015610ad25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610b5c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610be557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610bf160008383610df8565b600154610c04908263ffffffff610ae816565b60015573ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040902054610c3d908263ffffffff610ae816565b73ffffffffffffffffffffffffffffffffffffffff831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ef56021913960400191505060405180910390fd5b610d1a82600083610df8565b610d6a81604051806060016040528060228152602001610e636022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260026020526040902054919063ffffffff610a3716565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902055600154610da3908263ffffffff610dfd16565b60015560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b505050565b6000610b5c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a3756fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e6875bcbcc71e59e9f149630aa791fd208a586d6e4c13e95d83163384c851c3664736f6c634300060a00336080604052670de0b6b3a764000060005534801561001c57600080fd5b5061014f8061002c6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633142dc36146100515780638726972914610070578063bb7b8b801461008a578063cf701ff714610092575b600080fd5b61006e6004803603602081101561006757600080fd5b50356100e6565b005b6100786100eb565b60408051918252519081900360200190f35b6100786100f1565b610078600480360360a08110156100a857600080fd5b8101908080608001906004806020026040519081016040528092919082600460200280828437600092019190915250919450505035151590506100f7565b600055565b60005481565b60005490565b600080546060840151670de0b6b3a7640000028161011157fe5b04939250505056fea2646970667358221220029b9816876c554761f6119315810ed1bc7590b7f0088cbfab7702b7e9b5327d64736f6c634300060a0033608060405234801561001057600080fd5b50610fe8806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806342966c68116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb146103ab578063a91ee0dc146103e4578063dd62ed3e146104175761011b565b806395d89b411461036a578063a457c2d7146103725761011b565b806342966c68146102e157806370a08231146102fe57806377c7b8fc146103315780637b103999146103395761011b565b80632e440403116100ee5780632e44040314610247578063313ce56714610265578063395093511461026d57806340c10f19146102a65761011b565b806306fdde0314610120578063095ea7b31461019d57806318160ddd146101ea57806323b872dd14610204575b600080fd5b610128610452565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016257818101518382015260200161014a565b50505050905090810190601f16801561018f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101d6600480360360408110156101b357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610489565b604080519115158252519081900360200190f35b6101f26104a6565b60408051918252519081900360200190f35b6101d66004803603606081101561021a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104ac565b61024f610553565b6040805160ff9092168252519081900360200190f35b61024f610558565b6101d66004803603604081101561028357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561055d565b6102df600480360360408110156102bc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105be565b005b6102df600480360360208110156102f757600080fd5b50356105cc565b6101f26004803603602081101561031457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105d9565b6101f26105eb565b6103416105f7565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610128610613565b6101d66004803603604081101561038857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561064a565b6101d6600480360360408110156103c157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106c5565b6102df600480360360208110156103fa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106d9565b6101f26004803603604081101561042d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610720565b60408051808201909152600781527f5472756555534400000000000000000000000000000000000000000000000000602082015290565b600061049d61049661073d565b8484610741565b50600192915050565b60015481565b60006104b9848484610888565b610549846104c561073d565b61054485604051806060016040528060288152602001610efc6028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526003602052604081209061051061073d565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610a6616565b610741565b5060019392505050565b600290565b601290565b600061049d61056a61073d565b84610544856003600061057b61073d565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610b1716565b6105c88282610b92565b5050565b6105d63382610cd1565b50565b60026020526000908152604090205481565b670de0b6b3a764000090565b60075473ffffffffffffffffffffffffffffffffffffffff1690565b60408051808201909152600481527f5455534400000000000000000000000000000000000000000000000000000000602082015290565b600061049d61065761073d565b8461054485604051806060016040528060258152602001610f8e602591396003600061068161073d565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a6616565b600061049d6106d261073d565b8484610888565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600360209081526000928352604080842090915290825290205481565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166107ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610f6a6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610819576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610eb46022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166108f4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610f456025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610960576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610e6f6023913960400191505060405180910390fd5b61096b838383610e27565b6109bb81604051806060016040528060268152602001610ed66026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260026020526040902054919063ffffffff610a6616565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526002602052604080822093909355908416815220546109fd908263ffffffff610b1716565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ad4578181015183820152602001610abc565b50505050905090810190601f168015610b015780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610b8b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c1457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610c2060008383610e27565b600154610c33908263ffffffff610b1716565b60015573ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040902054610c6c908263ffffffff610b1716565b73ffffffffffffffffffffffffffffffffffffffff831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610d3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610f246021913960400191505060405180910390fd5b610d4982600083610e27565b610d9981604051806060016040528060228152602001610e926022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260026020526040902054919063ffffffff610a6616565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902055600154610dd2908263ffffffff610e2c16565b60015560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b505050565b6000610b8b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a6656fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212202332086c6ac0faa271b4ffd7403f10e8b1098da139b660d521926f61287b6bcd64736f6c634300060a0033436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a264697066735822122027271fc3aea9e7ee3048eb3fcc245c66dae20be76b0847444d81c15e230b831664736f6c634300060a0033";
