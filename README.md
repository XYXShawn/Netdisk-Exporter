# Netdisk-Exporter
Mac, Surge, Aria2

# 配置
## Surge
```
[MITM]
hostname = d.pcs.baidu.com

[Script]
http-response https://d.pcs.baidu.com/rest/2.0/pcs/file requires-body=1,max-size=0,debug=1,script-path=netdisk.js
```
## Aria2(最大16链接数) 
```
max-connection-per-server=16
min-split-size=10M
split=16
```

# 说明
随着各种Web提取百度云下载链接插件的失效，无奈官方APP SVIP 2MB/s的速度。
测试发现官方APP提取的下载链接，下载速度本身不限速，带宽多大，速度多快。
只是官方app会限速到2MB/s。
所以这个Surge脚本的目的就是提取官方下载的链接，转发到VPS或本地的Aira2处理下载，充分利用带宽。

默认将下载链接转发到 http://localhost:6800/jsonrpc ，如果想转发到其他地址，修改netdisk.js里的第一行ariaRPC的值

# 效果

## svip帐号
![IMG_1265.jpg](https://i.loli.net/2019/12/16/TYKyDSeqzWb4CMX.jpg)

## 普通帐号
![IMG_1266.jpg](https://i.loli.net/2019/12/16/aXNcGmWbOw8o1Rh.jpg)



