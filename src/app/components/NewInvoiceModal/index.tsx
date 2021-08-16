import React from 'react';
import { CustomerInfoModal } from 'app/components/CustomerInfoModal';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  InputRightElement,
  InputGroup,
  Flex,
  Box,
  Spacer,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  Stat,
  StatLabel,
  StatHelpText,
} from '@chakra-ui/react';
import { sizes } from '../../../styles/media';
import plusIconSmall from '../../assets/plus-white.png';
import plusIconMedium from '../../assets/plus-white@2x.png';
import plusIconLarge from '../../assets/plus-white@3x.png';
import enterIconSmall from '../../assets/enter-icon.png';
import enterIconMedium from '../../assets/enter-icon@2x.png';
import enterIconLarge from '../../assets/enter-icon@3x.png';

const PlusButtonStyle = {
  borderRadius: '50%',
  background: '#E360A4',
  float: 'right',
  position: 'relative',
  top: '20px',
  right: '5%',
  height: '40px',
  width: '40px',
  paddingLeft: '10px',
};

const SubTitleStyle = {
  marginLeft: '20px',
  fontSize: '9px',
  color: 'gray',
};

export const NewInvoiceModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} __css={PlusButtonStyle}>
        <img
          srcSet={`${plusIconSmall} ${sizes.small}w, ${plusIconMedium} ${sizes.medium}w, ${plusIconLarge} ${sizes.large}w`}
          style={{ maxWidth: '20px' }}
          alt="add"
        />
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ borderRadius: '0' }}>
          <ModalHeader>
            <Text fontSize={14}>
              Create New Invoice
              <span style={SubTitleStyle}>ORDER NO: 1234</span>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <Flex style={{ height: '35px' }}>
              <Box>
                <Text fontSize="x-small" fontWeight="bold">
                  PRODUCT DETAILS
                </Text>
              </Box>
              <Stat style={{ position: 'relative', bottom: '20px' }}>
                <StatLabel style={{ textAlign: 'right', fontSize: '12px' }}>
                  Customer Details
                </StatLabel>
                <StatLabel
                  style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textAlign: 'right',
                  }}
                >
                  JOHN DOE
                </StatLabel>
                <StatHelpText
                  style={{
                    textAlign: 'right',
                    fontSize: '12px',
                  }}
                >
                  johndoe@serviceprovider.com
                </StatHelpText>
              </Stat>
              <CustomerInfoModal />
            </Flex>
            <Divider />
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th fontSize="10px" color="gray">
                    Item
                  </Th>
                  <Th isNumeric fontSize="10px" color="gray">
                    Quantity
                  </Th>
                  <Th isNumeric fontSize="10px" color="gray">
                    Price - ₹
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="10px">Prawn & Chicken Sui Mai</Td>
                  <Td fontSize="10px" isNumeric>
                    2.00
                  </Td>
                  <Td fontSize="10px" fontWeight="extrabold" isNumeric>
                    25.4
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Divider />
            <Flex fontSize={10} mt="2">
              <Box w="250px">
                <Input
                  style={{
                    borderRadius: '0px',
                    border: '#ccc solid 1px',
                    fontSize: '12px',
                  }}
                  size="xs"
                  type="tel"
                  placeholder="Please enter Item Name"
                />
              </Box>
              <Box w="100px" ml="2">
                <Input
                  style={{
                    borderRadius: '0px',
                    border: '#ccc solid 1px',
                    fontSize: '12px',
                  }}
                  size="xs"
                  type="tel"
                  placeholder="0.00"
                />
              </Box>
              <Box w="100px" ml="2">
                <Input
                  style={{
                    borderRadius: '0px',
                    border: '#ccc solid 1px',
                    fontSize: '12px',
                    textAlign: 'right',
                  }}
                  size="xs"
                  type="tel"
                  placeholder="0.00"
                />
              </Box>
              <Box w="40px" ml="2">
                <Button
                  style={{
                    borderRadius: '0px',
                    border: '#80B8FE solid 1px',
                    fontSize: '12px',
                  }}
                  variant="outline"
                  size="xs"
                  leftIcon={
                    <img
                      srcSet={`${enterIconSmall} ${sizes.small}w, ${enterIconMedium} ${sizes.medium}w, ${enterIconLarge} ${sizes.large}w`}
                      alt="enter"
                      style={{ maxWidth: '15px' }}
                    ></img>
                  }
                  pl="15px"
                />
              </Box>
            </Flex>
            <Divider mt="2" mb="16" />
            <Divider />
            <Flex fontSize={10} mt="2">
              <Box w="50px">
                <InputGroup size="x-small">
                  <InputRightElement
                    pointerEvents="none"
                    children={
                      <Text mt="0.5" pr="1" fontSize="12px">
                        %
                      </Text>
                    }
                  />
                  <Input
                    style={{
                      borderRadius: '0px',
                      border: '#ccc solid 1px',
                      fontSize: '10px',
                    }}
                    pl="5px"
                    type="tel"
                    placeholder="Tax"
                  />
                </InputGroup>
              </Box>
              <Spacer />
              <Box w="70px" mr="200">
                <InputGroup size="x-small">
                  <InputRightElement
                    pointerEvents="none"
                    children={
                      <Text mt="0.5" pr="1" fontSize="12px">
                        %
                      </Text>
                    }
                  />
                  <Input
                    style={{
                      borderRadius: '0px',
                      border: '#ccc solid 1px',
                      fontSize: '10px',
                    }}
                    type="tel"
                    pl="5px"
                    placeholder="Discount"
                  />
                </InputGroup>
              </Box>
              <Spacer />
              <Box w="100px">
                <Text>Sub Total</Text>
              </Box>
              <Box>
                <Text mr="5" fontWeight="extrabold">
                  ₹ 430
                </Text>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter style={{ background: '#EEF0F2' }}>
            <Flex fontSize={10}>
              <Box w="120px">
                <Text>Tax</Text>
                <Text>₹ 0.00</Text>
              </Box>
              <Spacer />
              <Box w="180px" ml="4">
                <Text>Discount</Text>
                <Text>₹ 0.00</Text>
              </Box>
              <Spacer />
              <Box w="100px">
                <Text>Grand Total</Text>
                <Text fontWeight="extrabold"> ₹ 430.00</Text>
              </Box>
              <Spacer />
              <Box>
                <Button
                  colorScheme="blue"
                  size="sm"
                  borderRadius="0"
                  fontSize="12px"
                  px="40px"
                >
                  Save
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
