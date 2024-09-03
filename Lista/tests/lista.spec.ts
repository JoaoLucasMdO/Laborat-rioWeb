import { generateBasicToken, IPerson, validateCpf } from '../src/lista';

describe('Lista - basicToken', () => {
  it('Should return null if username length > 100', () => {
    const basicToken = generateBasicToken('X'.repeat(101), 'y');

    expect(basicToken).toBe(null);
  });
  it('Should return null if password length > 100', () => {
    const basicToken = generateBasicToken('X', 'y'.repeat(101));

    expect(basicToken).toBe(null);
  });
  it('Shoul compute basic token succesfully', () => {
    const userName = 'joana';
    const password = 'joana123';

    const expectedBasicToken = 'am9hbmE6am9hbmExMjM=';

    const retrievedBasicToken = generateBasicToken(userName, password);

    expect(retrievedBasicToken).toEqual(expectedBasicToken);

    //const base64 = Buffer.from(originalString).toString('base64');
  });
});

const person: IPerson = {
  id: 1,
  name: 'Joana',
  cpf: '454.214.785-71',
  address: 'R. das Margaridas, 119 - Vila Rosario',
};

describe('Lista - validateCpf', () => {
  it('Should return null if id is null or undefined', () => {
    const cpfIsValid = validateCpf({
      ...person,
      id: null as any,
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return null if name is null or undefined', () => {
    const cpfIsValid = validateCpf({
      ...person,
      name: null as any,
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return null if cpf is null or undefined', () => {
    const cpfIsValid = validateCpf({
      ...person,
      cpf: null as any,
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return null if address is null or undefined', () => {
    const cpfIsValid = validateCpf({
      ...person,
      address: null as any,
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return null if name length > 150', () => {
    const cpfIsValid = validateCpf({
      ...person,
      name: 'X'.repeat(151),
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return null if name length > 150', () => {
    const cpfIsValid = validateCpf({
      ...person,
      cpf: 'X'.repeat(15),
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return null if name length > 150', () => {
    const cpfIsValid = validateCpf({
      ...person,
      address: 'X'.repeat(201),
    });

    expect(cpfIsValid).toBe(null);
  });

  it('Should return false if cpf is invalid', () => {
    const invalidCpf = '478.258.458.12';

    const cpfIsValid = validateCpf({
      ...person,
      cpf: invalidCpf,
    });

    expect(cpfIsValid).toBe(false);
  });

  it('Should return true if cpf is valid', () => {
    const validCpf = '956.843.990-02';

    const cpfIsValid = validateCpf({
      ...person,
      cpf: validCpf,
    });

    expect(cpfIsValid).toBe(true);
  });
});
