import { config, discordeno, harmony, space } from "./mod.ts";
const benchmarks = {
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
};
const data = {
  harmony: benchmarks,
  discordeno: benchmarks,
  space: benchmarks,
};

/**
  It is a really big structure right now!
  Maybe possible to split the structure into their libs bench.ts?
  Then we can import those seperate objects and add them to here
*/

// DISCORDENO
// deno-fmt-ignore
data.discordeno.fetch.messages = discordeno.fetchMessages(config.fetch.messages);
data.discordeno.fetch.users = discordeno.fetchUsers(config.fetch.users);
// deno-fmt-ignore
data.discordeno.fetch.channels = discordeno.fetchChannels(config.fetch.channels);
data.discordeno.fetch.roles = discordeno.fetchRoles(config.fetch.roles);
data.discordeno.fetch.guilds = discordeno.fetchGuilds(config.fetch.guilds);

data.discordeno.send.messages = discordeno.sendMessage(config.send.messages);
data.discordeno.send.embed = discordeno.sendEmbed(config.send.messages);
data.discordeno.send.files = discordeno.sendFile(config.send.files);
data.discordeno.send.addReactions = discordeno.addReaction([]);
data.discordeno.send.removeReactions = discordeno.removeReactions([]);

// HARMONY
data.harmony.fetch.messages = harmony.fetchMessages(config.fetch.messages);
data.harmony.fetch.users = harmony.fetchUsers(config.fetch.users);
data.harmony.fetch.channels = harmony.fetchChannels(config.fetch.channels);
data.harmony.fetch.roles = harmony.fetchRoles(config.fetch.roles);
data.harmony.fetch.guilds = harmony.fetchGuilds(config.fetch.guilds);

data.harmony.send.messages = harmony.sendMessage(config.send.messages);
data.harmony.send.embed = harmony.sendEmbed(config.send.messages);
data.harmony.send.files = harmony.sendFile(config.send.files);
data.harmony.send.addReactions = harmony.addReaction([]);
data.harmony.send.removeReactions = harmony.removeReactions([]);

// SPACE
data.space.fetch.messages = space.fetchMessages(config.fetch.messages);
data.space.fetch.users = space.fetchUsers(config.fetch.users);
data.space.fetch.channels = space.fetchChannels(config.fetch.channels);
data.space.fetch.roles = space.fetchRoles(config.fetch.roles);
data.space.fetch.guilds = space.fetchGuilds(config.fetch.guilds);

data.space.send.messages = space.sendMessage(config.send.messages);
data.space.send.embed = space.sendEmbed(config.send.messages);
data.space.send.files = space.sendFile(config.send.files);
data.space.send.addReactions = space.addReaction([]);
data.space.send.removeReactions = space.removeReactions([]);
console.log(data);
