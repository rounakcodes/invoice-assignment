/**
 *
 * Asynchronously loads the component for Modal
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewInvoiceModal = lazyLoad(
  () => import('./index'),
  module => module.NewInvoiceModal,
);
