// SPDX-License-Indentifier: UNLICENSED
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract YieldWhalesNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public ownerMint;
    uint256 public totalSupply;
    uint256 public maxSupply;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('Yield Whales', 'YWNFT'){
        mintPrice = 10 ether;
        totalSupply = 0;
        maxSupply = 1500;
        ownerMint = 0;
        baseTokenUri = "ipfs://Qmc3pQ2dp2Veqg7AUVvj6xEyop6MNbLq2ASg5CUbpyGXDD/";
        //set withdraw wallet address
        withdrawWallet = payable(0xb93D019199F57F5B38CA778E369f30F822f869e3);
    }

    function getTotalSupply() public view returns (uint256){
        return totalSupply;
    }
    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }
    function setMaxSupply(uint256 maxSupply_) external onlyOwner {
        maxSupply = maxSupply_;
    }
    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory){
        require(_exists(tokenId_), 'Token does not exist!');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}('');
        require(success, 'withdraw failed');
    }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnabled, 'Minting not enabled.');
        require(msg.value == quantity_ * mintPrice, 'Wrong mint value.');
        require(totalSupply + quantity_ <= maxSupply, 'Sold out.');

        for (uint256 i = 0; i < quantity_; i++){
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
        walletMints[msg.sender] = walletMints[msg.sender] + quantity_;
    }

    function getWalletMints() public view returns (uint256) {
        uint256 userMints = walletMints[msg.sender];
        return userMints;
    }

    function mintStatus() public view returns (bool) {
        bool theStatus = isPublicMintEnabled;
        return theStatus;
    }

    function whitelistMint(uint256 quantity_) public payable onlyOwner {
        require(isPublicMintEnabled, 'Minting is inactive.');
        require(msg.value == ownerMint, 'Wrong mint value.');
        require(totalSupply + quantity_ <= maxSupply, 'Sold out.');

        for (uint256 i = 0; i < quantity_; i++){
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}