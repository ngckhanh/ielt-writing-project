import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db } from "./db"; // Assuming you have a configured database client (e.g., Prisma or Supabase)

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Use JWT-based sessions for scalability
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Provide your JWT secret for token signing
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  providers: [
    // Google Provider for OAuth login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // Credentials Provider for email/password login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // Query your database for the user
        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // Compare the hashed password
        const isPasswordValid = await compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error("Incorrect password");
        }

        // Return user object to attach to the session token
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // Include additional fields if needed
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Attach user data to the JWT token after login
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role; // Example: Include role in the token
      }
      return token;
    },
    async session({ session, token }) {
      // Attach JWT token data to the session object
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role, // Example: Include role in the session
      };
      return session;
    },
  },
};
