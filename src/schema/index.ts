import * as yup from "yup";

export const validationLogin = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório!"),
  password: yup.string().required("Senha é obrigatória!"),
});

export const validationRegister = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório!"),
  password: yup
    .string()
    .required("Senha é obrigatória!")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "A senha precisa ter no mínimo 8 caracteres, " +
        "uma letra maiúscula e uma letra minúscula, " +
        "um número e um caracter especial."
    ),
  name: yup.string().required("Nome é obrigatório!"),
  bio: yup.string().required("Bio é obrigatório!"),
  contact: yup.string().required("Contato é obrigatório!"),
  course_module: yup.string().required("Módulo é obrigatório"),
});
export const validationTech = yup.object().shape({
  title: yup.string().required("Escolha a tecnologia!"),
  status: yup.string().required("Escolha o nível de habilidade!"),
});
