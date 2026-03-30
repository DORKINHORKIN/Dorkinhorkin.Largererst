import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const CACHE_DIR = path.resolve("./src/assets/remote-cache");

function hash(url: string) {
  return crypto.createHash("sha1").update(url).digest("hex");
}

const locks = new Map<string, Promise<string>>();

export async function ensureImageCached(url: string): Promise<string> {
  const ext = path.extname(new URL(url).pathname) || ".jpg";
  const filename = `${hash(url)}${ext}`;
  const filePath = path.join(CACHE_DIR, filename);


  const p = (async () => {
    try {
      await fs.access(filePath);
      return `${filename}`;
    } catch {}

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url} (${res.status})`);

    const buffer = Buffer.from(await res.arrayBuffer());

    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.writeFile(filePath, buffer);

    return `${filename}`;
  })();

  locks.set(filePath, p);
  try {
    const result = await p;
    return result;
  } finally {
    locks.delete(filePath);
  }
}
