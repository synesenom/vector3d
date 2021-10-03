[![Build Status](https://img.shields.io/travis/synesenom/vector3d/master.svg)](https://travis-ci.org/synesenom/vector3d)
[![Coverage Status](https://coveralls.io/repos/github/synesenom/vector3d/badge.svg?branch=master)](https://coveralls.io/github/synesenom/vector3d?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/11de37baea8af83470ac/maintainability)](https://codeclimate.com/github/synesenom/vector3d/maintainability)
[![npm](https://img.shields.io/npm/v/vector3d.svg)](https://www.npmjs.com/package/vector3d)
[![License](https://img.shields.io/npm/l/vector3d.svg)](https://www.npmjs.com/package/vector3d)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# vector3d

Just another Javascript implementation of immutable 3D vectors.

## install

### browser

```html
<script type="text/javascript" src="vector3d.min.js"></script>
```

### node

```bash
npm install vector3d
```

## usage

```javascript
// Create vectors by assigning each coordinate.
const x = Vector3d(1.2, 3.4, 5.6)
const y = Vector3d(7.8, 9.1, 1.2)

// Add two vectors.
x.add(y)
// => Vector3d(9.0, 12.5, 7.9)

// Subtract two vectors.
x.sub(y)
// => Vector3d(-6.6, -5.7, 3.3)
```