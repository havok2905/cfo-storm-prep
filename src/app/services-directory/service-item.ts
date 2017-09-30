export class ServiceItem {
  public name = '';
  public phoneNumber = '';
  public email = '';

  constructor(name: string, phoneNumber: string, email: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}