# hss

> The simplest https proxy server to http server.

## Purpose

It is very bother us to make https server just for experiment.
This package would forward all of request to the other http server running on your local computer. And all of response would forwarded to client.

You even don't need to generate your own certification. This package would generate your certification with openssl during installing this package.

## What all you need

### install

**Please make sure openssl is installed on your computer**

```
npm install hss -g
```

### use
If your http server is running on 80 port, this proxying server would run if you execute like below.

```
hss --targetPort 80
```

The proxying server would run at https://localhost:8081. All of the requests would be forwarded to the server running on port 80.

## license

MIT
