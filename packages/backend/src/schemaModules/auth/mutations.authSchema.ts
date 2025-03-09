import { extendType, nonNull, objectType } from 'nexus';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import { AuthPayload, LoginInput } from './objectTypes.authSchema';

export const LogoutResponse = objectType({
  name: 'LogoutResponse',
  definition(t) {
    t.nonNull.boolean('success');
    t.string('message');
  },
});

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('logout', {
      type: 'LogoutResponse',
      resolve() {
        return {
          success: true,
          message: 'Successfully logged out',
        };
      },
    });

    t.nonNull.field('register', {
      type: AuthPayload,
      args: {
        input: nonNull(LoginInput),
      },
      async resolve(
        _root,
        { input: { email, password } },
        { prisma },
      ): Promise<{
        token: string;
        user: {
          id: number;
          email: string;
          name: string | null;
          createdAt: any;
          updatedAt: any;
          passwordHash: string;
        };
      }> {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          throw new GraphQLError('User already exists');
        }

        // Hash password
        const passwordHash = await hash(password, 10);

        // Create new user
        const user = await prisma.user.create({
          data: {
            email,
            passwordHash,
          },
        });

        // Generate JWT token
        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET || 'your-secret-key',
          { expiresIn: '1d' },
        );

        // Return without password hash
        const { passwordHash: _, ...userWithoutPassword } = user;
        return {
          token,
          user: {
            ...userWithoutPassword,
            passwordHash: user.passwordHash,
          },
        };
      },
    });

    t.nonNull.field('login', {
      type: AuthPayload,
      args: {
        input: nonNull(LoginInput),
      },
      async resolve(
        _root,
        { input: { email, password } },
        { prisma },
      ): Promise<{
        token: string;
        user: {
          id: number;
          email: string;
          name: string | null;
          createdAt: any;
          updatedAt: any;
          passwordHash: string;
        };
      }> {
        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new GraphQLError('Invalid email or password');
        }

        // Verify password
        const validPassword = await compare(password, user.passwordHash);
        if (!validPassword) {
          throw new GraphQLError('Invalid email or password');
        }

        // Generate JWT token
        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET || 'your-secret-key',
          { expiresIn: '1d' },
        );

        // Return without password hash
        const { passwordHash: _, ...userWithoutPassword } = user;
        return {
          token,
          user: {
            ...userWithoutPassword,
            passwordHash: user.passwordHash,
          },
        };
      },
    });
  },
});
