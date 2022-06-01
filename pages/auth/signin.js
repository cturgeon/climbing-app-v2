import { Button, Box, Text } from "@mantine/core";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}`,
                })
              }
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
