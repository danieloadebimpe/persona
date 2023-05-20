// SPDX-License-Identifier:
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../contracts/SismoVerification.sol";

contract MainScript is Script {
	
	function setUp() public {}
	
	function run() public {
		vm.startBroadcast();
		
		vm.stopBroadcast();
	}
}
