pragma solidity 0.4.18;

contract Vault {

  mapping (address => uint256) public deposits;
  address public owner;

  /* constructor */
  // Function constructor en esta versión queda expuesta ya que no coincide su nombre con el del contrato. 
  // Cualquiera la llama y se convierte en owner. 
  
  function Vaull() public { 
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  /**
    @notice Depositar ETH
   */
  function deposit() external payable {
    deposits[msg.sender] += msg.value;
  }

  /**
    @notice Retirar ETH depositado
   */
  function withdraw() external {
    require(deposits[msg.sender] >= 0);
    uint256 amountDeposited = deposits[msg.sender];
    deposits[msg.sender] = 0;
    msg.sender.transfer(amountDeposited);
  }

  /**
    @notice Retirar todo el ETH depositado. Sólo ejecutable por el dueño.
   */
  function withdrawAllDeposits() external onlyOwner {
    owner.transfer(address(this).balance);
  }
}
