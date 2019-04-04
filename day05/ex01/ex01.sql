CREATE TABLE ft_table
{
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	login VARCHAR(255) NOT NULL DEFAULT 'login',
	groupe ENUM(staff, student, other) NOT NULL,
	creation_date DATE NOT NULL
};