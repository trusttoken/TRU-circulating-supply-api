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

interface TrueFarmInterface extends ethers.utils.Interface {
  functions: {
    "claim()": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "claimableReward(address)": FunctionFragment;
    "cumulativeRewardPerToken()": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "initialize(address,address,string)": FunctionFragment;
    "name()": FunctionFragment;
    "previousCumulatedRewardPerToken(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "staked(address)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "totalClaimedRewards()": FunctionFragment;
    "totalFarmRewards()": FunctionFragment;
    "totalStaked()": FunctionFragment;
    "trueDistributor()": FunctionFragment;
    "trustToken()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimableReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previousCumulatedRewardPerToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "staked", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalClaimedRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalFarmRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "trueDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "trustToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previousCumulatedRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "staked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalFarmRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trueDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trustToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
    "Stake(address,uint256)": EventFragment;
    "Unstake(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstake"): EventFragment;
}

export class TrueFarm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TrueFarmInterface;

  functions: {
    claim(overrides?: Overrides): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    claimable(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "claimable(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    claimableReward(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "claimableReward(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    cumulativeRewardPerToken(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "cumulativeRewardPerToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    exit(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "exit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,string)"(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
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

    previousCumulatedRewardPerToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "previousCumulatedRewardPerToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    staked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "staked(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    stakingToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "stakingToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    totalClaimedRewards(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalClaimedRewards()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalFarmRewards(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalFarmRewards()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalStaked(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalStaked()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    trueDistributor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "trueDistributor()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    trustToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "trustToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unstake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  claim(overrides?: Overrides): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  claimable(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "claimable(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimableReward(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "claimableReward(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cumulativeRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  "cumulativeRewardPerToken()"(overrides?: CallOverrides): Promise<BigNumber>;

  exit(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "exit(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    _stakingToken: string,
    _trueDistributor: string,
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,string)"(
    _stakingToken: string,
    _trueDistributor: string,
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  previousCumulatedRewardPerToken(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "previousCumulatedRewardPerToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stake(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "staked(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  "stakingToken()"(overrides?: CallOverrides): Promise<string>;

  totalClaimedRewards(overrides?: CallOverrides): Promise<BigNumber>;

  "totalClaimedRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalFarmRewards(overrides?: CallOverrides): Promise<BigNumber>;

  "totalFarmRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  "totalStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

  trueDistributor(overrides?: CallOverrides): Promise<string>;

  "trueDistributor()"(overrides?: CallOverrides): Promise<string>;

  trustToken(overrides?: CallOverrides): Promise<string>;

  "trustToken()"(overrides?: CallOverrides): Promise<string>;

  unstake(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unstake(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    claimable(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "claimable(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimableReward(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimableReward(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    "cumulativeRewardPerToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    exit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "exit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,string)"(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    previousCumulatedRewardPerToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previousCumulatedRewardPerToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    staked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "staked(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    "stakingToken()"(overrides?: CallOverrides): Promise<string>;

    totalClaimedRewards(overrides?: CallOverrides): Promise<BigNumber>;

    "totalClaimedRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalFarmRewards(overrides?: CallOverrides): Promise<BigNumber>;

    "totalFarmRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "totalStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    trueDistributor(overrides?: CallOverrides): Promise<string>;

    "trueDistributor()"(overrides?: CallOverrides): Promise<string>;

    trustToken(overrides?: CallOverrides): Promise<string>;

    "trustToken()"(overrides?: CallOverrides): Promise<string>;

    unstake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "unstake(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Claim(who: string | null, amountClaimed: null): EventFilter;

    Stake(who: string | null, amountStaked: null): EventFilter;

    Unstake(who: string | null, amountUnstaked: null): EventFilter;
  };

  estimateGas: {
    claim(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    claimable(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "claimable(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimableReward(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimableReward(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    "cumulativeRewardPerToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    exit(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "exit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,string)"(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    previousCumulatedRewardPerToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previousCumulatedRewardPerToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    staked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "staked(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "stakingToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimedRewards(overrides?: CallOverrides): Promise<BigNumber>;

    "totalClaimedRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalFarmRewards(overrides?: CallOverrides): Promise<BigNumber>;

    "totalFarmRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "totalStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    trueDistributor(overrides?: CallOverrides): Promise<BigNumber>;

    "trueDistributor()"(overrides?: CallOverrides): Promise<BigNumber>;

    trustToken(overrides?: CallOverrides): Promise<BigNumber>;

    "trustToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "unstake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    claimable(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimable(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimableReward(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimableReward(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeRewardPerToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cumulativeRewardPerToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "exit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,string)"(
      _stakingToken: string,
      _trueDistributor: string,
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previousCumulatedRewardPerToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "previousCumulatedRewardPerToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    staked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "staked(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakingToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalClaimedRewards(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalClaimedRewards()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalFarmRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalFarmRewards()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalStaked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    trueDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "trueDistributor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    trustToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "trustToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unstake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
