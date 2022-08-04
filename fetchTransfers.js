#!/usr/bin/env node
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const DVF = require('dvf-client-js')
const config = require('./config.json')

const provider = new HDWalletProvider({
  privateKeys: [config.ETH_PRIVATE_KEY],
  providerOrUrl: config.RPC_URL
})

const web3 = new Web3(provider)
provider.engine.stop()

const dvfConfig = {
  api: config.API_URL,
  dataApi: config.DATA_API_URL,
  useAuthHeader: true,
  wallet: {
    type: 'tradingKey',
    meta: {
      starkPrivateKey: config.STARK_PRIVATE_KEY
    }
  }
  // Add more variables to override default values
}

;(async () => {
  const dvf = await DVF(web3, dvfConfig)

  if (process.env.DO_TRANSFER) {
    // Send a transfer to another address
    const transferResponse = await dvf.transfer({
      recipientEthAddress: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      token: 'DVF',
      // Any string, can place your ID here
      memo: 'some_id_2',
      amount: 10
    })
  }

  const { nonce, signature } = await dvf.sign.nonceSignature()

  // Paginated endpoint that returns all transfers involving the
  // authenticated user. You must fetch all, then filter through them
  const transfers = await dvf.getAuthenticated(
    '/v1/trading/transfers',
    nonce,
    signature,
    {
      // Pagination parameters here
      // Refer to swagger docs for a list of supported
      // options: https://api.deversifi.dev/v1/trading/docs#/Wallet/getV1TradingTransfers
    },
    {}
  )

  console.log(transfers)

  // Find a transfer with memo = 'some_id_2'
  const getTransferWithMemo = async (memo, current = 0) => {
    const limit = 50
    const { items, pagination } = await dvf.getAuthenticated(
      '/v1/trading/transfers',
      nonce,
      signature,
      {
        limit,
        skip: current
      },
      {}
    )

    const [result] = items.filter(t => t.memo === memo)
    if (result) return result

    if (pagination.totalItems <= current + limit) return

    return getTransferWithMemo(memo, current + limit)
  }

  // If you know the ID of the transfer, this is even simpler
  // Since you can directly query for it:
  // https://api.deversifi.dev/v1/trading/docs#/Wallet/getV1TradingTransfersTransferid

  console.log(await getTransferWithMemo('some_id_2'))
})()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
