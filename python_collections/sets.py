# collection of unique items that belong together (eg. prime numbers, favourite food, fonts)
# can be compared
# each member can only exist ones
# does not have any indexes

# old create
set([2,3,5])
# outputs {2,3,5}

#new create
{ 2,4,5 }
# outputs {2,3,5}

# note if it's emtpy it will return a dictionary unless set() is used

# add to set
low_primes = {1,3,5,7,11,13}
low_primes.add(17)
# outputs {1, 3, 5, 7, 11, 13, 17}

# add multiple items to set using update with multiple sets
low_primes.update({19,23}, {2,29})
# outputs {1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29}

# delete item from set using remove()
low_primes.remove(29)
# outpus {1, 2, 3, 5, 7, 11, 13, 17, 19, 23}

# delete item from set using discard() - will not throw error if item does not exist in set
low_primes.discard(23)
# outputs {1, 2, 3, 5, 7, 11, 13, 17, 19}



# mathematical operators
set1 = set(range(10))
set2 = {1,2,3,5,7,11,13,17,19,23}

# union (returns new set)
set1.union(set2)
# OR
set1 | set2
# output {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 19, 23}


# difference (order matters)
set1.difference(set2)
# OR
set1 - set2
# outputs {0, 4, 6, 8, 9}


# symetric diff or unique items
set1.symmetric_difference(set2)
# OR
set1 ^ set2
# outputs {0, 4, 6, 8, 9, 11, 13, 17, 19, 23}


# intersection
set1.intersection(set2)
# OR
set1 & set2
# outputs {1, 2, 3, 5, 7}


# check if no items are common to both sets
set1.isdisjoint(set2)
# outputs False


# issubset tests whether every element of one set is in the other (opposite ot issuperset in terms of which set is in which)
set1.issubset(set2)
# output False
