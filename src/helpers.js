// 🧲 Convert time to hours and minutes
export const calcTime = time => `${Math.floor(time / 60)}h ${time % 60}m`

// 🧲 Convert a number to money formatting
export const convertMoney = money =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(money)

// 🧲
export const isPersistedState = stateName => {
    const sessionState = sessionStorage.getItem(stateName)
    return sessionStorage && JSON.parse(sessionState)
}
