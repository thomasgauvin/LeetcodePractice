def reverse(x: int) -> int:
    negative = False
    if x < 0:
        negative = True
        x = 0 - x
    x = str(x)
    result = ""
    for i in x:
        result = i+result

    result = int(result)
    if negative:
        result = -result
    if result > 2**31-2 or result < -2**31:
        result = 0
    print(result)

reverse(-111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999994)