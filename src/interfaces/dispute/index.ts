import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';

export interface DisputeInterface {
  id?: string;
  invoice_id: string;
  user_id: string;
  description: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  invoice?: InvoiceInterface;
  user?: UserInterface;
  _count?: {};
}
