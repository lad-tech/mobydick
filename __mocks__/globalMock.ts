jest.mock('global', () => ({
  ...global,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  WebSocket: function WebSocket() {},
}));
