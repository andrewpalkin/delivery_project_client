import React from "react";
import {Form, Label, Transition} from "semantic-ui-react";

const renderInput = field => (
    <>
        <Form.Input
            label={field.label}
            name={field.input.name}
            value={field.input.value}
            type={field.type}
            icon={field.icon}
            iconPosition={field.iconPosition}
            onChange={(e, {value}) => field.input.onChange(value)}
            error={!!(field.meta.touched && field.meta.error)}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
        />

        <Transition
            animation="fade up"
            duration={{hide: 0, show: 500}}
            visible={!!(field.meta.touched && field.meta.error) && field.meta.error !== 'Required'}
        >
            <Label
                basic
                pointing
                style={{
                    marginTop: "0px",
                    marginBottom: "10px",
                    color: "#9f3a38",
                    borderColor: "#e0b4b4"
                }}
            >
                {field.meta.error}
            </Label>
        </Transition>
    </>
);

export default renderInput;