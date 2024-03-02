import * as yup from "yup";

const schemaRating = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(2, "O nome deve ter no mínimo 2 caracteres")
        .max(50, "O nome deve ter no máximo 50 caracteres")
        .matches(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras e espaços"),
    comment: yup
        .string()
        .max(200, "O comentário deve ter no máximo 200 caracteres")
        .default(''), 
});

export default schemaRating;