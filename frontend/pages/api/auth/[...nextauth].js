import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      id: 'credentials',
      name: 'project', //name to display
      credentials: {
        username: 
      }
    })
  ]
}

export default NextAuth({})

// import { useSession } from "next-auth/react";

// export default function Home() {
//   const { data: session } = useSession();

//   axios.get("https://localhost:9000/api/v1/users/current", {
//     headers: {
//       Authorization: "Bearer " + session.user.accessToken,
//     },
//   });

//   return <></>;
// }
