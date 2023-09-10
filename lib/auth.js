import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import jwtDecode from "jwt-decode";

async function refreshAccessToken(token) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        "/api/v3/coach-onboarding/auth/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: token.refresh,
        }),
      }
    );

    const data = await response.json();

    return {
      ...token,
      access: data.access,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      authorize: async (credentials) => {
        try {
          // Authenticate user with credentials
          const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL +
              "/api/v3/coach-onboarding/auth/login/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: credentials.email,
                password: credentials.password,
              }),
            }
          );
          const data = await response.json();
          if (response.ok && data) {
            return data;
          }

          return null;
        } catch (e) {
          throw new Error(e);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          access: user.token.access,
          refresh: user.token.refresh,
        };
      }

      const { exp } = jwtDecode(token.access);
      // Return previous token if the access token has not expired
      if (Date.now() < exp * 1000) {
        return token;
      }

      // refresh token
      const refreshedToken = await refreshAccessToken(token);
      return refreshedToken;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.sub; // ID should be UUID
        session.user.email = token.email;
        session.access = token.access; // FIXME: should not be exposed
      }

      return session;
    },
  },
};
