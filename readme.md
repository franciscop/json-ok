# json-ok [![npm install json-ok](https://img.shields.io/badge/npm%20install-react--test-blue.svg)](https://www.npmjs.com/package/json-ok) [![test badge](https://github.com/franciscop/json-ok/workflows/tests/badge.svg)](https://github.com/franciscop/json-ok/actions) [![gzip size](https://img.badgesize.io/franciscop/json-ok/master/index.min.js.svg?compression=gzip)](https://github.com/franciscop/json-ok/blob/master/index.min.js)

A tiny but quick way of validating json objects using `json-schema`:

```js
ok(24, { type: "number" });
// No issue

ok(24, { type: "string" });
// ValidationError: is not of a type(s) string
```

It is great to use to validate e.g. POST bodies:

```js
// Express.js -> createUser.js
module.exports = app.post('/users/', function (req, res) {
  try {
    ok(req.body, bodySchema);
    // save user
    db.users.add(req.body, (error, user) => {
      if (error) return next(error);
      res.sendStatus(201);
    });
  } catch (error) {
    next(error);
  }
});

// Server.js -> createUser.js
module.exports = post('/users/', async ctx => {
  ok(req.body, bodySchema);
  await db.users.add(ctx.body);
  return 201;
});
```


## Questions

### Differences between this and `jsonschema`

This library is a thin wrapper around `jsonschema` with these improvements:

- Throws errors instead of returning them.
- Single, foolproof API `ok(obj, schema)`.
