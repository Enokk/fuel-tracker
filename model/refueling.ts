export default class Refueling {
  public partialKm: number;
  public eurToLt: number;
  public kmToLt: number;
  public eurToKm: number;
  public dailyKm: number;
  public dailyCost: number;

  constructor (
    public fromDate: Date,
    public toDate: Date, 
    public fromKm: number, 
    public toKm: number, 
    public fuelLt: number, 
    public fuelCost: number
  ) {
    this.partialKm = toKm - fromKm;
    this.eurToLt = fuelCost / fuelLt;
    this.kmToLt = this.partialKm / fuelLt;
    this.eurToKm = fuelCost / this.partialKm;
    this.dailyKm = this.partialKm / this.differenceInDays(fromDate, toDate);
    this.dailyCost = fuelCost / this.differenceInDays(fromDate, toDate);
  }

  private differenceInDays(fromDate: Date, toDate: Date): number {
    return (toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24);
  }
}