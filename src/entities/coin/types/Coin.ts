export interface Coin {
  id: string
  symbol: string
  name: string
  web_slug: string | null
  asset_platform_id: string | null
  platforms: Record<string, string> | null
  block_time_in_minutes: number | null
  hashing_algorithm: string | null
  categories: string[] | null
  preview_listing: boolean
  public_notice: string | null
  additional_notices: string[]
  description: Record<string, string> | null
  links: {
    homepage: string[] | null
    whitepaper: string | null
    blockchain_site: string[] | null
    official_forum_url: string | null
    chat_url: string[] | null
    announcement_url: string[] | null
    snapshot_url: string | null
    twitter_screen_name: string | null
    facebook_username: string | null
    bitcointalk_thread_identifier: string | null
    telegram_channel_identifier: string | null
    subreddit_url: string | null
    repos_url: {
      github: string[] | null
      bitbucket: string[] | null
    }
  }
  image: {
    thumb: string | null
    small: string | null
    large: string | null
  }
  country_origin: string | null
  genesis_date: string | null
  sentiment_votes_up_percentage: number | null
  sentiment_votes_down_percentage: number | null
  watchlist_portfolio_users: number | null
  market_cap_rank: number | null
  status_updates: string[] | null
  last_updated: string | null
}
