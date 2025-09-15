import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


interface ICidade {
  nome : string;
  estado: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup
  .object({
    nome: yup.string().required("O nome da Cidade é obrigatório").min(3, "Nome muito curto"),
     estado: yup.string().required("O nome do Estado é obrigatorio").max(2).min(2),
  })
  .strict()
  .noUnknown(true, "Campos não permitidos foram enviados") // impede extras

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  let validateData : ICidade | undefined = undefined ;

  try {
      validateData = await bodyValidation.validate(req.body, {
      abortEarly: false, // retorna todos os erros, não só o primeiro
    });

   
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors : Record <string, string> = {};

    yupError.inner.forEach( error => {

      if (error.path === undefined) return;

      errors[error.path] = error.message;

    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors  });
  }


  console.log(validateData);

  return res.send("Create!");
};