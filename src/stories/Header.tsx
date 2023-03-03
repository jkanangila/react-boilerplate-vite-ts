import { chakra, Flex, HStack, Button, Heading, Text } from "@chakra-ui/react";

export type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <chakra.header position="static">
    <Flex w="100%" px="6" py="5" align="center" justify="space-between">
      <Heading size="sm" as="div" sx={{ flexGrow: 1 }}>
        Acme
      </Heading>
      {user ? (
        <HStack>
          <Text fontSize="md" mr={2}>
            {user.name}
          </Text>
          <Button role="button" color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </HStack>
      ) : (
        <Button role="button" color="inherit" onClick={onLogin}>
          Log in
        </Button>
      )}
    </Flex>
  </chakra.header>
);
