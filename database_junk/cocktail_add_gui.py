import csv
import os
import sys

import pandas as pd
from PySide6.QtWidgets import QApplication, QPushButton
from PySide6.QtCore import Slot

from cocktail_structs import Cocktail, CocktailIngredient, User, UserIngredient, print_cocktail
from cocktail_add_utils import add_cocktail

from PySide6.QtWidgets import QApplication, QWidget, QLabel, QLineEdit, QVBoxLayout, QHBoxLayout, QCheckBox, QComboBox, QPushButton, QMessageBox, QCompleter

#Load in the ingredients
ingredients_pd = pd.read_csv('files/all_ingredients.csv')

#Create a list of ingredients
all_ingredients_list = ingredients_pd['ingredient_name'].tolist()

class CocktailCreator(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Cocktail Creator")

        # Name
        self.name_label = QLabel("Name:")
        self.name_entry = QLineEdit()
        self.name_entry.textChanged.connect(self.update_title)

        # Description
        self.description_label = QLabel("Description:")
        self.description_entry = QLineEdit()

        # Directions
        self.directions_label = QLabel("Directions:")
        self.directions_entry = QLineEdit()

        # Ingredients
        self.ingredients_label = QLabel("Ingredients:")
        self.ingredients_layout = QVBoxLayout()

        # Add three default rows in the ingredients section
        for _ in range(3):
            self.add_ingredient_row()

        self.ingredients_widget = QWidget()
        self.ingredients_widget.setLayout(self.ingredients_layout)

        # + Button to add a new ingredient row
        add_row_button = QPushButton("+")
        add_row_button.clicked.connect(self.add_ingredient_row)

        # Enter Button to print data, reset inputs, and rows
        enter_button = QPushButton("Enter")
        enter_button.clicked.connect(self.print_data)

        # Layout
        layout = QVBoxLayout()
        layout.addWidget(self.name_label)
        layout.addWidget(self.name_entry)
        layout.addWidget(self.description_label)
        layout.addWidget(self.description_entry)
        layout.addWidget(self.directions_label)
        layout.addWidget(self.directions_entry)
        layout.addWidget(self.ingredients_label)
        layout.addWidget(self.ingredients_widget)
        layout.addWidget(add_row_button)
        layout.addWidget(enter_button)

        self.setLayout(layout)

    def add_ingredient_row(self):
        ingredient_row_layout = QHBoxLayout()

        # Ingredient name
        ingredient_name_entry = QComboBox()
        ingredient_name_entry.setEditable(True)
        ingredient_name_entry.setInsertPolicy(QComboBox.NoInsert)

        # Add ingredients to the combo box
        ingredient_name_entry.addItems(all_ingredients_list)

        #Clear the text box
        ingredient_name_entry.setEditText("")
        ingredient_name_entry.setCompleter(QCompleter(all_ingredients_list))

        #Have the box show the autocomplete options
        ingredient_name_entry.setEditable(True)
        
        # Optional checkbox
        optional_checkbox = QCheckBox("Optional")

        # Amount text input
        amount_entry = QLineEdit()

        ingredient_row_layout.addWidget(ingredient_name_entry)
        ingredient_row_layout.addWidget(optional_checkbox)
        ingredient_row_layout.addWidget(amount_entry)

        self.ingredients_layout.addLayout(ingredient_row_layout)

    def update_title(self):
        name = self.name_entry.text()
        self.setWindowTitle(f"Cocktail Creator - {name}")
        #Set the text in the text box to title case
        self.name_entry.setText(name.title())
    
    def check_at_least_one_valid_ingredient(self):
        for i in range(self.ingredients_layout.count()):
            ingredient_row = self.ingredients_layout.itemAt(i)
            ingredient_name = ingredient_row.itemAt(0).widget().currentText()
            amount = ingredient_row.itemAt(2).widget().text()

            if ingredient_name.strip() and amount.strip():
                return True
        return False

    def print_data(self):

        #CHeck if there is at least one valid ingredient
        if not self.check_at_least_one_valid_ingredient():
            self.show_message("Warning", "Please enter at least one valid ingredient.")
            return

        # Gather and validate data
        name = self.name_entry.text().strip()
        description = self.description_entry.text().strip()
        directions = self.directions_entry.text().strip()

        if not name:
            self.show_message("Error", "Please enter a name.")
            return

        if not description:
            self.show_message("Error", "Please enter a description.")
            return

        if not directions:
            self.show_message("Error", "Please enter directions.")
            return
        
        #Create a cocktail object
        cocktail_to_add = Cocktail(-1, name, description, directions)

        #Add the ingredients to the cocktail object
        for i in range(self.ingredients_layout.count()):
            ingredient_row = self.ingredients_layout.itemAt(i)
            ingredient_name = ingredient_row.itemAt(0).widget().currentText()
            amount = ingredient_row.itemAt(2).widget().text()

            if ingredient_name.strip() and amount.strip():
                optional = ingredient_row.itemAt(1).widget().isChecked()
                
                #Convert the optional to either 0 or 1
                if optional:
                    optional = 1
                else:
                    optional = 0
                
                cocktail_ingredient = CocktailIngredient(0, ingredient_name, optional, amount)
                #Add the ingredient to the cocktail
                cocktail_to_add.cocktail_ingredients.append(cocktail_ingredient)
        
        #Add the cocktail to the csv
        add_cocktail(cocktail_to_add)

        # Reset inputs and rows
        self.name_entry.clear()
        self.description_entry.clear()
        self.directions_entry.clear()

        #Reset the ingredients
        for i in range(0, 3):
            self.ingredients_layout.itemAt(i).itemAt(0).widget().clear()
            self.ingredients_layout.itemAt(i).itemAt(2).widget().clear()
            self.ingredients_layout.itemAt(i).itemAt(1).widget().setChecked(False)

        for i in range(3, self.ingredients_layout.count()):
            self.ingredients_layout.takeAt(i).itemAt(0).widget().deleteLater()

        self.update_title()

    def show_message(self, title, message):
        msg_box = QMessageBox()
        msg_box.setWindowTitle(title)
        msg_box.setText(message)
        msg_box.setIcon(QMessageBox.Warning)
        msg_box.exec()


if __name__ == "__main__":
    app = QApplication([])
    window = CocktailCreator()
    window.show()
    app.exec()
