/**
 *
 * Asynchronously loads the component for Modal
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomerInfoModal = lazyLoad(
  () => import('./index'),
  module => module.CustomerInfoModal,
);
