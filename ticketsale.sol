pragma solidity ^0.8.17;

contract ticketsale {
    
    // our variables

    address public manager;
    uint public price;
    uint public numTickets;

    /*
    struct Ticket {
        uint ticketId;
        bool status;
        address owner;
    }
    */

    //Ticket[] public ticketList;

    mapping(address => uint) public ticketOwners;
    mapping(address => address) public swapMap;

    constructor(uint numT, uint p) public {
        numTickets = numT;
        price = p;
        manager = msg.sender;
    }

    function buyTicket(uint ticketId) public payable {
        // this requires makes sure that when this function is called the user has no ticket
        require(ticketOwners[msg.sender] == 0);

        // this makes sure the new ticket is within the correct range of tickets
        require(ticketId > 0 && ticketId <= numTickets);

        // this assigns the new ticket to a correct amount of Gas
        require(msg.value == price);

        //assigning the ID and sending it
        ticketOwners[msg.sender] = ticketId;

    }

    function getTicketID(address person) public view returns (uint) {
        // this just returns the instance of their ticketID
        return ticketOwners[person];
    }

    function offerSwap (address partner) public {
        // offering the swap and assigning the address to partner
        swapMap[msg.sender] = partner;
    }

    function acceptSwap (address partner) public {
        uint ticketno;
        // swapping the tickets
        ticketno=ticketOwners[msg.sender];
        ticketOwners[msg.sender]=ticketOwners[partner];
        ticketOwners[partner]=ticketno;
    }
}