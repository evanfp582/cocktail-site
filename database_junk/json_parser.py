import json
import os
import sys
import pandas as pd

#Open up the recipes json
with open('files/recipes.json') as f:
    recipes = json.load(f)

#For each recipe, we want to print the name
for recipe in recipes:
    print(recipe['name'])
    if 'preparation' in recipe:
        print(recipe['preparation'])

    for ingredient in recipe['ingredients']:
        #If it has 'special' in it, we want to print the special
        if 'special' in ingredient:
            print(ingredient['special'])
        else:
            #Otherwise, we want to convert the anount from cl to oz
            ingredient['amount']= ingredient['amount']*0.33814
            ingredient['unit'] = 'oz'
            label = ''
            #If the label exists, we want to print it
            if 'label' in ingredient:
                label = ingredient['label']

            print(ingredient['ingredient'], ingredient['amount'], ingredient['unit'], label)
    
    print()

        