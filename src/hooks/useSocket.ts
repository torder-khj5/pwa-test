// /* eslint-disable @typescript-eslint/no-explicit-any */
// import io, { type ManagerOptions, type Socket, type SocketOptions } from 'socket.io-client';
// import { useState } from 'react';

// interface HandleConnectFunctionType {
//   success?: () => void;
//   fail?: () => void;
// }

// const useSocket = (
//   path: string,
//   opt?: Partial<ManagerOptions & SocketOptions>,
//   handleConnectFunction?: HandleConnectFunctionType
// ): [boolean, Socket] => {
//   const [connect, setConnect] = useState(false);

//   const defaultConnectOption: Partial<ManagerOptions & SocketOptions> = {
//     transports: ['websocket', 'polling'],
//     query: {
//       storeCode: 'test',
//     },
//   };

//   const ioClient = io(path, opt ? { ...defaultConnectOption, ...opt } : defaultConnectOption);

//   const { success, fail } = handleConnectFunction ?? {};

//   ioClient.on('error', (error: any) => {
//     console.error(error);
//     setConnect(false);
//     if (!fail) return;
//     fail();
//   });

//   ioClient.on('connect', () => {
//     setConnect(true);
//     if (!success) return;
//     success();
//   });

//   ioClient.on('connect_error', () => {
//     // revert to classic upgrade
//     ioClient.io.opts.transports = ['polling', 'websocket'];
//   });

//   ioClient.on('disconnect', (reason: any) => {
//     setConnect(false);
//     if (reason === 'io server disconnect') {
//       // the disconnection was initiated by the server, you need to reconnect manually
//       ioClient.connect();
//     }

//     console.error(reason);
//     if (!fail) return;
//     fail();
//   });

//   return [connect, ioClient];
// };

// export default useSocket;
