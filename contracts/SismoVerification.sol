//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "sismo-connect-solidity/SismoLib.sol";

contract SismoVerification is ERC721, SismoConnect {

    bytes16 public constant APP_ID = 0x149e519de68a4e8a93b7d41484f388cc; 
    
    constructor() ERC721("Dummy", "NFT") SismoConnect(APP_ID)  
    {}

    function verifySismoConnect(bytes memory response) public {
        SismoConnectVerifiedResult memory result = verify ({
            responseBytes: response,
            auth: buildAuth({authType: AuthType.GITHUB}),
            claim: buildClaim({groupId: 0x42c768bb8ae79e4c5c05d3b51a4ec74a }),
            signature: buildSignature({message:abi.encode(msg.sender)})
        });
        uint256 tokenId = SismoConnectHelper.getUserId(result, AuthType.GITHUB);
        _mint(msg.sender, tokenId);
    }
}
