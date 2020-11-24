/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LoanToken } from "./LoanToken";

export class LoanTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _currencyToken: string,
    _borrower: string,
    _amount: BigNumberish,
    _term: BigNumberish,
    _apy: BigNumberish,
    overrides?: Overrides
  ): Promise<LoanToken> {
    return super.deploy(
      _currencyToken,
      _borrower,
      _amount,
      _term,
      _apy,
      overrides || {}
    ) as Promise<LoanToken>;
  }
  getDeployTransaction(
    _currencyToken: string,
    _borrower: string,
    _amount: BigNumberish,
    _term: BigNumberish,
    _apy: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _currencyToken,
      _borrower,
      _amount,
      _term,
      _apy,
      overrides || {}
    );
  }
  attach(address: string): LoanToken {
    return super.attach(address) as LoanToken;
  }
  connect(signer: Signer): LoanTokenFactory {
    return super.connect(signer) as LoanTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoanToken {
    return new Contract(address, _abi, signerOrProvider) as LoanToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_currencyToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_term",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_apy",
        type: "uint256",
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
        indexed: false,
        internalType: "enum ILoanToken.Status",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "returnedAmount",
        type: "uint256",
      },
    ],
    name: "Closed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
    ],
    name: "Funded",
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
        name: "burnedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemedAmound",
        type: "uint256",
      },
    ],
    name: "Redeemed",
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
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "TransferAllowanceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "Withdrawn",
    type: "event",
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
        name: "_status",
        type: "bool",
      },
    ],
    name: "allowTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [],
    name: "amount",
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
    inputs: [],
    name: "apy",
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
    name: "balance",
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
    inputs: [],
    name: "borrower",
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
    name: "borrowerFee",
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
    name: "canTransfer",
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
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currencyToken",
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
  {
    inputs: [],
    name: "debt",
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
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getParameters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "isLoanToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "lender",
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
    name: "profit",
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
    name: "receivedAmount",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemed",
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
    name: "repaid",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
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
    name: "status",
    outputs: [
      {
        internalType: "enum ILoanToken.Status",
        name: "",
        type: "uint8",
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
    name: "term",
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
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "value",
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
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526019600d553480156200001657600080fd5b506040516200279f3803806200279f833981810160405260a08110156200003c57600080fd5b508051602080830151604080850151606086015160809096015182518084018452600a8152692637b0b7102a37b5b2b760b11b818701908152845180860190955260048552632627a0a760e11b968501969096528051969794969295919390929091620000ad916003919062000361565b508051620000c390600490602084019062000361565b505060058054600f80546001600160a01b03808b16610100908102610100600160a81b031993841617909355891690910260ff19909216601217161790555060068390556007829055600881905562000125836001600160e01b036200013416565b600b5550620004069350505050565b6000620001aa62000195612710620001816301da9c00620001816007546200016d6008548a620001b060201b620016561790919060201c565b620001b060201b620016561790919060201c565b6200021560201b620016d01790919060201c565b836200025f60201b620017121790919060201c565b92915050565b600082620001c157506000620001aa565b82820282848281620001cf57fe5b04146200020e5760405162461bcd60e51b81526004018080602001828103825260218152602001806200277e6021913960400191505060405180910390fd5b9392505050565b60006200020e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620002ba60201b60201c565b6000828201838110156200020e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081836200034a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200030e578181015183820152602001620002f4565b50505050905090810190601f1680156200033c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200035757fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003a457805160ff1916838001178555620003d4565b82800160010185558215620003d4579182015b82811115620003d4578251825591602001919060010190620003b7565b50620003e2929150620003e6565b5090565b6200040391905b80821115620003e25760008155600101620003ed565b90565b61236880620004166000396000f3fe608060405234801561001057600080fd5b506004361061025c5760003560e01c806378fc3cb311610145578063b60d4288116100bd578063c5a46ee61161008c578063dd62ed3e11610071578063dd62ed3e14610695578063e231bff0146106d0578063fbb27dce146106d85761025c565b8063c5a46ee61461065b578063db006a75146106785761025c565b8063b60d42881461063b578063b69ef8a814610643578063bcead63e1461064b578063be9a6555146106535761025c565b8063a10ffbed11610114578063a5ea11da116100f9578063a5ea11da146105d4578063a9059cbb146105fa578063aa8c217c146106335761025c565b8063a10ffbed14610593578063a457c2d71461059b5761025c565b806378fc3cb3146105485780637df1f1b91461057b57806395d89b41146105835780639632e7201461058b5761025c565b80633bcfc4b8116101d857806366d16cc3116101a75780636e31d80a1161018c5780636e31d80a1461050557806370a082311461050d57806371f83e15146105405761025c565b806366d16cc3146104cc5780636b2fa374146104d45761025c565b80633bcfc4b81461044e57806343d726d6146104565780634d9b8fcf1461045e57806351cff8d9146104995761025c565b8063200d2ed21161022f57806323b872dd1161021457806323b872dd146103b4578063313ce567146103f757806339509351146104155761025c565b8063200d2ed21461034d57806322867d78146103795761025c565b806306fdde0314610261578063095ea7b3146102de5780630dca59c11461032b57806318160ddd14610345575b600080fd5b6102696106e0565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102a357818101518382015260200161028b565b50505050905090810190601f1680156102d05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610317600480360360408110156102f457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610794565b604080519115158252519081900360200190f35b6103336107b2565b60408051918252519081900360200190f35b6103336107b8565b6103556107be565b6040518082600481111561036557fe5b60ff16815260200191505060405180910390f35b6103b26004803603604081101561038f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107c7565b005b610317600480360360608110156103ca57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356108f2565b6103ff610999565b6040805160ff9092168252519081900360200190f35b6103176004803603604081101561042b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109a2565b610333610a03565b6103b2610a09565b6103b26004803603604081101561047457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610bc4565b6103b2600480360360208110156104af57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610cc3565b610333610ee2565b6104dc610f00565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610317610f21565b6103336004803603602081101561052357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610f26565b610333610f52565b6103176004803603602081101561055e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610f58565b6104dc610f6d565b610269610f8e565b61033361100d565b61033361104a565b610317600480360360408110156105b157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611050565b6105dc6110cb565b60408051938452602084019290925282820152519081900360600190f35b6103176004803603604081101561061057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356110d9565b6103336110ed565b6103b26110f3565b6103336112f9565b6104dc611303565b61033361131f565b6103336004803603602081101561067157600080fd5b5035611325565b6103b26004803603602081101561068e57600080fd5b50356113cf565b610333600480360360408110156106ab57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611592565b6103336115ca565b6103336115d0565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b820191906000526020600020905b81548152906001019060200180831161076d57829003601f168201915b5050505050905090565b60006107a86107a1611786565b848461178a565b5060015b92915050565b600b5481565b60025490565b600f5460ff1681565b6002600f5460ff1660048111156107da57fe5b1015610831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180612189602d913960400191505060405180910390fd5b600f54604080517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152306024830152604482018590529151610100909304909116916323b872dd916064808201926020929091908290030181600087803b1580156108b957600080fd5b505af11580156108cd573d6000803e3d6000fd5b505050506040513d60208110156108e357600080fd5b50516108ee57600080fd5b5050565b60006108ff8484846118d1565b61098f8461090b611786565b61098a856040518060600160405280602881526020016121d76028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260016020526040812090610956611786565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61198716565b61178a565b5060019392505050565b60055460ff1690565b60006107a86109af611786565b8461098a85600160006109c0611786565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61171216565b60085481565b6001600f5460ff166004811115610a1c57fe5b1480610a3857506002600f5460ff166004811115610a3657fe5b145b610a8d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806121526037913960400191505060405180910390fd5b42610aa560075460095461171290919063ffffffff16565b1115610afc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806120156024913960400191505060405180910390fd5b600b54610b07611a38565b10610b3c57600f80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166003179055610b68565b600f80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660041790555b600f547f28bd284f46889d08743cedeaa5a283383637a7f257dcd1d67d9018e4947b5a5a9060ff16610b98611a38565b60405180836004811115610ba857fe5b60ff1681526020018281526020019250505060405180910390a1565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610c34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806120c5602f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166000818152600e602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915582519384529083015280517f1b3b164cc59c87814760e94930af830522796bfcf37eb8c9953f560a1999b0cb9281900390910190a15050565b600554610100900473ffffffffffffffffffffffffffffffffffffffff163314610d38576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806120a06025913960400191505060405180910390fd5b6001600f5460ff166004811115610d4b57fe5b14610da1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612294602a913960400191505060405180910390fd5b600f80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166002179081905573ffffffffffffffffffffffffffffffffffffffff6101009091041663a9059cbb82610df861100d565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e6157600080fd5b505af1158015610e75573d6000803e3d6000fd5b505050506040513d6020811015610e8b57600080fd5b5051610e9657600080fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517ff45a04d08a70caa7eb4b747571305559ad9fdf4a093afd41506b35c8a306fa949181900360200190a150565b6000610efb600654600b54611adf90919063ffffffff16565b905090565b600f54610100900473ffffffffffffffffffffffffffffffffffffffff1681565b600190565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b600d5481565b600e6020526000908152604090205460ff1681565b600554610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b6000610efb61103b61271061102f600d5460065461165690919063ffffffff16565b9063ffffffff6116d016565b6006549063ffffffff611adf16565b60075481565b60006107a861105d611786565b8461098a8560405180606001604052806025815260200161230e6025913960016000611087611786565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61198716565b600654600854600754909192565b60006107a86110e6611786565b84846118d1565b60065481565b6000600f5460ff16600481111561110657fe5b1461115c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806122be602c913960400191505060405180910390fd5b600f80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905542600955600a8054337fffffffffffffffffffffffff00000000000000000000000000000000000000009091168117909155600b546111c69190611b21565b600f54610100900473ffffffffffffffffffffffffffffffffffffffff166323b872dd33306111f361100d565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561128f57600080fd5b505af11580156112a3573d6000803e3d6000fd5b505050506040513d60208110156112b957600080fd5b50516112c457600080fd5b6040805133815290517fb436c2bf863ccd7b8f63171201efd4792066b4ce8e543dde9c3e9e9ab98e216c9181900360200190a1565b6000610efb611a38565b600a5473ffffffffffffffffffffffffffffffffffffffff1681565b60095481565b60008161133457506000610f4d565b600061134b60095442611adf90919063ffffffff16565b905060075481111561135c57506007545b60006113898461137d8461137d60085460065461165690919063ffffffff16565b9063ffffffff61165616565b905060006113b06113986107b8565b61102f61271081866301da9c0063ffffffff6116d016565b6006549091506113c6908263ffffffff61171216565b95945050505050565b6003600f5460ff1660048111156113e257fe5b14806113fe57506004600f5460ff1660048111156113fc57fe5b145b611453576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061211a6038913960400191505060405180910390fd5b60006114786114606107b8565b61102f61146b611a38565b859063ffffffff61165616565b600c5490915061148e908263ffffffff61171216565b600c5561149b3383611c5e565b600f54604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101849052905161010090920473ffffffffffffffffffffffffffffffffffffffff169163a9059cbb916044808201926020929091908290030181600087803b15801561151957600080fd5b505af115801561152d573d6000803e3d6000fd5b505050506040513d602081101561154357600080fd5b505161154e57600080fd5b604080513381526020810184905280820183905290517ff3a670cd3af7d64b488926880889d08a8585a138ff455227af6737339a1ec2629181900360600190a15050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b600c5481565b60006002600f5460ff1660048111156115e557fe5b101561163c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180612189602d913960400191505060405180910390fd5b610efb600c5461164a611a38565b9063ffffffff61171216565b600082611665575060006107ac565b8282028284828161167257fe5b04146116c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806121b66021913960400191505060405180910390fd5b9392505050565b60006116c983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611db4565b6000828201838110156116c957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b73ffffffffffffffffffffffffffffffffffffffff83166117f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806122ea6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611862576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061207e6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600a54839073ffffffffffffffffffffffffffffffffffffffff80831691161480611921575073ffffffffffffffffffffffffffffffffffffffff81166000908152600e602052604090205460ff165b611976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604f815260200180612220604f913960600191505060405180910390fd5b611981848484611e33565b50505050565b60008184841115611a30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119f55781810151838201526020016119dd565b50505050905090810190601f168015611a225780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600f54604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600092610100900473ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015611aae57600080fd5b505afa158015611ac2573d6000803e3d6000fd5b505050506040513d6020811015611ad857600080fd5b5051905090565b60006116c983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611987565b73ffffffffffffffffffffffffffffffffffffffff8216611ba357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611baf6000838361200f565b600254611bc2908263ffffffff61171216565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054611bfb908263ffffffff61171216565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611cca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806121ff6021913960400191505060405180910390fd5b611cd68260008361200f565b611d268160405180606001604052806022815260200161205c6022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260208190526040902054919063ffffffff61198716565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600254611d5f908263ffffffff611adf16565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008183611e1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156119f55781810151838201526020016119dd565b506000838581611e2957fe5b0495945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611e9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061226f6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611f0b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806120396023913960400191505060405180910390fd5b611f1683838361200f565b611f66816040518060600160405280602681526020016120f46026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff61198716565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054611fa8908263ffffffff61171216565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b50505056fe4c6f616e546f6b656e3a204c6f616e2063616e6e6f7420626520636c6f7365642079657445524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f20616464726573734c6f616e546f6b656e3a2043616c6c6572206973206e6f742074686520626f72726f7765724c6f616e546f6b656e3a20546869732063616e20626520706572666f726d6564206f6e6c79206279206c656e64657245524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654c6f616e546f6b656e3a2043757272656e74207374617475732073686f756c6420626520536574746c6564206f722044656661756c7465644c6f616e546f6b656e3a2043757272656e74207374617475732073686f756c642062652046756e646564206f722057697468647261776e4c6f616e546f6b656e3a204f6e6c79206166746572206c6f616e20686173206265656e2077697468647261776e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f20616464726573734c6f616e546f6b656e3a20546869732063616e20626520706572666f726d6564206f6e6c79206279206c656e646572206f72206163636f756e747320616c6c6f77656420746f207472616e7366657245524332303a207472616e736665722066726f6d20746865207a65726f20616464726573734c6f616e546f6b656e3a2043757272656e74207374617475732073686f756c642062652046756e6465644c6f616e546f6b656e3a2043757272656e74207374617475732073686f756c64206265204177616974696e6745524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220ff93eaa4a5f226b724dee99980f05a17e1aa18a5d3b74f72a818eb750bf6534264736f6c634300060a0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77";
