# Transfers example using RhinoFi's client-js library

## Populate config.json

Copy the `config_example.json` file to `config.json` and populate it with valid info

## Run the example code

```sh
./fetchTransfers.js
```

example output:

```json
{
  items: [
    {
      _id: 'L4fFkhpM84C',
      token: 'DVF',
      amount: 9,
      recipient: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      memo: 'some_id_2',
      source: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
      feeAmount: 1,
      date: '2022-08-03T15:24:22.545Z'
    },
    {
      _id: 'H6nYpA7kdXP',
      token: 'DVF',
      amount: 9,
      recipient: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      memo: 'some_id_2',
      source: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
      feeAmount: 1,
      date: '2022-08-03T15:24:10.804Z'
    },
    {
      _id: 'MUiVJKcmpo3',
      token: 'DVF',
      amount: 9,
      recipient: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      memo: 'some_id_2',
      source: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
      feeAmount: 1,
      date: '2022-08-03T15:15:00.792Z'
    },
    {
      _id: 'DNd9queYzbD',
      token: 'WSTETH',
      amount: 0.2997,
      recipient: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
      source: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      feeAmount: 0.0003,
      date: '2022-07-01T15:05:17.331Z'
    },
    {
      _id: 'GaGFWnarBVc',
      token: 'DVF',
      amount: 999,
      recipient: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
      source: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      feeAmount: 1,
      date: '2022-05-25T15:46:27.788Z'
    },
    {
      _id: 'FgjUL8rqQ9Q',
      token: 'KON',
      amount: 999.9,
      recipient: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
      source: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
      feeAmount: 0.1,
      date: '2022-05-25T15:46:13.893Z'
    }
  ],
  pagination: { totalItems: 6, skip: 0, limit: 20 }
}
{
  _id: 'L4fFkhpM84C',
  token: 'DVF',
  amount: 9,
  recipient: '0x5472cf4f1be2aa6ad27c6f93101f7899ccadbaf7',
  memo: 'some_id_2',
  source: '0x65d580e2f7f430abc110d3dc22572b97b364a5ac',
  feeAmount: 1,
  date: '2022-08-03T15:24:22.545Z'
}
```

Modify the code to get the result for a different memo. Can use additional search parameters by inspscting our [API documentation](https://api.deversifi.dev/v1/trading/docs#/Wallet/getV1TradingTransfers)