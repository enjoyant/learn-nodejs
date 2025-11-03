console.log("Hello world");

const http = require("http"); // node.js의 http 모듈
const fs = require("fs"); //파일시스템 모듈
const path = require("path"); //경로처리 모듈

const server = http.createServer((req, res) => {
    // res.statusCode = 200;// 응답코드 (성공)
    // res.setHeader("Content-Type", "text-plain"); //응답헤더
    // res.end("Hellow node.js"); //응답종료와 응답할 메세지 전송

    if (req.method === "GET") 
    {
        if (req.url === "/")
        {
            fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error");
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html"); //응답헤더
                    res.end(data);
                }
            });  //현재폴더위치의 index.html 파일 응답
        }
        else if (req.url === "/about")
        {
            fs.readFile(path.join(__dirname, "about.html"), "utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error");
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html"); //응답헤더
                    res.end(data);
                }
            });  //현재폴더위치의 about.html 파일 응답
        }
        else //if (req.url === "/contact")
        {
            fs.readFile(path.join(__dirname, "contact.html"), "utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error");
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html"); //응답헤더
                    res.end(data);
                }
            });  //현재폴더위치의 contact.html 파일 응답
        }
    }
});

// 서버 실행
server.listen(8090, () => {
    console.log("Server Running!");
});
