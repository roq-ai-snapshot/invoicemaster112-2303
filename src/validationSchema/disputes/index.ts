import * as yup from 'yup';

export const disputeValidationSchema = yup.object().shape({
  description: yup.string().required(),
  status: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  invoice_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
