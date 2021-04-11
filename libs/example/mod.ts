// IMPORT CLIENT HERE VIA deno.land/x url

interface returnOBJ {
  avgTimePerExecution: number;
  totalTimeOfExecutions: number;
  executions: number;
}

// CREATE NEW INSTANCE OF CLIENT; const client = new Client();

export function fetchMessages(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };

  const start = performance.now();

  // FETCH MESSAGES

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function fetchUsers(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };

  const start = performance.now();

  // FETCH USERS

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function fetchRoles(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };

  const start = performance.now();

  // FETCH ROLES

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function fetchGuilds(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };

  const start = performance.now();

  // FETCH GUILDS

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function sendMessage(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };
  const message = "Hello Discord";
  const start = performance.now();

  for (let i = 0; i < amount; i++) {
    // use the variable `message`
    // Client.send(message);
  }

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function sendEmbed(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };
  const message = "Hello Discord";
  const start = performance.now();

  for (let i = 0; i < amount; i++) {
    // 1 field with title and body of that field as `message`
    // Client.sendEmbed(message);
  }

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function uploadFile(amount: number): returnOBJ {
  const obj: returnOBJ = {
    avgTimePerExecution: NaN,
    totalTimeOfExecutions: NaN,
    executions: amount,
  };
  const fileDirectory = "./libs/example/mod.ts";
  const start = performance.now();

  for (let i = 0; i < amount; i++) {
    // Send content of the example mod.ts
    // Client.sendFile(fileDirectory);
  }

  const stop = performance.now();
  obj.totalTimeOfExecutions = stop - start;
  obj.avgTimePerExecution = obj.totalTimeOfExecutions / obj.executions;
  return obj;
}

export function sendEmbedWithFile(amount: number): returnOBJ {
}

export function addReaction(amount: number): returnOBJ {
}

export function removeReaction(amount: number): returnOBJ {
}

export function removeReactions(amount: number): returnOBJ {
}

export function removeEmoji(amount: number): returnOBJ {
}

export function addEmoji(amount: number): returnOBJ {
}
