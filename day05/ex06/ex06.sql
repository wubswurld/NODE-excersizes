SELECT title, summary
FROM film
WHERE LOWER(summary) LIKE '%VINCENT%'
ORDER BY id_film ASC; 
