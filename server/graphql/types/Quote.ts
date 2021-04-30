import { intArg, nonNull, objectType } from "nexus";
import { extendType } from "nexus";
import { Author } from "./Author";
import { random } from "faker";

export const Quote = objectType({
  name: "Quote",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("text");
    t.string("url");
    t.nonNull.field("author", { type: Author });
  },
});

export const QuoteQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("quotes", {
      type: "Quote",
      resolve(_root, _args, ctx) {
        return ctx.db.quote.findMany({ include: { author: true } });
      },
    });
    t.field("quote", {
      type: "Quote",
      args: {
        id: nonNull(intArg()),
      },
      resolve(_root, args, ctx) {
        return ctx.db.quote.findUnique({
          where: {
            id: args.id,
          },
          include: { author: true },
        });
      },
    });
    t.nonNull.field("randomQuote", {
      type: "Quote",
      async resolve(_root, _args, ctx) {
        return ctx.db.quote.findFirst({
          skip: random.number((await ctx.db.quote.count()) - 1),
          include: { author: true },
        });
      },
    });
  },
});
