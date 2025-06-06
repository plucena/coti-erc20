/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AccountOnboard,
  AccountOnboardInterface,
} from "../../../contracts/onboard/AccountOnboard";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "userKey1",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "userKey2",
        type: "bytes",
      },
    ],
    name: "AccountOnboarded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signedEK",
        type: "bytes",
      },
    ],
    name: "onboardAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610748806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063afaea1bd14610030575b600080fd5b61004361003e366004610470565b610045565b005b600080610054868686866100b0565b915091503373ffffffffffffffffffffffffffffffffffffffff167ffc83efa19b7c2bc399a672494bb0af52f9bbd678357edf30e55b5ac4e65878ba83836040516100a092919061054a565b60405180910390a2505050505050565b60608060006100bf86856105a7565b67ffffffffffffffff8111156100d7576100d76105c0565b6040519080825280601f01601f191660200182016040528015610101576020820181803683370190505b50905060005b8481101561017e57858582818110610121576101216105ef565b9050013560f81c60f81b82828151811061013d5761013d6105ef565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350806101768161061e565b915050610107565b5060005b868110156102205787878281811061019c5761019c6105ef565b909101357fff00000000000000000000000000000000000000000000000000000000000000169050826101cf83886105a7565b815181106101df576101df6105ef565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350806102188161061e565b915050610182565b506040517fa85f0ca200000000000000000000000000000000000000000000000000000000815260009060649063a85f0ca290610261908590600401610656565b6000604051808303816000875af1158015610280573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102c69190810190610670565b604080516101008082526101208201909252919250600091906020820181803683375050604080516101008082526101208201909252929350600092915060208201818036833701905050905060005b825181101561038f57838181518110610331576103316105ef565b602001015160f81c60f81b83828151811061034e5761034e6105ef565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350806103878161061e565b915050610316565b5060005b815181101561041757836103a9610100836105a7565b815181106103b9576103b96105ef565b602001015160f81c60f81b8282815181106103d6576103d66105ef565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508061040f8161061e565b915050610393565b5090999098509650505050505050565b60008083601f84011261043957600080fd5b50813567ffffffffffffffff81111561045157600080fd5b60208301915083602082850101111561046957600080fd5b9250929050565b6000806000806040858703121561048657600080fd5b843567ffffffffffffffff8082111561049e57600080fd5b6104aa88838901610427565b909650945060208701359150808211156104c357600080fd5b506104d087828801610427565b95989497509550505050565b60005b838110156104f75781810151838201526020016104df565b50506000910152565b600081518084526105188160208601602086016104dc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60408152600061055d6040830185610500565b828103602084015261056f8185610500565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156105ba576105ba610578565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361064f5761064f610578565b5060010190565b6020815260006106696020830184610500565b9392505050565b60006020828403121561068257600080fd5b815167ffffffffffffffff8082111561069a57600080fd5b818401915084601f8301126106ae57600080fd5b8151818111156106c0576106c06105c0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610706576107066105c0565b8160405282815287602084870101111561071f57600080fd5b6107308360208301602088016104dc565b97965050505050505056fea164736f6c6343000814000a";

type AccountOnboardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountOnboardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountOnboard__factory extends ContractFactory {
  constructor(...args: AccountOnboardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AccountOnboard & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AccountOnboard__factory {
    return super.connect(runner) as AccountOnboard__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountOnboardInterface {
    return new Interface(_abi) as AccountOnboardInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AccountOnboard {
    return new Contract(address, _abi, runner) as unknown as AccountOnboard;
  }
}
