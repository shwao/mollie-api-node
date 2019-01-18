import Model from '../model';
import { IShipment, IShipmentLinks, IShipmentTracking } from '../types/shipment';
import { IOrderLine } from '../types/order/line';

/**
 * The `shipment` model
 *
 * {@link IShipment}
 */
export default class Shipment extends Model implements IShipment {
  public static resourcePrefix = 'shp_';

  public resource = null;
  public id = null;
  public orderId = null;
  public createdAt = null;
  public tracking = null;
  public lines = null;
  public _links = {
    self: null,
    order: null,
    documentation: null,
  };

  // Access token parameters
  public testmode?: boolean;

  /**
   * Shipment constructor
   *
   * @public ✓ This method is part of the public API
   */
  public constructor(props?: Partial<IShipment>) {
    super();

    Object.assign(this, props);
  }
}
