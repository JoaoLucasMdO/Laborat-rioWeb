import { isValid } from 'cpf';

export const generateBasicToken = (
  userName: string,
  password: string,
): string | null => {
  if (userName.length > 100) return null;
  if (password.length > 100) return null;

  return Buffer.from(`${userName}:${password}`).toString('base64');
};

export interface IPerson {
  id: number;
  name: string;
  cpf: string;
  address: string;
}

export const validateCpf = (person: IPerson): boolean | null => {
  const { id, name, cpf, address } = person;
  if (!id || !name || !cpf || !address) return null;

  if (name.length > 150 || cpf.length > 14 || address.length > 200) return null;

  if (!isValid(cpf)) return false;
  else return true;
};
