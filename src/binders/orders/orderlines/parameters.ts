import { Amount } from '../../../data/global';
import { OrderLineData } from '../../../data/orders/orderlines/OrderLine';
import PickOptional from '../../../types/PickOptional';

interface ContextParameters {
  orderId: string;
  testmode?: boolean;
}

export type UpdateParameters = ContextParameters &
  PickOptional<OrderLineData, 'name' | 'quantity' | 'unitPrice' | 'discountAmount' | 'sku' | 'totalAmount' | 'vatAmount' | 'vatRate'> & {
    /**
     * A link pointing to an image of the product sold.
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/update-order-line?path=imageUrl#parameters
     */
    imageUrl?: string;
    /**
     * A link pointing to the product page in your web shop of the product sold.
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/update-order-line?path=productUrl#parameters
     */
    productUrl?: string;
  };

export type CancelParameters = ContextParameters & {
  /**
   * An array of objects containing the order line details you want to cancel.
   *
   * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order-lines?path=lines#parameters
   */
  lines: {
    /**
     * The API resource token of the order line, for example: `odl_jp31jz`.
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order-lines?path=lines/id#parameters
     */
    id: string;
    /**
     * The number of items that should be canceled for this order line. When this parameter is omitted, the whole order line will be canceled. When part of the line has been shipped, it will cancel
     * the remainder and the order line will be completed.
     *
     * Must be less than the number of items already shipped or canceled for this order line.
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order-lines?path=lines/quantity#parameters
     */
    quantity?: number;
    /**
     * The amount that you want to cancel. In almost all cases, Mollie can determine the amount automatically.
     *
     * The amount is required only if you are *partially* canceling an order line which has a non-zero `discountAmount`.
     *
     * The amount you can cancel depends on various properties of the order line and the cancel order lines request. The maximum that can be canceled is `unit price x quantity to cancel`.
     *
     * The minimum amount depends on the discount applied to the line, the quantity already shipped or canceled, the amounts already shipped or canceled and the quantity you want to cancel.
     *
     * If you do not send an amount, Mollie will determine the amount automatically or respond with an error if the amount cannot be determined automatically. The error will contain the
     * `extra.minimumAmount` and `extra.maximumAmount` properties that allow you pick the right amount.
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order-lines?path=lines/amount#parameters
     */
    amount?: Amount;
  }[];
};
