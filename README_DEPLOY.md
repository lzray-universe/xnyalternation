# 部署说明（仅新增文件）
将本文件夹的 4 个文件 **放到项目根目录**（与 proxy.py 同级）：
- Dockerfile
- requirements.txt
- render.yaml
- README_DEPLOY.md

## Render（推荐）
1) 提交到 GitHub 仓库。
2) Render -> New -> Web Service -> 选你的仓库（会自动识别 Dockerfile）。
3) 使用 Free 方案，创建后等待构建完成。
4) 打开服务 URL，访问 /static/stu/ 或 /exam/。

## 本地测试（可选）
docker build -t xny .
docker run -p 7860:7860 xny
# 打开 http://localhost:7860/static/stu/
