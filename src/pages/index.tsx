import { GetServerSideProps } from "next";
import { getSession, signIn, useSession } from "next-auth/react";

export default function Login() {
  const { data, status } = useSession()

  function signInDiscord() {
    signIn('discord');
  }
  return (
    <div>
      <button onClick={signInDiscord}>Login</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if(session) {
    return {
      redirect: {
        destination: '/user',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}