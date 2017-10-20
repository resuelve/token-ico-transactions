// Allows us to use ES6 in our migrations and tests.
const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')

const mnemonic = process.env.MNEMONIC
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, 'https://kovan.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    }
  }
}
