# 安装 Nginx

```sh
# 1.安装相关依赖包
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel

# 2.安装nginx
wget -c https://nginx.org/download/nginx-1.10.1.tar.gz

# 3.解压、进入安装包
tar -zxvf nginx-1.10.1.tar.gz
cd nginx-1.10.1

# 4.自定义配置
./configure

# 5.编译安装
make
make install

# 6.进入安装路径，启动，停止nginx
cd /usr/local/nginx/sbin/
./nginx
./nginx -s stop
./nginx -s quit
./nginx -s reload

# 7.验证是否安装成功

# 验证修改conf文件是否通过

# 修改conf文件
server {
        listen       80;
        server_name  www.xxx.com;

        location / {
            root   html;
            index  index.html index.htm;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header Host $http_host;
			proxy_pass http://127.0.0.1:8080;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

server {
        listen       80;
        server_name img.xxx.com;
        location / {
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header Host $http_host;
			proxy_pass http://127.0.0.1:7070;
        }
}
```
