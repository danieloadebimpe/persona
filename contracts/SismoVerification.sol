//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "sismo-connect-solidity/SismoLib.sol";

contract SismoVerification is ERC721, SismoConnect {

    bytes16 public constant APP_ID = 0xaf51561270d2c8a362392d1a51ef8e18; 
    
    constructor() ERC721("Dummy", "NFT") SismoConnect(APP_ID)  
    {}

    function verifySismoConnect(bytes memory response) public {
        SismoConnectVerifiedResult memory result = verify ({
            responseBytes: response,
            // we want to prove that they own a github repo
            auth: buildAuth({authType: AuthType.GITHUB}),

            claim: buildClaim({groupId: 0x7d64fdd66ef50f491f675bf3d281f177}),

            // // we also want to check if the signed message provided in the response is the signature of the user's address
            signature: buildSignature({message:abi.encode(msg.sender)})
        });


        uint256 tokenId = SismoConnectHelper.getUserId(result, AuthType.GITHUB);
        _mint(msg.sender, tokenId);
    }

    // create a request object

    // callback ?
}
