# Notes of manual testing

## Test level 1 : when fields are empty

1. Action-1 : Navigate to web-address http://127.0.0.1:5500 
2. Action-2 : click on submit button

 #### _Results of action-2 should be_:

- Now all input fields border will be red and error message with name of empty fields will be displayed. Fonts color gold.

<sub>Example:</sub>

`firstname,lastname,email,password is required`

## Test level 2 : when some fields are empty

1. Action-1 : Navigate to web-address http://127.0.0.1:5500 
2. Action-2 : Fill up any one or two fields and click on submit button

#### _Results of action-2 should be_:

- Now input fields border will be red & error message will be displayed only for those are empty. Fonts color gold.

<sub>Example (say, lastname and password are empty):</sub>

`lastname,password is required`

## Test level 3 : when no fields are empty

1. Action-1 : Navigate to web-address http://127.0.0.1:5500 
2. Action-2 : Fill up all fields and click on submit button

 #### _Results of action-2 should be_:

- Now a greetings message will be displayed after mentioning user's firstname in uppercase. Fonts color white.

<sub>Example (say, user's firstname is Foo):</sub>

`WELCOME Foo!`

