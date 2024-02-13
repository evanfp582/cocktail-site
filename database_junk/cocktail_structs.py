import csv
import os
import sys
import pandas as pd

#Setup structs
#Cocktail Struct: cocktail_id,cocktail_name,cocktail_description,cocktail_directions
class Cocktail:
    def __init__(self, cocktail_id, cocktail_name, cocktail_description, cocktail_directions, website_link):
        self.id = cocktail_id
        self.name = cocktail_name
        self.description = cocktail_description
        self.directions = cocktail_directions
        self.website_link = website_link
        self.cocktail_ingredients = []

#Cocktail Ingredient Struct: cocktail_id,ingredient_name,optional,amount
class CocktailIngredient:
    def __init__(self, cocktail_id, ingredient_name, optional, amount):
        self.cocktail_id = cocktail_id
        self.ingredient_name = ingredient_name
        self.optional = optional
        self.amount = amount

#User Struct: user_id,name
class User:
    def __init__(self, user_id, name):
        self.id = user_id
        self.name = name

#User Ingredient Struct: user_id,ingredient_name
class UserIngredient:
    def __init__(self, user_id, ingredient_name):
        self.user_id = user_id
        self.ingredient_name = ingredient_name

def print_cocktail(input_cocktail):
    print("ID: " + str(input_cocktail.id))
    #Capitalizes the first letter of each word in the name
    capitalized_name = input_cocktail.name.title()
    print("Name: " + capitalized_name)
    print("Description: " + input_cocktail.description)
    print("Directions: " + input_cocktail.directions)
    print("Website Link: " + input_cocktail.website_link)
    print("Ingredients: ")

    for ingredient in input_cocktail.cocktail_ingredients:
        #Make the name title case
        titled_name = ingredient.ingredient_name.title()

        if(ingredient.optional):
            extra = " (Optional)"
        else:
            extra = ""
        
        print("\t" + ingredient.amount + " " + titled_name + extra)
    
    
        
        
    


