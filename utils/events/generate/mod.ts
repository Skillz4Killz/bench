import { startBot } from "https://deno.land/x/discordeno@10.5.0/mod.ts";

function savePayload(payload: any) {
  console.log("saving payload", payload);
  // TODO: save to disk somewhere
}

startBot({
  token: "BOT TOKEN",
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
  ],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
    },
    raw: savePayload,
    rawGateway: savePayload,
  },
});

// After 2 hrs exit the process.
setTimeout(() => Deno.exit(), 1000 * 60 * 60 * 2);
