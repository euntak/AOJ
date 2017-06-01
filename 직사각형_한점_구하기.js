function solution(v) {
    var answer = [];
    
    answer = v.reduce(function(prev, next) {
        const x = prev[0] ^ next[0];
        const y = prev[1] ^ next[1];
        return [x,y];
    }, []);
    
    return answer;
}