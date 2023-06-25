import re

id_search_str = 'id=\"(\w*?)\"'

working_dir = '/Users/Cameron/Desktop/Calorum/Compendium/'
input_file = 'Calorum_ Heroes and Hunger.html'

with open(working_dir + input_file, 'r+') as f:
    data = f.read()

id_list = re.findall(id_search_str, data)
duplicate_ids = []

for i in id_list:
    if id_list.count(i) > 1 and not i in duplicate_ids:
        duplicate_ids.append(i)

print(duplicate_ids)
# Put this string in settings.json, "add intraLink dictionary", "replace"
