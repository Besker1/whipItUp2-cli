BEGIN;

INSERT INTO recipes_table (title, content, meal, regularity, img)
VALUES ('foodname', 'recipe', 'breakfast', 'nonVegan', 'img'),
('sausage', 'recipe','lunch', 'vegan', 'img'),
('groud', 'meat recipe','dinner', 'nonVegan', 'img'),
('CHICKEN ALFREDO Pasta', 'food new', 'lunch', 'nonVegan', 'img');

COMMIT;