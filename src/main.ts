import './style.css';
import { initializeDiscord } from './discord';
import type { DiscordSDK } from '@discord/embedded-app-sdk';

async function bootstrap() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    throw new Error('#app not found');
  }

  app.innerHTML += `${location.href}`

  const discordSdk: DiscordSDK = await initializeDiscord();

  console.log(discordSdk)

  app.innerHTML += `
        <h1>Discord Activity</h1>
        <div>Guild: ${discordSdk.guildId ?? 'DM'}</div>
        <div>Channel: ${discordSdk.channelId ?? 'Unknown'}</div>
    `;
}

bootstrap().catch(console.error);