import { useFormikContext } from 'formik';

export default function useCustomFormikContext() {
  const isFormikContext = !!useFormikContext();
  const formikContext = useFormikContext<any>();

  const {
    errors,
    touched,
    setFieldValue,
    values,
    setFieldTouched
  } = isFormikContext ? formikContext : {
    errors: {},
    touched: {},
    setFieldValue: () => null,
    values: {},
    setFieldTouched: () => null
  };

  return { errors, touched, setFieldValue, setFieldTouched, values };
}
