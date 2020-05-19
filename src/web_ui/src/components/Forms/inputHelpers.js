import React from "react";
import {isEmpty} from "lodash";
import XTextInput from "./XTextInput";
import XDateInput from "./XDateInput";
import XRadioInput from "./XRadioInput";
import XSelectInput from "./XSelectInput";
import XTextAreaInput from "./XTextAreaInput";



export const toOptions = (data) => {
    return data.map(it => ({label: it, value: it}))
}


export const hasValue = (text) => {
    return !isEmpty(text)
}

export const hasNoValue = (text) => {
    return isEmpty(text)
}

export const renderInput = ({inputType, name, label, inputProps, ...rest}) => {
    if (inputType) {
        const type = inputType
        const inputProperties = {name, label, ...inputProps}
        switch (type) {
            case InputType.Text:
                return <XTextInput
                    {...inputProperties}
                />
            case InputType.Date:
                return <XDateInput
                    {...inputProperties}
                />
            case InputType.Radio:
                return <XRadioInput
                    {...inputProperties}
                />
            case InputType.TextArea:
                return <XTextAreaInput
                    {...inputProperties}
                />
            case InputType.Select:
                return <XSelectInput
                    {...inputProperties}
                />
            default:
                return <XTextInput
                    {...inputProperties}
                />
        }
    }


}
