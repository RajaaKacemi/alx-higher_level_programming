#!/usr/bin/python3
'''import required modules'''

import MySQLdb
import sys
from db_conn import connect_db

'''
    Command line arguments for for mysql username,
    mysql password, and database name
'''
_args = sys.argv

if __name__ == "__main__":
    db = connect_db(_args[1:])
    cur = db.cursor()
    cur.execute("SELECT * FROM states ORDER BY id ASC")
    query_rows = cur.fetchall()
    for row in query_rows:
        print(row)
    cur.close()
    db.close()
