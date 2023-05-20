const { ethers } = require('ethers');
const rpcURL = 'https://eth.llamarpc.com'; // Replace with your RPC endpoint
// Create an ethers.js provider connected to the RPC endpoint
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

async function getAddress() {
  try {
    var resolvedAddress = await provider.resolveName('adebimpe.xyz');
    return resolvedAddress;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function reverseAddress() {
  try {
    var reverseResolvedAddress = await provider.lookupAddress('0x88e4519e2Baa513Ed92B0Ae4c788D7E5c5B03Ea4');

    return reverseResolvedAddress;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


async function getResolver() {
  try {
    const preResolver = await provider.getResolver('adebimpe.xyz');
    const resolver = await preResolver.getText("com.github");
    return resolver;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Usage example
getAddress()
  .then((resolvedAddress) => {
    if (resolvedAddress !== null) {
      console.log('The users address is:', resolvedAddress);
    } else {
      console.log('Failed to retrieve the address');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });


reverseAddress()
  .then((reverseResolvedAddress) => {
    if(reverseResolvedAddress !== null) {
      console.log('The address is:', reverseResolvedAddress);
    } else {
      console.log('Failed to retrieve reverse lookupAddress');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

getResolver()
  .then((resolver) => {
    if(resolver !== null) {
      console.log('The resolver is:', resolver);
    } else {
      console.log('Failed to retrieve resolver');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
