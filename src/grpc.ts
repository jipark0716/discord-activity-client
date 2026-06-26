import {createClient} from '@connectrpc/connect';
import {createGrpcWebTransport} from '@connectrpc/connect-web';
import {AuthService} from './gen/auth_pb';

const transport = createGrpcWebTransport({
    baseUrl: import.meta.env.VITE_API_DOMAIN,
});

export const authClient = createClient(
    AuthService,
    transport,
);