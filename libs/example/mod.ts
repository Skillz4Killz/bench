// IMPORT CLIENT HERE VIA deno.land/x url

const message = "Hello Discord";
const fileDirectory = "./libs/example/mod.ts";

interface returnOBJ {
  avg: number;
  total: number;
}

// CREATE NEW INSTANCE OF CLIENT; const client = new Client();

export function fetchMessages(amount: number): returnOBJ {
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

export function fetchUsers(amount: number): returnOBJ {
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

export function fetchRoles(amount: number): returnOBJ {
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

export function fetchGuilds(amount: number): returnOBJ {
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

export function sendMessage(amount: number): returnOBJ {
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

export function sendEmbed(amount: number): returnOBJ {
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

export function sendFile(amount: number): returnOBJ {
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

export function addReaction(messages: unknown[]): returnOBJ {
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

export function removeReactions(messages: unknown[]): returnOBJ {
  const obj: returnOBJ = {
    avg: NaN,
    total: NaN,
  };

  const start = performance.now();

  for (const message of messages) {
    // remove :thumbsup: reaction to message[i]
    // Client.removeReactions(message);
  }

  const stop = performance.now();

  obj.total = stop - start;
  obj.avg = obj.total / messages.length;

  return obj;
}
