const testValues = {
  first: {
    amount: 10000, 
    years: 10,
    rate: 4.5
  },
  second: {
    amount: 10, 
    years: 5,
    rate: 1.5
  },
  third: {
    amount: 100, 
    years: 7,
    rate: 2
  },
  fourth: {
    amount: 100000, 
    years: 10,
    rate: 1
  }
}



it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(testValues.first)).toEqual(String(103.64))
  expect(calculateMonthlyPayment(testValues.second)).toEqual(String(.17))
  expect(calculateMonthlyPayment(testValues.third)).toEqual(String(1.28))
  expect(calculateMonthlyPayment(testValues.fourth)).toEqual(String(876.04))
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
