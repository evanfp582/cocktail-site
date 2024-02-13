File Structure:
- Files/ - contains the different CSV files for the different datasets
- recipe_reader.py - Prints all the recipes in the dataset (combined from all the CSV files)
- cocktail_structs.py - Contains the different classes for the different datasets
- cocktail_add_gui.py - GUI for adding a new cocktail to the dataset (Requires Qt)
- cocktail_add_utils.py - Functions for adding a new cocktail to the dataset

Database Structure:
Cocktails:
- id (int) - Unique identifier for the cocktail
- name (str) - Name of the cocktail
- description (str) - Description of the cocktail
- directions (str) - Directions for making the cocktail
- website_link (str) - Link to the website where the cocktail was found

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
