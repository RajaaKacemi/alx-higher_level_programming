#!/usr/bin/python3
"""Lists all states with a name starting with N from the Database"""

import sys
from db_conn import connect_db

"""
    the command line arguments provides the mysql auth credentials
"""
_args = sys.argv

if __name__ == "__main__":
    db = connect_db(_args[1:])
    cur = db.cursor()
    cur.execute(
            "SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id ASC"
            )
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
