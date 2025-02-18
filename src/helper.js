function buildGetRequest(getRequest, userId, paymentMethod) {
    const params = new URLSearchParams();
    if (userId !== null && userId !== undefined && userId !== '') {
        params.append('userId', userId);
    }
    if (paymentMethod != null && paymentMethod !== undefined && paymentMethod !== '') {
        params.append('paymentMethod', paymentMethod);
    }

    return `${getRequest}?${params.toString()}`;
}

export { buildGetRequest };