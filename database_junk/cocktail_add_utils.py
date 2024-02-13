import csv
import os
import sys
import pandas as pd

from cocktail_structs import Cocktail, CocktailIngredient, User, UserIngredient, print_cocktail

#Add a cocktail to the csv database
#Create function
def add_cocktail(cocktail_to_add):
    #Call the two functions to write to the csv files
    cocktail_id = write_to_cocktail_csv(cocktail_to_add)
    write_to_cocktail_ingredients_csv(cocktail_to_add, cocktail_id)

def write_to_cocktail_csv(cocktail_to_add):
    #Open the file and read in the data so we can get the max id
    with open('files/cocktails.csv', 'r') as file:
        reader = csv.reader(file)
        data = list(reader)
        max_id = int(data[-1][0]) + 1
    
    #Open the file and write the new cocktail
    with open('files/cocktails.csv', 'a') as file:
        writer = csv.writer(file)
        writer.writerow([str(max_id), cocktail_to_add.name.title(), cocktail_to_add.description, cocktail_to_add.directions])
    
    #Return the id
    return max_id

def write_to_cocktail_ingredients_csv(cocktail_to_add, cocktail_id):
    #Open the file and write the new cocktail
    with open('files/cocktail_ingredients.csv', 'a') as file:
        writer = csv.writer(file)
        for ingredient in cocktail_to_add.cocktail_ingredients:
            writer.writerow([str(cocktail_id), ingredient.ingredient_name, ingredient.optional, ingredient.amount])

