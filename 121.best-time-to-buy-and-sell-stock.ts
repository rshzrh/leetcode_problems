/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfitOn2(prices: number[]): number {
    if(prices == null || prices.length < 2)
        return 0

    let maxProfit = 0

    for(let i = 0; i < prices.length; i++){
        for(let j = prices.length - 1; j > i; j--){
            if(prices[j] < prices[i])
                continue
            const profit = prices[j] - prices[i]
            if(profit > maxProfit)
                maxProfit = profit
        }
    }

    return maxProfit
    
};

function maxProfit(prices: number[]): number {
    if(prices == null || prices.length < 2)
        return 0

    let maxProfit = 0
    let buy = prices[0]
    for(let i = 1; i < prices.length; i++){
        const price = prices[i]
        const profit = price - buy
        if(profit > maxProfit){
            maxProfit = profit
        }
        if(price < buy)
            buy = price

    }
    

    return maxProfit
    
};

const prices = [7,1,5,3,6,4]
const profit = maxProfit(prices)
console.log(profit)
// @lc code=end

