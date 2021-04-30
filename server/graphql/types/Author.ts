import { intArg, nonNull, objectType } from "nexus";
import { extendType } from "nexus";
import { random } from "faker";

export const Author = objectType({
  name: "Author",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.string("url");
  },
});

export const AuthorQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("authors", {
      type: "Author",
      resolve(_root, _args, ctx) {
        return ctx.db.author.findMany();
      },
    });
    t.field("author", {
      args: {
        id: nonNull(intArg()),
      },
      type: "Author",
      resolve(_root, args, ctx) {
        return ctx.db.author.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
    t.nonNull.field("randomAuthor", {
      type: "Author",
      async resolve(_root, _args, ctx) {
        return ctx.db.author.findFirst({
          skip: random.number((await ctx.db.author.count()) - 1),
        });
      },
    });
  },
});
