import Fastify from "fastify";
import cors from "@fastify/cors";

//stvaranje fastify server, inicijalizira ga
const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});

const todos = [
  { name: "shopping", description: "kruh, mlijeko, ...." },
  {
    name: "priprema za parcijalni",
    description:
      "Ponoviti javascript dobro, napraviti sam svoj projektić za vježbicu",
  },
  { name: "pročitati knjigu", description: "JS clean code - path to mastery" },
];

// Declare a route
// postavljamo prvu rutu
fastify.get("/", function (request, reply) {
  reply.send({ data: todos });
});

/**
 * Run the server!
 */
// počinjemo slušati dolazne zahtjeve na portu 3000
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
