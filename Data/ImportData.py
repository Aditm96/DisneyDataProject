import os, pymysql.cursors, re, warnings
def checkcombinedcsv():
    inputPath = os.path.join('Disney_Stock_Data.csv')
    host = 'http://disneydata.c6rvkyidwkym.us-east-2.rds.amazonaws.com/'
    port = 3306
    username = 'admin'
    password = 'Disney2020'
    database = 'DisneyData'
    connection =pymysql.connect(
        host=host,
        port=port,
        user=username,
        password=password,
        db=database
    )
    cursor = connection.cursor(pymysql.cursors.DictCursor)
    connection.ping(True)
    with warnings.catch_warnings():
        warnings.simplefilter('ignore')
        cursor.execute("DROP TABLE IF EXISTS Data")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS Data (
            date DATE NOT NULL,
            open VARCHAR(45) DEFAULT NULL,
            high VARCHAR(45) DEFAULT NULL,
            low VARCHAR(45) DEFAULT NULL,
            close VARCHAR(45) DEFAULT NULL,
            volume VARCHAR(45) DEFAULT NULL
        )""")
    with open(inputPath, 'r') as f:
        next(f)
        for row in f:
            row = row.strip().split(',')
            for i in range(len(row)):
                if row[i] == '':
                    row[i] = 0
            toExecute = """INSERT INTO Data (date, 
            open, high, low, close, volume) 
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
            """
            cursor.execute(toExecute, (
                row[0], row[1],row[2],
                row[3], row[4], row[5], int(row[6]), float(row[7]),
                float(row[8]), float(row[9]), row[10], int(row[11]), 
                str(row[12]), int(row[13]), int(row[14]), float(row[15]), 
                row[16], row[17], row[18], row[19], row[20], row[21], 
                row[22], row[23], row[24], float(row[25]), float(row[26])))
checkcombinedcsv()