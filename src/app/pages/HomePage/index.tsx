import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NewInvoiceModal } from '../../components/NewInvoiceModal';
import print from '../../assets/printer-blue.png';
import {
  Spacer,
  Flex,
  Button,
  Divider,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Heading,
  StatLabel,
  StatHelpText,
  StatNumber,
  Stat,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import searchIcon from '../../assets/search-icon.png';

const HeadingStyle = {
  background: '#336399',
  color: '#FFFFFF',
  fontSize: '17px',
  padding: '15px',
  width: '100%',
  border: 'none',
};

const CardStyle = {
  background: '#FFFFFF',
  height: '100%',
  padding: '40px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

const TotalLabelStyles = {
  fontSize: '12px',
  color: 'gray',
};

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Heading style={HeadingStyle}>
        Dashboard
        <NewInvoiceModal />
      </Heading>
      <Flex
        style={{
          height: '100vh',
        }}
      >
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
        <Box flex="1" mb="8" p="8">
          <Text fontSize="xs" mb="4">
            INVOICE DETAILS
          </Text>
          <Box style={CardStyle}>
            <Flex>
              <Stat>
                <StatLabel fontSize="16px" fontWeight="extrabold">
                  INVOICE
                </StatLabel>
                <StatNumber fontSize="15px" color="gray">
                  # INV1122
                </StatNumber>
                <Text color="gray" fontSize="12px">
                  11:35 AM Today
                </Text>
              </Stat>
              <Spacer />
              <Stat>
                <StatLabel style={{ textAlign: 'right', fontSize: '12px' }}>
                  Customer Details
                </StatLabel>
                <StatNumber
                  style={{
                    fontSize: '15px',
                    textAlign: 'right',
                    position: 'relative',
                    top: '10px',
                  }}
                >
                  JOHN DOE
                </StatNumber>
                <StatHelpText
                  style={{
                    textAlign: 'right',
                    marginTop: '10px',
                    fontSize: '12px',
                  }}
                >
                  johndoe@serviceprovider.com
                </StatHelpText>
              </Stat>
              <Button
                color="#5B8DCF"
                rightIcon={<img src={print}></img>}
                variant="outline"
                ml="20px"
                fontSize="x-small"
              >
                PRINT
              </Button>
            </Flex>
            <Divider />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="gray">Item</Th>
                  <Th color="gray" isNumeric>
                    Quantity
                  </Th>
                  <Th color="gray" isNumeric>
                    Price - ₹
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Prawn & Chicken Sui Mai</Td>
                  <Td isNumeric>2</Td>
                  <Td isNumeric>430.00</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text noOfLines={2} style={{ width: '500px' }}>
                      Long Product Name With Two Lines, this paragraph will not
                      exceed two lines unlike the next truncated one
                    </Text>
                  </Td>
                  <Td isNumeric>1</Td>
                  <Td isNumeric>670</Td>
                </Tr>
                <Tr>
                  <Td>Prawn & Chicken Sui Mai</Td>
                  <Td isNumeric>3</Td>
                  <Td isNumeric>430</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text noOfLines={2} style={{ width: '500px' }}>
                      Long Product Name With Two Lines. Let us make this large
                      enough for two lines. Let us add more and more text. Let
                      us add even more text.
                    </Text>
                  </Td>
                  <Td isNumeric>1</Td>
                  <Td isNumeric>670</Td>
                </Tr>
                <Tr>
                  <Td isTruncated>Long Product Name With Two Lines</Td>
                  <Td isNumeric>1</Td>
                  <Td isNumeric>670</Td>
                </Tr>
              </Tbody>
            </Table>
            <Flex mt="5">
              <div></div>
              <Spacer />
              <Box mr="48">
                <Text style={TotalLabelStyles}>Sub Total </Text>
                <Text style={TotalLabelStyles}>Tax (12.36%)</Text>
                <Text style={TotalLabelStyles}>Discount (10%)</Text>
                <Text fontWeight="extrabold" fontSize="15px" mt="4">
                  Grand Total
                </Text>
              </Box>
              <Box mr="4">
                <Text fontSize="12px" fontWeight="extrabold">
                  ₹ 3470.00
                </Text>
                <Text fontSize="12px" fontWeight="extrabold">
                  ₹ 429.00
                </Text>
                <Text fontSize="12px" fontWeight="extrabold">
                  ₹ -390.00
                </Text>
                <Text fontSize="12px" fontWeight="extrabold" mt="4">
                  ₹ 3,509.00
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
