def convert(s: str, numRows: int) -> str:
    wv = wavelength(numRows)
    returnValue = ""
    if wv==0:
        return s
    for x in range(numRows) :
        index = x
        if x == 0 or x == numRows-1:
            while index < (len(s)):
                returnValue += s[index]
                index += wv
        else:
            a = x
            b = wv - a
            while (a<len(s) or b<len(s)):
                if(a<len(s)):
                    returnValue += s[a]
                if(b<len(s)):
                    returnValue += s[b]
                a += wv
                b += wv

    return returnValue

def wavelength(numRows: int) -> int:
    return (2*numRows) - 2

print("I"*3)
print(convert('A', 1))