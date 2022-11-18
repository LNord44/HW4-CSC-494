const path = require('path');
const fs = require('fs');
const solc = require('solc');

const ticketPath = path.resolve(__dirname, 'contract', 'ticketsale.sol');
const source = fs.readFileSync(ticketPath, 'UTF-8');

//console.log(solc.compile(source,1).contracts[':Inbox']);
//module.exports = solc.compile(source, 1).contracts[':Inbox'];

let input = {
    language: "Solidity",
    sources: {
      "ticketsale.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode"],
        },
      },
    },
  };
  
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  const contracts = output.contracts["ticketsale.sol"];
  
  console.log(contracts.ticketsale);