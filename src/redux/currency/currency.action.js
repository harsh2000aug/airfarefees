const handleChangeCurrency = (data) => {
    return {
        type: 'CURRENCY',
        payload: data
    }
}
export default handleChangeCurrency;