var testNames = [
  'A',
  'B',
  'C',
  'D'
];

Tinytest.add('ENUM value lookup', function (test) {
  var TestEnums = SimpleENUM(testNames);
  for (var i = 0, n = testNames.length; i < n; i++) {
    test.equal(TestEnums.ENUM[testNames[i]], i);
  }
});

Tinytest.add('ENUM name lookup', function (test) {
  var TestEnums = SimpleENUM(testNames);
  for (var i = 0, n = testNames.length; i < n; i++) {
    test.equal(TestEnums[i], testNames[i]);
  }
});
