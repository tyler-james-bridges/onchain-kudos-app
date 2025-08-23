import { createPublicClient, http } from 'viem';
import { abstractTestnet } from 'viem/chains';
import contractAbi from '../artifacts/contracts/KudosTracker.sol/KudosTracker.json';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;

async function checkRegisteredUsers() {
  const publicClient = createPublicClient({
    chain: abstractTestnet,
    transport: http()
  });

  const commonHandles = [
    'tmoney_145',
    'vitalik',
    'alice_dev',
    'bob_builder',
    'charlie_coder',
    'test_user',
    'demo_user'
  ];

  console.log('🔍 Checking registered handles...\n');
  console.log('Contract:', CONTRACT_ADDRESS);
  console.log('-----------------------------------\n');

  const registered = [];
  const notRegistered = [];

  for (const handle of commonHandles) {
    try {
      const address = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: contractAbi.abi,
        functionName: 'handleToAddress',
        args: [handle]
      });

      if (address !== '0x0000000000000000000000000000000000000000') {
        registered.push(handle);
        console.log(`✅ @${handle} - REGISTERED (${address})`);
      } else {
        notRegistered.push(handle);
        console.log(`❌ @${handle} - NOT REGISTERED`);
      }
    } catch (error) {
      console.error(`Error checking ${handle}:`, error);
    }
  }

  console.log('\n-----------------------------------');
  console.log(`\n✅ Registered handles (${registered.length}):`);
  registered.forEach(h => console.log(`  - @${h}`));
  
  console.log(`\n❌ Available handles for new registration (${notRegistered.length}):`);
  notRegistered.forEach(h => console.log(`  - @${h}`));

  console.log('\n💡 You can give kudos to any REGISTERED handle');
  console.log('💡 You CANNOT give kudos to yourself');
  console.log('💡 Recipients must be registered first\n');
}

checkRegisteredUsers().catch(console.error);