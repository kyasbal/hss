import https from "https";
import http from "http";
import url from "url";
import chalk from "chalk";
import {
    argv
} from "yargs";
import {
    readFileAsync
} from "./async-helper";

async function executeServer() {
    try {
        const key = await readFileAsync("./keys/server_key.pem");
        const csr = await readFileAsync("./keys/server_crt.pem");
        https.createServer({
            key: key,
            cert: csr
        }, (cliReq, cliRes) => {
            try {
                var x = url.parse(cliReq.url);
                var opt = {
                    host: x.hostname,
                    port: argv.targetPort,
                    path: x.path,
                    method: cliReq.method,
                    headers: cliReq.headers
                };
                var svrReq = http.request(opt, function onSvrRes(svrRes) {
                    cliRes.writeHead(svrRes.statusCode, svrRes.headers);
                    svrRes.pipe(cliRes);
                });
                cliReq.pipe(svrReq);
            } catch (e) {
                cliRes.writeHead(500);
                cliRes.end("Error was happened during requesting to proxying target\n" + e);
            }
        }).listen(argv.port);
        console.log(chalk.yellow("Starting up https proxy\n Available on"));
        console.log(`https://localhost:${argv.port}`);
    } catch (e) {
        console.log(e);
    }
}

try {
    executeServer();
} catch (e) {
    console.log(e);
}
