import { CloudflareOptions } from '@teambit/cloud-providers.aspects.cloudflare-worker';

export const ChatWorkerApp: CloudflareOptions = {
  // the name for your worker app (used by bit)
  name: 'chat-worker-worker',

  // an entry file for your worker's dev/prod builds
  entry: require.resolve('./chat-worker.app-root'),

  // your cloudflare details for deployment
  deployOptions: {
    // the auth token for cloudflare (https://developers.cloudflare.com/api/tokens/create)
    auth: { token: process.env.CLOUDFLARE_TOKEN },
    // your cloudflare account id (https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)
    accountId: '37ec40bec82f25b95678f21f01ca64a0',
    // the cloudflare hosting zone id
    zoneId: 'ec8d03e740264543065fad46cb2c528f',
    // the url for the deployed worker (https://developers.cloudflare.com/workers/platform/routing/custom-domains)
    routes: ['teambit.cloud/chat-worker'],
  },
};

export default ChatWorkerApp;
