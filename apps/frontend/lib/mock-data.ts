import type { YieldData } from "./types"

// Mock data generator
export function getMockYieldData(query: string): YieldData[] {
  // Base data
  const baseData: YieldData[] = [
    {
      id: "ethereum-renzo-ezeth-staking",
      name: "Renzo Restaking",
      token_symbol: "ETH",
      token_network: "ethereum",
      provider_name: "Renzo",
      apy: 0.0392762000394306,
      metadata_type: "restaking",
      token_address: null,
      provider_id: "renzo",
      protocol: "renzo",
      asset: "ETH",
      tvl: 0,
      cooldown_days: null,
      warmup_days: null,
      withdraw_days: null
    },
    {
      id: "ethereum-eth-etherfi-staking",
      name: "Ether.fi Restaking",
      token_symbol: "ETH",
      token_network: "ethereum",
      provider_name: "Ether.fi",
      apy: 0.0354267875115386,
      metadata_type: "restaking",
      token_address: null,
      provider_id: "etherfi",
      protocol: "ether.fi",
      asset: "ETH",
      tvl: 0,
      cooldown_days: 7,
      warmup_days: null,
      withdraw_days: null
    },
    {
      id: "ethereum-eth-everstake-staking",
      name: "Everstake Pooled ETH Staking",
      token_symbol: "ETH",
      token_network: "ethereum",
      provider_name: "Everstake",
      apy: 0.0349892654549052,
      metadata_type: "staking",
      token_address: null,
      provider_id: "everstake",
      protocol: "everstake",
      asset: "ETH",
      tvl: 0,
      cooldown_days: 9,
      warmup_days: 2,
      withdraw_days: null
    },
    {
      id: "ethereum-eth-luganodes-staking",
      name: "Luganodes Native Staking",
      token_symbol: "ETH",
      token_network: "ethereum",
      provider_name: "Luganodes",
      apy: 0.0323,
      metadata_type: "staking",
      token_address: null,
      provider_id: "luganodes",
      protocol: "luganodes",
      asset: "ETH",
      tvl: 0,
      cooldown_days: 1,
      warmup_days: 8,
      withdraw_days: null
    },
    {
      id: "ethereum-eth-p2p-staking",
      name: "P2P.org Native Staking",
      token_symbol: "ETH",
      token_network: "ethereum",
      provider_name: "P2P.org",
      apy: 0.0319584355553912,
      metadata_type: "staking",
      token_address: null,
      provider_id: "P2P",
      protocol: "p2p.org",
      asset: "ETH",
      tvl: 0,
      cooldown_days: 1,
      warmup_days: 8,
      withdraw_days: null
    }
  ]

  // Filter and modify data based on query
  if (query.toLowerCase().includes("stablecoin")) {
    return [
      {
        id: "ethereum-usdc-bbidlecppor-usdc4626-0xa35b7a9fe5dc4cd51ba47acdf67b0f41c893329a-4626-vault",
        name: "USDC Portofino Technologies Junior Tranches Idle Vault",
        token_symbol: "USDC",
        token_network: "ethereum",
        provider_name: "Idle Finance",
        apy: 0.149,
        metadata_type: "vault",
        token_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        provider_id: "idle-finance",
        protocol: "idle finance",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "ethereum-usdc-aaidlecppor-usdc4626-0x291eecab3a2d3f403745968c14edbb227d183636-4626-vault",
        name: "USDC Portofino Technologies Senior Tranches Idle Vault",
        token_symbol: "USDC",
        token_network: "ethereum",
        provider_name: "Idle Finance",
        apy: 0.1152,
        metadata_type: "vault",
        token_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        provider_id: "idle-finance",
        protocol: "idle finance",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "base-usdc-re7usdc-0x12afdefb2237a5963e7bab3e2d46ad0eee70406e-4626-vault",
        name: "Re7 USDC Morpho Blue Vault",
        token_symbol: "USDC",
        token_network: "base",
        provider_name: "Morpho Blue",
        apy: 0.0905848555040482,
        metadata_type: "vault",
        token_address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        provider_id: "morpho-blue",
        protocol: "morpho blue",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "base-usdc-gtusdcc-0xc0c5689e6f4d256e861f65465b691aeecc0deb12-4626-vault",
        name: "Gauntlet USDC Core Morpho Blue Vault",
        token_symbol: "USDC",
        token_network: "base",
        provider_name: "Morpho Blue",
        apy: 0.0884740925836527,
        metadata_type: "vault",
        token_address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        provider_id: "morpho-blue",
        protocol: "morpho blue",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "arbitrum-usdc-dusdcv3-0x890a69ef363c9c7bdd5e36eb95ceb569f63acbf6-4626-vault",
        name: "USDC Main USDC v3 Gearbox Vault",
        token_symbol: "USDC",
        token_network: "arbitrum",
        provider_name: "Gearbox",
        apy: 0.0883,
        metadata_type: "lending",
        token_address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        provider_id: "gearbox",
        protocol: "gearbox",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "ethereum-usdt-dusdtv3-0x05a811275fe9b4de503b3311f51edf6a856d936e-4626-vault",
        name: "USDT Universal USDT v3 Gearbox Vault",
        token_symbol: "USDT",
        token_network: "ethereum",
        provider_name: "Gearbox",
        apy: 0.079,
        metadata_type: "lending",
        token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        provider_id: "gearbox",
        protocol: "gearbox",
        asset: "USDT",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "ethereum-usdc-usualusdc+-0xd63070114470f685b75b74d60eec7c1113d33a3d-4626-vault",
        name: "Usual Boosted USDC Morpho Blue Vault",
        token_symbol: "USDC",
        token_network: "ethereum",
        provider_name: "Morpho Blue",
        apy: 0.0785733081219144,
        metadata_type: "vault",
        token_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        provider_id: "morpho-blue",
        protocol: "morpho blue",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "arbitrum-usdt-fusdt-0x4a03f37e7d3fc243e3f99341d36f4b829bee5e03-4626-vault",
        name: "USDT Fluid Lender",
        token_symbol: "USDT",
        token_network: "arbitrum",
        provider_name: "Fluid",
        apy: 0.0738,
        metadata_type: "lending",
        token_address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        provider_id: "fluid",
        protocol: "fluid",
        asset: "USDT",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "ethereum-usdc-gtusdc-0xdd0f28e19c1780eb6396170735d45153d261490d-4626-vault",
        name: "Gauntlet USDC Prime Morpho Blue Vault",
        token_symbol: "USDC",
        token_network: "ethereum",
        provider_name: "Morpho Blue",
        apy: 0.0717569971511396,
        metadata_type: "vault",
        token_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        provider_id: "morpho-blue",
        protocol: "morpho blue",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      },
      {
        id: "ethereum-usdc-steakusdc-0xbeef01735c132ada46aa9aa4c54623caa92a64cb-4626-vault",
        name: "Steakhouse USDC Morpho Blue Vault",
        token_symbol: "USDC",
        token_network: "ethereum",
        provider_name: "Morpho Blue",
        apy: 0.0715249006847888,
        metadata_type: "vault",
        token_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        provider_id: "morpho-blue",
        protocol: "morpho blue",
        asset: "USDC",
        tvl: 0,
        cooldown_days: null,
        warmup_days: null,
        withdraw_days: null
      }
    ]
  }

  // Simplified ETH query condition
  if (query.toLowerCase().includes("eth")) {
    return baseData.filter(item => item.token_symbol === "ETH")
  }

  // Default: return all sorted by APY
  return [...baseData].sort((a, b) => b.apy - a.apy)
}

