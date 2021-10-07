#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build
vuepress build

# 进入生成的文件夹
# cd docs/.vuepress/dist
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'blog.monsterbear.top' > CNAME

git init
git config user.name "MonsterXiong"
git config user.email "942849672@qq.com"
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/MonsterXiong/blog.git master:gh-pages
git push -f "https://${TOKEN}@github.com/MonsterXiong/blog.git" "master:gh-pages"

cd -