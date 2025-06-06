/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace TransferWithAllowance64_32TestsContract {
  export type AllGTCastingValuesStruct = {
    a8_s: BigNumberish;
    b8_s: BigNumberish;
    a16_s: BigNumberish;
    b16_s: BigNumberish;
    a32_s: BigNumberish;
    b32_s: BigNumberish;
    a64_s: BigNumberish;
    b64_s: BigNumberish;
  };

  export type AllGTCastingValuesStructOutput = [
    a8_s: bigint,
    b8_s: bigint,
    a16_s: bigint,
    b16_s: bigint,
    a32_s: bigint,
    b32_s: bigint,
    a64_s: bigint,
    b64_s: bigint
  ] & {
    a8_s: bigint;
    b8_s: bigint;
    a16_s: bigint;
    b16_s: bigint;
    a32_s: bigint;
    b32_s: bigint;
    a64_s: bigint;
    b64_s: bigint;
  };

  export type AllAmountValuesStruct = {
    amount8_s: BigNumberish;
    amount16_s: BigNumberish;
    amount32_s: BigNumberish;
    amount64_s: BigNumberish;
    amount: BigNumberish;
  };

  export type AllAmountValuesStructOutput = [
    amount8_s: bigint,
    amount16_s: bigint,
    amount32_s: bigint,
    amount64_s: bigint,
    amount: bigint
  ] & {
    amount8_s: bigint;
    amount16_s: bigint;
    amount32_s: bigint;
    amount64_s: bigint;
    amount: bigint;
  };

  export type AllAllowanceValuesStruct = {
    allowance8_s: BigNumberish;
    allowance16_s: BigNumberish;
    allowance32_s: BigNumberish;
    allowance64_s: BigNumberish;
    allowance: BigNumberish;
  };

  export type AllAllowanceValuesStructOutput = [
    allowance8_s: bigint,
    allowance16_s: bigint,
    allowance32_s: bigint,
    allowance64_s: bigint,
    allowance: bigint
  ] & {
    allowance8_s: bigint;
    allowance16_s: bigint;
    allowance32_s: bigint;
    allowance64_s: bigint;
    allowance: bigint;
  };
}

export interface TransferWithAllowance64_32TestsContractInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "computeAndCheckTransfer64_16_32"
      | "computeAndCheckTransfer64_32_32"
      | "computeAndCheckTransfer64_64_32"
      | "computeAndCheckTransfer64_8_32"
      | "getResults"
      | "transferWithAllowance64Test"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeAndCheckTransfer64_16_32",
    values: [
      TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAndCheckTransfer64_32_32",
    values: [
      TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAndCheckTransfer64_64_32",
    values: [
      TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAndCheckTransfer64_8_32",
    values: [
      TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getResults",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferWithAllowance64Test",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeAndCheckTransfer64_16_32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAndCheckTransfer64_32_32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAndCheckTransfer64_64_32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAndCheckTransfer64_8_32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getResults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferWithAllowance64Test",
    data: BytesLike
  ): Result;
}

export interface TransferWithAllowance64_32TestsContract extends BaseContract {
  connect(
    runner?: ContractRunner | null
  ): TransferWithAllowance64_32TestsContract;
  waitForDeployment(): Promise<this>;

  interface: TransferWithAllowance64_32TestsContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  computeAndCheckTransfer64_16_32: TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  computeAndCheckTransfer64_32_32: TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  computeAndCheckTransfer64_64_32: TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  computeAndCheckTransfer64_8_32: TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getResults: TypedContractMethod<
    [],
    [[bigint, bigint, boolean, bigint]],
    "view"
  >;

  transferWithAllowance64Test: TypedContractMethod<
    [
      a: BigNumberish,
      b: BigNumberish,
      amount: BigNumberish,
      allowance: BigNumberish
    ],
    [[bigint, bigint, boolean, bigint]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "computeAndCheckTransfer64_16_32"
  ): TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "computeAndCheckTransfer64_32_32"
  ): TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "computeAndCheckTransfer64_64_32"
  ): TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "computeAndCheckTransfer64_8_32"
  ): TypedContractMethod<
    [
      allGTCastingValues: TransferWithAllowance64_32TestsContract.AllGTCastingValuesStruct,
      allAmountValues: TransferWithAllowance64_32TestsContract.AllAmountValuesStruct,
      allAllowanceValues: TransferWithAllowance64_32TestsContract.AllAllowanceValuesStruct,
      new_a: BigNumberish,
      new_b: BigNumberish,
      res: boolean,
      new_allowance: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getResults"
  ): TypedContractMethod<[], [[bigint, bigint, boolean, bigint]], "view">;
  getFunction(
    nameOrSignature: "transferWithAllowance64Test"
  ): TypedContractMethod<
    [
      a: BigNumberish,
      b: BigNumberish,
      amount: BigNumberish,
      allowance: BigNumberish
    ],
    [[bigint, bigint, boolean, bigint]],
    "nonpayable"
  >;

  filters: {};
}
