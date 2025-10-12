
function value(n)
{
    let ans=0;
    for(i=1;i<n;i++)
    {
        ans = ans+i
    }
    return ans;
}
let ans=value(100);
console.log(ans);