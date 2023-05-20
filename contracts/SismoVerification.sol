//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "sismo-connect-solidity/SismoLib.sol"; 

contract SismoVerification is SismoConnect {

    constructor (bytes16 appId) SismoConnect(appId) {

    }

    function verifySismoConnect(bytes memory sismoConnectResponse) public {
        SismoConnectVerifiedResult memory result = verify ({
            responseBytes: response,
            auth: buildAuth({authType: AuthType.GITHUB}),
            claim: buildClaim({groupId: 0x42c768bb8ae79e4c5c05d3b51a4ec74a}),
            signature: buildSignature({message:abi.encode(msg.sender)})
        });
        
        uint256 vaultId = SismoConnectHelper.getUserId(result, AuthType.VAULT);
    }
}