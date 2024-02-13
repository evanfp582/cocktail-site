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

    #Check to make sure the name isnt a duplicate
    with open('files/cocktails.csv', 'r') as file:
        reader = csv.reader(file)
        data = list(reader)
        for row in data:
            if row[1] == cocktail_to_add.name.title():
                return -1
    
    #Open the file and write the new cocktail
    with open('files/cocktails.csv', 'a') as file:
        writer = csv.writer(file)
        #Add "" around the description and directions so that commas don't mess up the csv
        cocktail_to_add.description = '"' + cocktail_to_add.description + '"'
        cocktail_to_add.directions = '"' + cocktail_to_add.directions + '"'
        cocktail_to_add.website_link = '"' + cocktail_to_add.website_link + '"'
        writer.writerow([str(max_id), cocktail_to_add.name.title(), cocktail_to_add.description, cocktail_to_add.directions, cocktail_to_add.website_link])
    
    #Return the id
    return max_id

def write_to_cocktail_ingredients_csv(cocktail_to_add, cocktail_id):
    #Open the file and write the new cocktail
    with open('files/cocktail_ingredients.csv', 'a') as file:
        writer = csv.writer(file)
        for ingredient in cocktail_to_add.cocktail_ingredients:
            writer.writerow([str(cocktail_id), ingredient.ingredient_name, ingredient.optional, ingredient.amount])

def add_to_ingredients_csv(ingredient_to_add):
    #Open the file and load in the data
    with open('files/all_ingredients.csv', 'r') as file:
        reader = csv.reader(file)
        data = list(reader)

    #Ignore the first row
    data = data[1:]

    #Check if the ingredient is already in the file
    for row in data:
        if row[0] == ingredient_to_add:
            return
    
    #Add the ingredient to the list
    data.append([ingredient_to_add])

    #Sort alphabetically and write the data to the file
    data.sort()
    with open('files/all_ingredients.csv', 'w') as file:
        writer = csv.writer(file)
        writer.writerow(['ingredient_name'])
        for row in data:
            writer.writerow(row)