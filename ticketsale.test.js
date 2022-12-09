const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const {abi, bytecode} = require('../compile');

let ticketsale;
let accounts;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    ticketsale = await new web3.eth.Contract(abi)
      .deploy({
        data: bytecode,
        arguments: [100,1],
      })
      .send({ from: accounts[0], gasPrice: 8000000000, gas: 4700000});
  });

  describe("Ticket Sale", () => {
    it("deploys a contract with owner", () => {
      assert.ok(ticketsale.options.address);
    });
    it("verify purchase", async () => {
        ticketsale.methods.buyTicket(2).send({from: accounts[1], value: 1, gasPrice: 8000000000, gas: 4700000});
        const ticketId =await ticketsale.methods.getTicketID(accounts[1]).call();
        assert.equal(ticketId,2);
    })
  });

  /*
  describe("Ticket Sale", () => {
    it("deploys a contract with owner", () => {
      assert.ok(ticketsale.options.address);
    });
    it("verify purchase", async () => {
        ticketsale.methods.buyTicket(2).send({from: accounts[1], value: 1, gasPrice: 8000000000, gas: 4700000});
        const ticketId =await ticketsale.methods.getTicketID(accounts[1]).call();
        assert.equal(ticketId,2);
    })
  });
  */

  /*
  describe("Ticket Sale", () => {
    it("deploys a contract with owner", () => {
      assert.ok(ticketsale.options.address);
    });
    it("verify purchase", async () => {
        ticketsale.methods.buyTicket(2).send({from: accounts[1], value: 1, gasPrice: 8000000000, gas: 4700000});
        const ticketId =await ticketsale.methods.getTicketID(accounts[1]).call();
        assert.equal(ticketId,2);
    })
  });
  */

  // . send    constructor, buyTicket then getticketId to verify, offer and accept swap
  // . call     getTicketOf,
  //it("returns ticket number owened by address", async () =>{
  //})
  // one person can't buy multiple
  // one ticket can't be sold twice.
  // offer swap
    // call offer swap, call accept swap, get ticket of person #1, #2 to verify
    // assert.equal(ticketId,5) for after swap
