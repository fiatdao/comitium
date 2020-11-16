/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { VoteLock } from "./VoteLock";

export class VoteLockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _bond: string,
    _cv: string,
    _treasury: string,
    overrides?: Overrides
  ): Promise<VoteLock> {
    return super.deploy(_bond, _cv, _treasury, overrides || {}) as Promise<
      VoteLock
    >;
  }
  getDeployTransaction(
    _bond: string,
    _cv: string,
    _treasury: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bond, _cv, _treasury, overrides || {});
  }
  attach(address: string): VoteLock {
    return super.attach(address) as VoteLock;
  }
  connect(signer: Signer): VoteLockFactory {
    return super.connect(signer) as VoteLockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VoteLock {
    return new Contract(address, _abi, signerOrProvider) as VoteLock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bond",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MAX_LOCK",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "balanceAtTs",
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
        name: "user",
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
    name: "bondCirculatingSupply",
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
    name: "bondStaked",
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
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "bondStakedAtTs",
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
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "delegatedPower",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "delegatedPowerAtTs",
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
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lockCreatorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "multiplierAtTs",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "stakeAtTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address",
          },
        ],
        internalType: "struct VoteLock.Stake",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stopDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "totalVotingPowerAtTs",
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
        name: "user",
        type: "address",
      },
    ],
    name: "userDelegatedTo",
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
        name: "user",
        type: "address",
      },
    ],
    name: "userLockedUntil",
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
        name: "user",
        type: "address",
      },
    ],
    name: "votingPower",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "votingPowerAtTs",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002ab038038062002ab083398181016040528101906200003791906200012b565b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506969e10de76676d0800000600681905550505050620001cf565b6000815190506200012581620001b5565b92915050565b6000806000606084860312156200014157600080fd5b6000620001518682870162000114565b9350506020620001648682870162000114565b9250506040620001778682870162000114565b9150509250925092565b60006200018e8262000195565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001c08162000181565b8114620001cc57600080fd5b50565b6128d180620001df6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806371ef7663116100b8578063c07473f61161007c578063c07473f614610372578063c2077e81146103a2578063cbf8eda9146103c0578063d265a115146103f0578063dd46706414610420578063f77f962f1461043c57610137565b806371ef7663146102aa5780637a141096146102c6578063b6b55f25146102f6578063bef624d814610312578063bf0ae48c1461034257610137565b806350f3282b116100ff57806350f3282b146102065780635c19a95c1461023657806365a5d5f0146102525780636f1215781461027057806370a082311461027a57610137565b8063169df0641461013c57806318ab6a3c1461016c5780632082b4d11461019c5780632e1a7d4d146101ba578063417edd4d146101d6575b600080fd5b61015660048036038101906101519190612057565b61046c565b604051610163919061275d565b60405180910390f35b61018660048036038101906101819190612080565b61047f565b6040516101939190612742565b60405180910390f35b6101a461070e565b6040516101b1919061275d565b60405180910390f35b6101d460048036038101906101cf91906120e5565b610963565b005b6101f060048036038101906101eb9190612080565b610c16565b6040516101fd919061275d565b60405180910390f35b610220600480360381019061021b91906120e5565b610c3a565b60405161022d919061275d565b60405180910390f35b610250600480360381019061024b9190612057565b610c41565b005b61025a610e87565b604051610267919061275d565b60405180910390f35b610278610e8f565b005b610294600480360381019061028f9190612057565b610e9b565b6040516102a1919061275d565b60405180910390f35b6102c460048036038101906102bf9190612080565b610eae565b005b6102e060048036038101906102db9190612080565b610eb2565b6040516102ed919061275d565b60405180910390f35b610310600480360381019061030b91906120e5565b610f75565b005b61032c60048036038101906103279190612057565b61128b565b604051610339919061251c565b60405180910390f35b61035c60048036038101906103579190612057565b6112ae565b604051610369919061275d565b60405180910390f35b61038c60048036038101906103879190612057565b6112d1565b604051610399919061275d565b60405180910390f35b6103aa6112e4565b6040516103b7919061275d565b60405180910390f35b6103da60048036038101906103d59190612080565b6112f4565b6040516103e7919061275d565b60405180910390f35b61040a60048036038101906104059190612080565b6113c1565b604051610417919061275d565b60405180910390f35b61043a600480360381019061043591906120e5565b61151d565b005b610456600480360381019061045191906120e5565b61166d565b604051610463919061275d565b60405180910390f35b600061047882426113c1565b9050919050565b610487611fc5565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000818054905014806104f95750806000815481106104e457fe5b90600052602060002090600402016000015483105b1561053f57604051806080016040528042815260200160008152602001428152602001600073ffffffffffffffffffffffffffffffffffffffff16815250915050610708565b6000806001838054905003905082818154811061055857fe5b90600052602060002090600402016000015485106106135782818154811061057c57fe5b90600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509350505050610708565b5b8181111561066957600060026001848401018161062d57fe5b0490508584828154811061063d57fe5b9060005260206000209060040201600001541161065c57809250610663565b6001810391505b50610614565b82828154811061067557fe5b90600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505093505050505b92915050565b60008062093a80635f8cd70042038161072357fe5b049050606481111561073457606490505b6000610760826904a89f54ef0121c00000026a01d1de3d2d5c712f00000061178890919063ffffffff16565b90506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016107e1919061251c565b60206040518083038186803b1580156107f957600080fd5b505afa15801561080d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610831919061210e565b90506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016108b2919061251c565b60206040518083038186803b1580156108ca57600080fd5b505afa1580156108de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610902919061210e565b905061095a60065461094c8361093e86610930896a084595161401484a00000061178890919063ffffffff16565b61178890919063ffffffff16565b61178890919063ffffffff16565b61178890919063ffffffff16565b94505050505090565b600081116109a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099d90612622565b60405180910390fd5b426109b0336112ae565b11156109f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e8906126a2565b60405180910390fd5b60006109fc33610e9b565b905081811015610a41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3890612642565b60405180910390fd5b610a9a6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610a95848461178890919063ffffffff16565b6117d2565b610abd610ab883610aaa4261166d565b61178890919063ffffffff16565b6119e3565b6000610ac83361128b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b6157610b60600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610b5b85610b4d8561046c565b61178890919063ffffffff16565b611aad565b5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401610bbe929190612597565b602060405180830381600087803b158015610bd857600080fd5b505af1158015610bec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1091906120bc565b50505050565b6000610c20611fc5565b610c2a848461047f565b9050806020015191505092915050565b6000919050565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610cb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca790612662565b60405180910390fd5b6000610cbb33610e9b565b905060008111610d00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf790612702565b60405180910390fd5b6000610d0b3361128b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610da457610da3600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610d9e84610d908561046c565b61178890919063ffffffff16565b611aad565b5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610e3b57610e3a600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610e3584610e278761046c565b611b7690919063ffffffff16565b611aad565b5b610e826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084611bcb565b505050565b6301e1338081565b610e996000610c41565b565b6000610ea78242610c16565b9050919050565b5050565b6000610ebc611fc5565b610ec6848461047f565b905080604001518310610ee457670de0b6b3a7640000915050610f6f565b60008382604001510390506301e133808110610f1f57610f166002670de0b6b3a7640000611d1a90919063ffffffff16565b92505050610f6f565b610f6a610f536301e13380610f45670de0b6b3a764000085611d1a90919063ffffffff16565b611d8a90919063ffffffff16565b670de0b6b3a7640000611b7690919063ffffffff16565b925050505b92915050565b60008111610fb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610faf90612622565b60405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401611017929190612537565b60206040518083038186803b15801561102f57600080fd5b505afa158015611043573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611067919061210e565b9050818110156110ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a390612602565b60405180910390fd5b61110d6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611108846110fa33610e9b565b611b7690919063ffffffff16565b6117d2565b61113061112b8361111d4261166d565b611b7690919063ffffffff16565b6119e3565b600061113b3361128b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111d4576111d3600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206111ce856111c08561046c565b611b7690919063ffffffff16565b611aad565b5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b815260040161123393929190612560565b602060405180830381600087803b15801561124d57600080fd5b505af1158015611261573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128591906120bc565b50505050565b6000611295611fc5565b61129f834261047f565b90508060600151915050919050565b60006112b8611fc5565b6112c2834261047f565b90508060400151915050919050565b60006112dd82426112f4565b9050919050565b60006112ef4261166d565b905090565b60006112fe611fc5565b611308848461047f565b905060008073ffffffffffffffffffffffffffffffffffffffff16826060015173ffffffffffffffffffffffffffffffffffffffff161461134c5760009050611395565b60008260200151905060006113618787610eb2565b9050611390670de0b6b3a76400006113828385611d1a90919063ffffffff16565b611d8a90919063ffffffff16565b925050505b60006113a186866113c1565b90506113b68183611b7690919063ffffffff16565b935050505092915050565b600080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008180549050148061143557508060008154811061142057fe5b90600052602060002090600202016000015483105b15611444576000915050611517565b6000806001838054905003905082818154811061145d57fe5b906000526020600020906002020160000154851061149d5782818154811061148157fe5b9060005260206000209060020201600101549350505050611517565b5b818111156114f35760006002600184840101816114b757fe5b049050858482815481106114c757fe5b906000526020600020906002020160000154116114e6578092506114ed565b6001810391505b5061149e565b8282815481106114ff57fe5b90600052602060002090600202016001015493505050505b92915050565b6301e133804201811115611566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155d90612682565b60405180910390fd5b600061157133610e9b565b116115b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a890612722565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160018380549050038154811061160857fe5b906000526020600020906004020190508060020154831161165e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611655906126c2565b60405180910390fd5b6116688284611dd4565b505050565b60008060018054905014806116a05750600160008154811061168b57fe5b90600052602060002090600202016000015482105b156116ae5760009050611783565b60008060018080549050039050600181815481106116c857fe5b906000526020600020906002020160000154841061170857600181815481106116ed57fe5b90600052602060002090600202016001015492505050611783565b5b8181111561175f57600060026001848401018161172257fe5b049050846001828154811061173357fe5b9060005260206000209060020201600001541161175257809250611759565b6001810391505b50611709565b6001828154811061176c57fe5b906000526020600020906002020160010154925050505b919050565b60006117ca83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611f09565b905092915050565b6000828054905014156118ad57816040518060800160405280428152602001838152602001428152602001600073ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506119df565b6000826001848054905003815481106118c257fe5b9060005260206000209060040201905042816000015414156118ec578181600101819055506119dd565b826040518060800160405280428152602001848152602001836002015481526020018360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505b505b5050565b60006001805490501480611a1a57504260018080805490500381548110611a0657fe5b906000526020600020906002020160000154105b15611a7a576001604051806040016040528042815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050611aaa565b600060018080805490500381548110611a8f57fe5b90600052602060002090600202019050818160010181905550505b50565b600082805490501480611ae357504282600184805490500381548110611acf57fe5b906000526020600020906002020160000154105b15611b425781604051806040016040528042815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050611b72565b600082600184805490500381548110611b5757fe5b90600052602060002090600202019050818160010181905550505b5050565b600080828401905083811015611bc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb8906125e2565b60405180910390fd5b8091505092915050565b600082600184805490500381548110611be057fe5b906000526020600020906004020190504281600001541015611cd15782604051806080016040528042815260200183600101548152602001836002015481526020018473ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611d15565b818160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050565b600080831415611d2d5760009050611d84565b6000828402905082848281611d3e57fe5b0414611d7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d76906126e2565b60405180910390fd5b809150505b92915050565b6000611dcc83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611f64565b905092915050565b600082600184805490500381548110611de957fe5b906000526020600020906004020190504281600001541015611efa57826040518060800160405280428152602001836001015481526020018481526020018360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611f04565b8181600201819055505b505050565b6000838311158290611f51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f4891906125c0565b60405180910390fd5b5060008385039050809150509392505050565b60008083118290611fab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa291906125c0565b60405180910390fd5b506000838581611fb757fe5b049050809150509392505050565b6040518060800160405280600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60008135905061201281612856565b92915050565b6000815190506120278161286d565b92915050565b60008135905061203c81612884565b92915050565b60008151905061205181612884565b92915050565b60006020828403121561206957600080fd5b600061207784828501612003565b91505092915050565b6000806040838503121561209357600080fd5b60006120a185828601612003565b92505060206120b28582860161202d565b9150509250929050565b6000602082840312156120ce57600080fd5b60006120dc84828501612018565b91505092915050565b6000602082840312156120f757600080fd5b60006121058482850161202d565b91505092915050565b60006020828403121561212057600080fd5b600061212e84828501612042565b91505092915050565b612140816127dc565b82525050565b61214f81612794565b82525050565b61215e81612794565b82525050565b600061216f82612778565b6121798185612783565b9350612189818560208601612812565b61219281612845565b840191505092915050565b60006121aa601b83612783565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b60006121ea601983612783565b91507f546f6b656e20616c6c6f77616e636520746f6f20736d616c6c000000000000006000830152602082019050919050565b600061222a601d83612783565b91507f416d6f756e74206d7573742062652067726561746572207468616e20300000006000830152602082019050919050565b600061226a601483612783565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b60006122aa601683612783565b91507f43616e27742064656c656761746520746f2073656c66000000000000000000006000830152602082019050919050565b60006122ea601183612783565b91507f54696d657374616d7020746f6f206269670000000000000000000000000000006000830152602082019050919050565b600061232a601683612783565b91507f557365722062616c616e6365206973206c6f636b6564000000000000000000006000830152602082019050919050565b600061236a602f83612783565b91507f4e65772074696d657374616d70206c6f776572207468616e2063757272656e7460008301527f206c6f636b2074696d657374616d7000000000000000000000000000000000006020830152604082019050919050565b60006123d0602183612783565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612436601683612783565b91507f4e6f2062616c616e636520746f2064656c6567617465000000000000000000006000830152602082019050919050565b6000612476601583612783565b91507f53656e64657220686173206e6f2062616c616e636500000000000000000000006000830152602082019050919050565b6080820160008201516124bf60008501826124fe565b5060208201516124d260208501826124fe565b5060408201516124e560408501826124fe565b5060608201516124f86060850182612146565b50505050565b612507816127d2565b82525050565b612516816127d2565b82525050565b60006020820190506125316000830184612155565b92915050565b600060408201905061254c6000830185612137565b6125596020830184612155565b9392505050565b60006060820190506125756000830186612137565b6125826020830185612155565b61258f604083018461250d565b949350505050565b60006040820190506125ac6000830185612137565b6125b9602083018461250d565b9392505050565b600060208201905081810360008301526125da8184612164565b905092915050565b600060208201905081810360008301526125fb8161219d565b9050919050565b6000602082019050818103600083015261261b816121dd565b9050919050565b6000602082019050818103600083015261263b8161221d565b9050919050565b6000602082019050818103600083015261265b8161225d565b9050919050565b6000602082019050818103600083015261267b8161229d565b9050919050565b6000602082019050818103600083015261269b816122dd565b9050919050565b600060208201905081810360008301526126bb8161231d565b9050919050565b600060208201905081810360008301526126db8161235d565b9050919050565b600060208201905081810360008301526126fb816123c3565b9050919050565b6000602082019050818103600083015261271b81612429565b9050919050565b6000602082019050818103600083015261273b81612469565b9050919050565b600060808201905061275760008301846124a9565b92915050565b6000602082019050612772600083018461250d565b92915050565b600081519050919050565b600082825260208201905092915050565b600061279f826127b2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006127e7826127ee565b9050919050565b60006127f982612800565b9050919050565b600061280b826127b2565b9050919050565b60005b83811015612830578082015181840152602081019050612815565b8381111561283f576000848401525b50505050565b6000601f19601f8301169050919050565b61285f81612794565b811461286a57600080fd5b50565b612876816127a6565b811461288157600080fd5b50565b61288d816127d2565b811461289857600080fd5b5056fea264697066735822122094d02ecc2a678969e9f61660ff1e833888e418e8052f7171dabe4fdd8fd0504f64736f6c63430007030033";