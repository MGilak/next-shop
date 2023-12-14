import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "نام کاربری",
          type: "text",
          placeholder: "نام کابری",
        },
        password: {
          label: "کلمه عبور",
          type: "password",
          placeholder: "کلمه عبور",
        },
      },
      async authorize(credentials) {
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();
        const user = {
          id: "11",
          fullname: "محمود گیلک",
          username: "gilakrz",
          password: "123456",
        };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login/page",
    signOut: "/auth/signout/page",
    // register: "/auth/register/page",
  },
};
