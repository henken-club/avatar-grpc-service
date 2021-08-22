import {Server, ServerCredentials} from '@grpc/grpc-js';

import {impl as avatarImpl} from './avatar';
import {AvatarService} from './protogen/avatar';

function main() {
  const server = new Server();

  server.addService(AvatarService, avatarImpl);
  server.bindAsync(
    // eslint-disable-next-line no-process-env
    `0.0.0.0:${process.env.PORT || 5000}`,
    ServerCredentials.createInsecure(),
    () => {
      server.start();
    },
  );
}
main();
