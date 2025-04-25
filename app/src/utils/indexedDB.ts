const DB_NAME = "pagencyFramework"
const STORE_NAME = "formData"
const DB_VERSION = 1

export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    }
  })
}

export const saveFormData = async (itemId: number, data: Record<string, string>): Promise<void> => {
  const db = await initDB()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite")
    const store = transaction.objectStore(STORE_NAME)
    const request = store.put(data, itemId.toString())

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve()
  })
}

export const getFormData = async (itemId: number): Promise<Record<string, string> | null> => {
  const db = await initDB()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly")
    const store = transaction.objectStore(STORE_NAME)
    const request = store.get(itemId.toString())

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result || null)
  })
}

export const getAllFormData = async (): Promise<
  Array<{ itemId: number; data: Record<string, string> }>
> => {
  const db = await initDB()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly")
    const store = transaction.objectStore(STORE_NAME)
    const result: Array<{ itemId: number; data: Record<string, string> }> = []

    store.openCursor().onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result
      if (cursor) {
        result.push({
          itemId: parseInt(cursor.key as string),
          data: cursor.value,
        })
        cursor.continue()
      } else {
        // No more entries
        resolve(result.sort((a, b) => a.itemId - b.itemId))
      }
    }

    transaction.onerror = () => reject(transaction.error)
  })
}
