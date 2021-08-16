import React from 'react';
import {
  InputLeftElement,
  InputGroup,
  Textarea,
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
  FormControl,
  Button,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { sizes } from '../../../styles/media';
import skipIconSmall from '../../assets/skip-icon.png';
import skipIconMedium from '../../assets/skip-icon@2x.png';
import skipIconLarge from '../../assets/skip-icon@3x.png';
import editIconSmall from '../../assets/edit.png';
import editIconMedium from '../../assets/edit@2x.png';
import editIconLarge from '../../assets/edit@3x.png';

export const CustomerInfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        color="#5B8DCF"
        rightIcon={
          <img
            srcSet={`${editIconSmall} ${sizes.small}w, ${editIconMedium} ${sizes.medium}w, ${editIconLarge} ${sizes.large}w`}
            style={{ maxWidth: '20px' }}
            alt="edit"
          ></img>
        }
        variant="outline"
        fontSize="x-small"
        style={{
          height: '30px',
          border: 'none',
          width: '30px',
        }}
      ></Button>

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ borderRadius: '0' }}>
          <ModalHeader>
            <Text fontSize={14}>
              Create New Invoice
              <span
                style={{
                  fontWeight: 'lighter',
                  marginLeft: '20px',
                  fontSize: '10px',
                }}
              >
                ORDER NO: 1234
              </span>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex mb="2">
              <Box>
                <Text fontSize="x-small" fontWeight="bold">
                  CUSTOMER DETAILS
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Button
                  color="#336399"
                  size="xs"
                  borderRadius="0"
                  rightIcon={
                    <img
                      srcSet={`${skipIconSmall} ${sizes.small}w, ${skipIconMedium} ${sizes.medium}w, ${skipIconLarge} ${sizes.large}w`}
                      style={{ maxWidth: '10px' }}
                      alt="skip"
                    />
                  }
                  fontSize="12px"
                  px="20px"
                  onClick={onClose}
                >
                  SKIP
                </Button>
              </Box>
            </Flex>
            <Divider />
            <Flex mt={4} fontSize={10}>
              <FormControl isRequired>
                <Box>
                  <FormLabel fontSize={10}>First name</FormLabel>
                  <Input size="sm" fontSize={10} placeholder="First name" />
                </Box>
              </FormControl>
              <Spacer />
              <FormControl isRequired>
                <Box ml="4">
                  <FormLabel fontSize={10}>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={'+91'}
                      fontSize="10px"
                      style={{ backgroundColor: '#F2F3F5', height: '32px' }}
                    />
                    <Input size="sm" fontSize={10} placeholder="" />
                  </InputGroup>
                </Box>
              </FormControl>
            </Flex>

            <Flex>
              <Box>
                <FormControl mt={4}>
                  <FormLabel fontSize={10}>Address</FormLabel>
                  <Textarea
                    fontSize={10}
                    placeholder="Complete Address"
                    style={{
                      height: '100px',
                      width: '234px',
                      borderRadius: '0',
                    }}
                  />
                </FormControl>
              </Box>
              <Box mt="4" ml="4">
                <FormControl isRequired>
                  <Box>
                    <FormLabel fontSize={10}>Email ID</FormLabel>
                    <Input
                      style={{ width: '215px', borderRadius: '0' }}
                      fontSize={10}
                      placeholder="Customer Email Address"
                    />
                  </Box>
                </FormControl>
                <FormControl>
                  <Box mt="2">
                    <FormLabel fontSize={10} mb="1">
                      Pincode
                    </FormLabel>
                    <Input
                      size="sm"
                      style={{ width: '80px' }}
                      placeholder="560067"
                    />
                  </Box>
                </FormControl>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter style={{ background: '#EEF0F2' }}>
            <Button
              colorScheme="blue"
              size="sm"
              borderRadius="0"
              fontSize="12px"
              px="30px"
            >
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
