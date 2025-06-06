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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  PrivateERC20Mock,
  PrivateERC20MockInterface,
} from "../../../../../contracts/mocks/token/PrivateERC20/PrivateERC20Mock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
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
        internalType: "ctUint64",
        name: "ownerValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "ctUint64",
        name: "spenderValue",
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
        internalType: "ctUint64",
        name: "senderValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "ctUint64",
        name: "receiverValue",
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
        name: "account",
        type: "address",
      },
    ],
    name: "accountEncryptionAddress",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isSpender",
        type: "bool",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "gtUint64",
        name: "",
        type: "uint256",
      },
    ],
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
        components: [
          {
            internalType: "ctUint64",
            name: "ciphertext",
            type: "uint256",
          },
          {
            internalType: "ctUint64",
            name: "ownerCiphertext",
            type: "uint256",
          },
          {
            internalType: "ctUint64",
            name: "spenderCiphertext",
            type: "uint256",
          },
        ],
        internalType: "struct IPrivateERC20.Allowance",
        name: "",
        type: "tuple",
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
        internalType: "gtUint64",
        name: "value",
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
        name: "spender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "ctUint64",
            name: "ciphertext",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct itUint64",
        name: "value",
        type: "tuple",
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
        internalType: "ctUint64",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "balanceOf",
    outputs: [
      {
        internalType: "gtUint64",
        name: "",
        type: "uint256",
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
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64",
      },
    ],
    name: "burn",
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
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64",
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
      {
        internalType: "bool",
        name: "isSpender",
        type: "bool",
      },
    ],
    name: "reencryptAllowance",
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
        name: "offBoardAddress",
        type: "address",
      },
    ],
    name: "setAccountEncryptionAddress",
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
        name: "to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "ctUint64",
            name: "ciphertext",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct itUint64",
        name: "value",
        type: "tuple",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "gtBool",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "gtUint64",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "gtBool",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "ctUint64",
            name: "ciphertext",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct itUint64",
        name: "value",
        type: "tuple",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "gtBool",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "gtUint64",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "gtBool",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601081526020016f5072697661746545524332304d6f636b60801b81525060405180604001604052806005815260200164504532304d60d81b81525081600490816200006a919062000127565b50600562000079828262000127565b505050620001f3565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000ad57607f821691505b602082108103620000ce57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200012257600081815260208120601f850160051c81016020861015620000fd5750805b601f850160051c820191505b818110156200011e5782815560010162000109565b5050505b505050565b81516001600160401b0381111562000143576200014362000082565b6200015b8162000154845462000098565b84620000d4565b602080601f8311600181146200019357600084156200017a5750858301515b600019600386901b1c1916600185901b1785556200011e565b600085815260208120601f198616915b82811015620001c457888601518255948401946001909101908401620001a3565b5085821015620001e35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61194a80620002036000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063313ce567116100cd57806396b2db3811610081578063a7d9ad6a11610066578063a7d9ad6a146102f9578063a9059cbb1461030c578063dd62ed3e1461031f57600080fd5b806396b2db38146102d3578063a42c0af9146102e657600080fd5b8063722713f7116100b2578063722713f7146102b05780638269bcc3146102b857806395d89b41146102cb57600080fd5b8063313ce5671461026757806370a082311461027657600080fd5b806313691c761161012457806323b872dd1161010957806323b872dd1461022e57806326a9b3f1146102415780632893c5b01461025457600080fd5b806313691c761461021257806318160ddd1461022757600080fd5b8063043d20851461015657806306fdde03146101b957806308a2032a146101ce578063095ea7b3146101ef575b600080fd5b61018f61016436600461146b565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152602081905260409020541690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6101c1610354565b6040516101b091906114ea565b6101e16101dc366004611515565b6103e6565b6040519081526020016101b0565b6102026101fd366004611573565b61041d565b60405190151581526020016101b0565b61022561022036600461159d565b610437565b005b60006101e1565b6101e161023c3660046115e1565b61044e565b61020261024f36600461161d565b610470565b61022561026236600461159d565b610524565b604051600681526020016101b0565b6101e161028436600461146b565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120015490565b6101e1610536565b6102026102c636600461146b565b610546565b6101c16105ca565b6101e16102e136600461161d565b6105d9565b6102026102f436600461164e565b61065c565b6101e161030736600461164e565b610684565b6101e161031a366004611573565b6106a1565b61033261032d36600461169c565b6106b7565b60408051825181526020808401519082015291810151908201526060016101b0565b606060048054610363906116cf565b80601f016020809104026020016040519081016040528092919081815260200182805461038f906116cf565b80156103dc5780601f106103b1576101008083540402835291602001916103dc565b820191906000526020600020905b8154815290600101906020018083116103bf57829003601f168201915b5050505050905090565b600033816103fb6103f6856117c3565b610736565b90506104088683836107e2565b6104138686836108cf565b9695505050505050565b60003361042b818585610981565b60019150505b92915050565b6104498261044483610b93565b610c03565b505050565b60003361045c8582856107e2565b6104678585856108cf565b95945050505050565b60008061047c33610c68565b905082156104d45733600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff88168452909152902080546104c9906104c390610c9e565b83610cbb565b60019091015561042b565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260026020908152604080832033845290915290208054610513906104c390610c9e565b600290910155600191505092915050565b6104498261053183610b93565b610da0565b600061054133610dfe565b905090565b60008061055233610dfe565b33600090815260208190526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861617905590506105ab8184610cbb565b3360009081526001602081905260409091208101919091559392505050565b606060058054610363906116cf565b600081156106225733600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915290205461061b90610c9e565b9050610431565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020908152604080832033845290915290205461061b90610c9e565b6000338161066c6103f6856117c3565b9050610679828683610981565b506001949350505050565b600033816106946103f6856117c3565b90506104678286836108cf565b6000336106af8185856108cf565b949350505050565b6106db60405180606001604052806000815260200160008152602001600081525090565b5073ffffffffffffffffffffffffffffffffffffffff91821660009081526002602081815260408084209490951683529283529083902083516060810185528154815260018201549381019390935201549181019190915290565b805160208201516040517fe4f36e1000000000000000000000000000000000000000000000000000000000815260009260649263e4f36e109261079f927f04000000000000000000000000000000000000000000000000000000000000009290916004016118b5565b6020604051808303816000875af11580156107be573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043191906118f6565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081205461081190610c9e565b73ffffffffffffffffffffffffffffffffffffffff80861660009081526002602090815260408083209388168352929052908120549192509061085390610c9e565b905060006108718261086c67ffffffffffffffff610b93565b610e2d565b9050600061087f8486610ead565b9050600061088d8487610ead565b905060006108b76108a7856108a28686610ec2565b610ec2565b6108b1878a610ed6565b87610eeb565b90506108c4898983610981565b505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416610926576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610976576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161091d565b6106af848484610fb0565b73ffffffffffffffffffffffffffffffffffffffff83166109d1576040517fe602df050000000000000000000000000000000000000000000000000000000081526000600482015260240161091d565b73ffffffffffffffffffffffffffffffffffffffff8216610a21576040517f94280d620000000000000000000000000000000000000000000000000000000081526000600482015260240161091d565b6000610a2c82611142565b90506000610a3985610c68565b90506000610a478483610cbb565b9050610a5285610c68565b91506000610a608584610cbb565b9050604051806060016040528085815260200183815260200182815250600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155604082015181600201559050508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fb3fd5071835887567a0671151121894ddccc2842f1d10bedad13e0d17cace9a78484604051610b82929190918252602082015260400190565b60405180910390a350505050505050565b6040517fd9b60b600000000000000000000000000000000000000000000000000000000081527f0400000000000000000000000000000000000000000000000000000000000000600482015267ffffffffffffffff8216602482015260009060649063d9b60b609060440161079f565b600073ffffffffffffffffffffffffffffffffffffffff8316610c55576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526000600482015260240161091d565b610c6183600084610fb0565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff80821660009081526020819052604081205490911680610431575090919050565b600081600003610cb2576104316000610b93565b6104318261119c565b60408051606083901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660208201528151601481830301815260348201928390527f3c6f0e6800000000000000000000000000000000000000000000000000000000909252600091606491633c6f0e6891610d5d917f04000000000000000000000000000000000000000000000000000000000000009188916038016118b5565b6020604051808303816000875af1158015610d7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6191906118f6565b600073ffffffffffffffffffffffffffffffffffffffff8316610df2576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161091d565b610c6160008484610fb0565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260016020526040812054610c6181610c9e565b60006064637c12a1eb610e42600480856111ac565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681527fffffff000000000000000000000000000000000000000000000000000000000090911660048201526024810186905260448101859052606401610d5d565b6000606463dd148693610e42600480856111ac565b6000606463fb7da35f610e428380806111ac565b6000606463371d1bf2610e42600480856111ac565b600060646320cc408d610f00600480856111ac565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681527fffffff000000000000000000000000000000000000000000000000000000000090911660048201526024810187905260448101869052606481018590526084016020604051808303816000875af1158015610f8c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106af91906118f6565b6000808281610fbf6001611209565b905073ffffffffffffffffffffffffffffffffffffffff8716611023576000610fe9600354610c9e565b9050610ff58187611268565b905061100081611142565b600355600061100e88610dfe565b905061101a8188611268565b9450505061106b565b600061102e88610dfe565b9050600061103b88610dfe565b9050600061104a83838a61127d565b9097509450905061105b8a8261133b565b6110658683610ed6565b94505050505b73ffffffffffffffffffffffffffffffffffffffff86166110b3576000611093600354610c9e565b905061109f8184610ed6565b90506110aa81611142565b600355506110bd565b6110bd868461133b565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f9ed053bb818ff08b8353cd46f78db1f0799f31c9e4458fdb425c10eccd2efc44611116858b610cbb565b611120868b610cbb565b6040805192835260208301919091520160405180910390a39695505050505050565b6000606463c50c9c0260045b60f81b846040518363ffffffff1660e01b815260040161079f9291907fff00000000000000000000000000000000000000000000000000000000000000929092168252602082015260400190565b6000606463d2c135e5600461114e565b60008160028111156111c0576111c0611886565b60ff1660088460048111156111d7576111d7611886565b61ffff16901b61ffff1660108660048111156111f5576111f5611886565b62ffffff16901b171760e81b949350505050565b6000808261121857600061121b565b60015b6040517fd9b60b600000000000000000000000000000000000000000000000000000000081526000600482015260ff9190911660248201819052915060649063d9b60b6090604401610d5d565b60006064638c5d0150610e42600480856111ac565b6000808080808060646356c72d28611298600480808661138e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b81168252919091166004820152602481018c9052604481018b9052606481018a90526084016060604051808303816000875af1158015611305573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611329919061190f565b919b909a509098509650505050505050565b600061134683610c68565b9050611352828261140e565b73ffffffffffffffffffffffffffffffffffffffff90931660009081526001602081815260409092208551815594909101519301929092555050565b60008160028111156113a2576113a2611886565b60ff1660088460048111156113b9576113b9611886565b61ffff16901b61ffff1660108660048111156113d7576113d7611886565b62ffffff16901b62ffffff1660188860048111156113f7576113f7611886565b63ffffffff16901b17171760e01b95945050505050565b604080518082019091526000808252602082015261142b83611142565b81526114378383610cbb565b602082015292915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461146657600080fd5b919050565b60006020828403121561147d57600080fd5b610c6182611442565b6000815180845260005b818110156114ac57602081850181015186830182015201611490565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000610c616020830184611486565b60006040828403121561150f57600080fd5b50919050565b60008060006060848603121561152a57600080fd5b61153384611442565b925061154160208501611442565b9150604084013567ffffffffffffffff81111561155d57600080fd5b611569868287016114fd565b9150509250925092565b6000806040838503121561158657600080fd5b61158f83611442565b946020939093013593505050565b600080604083850312156115b057600080fd5b6115b983611442565b9150602083013567ffffffffffffffff811681146115d657600080fd5b809150509250929050565b6000806000606084860312156115f657600080fd5b6115ff84611442565b925061160d60208501611442565b9150604084013590509250925092565b6000806040838503121561163057600080fd5b61163983611442565b9150602083013580151581146115d657600080fd5b6000806040838503121561166157600080fd5b61166a83611442565b9150602083013567ffffffffffffffff81111561168657600080fd5b611692858286016114fd565b9150509250929050565b600080604083850312156116af57600080fd5b6116b883611442565b91506116c660208401611442565b90509250929050565b600181811c908216806116e357607f821691505b60208210810361150f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561176e5761176e61171c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117bb576117bb61171c565b604052919050565b6000604082360312156117d557600080fd5b6117dd61174b565b8235815260208084013567ffffffffffffffff808211156117fd57600080fd5b9085019036601f83011261181057600080fd5b8135818111156118225761182261171c565b611852847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611774565b9150808252368482850101111561186857600080fd5b80848401858401376000908201840152918301919091525092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7fff00000000000000000000000000000000000000000000000000000000000000841681528260208201526060604082015260006104676060830184611486565b60006020828403121561190857600080fd5b5051919050565b60008060006060848603121561192457600080fd5b835192506020840151915060408401519050925092509256fea164736f6c6343000814000a";

type PrivateERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrivateERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrivateERC20Mock__factory extends ContractFactory {
  constructor(...args: PrivateERC20MockConstructorParams) {
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
      PrivateERC20Mock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PrivateERC20Mock__factory {
    return super.connect(runner) as PrivateERC20Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrivateERC20MockInterface {
    return new Interface(_abi) as PrivateERC20MockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PrivateERC20Mock {
    return new Contract(address, _abi, runner) as unknown as PrivateERC20Mock;
  }
}
