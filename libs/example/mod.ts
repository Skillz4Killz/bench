// IMPORT CLIENT HERE VIA deno.land/x url
import type { returnOBJ } from "../../types.ts";
const message = "Hello Discord";
const fileDirectory = "./libs/example/mod.ts";

// CREATE NEW INSTANCE OF CLIENT; const client = new Client();

export async function fetchMessages(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  // FETCH MESSAGES

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function fetchUsers(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  // FETCH USERS

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}
export async function fetchChannels(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  // FETCH CHANNELS

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function fetchRoles(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  // FETCH ROLES

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function fetchGuilds(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  // FETCH GUILDS

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function sendMessage(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  for (let i = 0; i < amount; i++) {
    // use the variable `message`
    // Client.send(message);
  }

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function sendEmbed(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  for (let i = 0; i < amount; i++) {
    // 1 field with title and body of that field as `message`
    // Client.sendEmbed(message);
  }

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function sendFile(amount: number): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  for (let i = 0; i < amount; i++) {
    // Send content of the example mod.ts
    // Client.sendFile(fileDirectory);
  }

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / amount;

  return obj;
}

export async function addReaction(messages: unknown[]): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  for (const message of messages) {
    // add :thumbsup: reaction to message[i]
    // Client.addReaction(message, ":thumbsup:");
  }

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / messages.length;

  return obj;
}

export async function removeReactions(messages: unknown[]): Promise<returnOBJ> {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  for (const message of messages) {
    // remove :thumbsup: reaction to message
    // Client.removeReactions(message);
  }

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / messages.length;

  return obj;
}
