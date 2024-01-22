import Validator from "../Validator";

test('Правильный ник', () => {
  const result = new Validator('nik_-12name').validateUsername();
  expect(result).toBe(true);
});
test('Правильный ник без цифр', () => {
  const result = new Validator('nikname').validateUsername();
  expect(result).toBe(true);
});
test('Ник с кириллицей', () => {
  const result = new Validator('Ник_-12нэйм').validateUsername();
  expect(result).toBe(false);
});
test('Цифры в начале ника', () => {
  const result = new Validator('12nik_-12name').validateUsername();
  expect(result).toBe(false);
});
test('Тире в начале ника', () => {
  const result = new Validator('-nik_-12name').validateUsername();
  expect(result).toBe(false);
});
test('Нижние подчеркивание в начале ника', () => {
  const result = new Validator('_nik_-12name').validateUsername();
  expect(result).toBe(false);
});
test('Три цифры подряд нике', () => {
  const result = new Validator('nik_-123name').validateUsername();
  expect(result).toBe(false);
});
test('Цифры в конце ника', () => {
  const result = new Validator('nik_-12name12').validateUsername();
  expect(result).toBe(false);
});
test('Тире в конце ника', () => {
  const result = new Validator('nik_-12name-').validateUsername();
  expect(result).toBe(false);
});
test('Нижние подчеркивание в конце ника', () => {
  const result = new Validator('nik_-12name_').validateUsername();
  expect(result).toBe(false);
});
test('Неразрешенные знаки в нике', () => {
  const result = new Validator('nik_-12?!name').validateUsername();
  expect(result).toBe(false);
});