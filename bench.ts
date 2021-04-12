import { config, discordeno, harmony, space } from "./mod.ts";
import type { returnOBJ } from "./mod.ts";

type Name = "discordeno" | "harmony" | "space";
type Module = {
  addReaction: <T>(messages: T[]) => returnOBJ;
  fetchChannels: (amount: number) => returnOBJ;
  fetchGuilds: (amount: number) => returnOBJ;
  fetchMessages: (amount: number) => returnOBJ;
  fetchRoles: (amount: number) => returnOBJ;
  fetchUsers: (amount: number) => returnOBJ;
  removeReactions: <T>(messages: T[]) => returnOBJ;
  sendEmbed: (amount: number) => returnOBJ;
  sendFile: (amount: number) => returnOBJ;
  sendMessage: (amount: number) => returnOBJ;
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
  data[name].fetch.messages = module.fetchMessages(config.fetch.messages);
  data[name].fetch.users = module.fetchUsers(config.fetch.users);
  data[name].fetch.channels = module.fetchChannels(config.fetch.channels);
  data[name].fetch.roles = module.fetchRoles(config.fetch.roles);
  data[name].fetch.guilds = module.fetchGuilds(config.fetch.guilds);

  data[name].send.messages = module.sendMessage(config.send.messages);
  data[name].send.embed = module.sendEmbed(config.send.messages);
  data[name].send.files = module.sendFile(config.send.files);
  data[name].send.addReactions = module.addReaction([""]);
  data[name].send.removeReactions = module.removeReactions([""]);
}
console.log(data);
