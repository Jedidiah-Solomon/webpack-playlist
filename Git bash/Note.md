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
