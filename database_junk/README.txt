File Structure:
- Files/ - contains the different CSV files for the different datasets
- recipe_reader.py - Prints all the recipes in the dataset (combined from all the CSV files)
- cocktail_structs.py - Contains the different classes for the different datasets

Database Structure:
Cocktails:
- id (int) - Unique identifier for the cocktail
- name (str) - Name of the cocktail
- description (str) - Description of the cocktail
- directions (str) - Directions for making the cocktail

Cocktail Ingredients:
- cocktail_id (int) - Cocktail that the ingredient is used in
- ingredient_name (str) - Name of the ingredient
- optional (bool) (0 or 1) - Whether the ingredient is optional
- amount (str) - Amount of the ingredient

Users:
- id (int) - Unique identifier for the user
- name (str) - Username of the user

User Ingredients:
- user_id (int) - User that the ingredient is associated with
- ingredient_name (str) - Name of the ingredient
