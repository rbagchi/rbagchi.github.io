---
layout: page
title: 20 years of SQL and I discover this
---


When I'm looking at a table of data, I'd select some criteria, like `n_rows > 1000`, and do three queries to get a sense of whether it was meaningful.

    select count(*) from innodb_table_stats;
    select count(*) from innodb_table_stats where n_rows <= 1000;
    select count(*) from innodb_table_stats where n_rows > 1000;

[...]

Which gets old fast (and isn't [DRY](http://c2.com/cgi/wiki?DontRepeatYourself) at all).  Imagine my surprise to discover that I can do this

    mysql> use mysql;
    Database changed
    mysql> select sum(1), sum(n_rows <= 1000), sum(n_rows > 1000) from innodb_table_stats;
    +--------+---------------------+--------------------+
    | sum(1) | sum(n_rows <= 1000) | sum(n_rows > 1000) |
    +--------+---------------------+--------------------+
    |    228 |                 116 |                112 |
    +--------+---------------------+--------------------+
    
