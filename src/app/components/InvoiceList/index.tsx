import * as React from 'react';
import {
  Spacer,
  Flex,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Divider,
} from '@chakra-ui/react';
import { sizes } from '../../../styles/media';
import searchIconSmall from '../../assets/search-icon.png';
import searchIconMedium from '../../assets/search-icon@2x.png';
import searchIconLarge from '../../assets/search-icon@3x.png';

interface InvoiceList {
  customerName: string;
  invoiceNumber: Number;
  countOfItems: Number;
  amount: Number;
  date: string;
}
interface Props {
  data: InvoiceList[];
}

export function InvoiceList(props: Props) {
  return (
    <Box backgroundColor="#2F3740">
      <Box p="2">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <img
                srcSet={`${searchIconSmall} ${sizes.small}w, ${searchIconMedium} ${sizes.medium}w, ${searchIconLarge} ${sizes.large}w`}
                style={{ maxWidth: '15px' }}
                alt="search"
              />
            }
          />
          <Input
            style={{
              borderRadius: '30px',
              color: 'white',
              border: 'none',
              background: '#353E48',
            }}
            type="tel"
            placeholder="Search..."
          />
        </InputGroup>
      </Box>
      <Box py="4" px="6" color="#FFFFFF">
        <Text fontSize="xx-small" pb="2">
          INVOICES
        </Text>
        {props.data.map(invoice => {
          return (
            <>
              <Flex fontSize="small">
                <Box h="60px">
                  <Text mb="2">{`INV # - ${invoice.invoiceNumber}`}</Text>
                  <Text fontSize={12}>{`Items - ${invoice.countOfItems}`}</Text>
                  <Text fontSize={12} fontWeight="bold" color="#5B8DCF">
                    {invoice.customerName}
                  </Text>
                </Box>
                <Spacer />
                <Box h="60px">
                  <Text
                    style={{
                      textAlign: 'right',
                      position: 'relative',
                      top: '2px',
                    }}
                    fontSize={10}
                    isTruncated
                    w="120px"
                  >
                    {invoice.date}
                  </Text>
                  <Text
                    mt="5"
                    style={{
                      textAlign: 'right',
                      position: 'relative',
                      top: '5px',
                    }}
                  >
                    ₹ {invoice.amount}
                  </Text>
                </Box>
              </Flex>
              <Divider mt="4" mb="4" />
            </>
          );
        })}
      </Box>
    </Box>
  );
}
