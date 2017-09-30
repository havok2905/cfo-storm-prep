export class ServiceItem {
  public name: string;
  public phoneNumber: string;
  public email: string;
  public website: string;

  constructor(name: string, phoneNumber: string, email: string, website: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.website = website;
  }
}