# Onchain Kudos

**Give props to your frens, forever on the blockchain.**

Onchain Kudos lets you send permanent, verifiable shoutouts to people on X (Twitter). When you give someone kudos, it gets recorded on the blockchain - meaning it's there forever, can't be deleted, and proves you really said it.

Think of it like a permanent "thank you" or "you're awesome" that lives onchain.

## How It Works

1. **Connect your wallet** - Uses [Abstract Global Wallet](https://abs.xyz) so you don't need to deal with seed phrases or browser extensions
2. **Register your X handle** - Link your Twitter/X username to your wallet address
3. **Give kudos** - Shout someone out on X and record it onchain

### The ++ Syntax

The easiest way to give kudos is tweeting with this format:

```
@username ++ great thread on MEV!
```

That's it. The `++` tells our system to record this as kudos. The person you're shouting out gets credit on the leaderboard.

## What You Get

- **Leaderboard** - See who's getting the most love from the community
- **Permanent record** - Your kudos live forever onchain
- **Profile stats** - Track kudos you've given and received
- **Verifiable** - Anyone can check the blockchain to verify kudos are real

## Getting Started

### Just Want to Use It?

1. Visit the app
2. Click "Connect Wallet" (Abstract handles all the wallet stuff for you)
3. Enter your X handle and register
4. Start giving kudos!

### Running Locally (for devs)

```bash
# Clone and install
git clone https://github.com/tyler-james-bridges/onchain-kudos-app.git
cd onchain-kudos-app
npm install

# Set up environment
cp .env.example .env.local
# Add your API keys (Twitter API, contract address, etc.)

# Run it
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're good.

## FAQ

**Do I need ETH to use this?**
Nope. It runs on Abstract (an L2), and the Abstract Global Wallet handles gas for you.

**Is my X handle tied to my wallet forever?**
You can delete your account in settings. There's a 7-day waiting period, then it's gone.

**Can I make my profile private?**
Yes, check the settings tab after you register.

**What's the point?**
Build your onchain reputation. Show appreciation that actually means something because it's permanent and verifiable. Plus, leaderboard clout.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Blockchain**: Abstract L2 with Abstract Global Wallet
- **Smart Contract**: Solidity (Hardhat for development)
- **APIs**: Twitter API v2 for webhook integration

## Contributing

PRs welcome. Please open an issue first for major changes.

## License

MIT
