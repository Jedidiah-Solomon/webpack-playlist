#!/bin/bash

# List all files and directories in the current directory
echo "Available files and directories:"
ls -1

# Prompt the user to enter the files and directories they want to back up
echo "Enter the names of the files and directories you want to back up, separated by spaces:"
read -a backup_sources

# Print the contents of the backup_sources array using echo
echo "You entered the following files and directories:"
echo "${backup_sources[@]}"

# Define the backup destination
backup_dest="backup"

# Create the backup directory if it doesn't exist
mkdir -p "$backup_dest"

# Print the contents of the backup_sources array using a loop
echo "List of files and directories to back up:"
for source in "${backup_sources[@]}"; do
    if [ -e "$source" ]; then
        echo "$source"
        cp -r "$source" "$backup_dest"
    else
        echo "Warning: $source does not exist and will not be backed up."
    fi
done

echo "Backup completed successfully!"



#rm remove files, rm -r removes the file from both the working tree and the index. rm -f only untracks the file from the index, leaving it in the working tree.
# The read command reads a line of input from the user. The -a option tells read to split the input line into an array.
#echo "Enter some values:" 
#read -a values
#values[0] = "value1"
#values[1] = "value2"
#values[2] = "value3"


#mkdir -p craete a folder if it doesnot exit
#mkdir -p /path/to/new/directory

#ls -1 for one column i.e new line, ls -l long list, ls --all or ls -a all files,