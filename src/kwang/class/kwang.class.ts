export class Kwang {
  deviceId: string;
  timestamp: Date;

  constructor({ deviceId, timestamp }: { deviceId: string, timestamp?: string | number | Date }) {
    this.deviceId = deviceId;
    this.timestamp = new Date(timestamp);
  }
}
