def myAtoi(str: str) -> int:
    result = "0"
    negative = False
    for i, j in enumerate(str): #get key and value
        if not j.isdigit() and not result =="0":
            break
        if j == ' ':
            if result == "0":
                continue
            else:
                break
        elif j == '-':
            if i+1 < len(str) and str[i+1].isdigit():
                negative = True
            else:
                break
        elif j=='+':
            if i+1 < len(str) and str[i+1].isdigit():
                negative = False
            else:
                break
        elif j =='.':
            break
        elif j.isdigit():
            result += j
        elif not j.isdigit():
            break

    if negative:
        result = "-" + result

    result = int(result)
    if result < -2**31:
        return -2**31
    if result > 2**31-1:
        return 2**31-1
    return result


print(myAtoi("   -4353ihb  wer"))
