# code for python 2.7

def findMedianSortedArrays(nums1, nums2):
    concatList = nums1+nums2
    concatList.sort()
    print(concatList)

    length = len(concatList)
    
    if(length%2==0):
        print(length)
        print( "somethin %i, %i" % (concatList[length/2-1], concatList[length/2]))
    else:
        print(length)
        print(length/2)
        return concatList[length/2]
    

findMedianSortedArrays([1,2,3],[4,5,6,7])

#success