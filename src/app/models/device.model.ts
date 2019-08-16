import { EntityTypeEnum } from './interfaces/models';


class EntityId {
  public entityType?: EntityTypeEnum;
  public id?: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}

class AdditionalInfo {

  constructor(
    public description?: string,
  ) { }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}

export class Device {
  public additionalInfo?: AdditionalInfo;
  public createdTime?: number;
  public customerId?: EntityId;
  public id?: EntityId;
  public name?: string;
  public tenantId?: EntityId;
  public type?: string;

  deserialize(input: any) {
    Object.assign(this, input);
    this.tenantId = new EntityId().deserialize(input.tenantId);
    return this;
  }

}
