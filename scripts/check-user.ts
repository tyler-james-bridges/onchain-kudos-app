import { createPublicClient, http } from 'viem';
import { abstractTestnet } from 'viem/chains';
import contractAbi from '../artifacts/contracts/KudosTracker.sol/KudosTracker.json';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;
const USER_ADDRESS = '0x18F0C9445faDa8D2F4a962d538b8cDD44b2f9BD6' as `0x${string}`;

async function checkUser() {
  const publicClient = createPublicClient({
    chain: abstractTestnet,
    transport: http()
  });

  console.log('Checking user:', USER_ADDRESS);
  console.log('Contract:', CONTRACT_ADDRESS);
  
  try {
    const result = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: contractAbi.abi,
      functionName: 'users',
      args: [USER_ADDRESS]
    });
    
    console.log('User data:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

checkUser();
