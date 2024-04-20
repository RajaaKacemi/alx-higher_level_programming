#!/usr/bin/python3
"""module for db connection"""
import MySQLdb


def connect_db(args):
    return MySQLdb.connect(host="localhost", user=args[0],
                           passwd=args[1],
                           db=args[2], charset="utf8", port=3306)
