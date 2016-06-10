Simple-ENUM
-------------------------------------------------
A simple tool for creating enum-like objects.

[![Build Status](https://travis-ci.org/Zodiase/meteor-simple-enum.svg?branch=master)](https://travis-ci.org/Zodiase/meteor-simple-enum)

### Usage

```JavaScript
import { SimpleENUM } from 'meteor/zodiase:simple-enum';

const foo = SimpleENUM([
  'Pending',
  'Processing',
  'Ready',
  'Failed',
  'Error'
]);

foo.ENUM.Pending; // 0
foo.ENUM.Processing; // 1
foo.ENUM.Ready; // 2
foo.ENUM.Failed; // 3
foo.ENUM.Error; // 4

foo[0]; // 'Pending'
foo[1]; // 'Processing'
foo[2]; // 'Ready'
foo[3]; // 'Failed'
foo[4]; // 'Error'
```
