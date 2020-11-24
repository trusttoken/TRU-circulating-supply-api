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

interface MockDelegateErc20Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burnMax()": FunctionFragment;
    "burnMin()": FunctionFragment;
    "canBurn(address)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "decreaseApproval(address,uint256)": FunctionFragment;
    "delegate()": FunctionFragment;
    "delegateToNewContract(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "increaseApproval(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "symbol()": FunctionFragment;
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
  encodeFunctionData(functionFragment: "burnMax", values?: undefined): string;
  encodeFunctionData(functionFragment: "burnMin", values?: undefined): string;
  encodeFunctionData(functionFragment: "canBurn", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseApproval",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "delegate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegateToNewContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseApproval",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
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
  decodeFunctionResult(functionFragment: "burnMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnMin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateToNewContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
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
    "DelegatedTo(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegatedTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class MockDelegateErc20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockDelegateErc20Interface;

  functions: {
    allowance(
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    burnMax(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "burnMax()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    burnMin(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "burnMin()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    canBurn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canBurn(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "decimals()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseApproval(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegate(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "delegate()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    delegateToNewContract(
      newContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegateToNewContract(address)"(
      newContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    increaseApproval(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseApproval(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "name()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pendingOwner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "pendingOwner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "symbol()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

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
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
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
    _owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    _owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burnMax(overrides?: CallOverrides): Promise<BigNumber>;

  "burnMax()"(overrides?: CallOverrides): Promise<BigNumber>;

  burnMin(overrides?: CallOverrides): Promise<BigNumber>;

  "burnMin()"(overrides?: CallOverrides): Promise<BigNumber>;

  canBurn(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "canBurn(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decreaseApproval(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseApproval(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegate(overrides?: CallOverrides): Promise<string>;

  "delegate()"(overrides?: CallOverrides): Promise<string>;

  delegateToNewContract(
    newContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegateToNewContract(address)"(
    newContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseApproval(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseApproval(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    from: string,
    to: string,
    value: BigNumberish,
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
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnMax(overrides?: CallOverrides): Promise<BigNumber>;

    "burnMax()"(overrides?: CallOverrides): Promise<BigNumber>;

    burnMin(overrides?: CallOverrides): Promise<BigNumber>;

    "burnMin()"(overrides?: CallOverrides): Promise<BigNumber>;

    canBurn(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "canBurn(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseApproval(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delegate(overrides?: CallOverrides): Promise<string>;

    "delegate()"(overrides?: CallOverrides): Promise<string>;

    delegateToNewContract(
      newContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "delegateToNewContract(address)"(
      newContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseApproval(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseApproval(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
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

    DelegatedTo(newContract: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowance(
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnMax(overrides?: CallOverrides): Promise<BigNumber>;

    "burnMax()"(overrides?: CallOverrides): Promise<BigNumber>;

    burnMin(overrides?: CallOverrides): Promise<BigNumber>;

    "burnMin()"(overrides?: CallOverrides): Promise<BigNumber>;

    canBurn(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "canBurn(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides): Promise<BigNumber>;

    "claimOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseApproval(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegate(overrides?: CallOverrides): Promise<BigNumber>;

    "delegate()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegateToNewContract(
      newContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegateToNewContract(address)"(
      newContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    increaseApproval(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseApproval(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
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
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      _owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnMax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "burnMax()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnMin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "burnMin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canBurn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canBurn(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseApproval(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "delegate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegateToNewContract(
      newContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegateToNewContract(address)"(
      newContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    increaseApproval(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseApproval(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
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
