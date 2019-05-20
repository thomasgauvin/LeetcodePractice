/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let tempGlobal = [];

    //check when not pair
    for(let i = 0; i<s.length; i++){
        let temp=[];
        let int1 = i-1;
        let int2 = i+1;
        temp.push(s[i]);

        console.log(i+' checking around ' + s[i])

        if(int1>=0 && int2<s.length){
            while(checkIfCharactersEqual(s, int1, int2)){
            
                temp.unshift(s[int1]);
                temp.push(s[int2]);
    
                int1--; int2++;
    
                if(int1<0 || int2>s.length-1){
                    break;
                }
            }
        }

        console.log(temp);
        if(temp.length>tempGlobal.length){
            tempGlobal=temp;
        }
    }

    console.log("///////////////////////////////////////////")

    //check when pair
    for(let i = 0; i<s.length; i++){
        let temp=[];
        let j = i+1; //j will be second of the pair, i is the first

        console.log("pair? "+s[i]+ ", " +s[j] )

        if(s[j]!=s[i]) continue; //if not a pair, break

        //check on both sides of the pair
        let int1 = i-1;
        let int2 = j+1;
        temp.push(s[i]);
        temp.push(s[j]);

        if(int1>=0 && int2<s.length){
            while(checkIfCharactersEqual(s, int1, int2)){
            
                temp.unshift(s[int1]);
                temp.push(s[int2]);
    
                int1--; int2++;
    
                if(int1<0 || int2>s.length-1){
                    break;
                }
            }
        }

        console.log(temp);
        if(temp.length>tempGlobal.length){
            tempGlobal=temp;
        }
    }

    console.log(tempGlobal);
};

function checkIfCharactersEqual(s, int1, int2){
    // console.log("checking "+s[int1]+ ", " +s[int2] )
    if(s[int1]==s[int2]){
        return true;
    }
    else{
        return false;
    }
}

longestPalindrome('ccc')
