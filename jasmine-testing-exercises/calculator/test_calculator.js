const testValues = [
  {
    amount: 10000, 
    years: 10,
    rate: 4.5,
  },
  {
    amount: 10, 
    years: 5,
    rate: 1.5,
  },
  {
    amount: 100, 
    years: 7,
    rate: 2,
  },
  {
    amount: 100000, 
    years: 10,
    rate: 1,
  }, 
  {
    amount: 1, 
    years: 1,
    rate: 1,
  },
  {
    amount: 100, 
    years: 100,
    rate: 100,

  }
]

const answers = [103.64, .17, 1.28, 876.04, .08, 8.33]



it('should calculate the monthly rate correctly', function () {
  for(let i = 0; i < testValues.length; i++){
    expect(calculateMonthlyPayment(testValues[i])).toEqual(String(answers[i]))
  }
});


it("should return a result with 2 decimal places", function() {
  for(let i = 0; i < testValues.length; i++){
    let answer = calculateMonthlyPayment(testValues[i])
    let answer2DecPlaces = parseFloat(answer).toFixed(2)
    expect(answer).toEqual(answer2DecPlaces)
  }

});

/// etc
