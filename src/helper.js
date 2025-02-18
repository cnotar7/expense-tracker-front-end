function buildGetRequest(getRequest, userId, paymentMethod, startDate, endDate) {
    const params = new URLSearchParams();
    if (isParamAvailable(userId)) {
        params.append('userId', userId);
    }
    if (isParamAvailable(paymentMethod)) {
        params.append('paymentMethod', paymentMethod);
    }
    if (isParamAvailable(startDate)) {
        params.append('startDate', startDate);
    }
    if (isParamAvailable(endDate)) {
        params.append('endDate', endDate);
    }

    return `${getRequest}?${params.toString()}`;
}

function isParamAvailable(param) {
    return param !== null && param !== undefined && param !== '';
}

export { buildGetRequest };