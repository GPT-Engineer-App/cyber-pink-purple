import React from "react";
import { Box, Flex, Heading, Text, Image, IconButton, useColorMode, useColorModeValue, Stack, Link, Button, keyframes } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("linear-gradient(135deg, #FF6B6B 0%, #556270 100%)", "linear-gradient(135deg, #4A148C 0%, #7C4DFF 100%)");
  const color = useColorModeValue("white", "gray.100");

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="space-between" flexDirection={["column", "column", "row"]} bg={bg} color={color} px={[4, 8, 16]} py={[8, 16]}>
      <Box flex={1} mb={[8, 0]}>
        <Image src="https://images.unsplash.com/photo-1582836997529-023a5ae82b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTI4MjU5Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cyberpunk Portrait" objectFit="cover" w="100%" h={["auto", "auto", "80vh"]} borderRadius="md" animation={`${fadeIn} 1s ease-in-out`} />
      </Box>
      <Box flex={1} ml={[0, 0, 16]} textAlign={["center", "center", "left"]}>
        <Heading as="h1" size="2xl" fontWeight="bold" mb={4} animation={`${fadeIn} 1s ease-in-out`}>
          Hi, I'm John Doe
        </Heading>
        <Text fontSize="xl" mb={8} animation={`${fadeIn} 1s ease-in-out 0.2s`}>
          I'm a passionate developer with expertise in web technologies. I love building modern and interactive applications.
        </Text>
        <Stack direction="row" spacing={4} justifyContent={["center", "center", "flex-start"]} animation={`${fadeIn} 1s ease-in-out 0.4s`}>
          <IconButton as={Link} href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" _hover={{ color: "pink.500" }} />
          <IconButton as={Link} href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" _hover={{ color: "pink.500" }} />
          <IconButton as={Link} href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" _hover={{ color: "pink.500" }} />
        </Stack>
      </Box>
      <Button onClick={toggleColorMode} pos="absolute" top="1rem" right="1rem">
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
};

export default Index;
