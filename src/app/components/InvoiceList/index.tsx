import * as React from 'react';
import {
  Spacer,
  Flex,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from '@chakra-ui/react';
import searchIcon from '../../assets/search-icon.png';

export function InvoiceList() {
  return (
    <Box backgroundColor="#2F3740">
      <Box p="2">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<img src={searchIcon} />}
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
        <Flex fontSize="small">
          <Box h="60px">
            <Text mb="2">INV # - 1122</Text>
            <Text fontSize={12}>Items - 05</Text>
            <Text fontSize={12} fontWeight="bold" color="#5B8DCF">
              Naveen Ramdan
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
              11:35 AM - Today
            </Text>
            <Text
              mt="5"
              style={{
                textAlign: 'right',
                position: 'relative',
                top: '5px',
              }}
            >
              1240
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
