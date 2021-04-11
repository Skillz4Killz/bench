import { ArgumentsParser } from "./deps.ts";

interface Config {
  "fetch": {
    "users": number;
    "channels": number;
    "roles": number;
    "guilds": number;
    "messages": number;
  };
  "send": {
    "messages": number;
    "reactions": number;
    "files": number;
  };
}

const cliArgs = new ArgumentsParser({
  fetchUsers: {
    names: ["--fetch-users"],
    parser: Number,
  },
  fetchChannels: {
    names: ["--fetch-channels"],
    parser: Number,
  },
  fetchRoles: {
    names: ["--fetch-roles"],
    parser: Number,
  },
  fetchGuilds: {
    names: ["--fetch-guilds"],
    parser: Number,
  },
  fetchMessages: {
    names: ["--fetch-messages"],
    parser: Number,
  },
  sendMessages: {
    names: ["--send-messages"],
    parser: Number,
  },
  sendReactions: {
    names: ["--send-reactions"],
    parser: Number,
  },
  sendFiles: {
    names: ["--send-files"],
    parser: Number,
  },
}).parseArgs();

export const config: Config = {
  fetch: {
    users: cliArgs.fetchUsers ?? 1e6,
    channels: cliArgs.fetchChannels ?? 1e5,
    roles: cliArgs.fetchRoles ?? 1e4,
    guilds: cliArgs.fetchGuilds ?? 1e4,
    messages: cliArgs.fetchMessages ?? 1e7,
  },
  send: {
    messages: cliArgs.sendMessages ?? 1e6,
    reactions: cliArgs.sendMessages ?? 5e4,
    files: cliArgs.sendFiles ?? 1e4,
  },
};
