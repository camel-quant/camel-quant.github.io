module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Camel Quant',
      items:  ['docs/introduction', 'docs/design_principle', 'docs/contributing']
    },
    {
      type: 'category',
      label: 'Getting Started',
      items:  ['docs/install', 'docs/configuration', 'docs/write_plugin']
    },
    {
      type: 'category',
      label: 'Guides',
      items:  ['docs/write_plugin']
    }
  ],
  api: [
    {
      type: 'category',
      label: 'common_lib',
      items:  ['api/common_lib/data_model', 'api/common_lib/plugin_system']
    },
    {
      type: 'category',
      label: 'market_center',
      items:  ['api/market_center/market_api', 'api/market_center/market_front', 'api/market_center/market_ctp']
    },
    {
      type: 'category',
      label: 'trade_center',
      items:  ['api/trade_center/trade_api', 'api/trade_center/trade_front', 'api/trade_center/trade_ctp']
    },
    {
      type: 'category',
      label: 'indicator_center',
      items:  ['api/indicator_center/indicator_api', 'api/indicator_center/indicator_front', 'api/indicator_center/indicator_kline']
    },
  ]

};
