import { join } from 'path';
import { Transport, ClientProviderOptions } from '@nestjs/microservices';

export const grpcClientOptions: ClientProviderOptions = {
  name: 'MAIL_SERVICE',
  transport: Transport.GRPC,
  options: {
    package: 'mail',
    protoPath: join(__dirname, '../grpc/mail.proto'),
    loader: {
      includeDirs: [join(__dirname, '../grpc/mail.proto')],
      keepCase: true,
      defaults: true,
    },
    url: 'localhost:50053',
  },
};
