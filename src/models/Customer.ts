import Model from '../model';
import { ICustomer, ICustomerLinks } from '../types/customer';
import { ApiMode, Locale, PaymentMethod } from '../types/global';

/**
 * The `Customer` model
 *
 * {@link ICustomer}
 */
export default class Customer extends Model implements ICustomer {
  public static resourcePrefix = 'cst_';

  public resource = 'customer';
  public id = null;
  public mode = null;
  public name = null;
  public email = null;
  public locale = null;
  public metadata = null;
  public recentlyUsedMethods = null;
  public createdAt = null;
  public _links = {
    self: null,
    documentation: null,
    mandates: null,
    subscriptions: null,
    payments: null,
  };

  // Access token parameters
  public testmode?: boolean;

  /**
   * Customer constructor
   *
   * @public ✓ This method is part of the public API
   */
  constructor(props?: Partial<ICustomer>) {
    super();

    Object.assign(this, props);
  }
}
