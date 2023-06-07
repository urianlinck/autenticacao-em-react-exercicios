import { useState } from "react";

export default function useForm(estadoInicial){
    const [form, setForm] = useState(estadoInicial);

    const onChangeForm = (e)=>{
        const {name, value} = e.target
        setForm({...form,[name]:value})
    }

    return {
        form,
        onChangeForm
    }
}