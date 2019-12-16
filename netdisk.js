let ariaRPC = 'http://localhost:6800/jsonrpc'
let body = $response.body
body = JSON.parse(body)
let downloadurl = body.urls[0].url
console.log(downloadurl)

let baidu_header = [
    'User-Agent: netdisk;2.2.3;pc;pc-mac;10.15.2;macbaiduyunguanjia',
    'X-Download-From: baiduyun'
]

let options = {
    url: ariaRPC,
    header: {
        'Content-Type': 'application/json'
    },
    body: {
        'jsonrpc': '2.0',
        'method': 'aria2.addUri',
        'id': Math.round(new Date() / 1000),
        'params': [
            [downloadurl],
            {
                'header': baidu_header,
            }
        ]
    }
}

$httpClient.post(options, function (error, response, data) {
    if (error) {
        $notification.post('wrong', 'wrong', 'wrong')
    } else {
        $notification.post('Success', '', data)
    }

})

$done({})
