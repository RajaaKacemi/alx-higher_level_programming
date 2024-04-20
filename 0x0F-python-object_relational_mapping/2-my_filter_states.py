#!/usr/bin/python3
"""filter states from users input on the command arg"""

import sys
from db_conn import connect_db

_args = sys.argv

if __name__ == "__main__":
    sql_query = """SELECT * FROM states WHERE name = %s ORDER BY id ASC"""
    user_input = _args[-1:]
    db = connect_db(_args[1:4])
    cur = db.cursor()
    cur.execute(sql_query, (user_input,))
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
