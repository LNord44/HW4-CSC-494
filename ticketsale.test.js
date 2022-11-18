const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const {abi, bytecode} = require('../compile');

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    lottery = await new web3.eth.Contract(abi)
      .deploy({ data: bytecode })
      .send({ from: accounts[0], gas: "1000000" });
  });

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    ottery = await new web3.eth.Contract(abi)
      .deploy({
        data: bytecode,
      })
      .send({ from: accounts[0], gasPrice: 8000000000, gas: 4700000});
  });

  describe("Ticket Sale", () => {
    it("deploys a contract with owner", () => {
      assert.ok(ticketsale.options.address);
    });
    it("verify purchase", async () => {
        ticektsale.methods.buyTicket(2).send({from: accounts[1], value: 1, gasPrice: 150000, gas: 477000});
        const ticketId =await ticketSale.methods.getTicketID(accounts([1]).call());
        //assert.equal(ticketId,2);
    })
  });