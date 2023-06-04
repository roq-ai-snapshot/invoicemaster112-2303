import * as yup from 'yup';
import { invoiceValidationSchema } from 'validationSchema/invoices';
import { reportValidationSchema } from 'validationSchema/reports';

export const organisationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  invoice: yup.array().of(invoiceValidationSchema),
  report: yup.array().of(reportValidationSchema),
});
