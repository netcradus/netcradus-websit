import fs from 'fs';
import path from 'path';

// Local database directory and file for persistent storage when no external DB URL is configured
const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Failed to initialize local data file:', err);
  }
}

export async function saveInquiry(inquiry) {
  // Check if MongoDB / Database URL is configured in environment
  const dbUrl = process.env.DATABASE_URL || process.env.MONGODB_URI;

  if (dbUrl) {
    try {
      // If MongoDB driver or mongoose is available, attempt to write to MongoDB
      // For serverless portability, we dynamically handle MongoDB client
      const { MongoClient } = await import('mongodb').catch(() => ({ MongoClient: null }));
      if (MongoClient) {
        const client = new MongoClient(dbUrl);
        await client.connect();
        const dbName = process.env.DB_NAME || 'netcradus';
        const db = client.db(dbName);
        const collection = db.collection('inquiries');
        await collection.insertOne(inquiry);
        await client.close();
        console.log(`[DB] Saved inquiry ${inquiry.id} to MongoDB.`);
        return inquiry;
      }
    } catch (dbErr) {
      console.warn('[DB Warning] MongoDB save failed, falling back to persistent JSON storage:', dbErr.message);
    }
  }

  // Fallback to local persistent JSON file
  ensureDataFile();
  try {
    let records = [];
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      records = JSON.parse(content || '[]');
    }
    records.unshift(inquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), 'utf-8');
    console.log(`[DB] Saved inquiry ${inquiry.id} to local persistent store.`);
    return inquiry;
  } catch (err) {
    console.error('[DB Error] Failed to write inquiry to persistent store:', err);
    throw err;
  }
}

export async function getInquiries() {
  const dbUrl = process.env.DATABASE_URL || process.env.MONGODB_URI;

  if (dbUrl) {
    try {
      const { MongoClient } = await import('mongodb').catch(() => ({ MongoClient: null }));
      if (MongoClient) {
        const client = new MongoClient(dbUrl);
        await client.connect();
        const dbName = process.env.DB_NAME || 'netcradus';
        const db = client.db(dbName);
        const collection = db.collection('inquiries');
        const records = await collection.find({}).sort({ createdAt: -1 }).toArray();
        await client.close();
        return records;
      }
    } catch (err) {
      console.warn('[DB Warning] MongoDB fetch failed, using local store:', err.message);
    }
  }

  ensureDataFile();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(content || '[]');
    }
    return [];
  } catch (err) {
    console.error('[DB Error] Failed to read inquiries:', err);
    return [];
  }
}

export async function updateInquiryStatus(id, status) {
  const dbUrl = process.env.DATABASE_URL || process.env.MONGODB_URI;

  if (dbUrl) {
    try {
      const { MongoClient } = await import('mongodb').catch(() => ({ MongoClient: null }));
      if (MongoClient) {
        const client = new MongoClient(dbUrl);
        await client.connect();
        const dbName = process.env.DB_NAME || 'netcradus';
        const db = client.db(dbName);
        const collection = db.collection('inquiries');
        await collection.updateOne({ id }, { $set: { status, updatedAt: new Date().toISOString() } });
        await client.close();
        return true;
      }
    } catch (err) {
      console.warn('[DB Warning] MongoDB update failed:', err.message);
    }
  }

  ensureDataFile();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      let records = JSON.parse(content || '[]');
      records = records.map((rec) => {
        if (rec.id === id) {
          return { ...rec, status, updatedAt: new Date().toISOString() };
        }
        return rec;
      });
      fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), 'utf-8');
      return true;
    }
    return false;
  } catch (err) {
    console.error('[DB Error] Failed to update inquiry status:', err);
    return false;
  }
}

// Persistent Session Management Functions
const SESSIONS_FILE = path.join(DATA_DIR, 'sessions.json');

function ensureSessionsFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(SESSIONS_FILE)) {
      fs.writeFileSync(SESSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Failed to initialize session file:', err);
  }
}

export async function saveSession(sessionRecord) {
  const dbUrl = process.env.DATABASE_URL || process.env.MONGODB_URI;

  if (dbUrl) {
    try {
      const { MongoClient } = await import('mongodb').catch(() => ({ MongoClient: null }));
      if (MongoClient) {
        const client = new MongoClient(dbUrl);
        await client.connect();
        const dbName = process.env.DB_NAME || 'netcradus';
        const db = client.db(dbName);
        const collection = db.collection('sessions');
        await collection.insertOne(sessionRecord);
        await client.close();
        return sessionRecord;
      }
    } catch (dbErr) {
      console.warn('[DB Warning] MongoDB saveSession failed, falling back to local storage:', dbErr.message);
    }
  }

  ensureSessionsFile();
  try {
    let sessions = [];
    if (fs.existsSync(SESSIONS_FILE)) {
      const content = fs.readFileSync(SESSIONS_FILE, 'utf-8');
      sessions = JSON.parse(content || '[]');
    }
    const now = new Date().toISOString();
    sessions = sessions.filter((s) => s.expiresAt > now && s.id !== sessionRecord.id);
    sessions.unshift(sessionRecord);
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2), 'utf-8');
    return sessionRecord;
  } catch (err) {
    console.error('[DB Error] Failed to save session:', err);
    throw err;
  }
}

export async function getSession(sessionId) {
  if (!sessionId) return null;
  const dbUrl = process.env.DATABASE_URL || process.env.MONGODB_URI;

  if (dbUrl) {
    try {
      const { MongoClient } = await import('mongodb').catch(() => ({ MongoClient: null }));
      if (MongoClient) {
        const client = new MongoClient(dbUrl);
        await client.connect();
        const dbName = process.env.DB_NAME || 'netcradus';
        const db = client.db(dbName);
        const collection = db.collection('sessions');
        const session = await collection.findOne({ id: sessionId });
        await client.close();

        if (session && new Date(session.expiresAt) > new Date()) {
          return session;
        }
        return null;
      }
    } catch (err) {
      console.warn('[DB Warning] MongoDB getSession failed:', err.message);
    }
  }

  ensureSessionsFile();
  try {
    if (fs.existsSync(SESSIONS_FILE)) {
      const content = fs.readFileSync(SESSIONS_FILE, 'utf-8');
      const sessions = JSON.parse(content || '[]');
      const now = new Date().toISOString();
      const session = sessions.find((s) => s.id === sessionId);
      if (session && session.expiresAt > now) {
        return session;
      }
    }
    return null;
  } catch (err) {
    console.error('[DB Error] Failed to read session:', err);
    return null;
  }
}

export async function deleteSession(sessionId) {
  if (!sessionId) return true;
  const dbUrl = process.env.DATABASE_URL || process.env.MONGODB_URI;

  if (dbUrl) {
    try {
      const { MongoClient } = await import('mongodb').catch(() => ({ MongoClient: null }));
      if (MongoClient) {
        const client = new MongoClient(dbUrl);
        await client.connect();
        const dbName = process.env.DB_NAME || 'netcradus';
        const db = client.db(dbName);
        const collection = db.collection('sessions');
        await collection.deleteOne({ id: sessionId });
        await client.close();
        return true;
      }
    } catch (err) {
      console.warn('[DB Warning] MongoDB deleteSession failed:', err.message);
    }
  }

  ensureSessionsFile();
  try {
    if (fs.existsSync(SESSIONS_FILE)) {
      const content = fs.readFileSync(SESSIONS_FILE, 'utf-8');
      let sessions = JSON.parse(content || '[]');
      sessions = sessions.filter((s) => s.id !== sessionId);
      fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2), 'utf-8');
      return true;
    }
    return true;
  } catch (err) {
    console.error('[DB Error] Failed to delete session:', err);
    return false;
  }
}
