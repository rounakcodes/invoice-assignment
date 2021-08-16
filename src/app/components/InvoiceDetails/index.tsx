/**
 *
 * InvoiceDetails
 *
 */
import * as React from 'react';
import {
  Spacer,
  Flex,
  Button,
  Divider,
  Box,
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
import print from '../../assets/printer-blue.png';

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

export function InvoiceDetails() {
  return (
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
                  enough for two lines. Let us add more and more text. Let us
                  add even more text.
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
  );
}
