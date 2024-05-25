# Git bash & Shell Scripting

The -e option in the echo command enables the interpretation of escape sequences. By default, echo does not interpret escape sequences, so special characters like \n (newline) or \t (tab) are printed literally. When you use echo -e, echo will interpret these sequences and format the output accordingly.

Here are some common escape sequences and their effects when used with echo -e:

\n: Newline
\t: Tab
\\: Backslash
\b: Backspace
\r: Carriage return

**EXAMPLES**

Newline (\n):

echo -e "Hello\nWorld"

# Output:

# Hello

# World

Tab (\t):

echo -e "Hello\tWorld"

# Output:

# Hello World

Backslash (\\):

echo -e "Hello\\World"

# Output:

# Hello\World

Backspace (\b):

echo -e "Hello\bWorld"

# Output:

# HellWorld

Carriage Return (\r):

echo -e "Hello\rWorld"

# Output:

# World

```
#!/bin/bash

name="Alice"
age=30

echo -e "Name:\t$name\nAge:\t$age"

```

# sed in Shell Scripting

sed (stream editor) is a powerful tool for text processing and manipulation. It reads input text, performs operations (such as substitution, deletion, insertion, etc.) on it, and outputs the modified text.

Here are some simple examples:

Substitution:

Command: sed 's/old/new/'

Description: Replaces the first occurrence of old with new on each line.

```
echo "hello world" | sed 's/world/universe/'
```

# Output: hello universe

Global Substitution:

Command: sed 's/old/new/g'

Description: Replaces all occurrences of old with new on each line.

```
echo "hello world world" | sed 's/world/universe/g'
```

# Output: hello universe universe

Deletion:

Command: sed '/pattern/d'
Description: Deletes lines matching pattern.

```
echo -e "line1\nline2\nline3" | sed '/line2/d'
```

# Output:

# line1

# line3

Printing specific lines:

Command: sed -n 'Np'
Description: Prints the Nth line.

```
echo -e "line1\nline2\nline3" | sed -n '2p'
```

# Output: line2

# Basic Variable Usage

```
# Assigning a string value to a variable
greeting="Hello, World!"

#printing the content
echo $greeting
```

Note: Ensure no space between variable and content e.g

greeting="Hello, World!" ----this is good
greeting = "Hello, World!" ----this is bad and wont run

## How to read user input and store it in a variable

```
echo "Enter the branch to work with: "
read new_branch
echo "Your new branch is: $new_branch"
```

```
# Assign numbers to variables
num1=5
num2=10

# Perform arithmetic and store in another variable
sum=$((num1 + num2))

# Print the result
echo "Sum: $sum"  # Output: Sum: 15
```

```
# Accessing an environment variable in your pc
echo "Home Directory: $HOME"  # Output: Home Directory: /home/username
```

```
# Store the output of a command in a variable
current_date=$(date)

# Print the result
echo "Current Date and Time: $current_date"  # Output: Current Date and Time: Mon Jan 1 12:00:00 UTC 2024
```

# IF Statement

syntax

```
if [ condition ]; then
    # code to execute if condition is true
fi
```

or for multiple conditions

```
if [ condition ]; then
    # code to execute if condition is true
elif [ another_condition ]; then
    # code to execute if another_condition is true
else
    # code to execute if none of the above conditions are true
fi
```

### Condition Examples

Conditions are typically enclosed in square brackets [] or double square brackets [[]] and can include various comparisons:

**Numeric Comparison:**

-eq: equal
-ne: not equal
-lt: less than
-le: less than or equal
-gt: greater than
-ge: greater than or equal

```
num=10

if [ $num -gt 5 ]; then
    echo "$num is greater than 5"
fi
```

**String Comparison:**

=: equal
!=: not equal
<: less than (in ASCII alphabetical order)

> : greater than (in ASCII alphabetical order)
> -z: string is null (zero length)
> -n: string is not null (non-zero length)

```
str="Hello"

if [ "$str" = "Hello" ]; then
    echo "The string is Hello"
fi
```

**File Comparison:**

-e: file exists
-f: file is a regular file (not a directory or device file)
-d: directory exists
-r: file is readable
-w: file is writable
-x: file is executable

```
if [ -e "/path/to/file" ]; then
    echo "File exists"
fi
```

Note: Ensure spacing between the opening and closing square brackets

```
#!/bin/bash

echo "Enter a number:"
read number

if [ $number -gt 10 ]; then
    echo "The number is greater than 10."
else
    echo "The number is not greater than 10."
fi
```

```
#!/bin/bash

echo "Enter a number:"
read number

if [ $number -gt 10 ]; then
    echo "The number is greater than 10."
elif [ $number -eq 10 ]; then
    echo "The number is exactly 10."
else
    echo "The number is less than 10."
fi
```

## Using if with Logical Operators

Logical operators can be used to combine multiple conditions:

```
&&: logical AND
||: logical OR
```

```
# Logical AND
if [ $number -gt 5 ] && [ $number -lt 15 ]; then
    echo "The number is between 5 and 15."
fi

# Logical OR
if [ $number -lt 5 ] || [ $number -gt 15 ]; then
    echo "The number is less than 5 or greater than 15."
fi
```

### Example with Array and File Check

###### Let's use an if statement to check if an array element exists and if a file exists:

```
#!/bin/bash

# Array of file names
files=("file1.txt" "file2.txt" "file3.txt")

# Prompt the user for a file name
echo "Enter the name of the file you are looking for:"
read file_name

# Check if the file exists in the array
file_found=false

for file in "${files[@]}"; do
    if [ "$file" == "$file_name" ]; then
        file_found=true
        break
    fi
done

if [ "$file_found" == true ]; then
    # Check if the file exists on the filesystem
    if [ -e "$file_name" ]; then
        echo "The file $file_name exists."
    else
        echo "The file $file_name does not exist on the filesystem."
    fi
else
    echo "The file $file_name is not in the list."
fi

```

**Note**

The difference between "$str" = "Hello" and "$file" == "$file_name" lies in the context and conventions of string comparison in bash.

**Single Equals (=) vs Double Equals (==)**

1. Single Equals (=):

This is the traditional syntax for string comparison in bash.
It is POSIX-compliant, meaning it works across different Unix-like systems.
E.g

```
if [ "$str" = "Hello" ]; then
    echo "The string is Hello"
fi
```

2. Double Equals (==):

This is an extended syntax supported by bash and some other modern shells (e.g., zsh).
It is not strictly POSIX-compliant but is commonly used in bash.

```
if [ "$file" == "$file_name" ]; then
    echo "The file names match"
fi
```

So your choice but for readability and compatibility, use single

# For loops

```
for variable in list
do
    commands
done
```

```
#!/bin/bash

# List of items
items=("apple" "banana" "cherry")

# Loop through each item
for item in "${items[@]}"
do
    echo "Item: $item"
done
```

```
#!/bin/bash

# Loop from 1 to 5
for i in {1..5}
do
    echo "Number: $i"
done
```

```
#!/bin/bash

# Loop through each file in the current directory
for file in *
do
    echo "File: $file"
done
```

```
branch_exists=false
for available_branch in "${available_branches[@]}";
do
    if [ "$available_branch" == "$new_branch" ]; then
        branch_exists=true
        break
    fi
done
```

Note that

read userInput --will place the content/s as a string variable
read -a userInput --will place the content/s as a array with quotation mark on each though not seen.

# Functions

Functions in shell scripting are used to group a set of commands together, allowing them to be executed as a single unit. They provide code modularity, reusability, and ease of maintenance. Here's a breakdown of how functions work in shell scripting:

Defining a Function: Functions are defined using the function keyword followed by the function name and a set of parentheses {} enclosing the commands to be executed.

```
function myFunctionName() {
    # Commands to be executed
    echo "Hello from myFunction!"
}
```

Alternatively, you can define a function without the function keyword:

```
myFunctionName() {
    # Commands to be executed
    echo "Hello from myFunction!"
}

```

Calling a Function: To execute a function, simply write its name followed by parentheses.

myFunctionName

Function Parameters: You can pass parameters to functions just like in other programming languages. These parameters are accessed inside the function using special variables like $1, $2, etc., where $1 refers to the first parameter, $2 refers to the second, and so on.

```
function greet() {
echo "Hello, $1!"
}

greet "John"
```

Output:
Hello, John!

Returning Values: Shell functions can return values using the return statement. The return value is stored in the special variable $?.

```
function add() {
return $(($1 + $2))
}

add 5 3
echo "Sum: $?"
```

Output:
Sum: 8

Scope: Variables defined within a function are local to that function by default, meaning they are not accessible outside the function. However, you can use the local keyword to declare variables as local explicitly.

```
function myFunction() {
local localVar="I'm local"
echo "Inside function: $localVar"
}

myFunction
echo "Outside function: $localVar"
```

Output:

Inside function: I'm local
Outside function:

These are the basic concepts of using functions in shell scripting.
They allow you to organize your code better and make it more modular and maintainable.

```
But if you dont use the local keyword

function myFunction() {
    name="I'm local"
    echo "Inside function: $name"
}

myFunction
echo "Outside function: $name"
```

Output:

Inside function: I'm local
Outside function: I'm local
