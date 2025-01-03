import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return  (
    <VStack alignItems="flex-start" bg="#fff" borderRadius="10">
      <Image src={imageSrc} borderRadius="10" />
      <Heading  p="3" size="md">{title}</Heading>
      <Text color="#777" pl="3" width="93%" >{description}</Text>
      <HStack p="3">
        <Heading size="sm">See more</Heading>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>

  );
};

export default Card;
