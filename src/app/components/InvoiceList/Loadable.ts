/**
 *
 * Asynchronously loads the component for InvoiceList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const InvoiceList = lazyLoad(
  () => import('./index'),
  module => module.InvoiceList,
);
