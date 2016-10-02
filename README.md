# hss

> The simplest https proxy server to http server.

## What all you need

### install

```
npm install hss -g
```

### use
If your http server is running on 80 port, this proxying server would run if you execute like below.

```
hss --targetPort 80
```

The proxying server would run at https://localhost:8081. All of the requests would be forwarded to the server running on port 80.
