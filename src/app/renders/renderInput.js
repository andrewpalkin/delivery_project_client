import React from 'react';
import { Checkbox, Form, Label, Transition } from 'semantic-ui-react';

const renderInput = field => (
    <>
      <Form.Input
          label={field.label}
          name={field.input.name}
          value={field.input.value}
          type={field.type}
          icon={field.icon}
          iconPosition={field.iconPosition}
          onChange={(e, { value }) => field.input.onChange(value)}
          error={!!(field.meta.touched && field.meta.error)}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
      />

      <Transition
          animation="fade up"
          duration={{ hide: 0, show: 500 }}
          visible={!!(field.meta.touched && field.meta.error) && field.meta.error !== 'Required'}
      >
        <Label
            basic
            pointing
            style={{
              marginTop: '0px',
              marginBottom: '10px',
              color: '#9f3a38',
              borderColor: '#e0b4b4'
            }}
        >
          {field.meta.error}
        </Label>
      </Transition>
    </>
);

const renderCheckbox = ({
  input: { value, onChange, ...input },
  meta: { touched, error },
  ...rest
}) => (
    <Form.Field error={!!(touched && error)}>
      <Checkbox
          {...input}
          {...rest}
          defaultChecked={!!value}
          onChange={(e, data) => onChange(data.checked)}
      />
      {/* {touched && error && <span>{error}</span>} */}
    </Form.Field>
);

const radioGroup = ({ input: { onChange, name, value }, meta: { touched, error }, options }) => {

  const radioSet = options.map(opt => (
      <Form.Radio error={!!(touched && error)}
                  checked={value === opt.radioValue}
                  label={opt.label}
                  name={name}
                  onChange={() => onChange(opt.radioValue)}
      />
  ));
  return (
      <Form.Group inline>
        <label>Genders</label>
        {radioSet}
      </Form.Group>
  );
};

export default {
  renderInput,
  radioGroup,
  renderCheckbox
};