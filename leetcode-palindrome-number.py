def isPalindrome(x: int) -> bool:
    x = str(x)
    length = len(x)
    toReturn = True
    for index, character in enumerate(x):
        if x[index] != x[length - 1 - index]:
            return False

    return toReturn


print(isPalindrome(887788))