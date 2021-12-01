const functions = require('./functions');

test('Full name is long enough', () => {
    expect(functions.nameLength("Divya Manirajan")).toBeTruthy();
});

test('Full name is not long enough', () => {
  expect(functions.nameLength("Dya Ma")).toBeFalsy();
});




test('First name is long enough', () => {
  expect(functions.fNameLength("Div")).toBeTruthy();
});

test('First name is not long enough', () => {
  expect(functions.fNameLength("Da")).toBeFalsy();
});




test('Last name is long enough', () => {
  expect(functions.lNameLength("Mani")).toBeTruthy();
});

test('Last name is not long enough', () => {
  expect(functions.lNameLength("Man")).toBeFalsy();
});



test('Email address is valid', () => {
  expect(functions.validEmail("Div@gmail.com")).toBeTruthy();
});

test('Email address is not valid', () => {
  expect(functions.validEmail("Divail.com")).toBeFalsy();
});



  
