set PGPASSWORD=admin123
type .\script\init.sql | "C:\Program Files\PostgreSQL\13\bin\psql.exe" -h "localhost" -U "postgres" -p 5432
