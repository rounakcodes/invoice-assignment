/**
 *
 * Asynchronously loads the component for InvoiceDetails
 *
 */

import { lazyLoad } from 'utils/loadable';

export const InvoiceDetails = lazyLoad(
  () => import('./index'),
  module => module.InvoiceDetails,
);
