/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITrueCurrencyInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "reclaimEther(address)": FunctionFragment;
    "reclaimToken(address,address)": FunctionFragment;
    "refundGas(uint256)": FunctionFragment;
    "setBlacklisted(address,bool)": FunctionFragment;
    "setBurnBounds(uint256,uint256)": FunctionFragment;
    "setCanBurn(address,bool)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reclaimEther",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "reclaimToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "refundGas",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBlacklisted",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBurnBounds",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCanBurn",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reclaimEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reclaimToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "refundGas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBlacklisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnBounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCanBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class ITrueCurrency extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITrueCurrencyInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reclaimEther(
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reclaimEther(address)"(
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reclaimToken(
      token: string,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reclaimToken(address,address)"(
      token: string,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    refundGas(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "refundGas(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBlacklisted(
      account: string,
      _isBlacklisted: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBlacklisted(address,bool)"(
      account: string,
      _isBlacklisted: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBurnBounds(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBurnBounds(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCanBurn(
      account: string,
      _canBurn: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCanBurn(address,bool)"(
      account: string,
      _canBurn: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  mint(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reclaimEther(
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "reclaimEther(address)"(
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reclaimToken(
    token: string,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "reclaimToken(address,address)"(
    token: string,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  refundGas(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "refundGas(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBlacklisted(
    account: string,
    _isBlacklisted: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBlacklisted(address,bool)"(
    account: string,
    _isBlacklisted: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBurnBounds(
    _min: BigNumberish,
    _max: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBurnBounds(uint256,uint256)"(
    _min: BigNumberish,
    _max: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCanBurn(
    account: string,
    _canBurn: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCanBurn(address,bool)"(
    account: string,
    _canBurn: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reclaimEther(_to: string, overrides?: CallOverrides): Promise<void>;

    "reclaimEther(address)"(
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    reclaimToken(
      token: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "reclaimToken(address,address)"(
      token: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    refundGas(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "refundGas(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBlacklisted(
      account: string,
      _isBlacklisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBlacklisted(address,bool)"(
      account: string,
      _isBlacklisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBurnBounds(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBurnBounds(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCanBurn(
      account: string,
      _canBurn: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCanBurn(address,bool)"(
      account: string,
      _canBurn: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides): Promise<BigNumber>;

    "claimOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reclaimEther(_to: string, overrides?: Overrides): Promise<BigNumber>;

    "reclaimEther(address)"(
      _to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reclaimToken(
      token: string,
      _to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "reclaimToken(address,address)"(
      token: string,
      _to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    refundGas(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "refundGas(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBlacklisted(
      account: string,
      _isBlacklisted: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBlacklisted(address,bool)"(
      account: string,
      _isBlacklisted: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBurnBounds(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBurnBounds(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCanBurn(
      account: string,
      _canBurn: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCanBurn(address,bool)"(
      account: string,
      _canBurn: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reclaimEther(
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reclaimEther(address)"(
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reclaimToken(
      token: string,
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reclaimToken(address,address)"(
      token: string,
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    refundGas(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "refundGas(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBlacklisted(
      account: string,
      _isBlacklisted: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBlacklisted(address,bool)"(
      account: string,
      _isBlacklisted: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBurnBounds(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBurnBounds(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCanBurn(
      account: string,
      _canBurn: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCanBurn(address,bool)"(
      account: string,
      _canBurn: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
