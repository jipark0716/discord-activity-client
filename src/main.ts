import './style.css';
import { initializeDiscord } from './discord';
import type { DiscordSDK } from '@discord/embedded-app-sdk';
import { authClient } from './grpc';

const app = document.querySelector<HTMLDivElement>('#app')!;

async function bootstrap() {
  app.innerHTML += `${location.href}`

  const discordSdk: DiscordSDK = await initializeDiscord();

  app.innerHTML += `
    <h1>Discord Activity</h1>
    <div>Guild: ${discordSdk.guildId ?? 'DM'}</div>
    <div>Channel: ${discordSdk.channelId ?? 'Unknown'}</div>
  `;

  const { code } = await discordSdk.commands.authorize({
    client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
    response_type: 'code',
    state: '',
    prompt: 'none',
    scope: ['identify'],
  });

  app.innerHTML += `<h1>code</h1><div>${code}</div>`

  const tokenResponse = await authClient.getToken({
    code: code
  });

  app.innerHTML += `<h1>token</h1><div>${JSON.stringify(tokenResponse)}</div>`
}

bootstrap().catch(o => {
  app.innerHTML += o
});