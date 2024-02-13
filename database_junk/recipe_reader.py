import csv
import os
import sys
import pandas as pd

from cocktail_structs import Cocktail, CocktailIngredient, User, UserIngredient, print_cocktail

#Read in the Cocktails from the csv file
cocktails_pd = pd.read_csv('files/cocktails.csv')
cocktail_ingredients_pd = pd.read_csv('files/cocktail_ingredients.csv')

#Create a list of cocktails
cocktails = []
for index, row in cocktails_pd.iterrows():
    cocktail_id = row['id']
    cocktail_name = row['name']
    cocktail_description = row['description']
    cocktail_directions = row['directions']
    cocktail_website_link = row['website_link']
    cocktail = Cocktail(cocktail_id, cocktail_name, cocktail_description, cocktail_directions, cocktail_website_link)
    cocktails.append(cocktail)

#Populate the cocktail ingredients
for index, row in cocktail_ingredients_pd.iterrows():
    cocktail_id = row['cocktail_id']
    ingredient_name = row['ingredient_name']
    optional = bool(row['optional'])
    amount = row['amount']
    for cocktail in cocktails:
        if(cocktail.id == cocktail_id):
            cocktail_ingredient = CocktailIngredient(cocktail_id, ingredient_name, optional, amount)
            cocktail.cocktail_ingredients.append(cocktail_ingredient)

#Print all the cocktails
for cocktail in cocktails:
    print_cocktail(cocktail)


