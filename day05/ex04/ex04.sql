INSERT INTO ft_table(id, creation_date) SELECT IF (id > 5, creation_date + 20, creation_date);

