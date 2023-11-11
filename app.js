import axios from "axios";
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');

const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`);

const solBalance = balance / LAMPORTS_PER_SOL

const solPrice = await axios.get(
  'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd,eur',
  { headers: {'accept-encoding': '*'} }
).then(({data}) => data.solana.usd)

console.log(`Balance is ${solBalance} | Price is $${solPrice} | Total is $${(solPrice * solBalance).toFixed(2)}`)

console.log(`✅ Finished!`)
