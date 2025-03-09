import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('email');
    t.string('name');
    t.nonNull.string('passwordHash', {
      description: 'Hashed password for the user',
    });
    t.nonNull.field('createdAt', { type: 'Date' });
    t.nonNull.field('updatedAt', { type: 'Date' });
  },
});
