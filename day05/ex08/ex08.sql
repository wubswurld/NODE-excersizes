SELECT last_name, first_name, birthdate
FROM user_card
WHERE EXTRACT(YEAR FROM DATE(birthdate)) = 1989;