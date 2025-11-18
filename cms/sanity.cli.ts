import * as SanityCli from 'sanity/cli';

export default SanityCli.defineCliConfig({
  api: {
    projectId: 'la9s93b5',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
  },
});
