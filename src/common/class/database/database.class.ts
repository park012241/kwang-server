import { Collection, FilterQuery, MongoClient, ObjectId } from 'mongodb';

export class Database<T> {
  private readonly mongoDBUri;
  private readonly collectionName;

  private readonly mongoClient: MongoClient;
  private collection: Collection<T>;

  constructor({ mongoDBUri, collectionName }: { mongoDBUri: string, collectionName: string }) {
    this.mongoDBUri = mongoDBUri;
    this.collectionName = collectionName;
    this.mongoClient = new MongoClient(this.mongoDBUri, {
      useNewUrlParser: true,
    });
  }

  private async connect() {
    await this.mongoClient.connect();
    this.collection = this.mongoClient.db().collection<T>(this.collectionName);
  }

  async insert(data: T | T[]): Promise<{ [keys: number]: ObjectId }> {
    return !(data instanceof Array) ?
      [(await this.collection.insertOne(data)).insertedId] :
      (await this.collection.insertMany(data)).insertedIds;
  }

  async find(query: FilterQuery<T>): Promise<T[]> {
    if (!this.collection) {
      await this.connect();
    }
    return this.collection.find<T>(query).toArray();
  }

  async update(query: FilterQuery<T>, data: T): Promise<void> {
    if (!this.collection) {
      await this.connect();
    }
    await this.collection.findOneAndUpdate(query, {
      $set: data,
    });
    return;
  }

  async delete(query: FilterQuery<T>): Promise<void> {
    if (!this.collection) {
      await this.connect();
    }
    await this.collection.deleteOne(query);
    return;
  }
}
