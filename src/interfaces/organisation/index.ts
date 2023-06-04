import { InvoiceInterface } from 'interfaces/invoice';
import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';

export interface OrganisationInterface {
  id?: string;
  name: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  invoice?: InvoiceInterface[];
  report?: ReportInterface[];
  user?: UserInterface;
  _count?: {
    invoice?: number;
    report?: number;
  };
}
