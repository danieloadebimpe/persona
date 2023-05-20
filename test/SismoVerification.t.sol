// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "contracts/SismoVerification.sol";

contract SismoVerificationTest is Test {

    SismoVerification public verification;

    function setUp() public {
        verification = new SismoVerification();
    }

    function test_Verification() public {
        
    }

}