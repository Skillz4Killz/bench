import { config, discordeno, harmony, space } from "./mod.ts";
import type { returnOBJ } from "./mod.ts";

type Name = "discordeno" | "harmony" | "space";
type Module = {
  addReaction: <T>(messages: T[]) => Promise<returnOBJ>;
  fetchChannels: (amount: number) => Promise<returnOBJ>;
  fetchGuilds: (amount: number) => Promise<returnOBJ>;
  fetchMessages: (amount: number) => Promise<returnOBJ>;
  fetchRoles: (amount: number) => Promise<returnOBJ>;
  fetchUsers: (amount: number) => Promise<returnOBJ>;
  removeReactions: <T>(messages: T[]) => Promise<returnOBJ>;
  sendEmbed: (amount: number) => Promise<returnOBJ>;
  sendFile: (amount: number) => Promise<returnOBJ>;
  sendMessage: (amount: number) => Promise<returnOBJ>;
};

interface Libs {
  name: Name;
  module: Module;
}
interface avgtotal {
  avg: number;
  total: number;
}
interface Benchmark {
  fetch: {
    users: avgtotal;
    channels: avgtotal;
    roles: avgtotal;
    guilds: avgtotal;
    messages: avgtotal;
  };
  send: {
    messages: avgtotal;
    embed: avgtotal;
    addReactions: avgtotal;
    removeReactions: avgtotal;
    files: avgtotal;
  };
}

const libs: Libs[] = [{
  name: "discordeno",
  module: discordeno,
}];

const benchmarks = (): Benchmark => ({
  fetch: {
    users: {
      avg: NaN,
      total: NaN,
    },
    channels: {
      avg: NaN,
      total: NaN,
    },
    roles: {
      avg: NaN,
      total: NaN,
    },
    guilds: {
      avg: NaN,
      total: NaN,
    },
    messages: {
      avg: NaN,
      total: NaN,
    },
  },
  send: {
    messages: {
      avg: NaN,
      total: NaN,
    },
    embed: {
      avg: NaN,
      total: NaN,
    },
    addReactions: {
      avg: NaN,
      total: NaN,
    },
    removeReactions: {
      avg: NaN,
      total: NaN,
    },
    files: {
      avg: NaN,
      total: NaN,
    },
  },
});

const data: Record<Name, Benchmark> = {
  harmony: benchmarks(),
  discordeno: benchmarks(),
  space: benchmarks(),
};

for (const { name, module } of libs) {
  data[name].fetch.messages = await module.fetchMessages(config.fetch.messages);
  data[name].fetch.users = await module.fetchUsers(config.fetch.users);
  data[name].fetch.channels = await module.fetchChannels(config.fetch.channels);
  data[name].fetch.roles = await module.fetchRoles(config.fetch.roles);
  data[name].fetch.guilds = await module.fetchGuilds(config.fetch.guilds);

  data[name].send.messages = await module.sendMessage(config.send.messages);
  data[name].send.embed = await module.sendEmbed(config.send.messages);
  data[name].send.files = await module.sendFile(config.send.files);
  data[name].send.addReactions = await module.addReaction([""]);
  data[name].send.removeReactions = await module.removeReactions([""]);
}
console.log(data);
