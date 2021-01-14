import { NextApiHandler } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Adapters from 'next-auth/adapters';
import Providers from 'next-auth/providers';

const options: InitOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: Adapters.Default({
    type: 'mongodb',
    url:
      'mongodb+srv://cuspide_admin:l3534WUjsKbXMes2@cluster0.pub09.mongodb.net/Cuspide',
  }),
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
