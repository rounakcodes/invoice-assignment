import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NewInvoiceModal } from '../../components/NewInvoiceModal';
import { InvoiceList } from '../../components/InvoiceList';
import { InvoiceDetails } from '../../components/InvoiceDetails';
import { Flex, Heading } from '@chakra-ui/react';

const HeadingStyle = {
  background: '#336399',
  color: '#FFFFFF',
  fontSize: '17px',
  padding: '15px',
  width: '100%',
  border: 'none',
};

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="An invoicing application" />
      </Helmet>
      <Heading style={HeadingStyle}>
        Dashboard
        <NewInvoiceModal />
      </Heading>
      <Flex height="100vh">
        <InvoiceList />
        <InvoiceDetails />
      </Flex>
    </>
  );
}
