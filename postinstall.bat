.\Installer\python-3.7.9-amd64.exe && (echo "Python 运行环境安装成功") || (echo "Python 运行环境安装失败")

.\Installer\postgresql-13.2-2-windows-x64.exe && (echo "PostgreSQL 数据库安装成功") || (echo "PostgreSQL 数据库安装失败")

set PGPASSWORD=admin123
type .\init.sql | "C:\Program Files\PostgreSQL\13\bin\psql.exe" -h "localhost" -U "postgres" -d "electric" -p 5432