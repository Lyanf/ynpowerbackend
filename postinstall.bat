set PGPASSWORD=admin123
type .\init.sql | "C:\Program Files\PostgreSQL\13\bin\psql.exe" -h "localhost" -U "postgres" -d "electric" -p 5432