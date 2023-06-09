from mysql.connector import connection
import mysql.connector

db=mysql.connector.connect(
    host="localhost",
    user="root",
    database="mydb"
)

dict={
    'user':'root',
    'password':'root@123',
    'host':'localhost',
    'database':'employee'
}
# c=db.cursor()
# c.execute("")

conn=connection.MySQLConnection(**dict)
print(conn)
conn.close()