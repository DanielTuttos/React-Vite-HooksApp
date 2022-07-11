import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        formState,
        onInputChange,
        ...formState
    }
}
