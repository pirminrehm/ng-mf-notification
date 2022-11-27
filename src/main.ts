import { loadRemoteEntry } from '@angular-architects/module-federation';

// load own remote for testing purpose
Promise.all([loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:5000/remoteEntry.js' })])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
